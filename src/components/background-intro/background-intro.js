import * as THREE from 'three';
import './background-intro.css'
import { EffectComposer } from '../../../node_modules/three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from '../../../node_modules/three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from '../../../node_modules/three/examples/jsm/postprocessing/ShaderPass.js';
import { CopyShader } from '../../../node_modules/three/examples/jsm/shaders/CopyShader.js';
import { FXAAShader } from '../../../node_modules/three/examples/jsm/shaders/FXAAShader.js';

var camera, scene, renderer, clock, group, container;

var composer1, composer2, fxaaPass;

function init() {
    const backContainer = document.createElement('div')
    backContainer.id = 'backContainer'
    backContainer.classList.add('container')
    document.body.append(backContainer)
    container = document.getElementById('backContainer');

    camera = new THREE.PerspectiveCamera(45, (container.offsetWidth) / container.offsetHeight, 1, 2000);
    camera.position.z = 500;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xd3d3d3);
    scene.fog = new THREE.Fog(0xcccccc, 100, 1500);

    clock = new THREE.Clock();

    //

    var hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
    hemiLight.position.set(0, 1000, 0);
    scene.add(hemiLight);

    var dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(- 3000, 1000, - 1000);
    scene.add(dirLight);

    //

    group = new THREE.Group();

    var geometry = new THREE.TetrahedronBufferGeometry(10);
    var material = new THREE.MeshStandardMaterial({ color: 0xFFFF00, flatShading: true });

    for (var i = 0; i < 100; i++) {

        var mesh = new THREE.Mesh(geometry, material);

        mesh.position.x = Math.random() * 500 - 250;
        mesh.position.y = Math.random() * 500 - 250;
        mesh.position.z = Math.random() * 500 - 250;

        mesh.scale.setScalar(Math.random() * 2 + 1);

        mesh.rotation.x = Math.random() * Math.PI;
        mesh.rotation.y = Math.random() * Math.PI;
        mesh.rotation.z = Math.random() * Math.PI;

        group.add(mesh);

    }

    scene.add(group);

    //

    renderer = new THREE.WebGLRenderer();
    renderer.autoClear = false;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    //

    var renderPass = new RenderPass(scene, camera);

    //

    fxaaPass = new ShaderPass(FXAAShader);

    var pixelRatio = renderer.getPixelRatio();

    fxaaPass.material.uniforms['resolution'].value.x = 1 / (container.offsetWidth * pixelRatio);
    fxaaPass.material.uniforms['resolution'].value.y = 1 / (container.offsetHeight * pixelRatio);

    composer1 = new EffectComposer(renderer);
    composer1.addPass(renderPass);
    composer1.addPass(fxaaPass);

    //

    var copyPass = new ShaderPass(CopyShader);

    composer2 = new EffectComposer(renderer);
    composer2.addPass(renderPass);
    composer2.addPass(copyPass);

    //

    window.addEventListener('resize', onWindowResize, false);

}

function onWindowResize() {

    camera.aspect = (container.offsetWidth) / container.offsetHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(container.offsetWidth, container.offsetHeight);
    composer1.setSize(container.offsetWidth, container.offsetHeight);
    composer2.setSize(container.offsetWidth, container.offsetHeight);

    var pixelRatio = renderer.getPixelRatio();

    fxaaPass.material.uniforms['resolution'].value.x = 1 / (container.offsetWidth * pixelRatio);
    fxaaPass.material.uniforms['resolution'].value.y = 1 / (container.offsetHeight * pixelRatio);

}

function animate() {

    requestAnimationFrame(animate);

    group.rotation.y += clock.getDelta() * 0.1;

    renderer.setViewport(0, 0, container.offsetWidth, container.offsetHeight);

    composer1.render();

    // renderer.setViewport(halfWidth, 0, halfWidth, container.offsetHeight);

    // composer1.render();

}

export default () => {
    init();
    animate();
}