(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,function(e,t,a){e.exports={headerContainer:"header_headerContainer___EH89",headerLogo:"header_headerLogo__3RlCR",headerInner:"header_headerInner__tcSGu",headerLink:"header_headerLink__1lIZO",active:"header_active__RvMCY"}},function(e,t,a){e.exports={contactContainer:"contact_contactContainer__qNsap",contactInner:"contact_contactInner__2RZdY",contactTitle:"contact_contactTitle__KKzkv",contacts:"contact_contacts__J-y1x",contactItem:"contact_contactItem__3xCH6"}},function(e,t,a){e.exports={aboutContainer:"about_aboutContainer__2GGeg",aboutTitle:"about_aboutTitle__3fXZL",aboutAvatar:"about_aboutAvatar__1ftqn",aboutText:"about_aboutText__3zuok",aboutInner:"about_aboutInner__25U5l"}},function(e,t,a){e.exports={worksContainer:"works_worksContainer__m6vAM",worksTitle:"works_worksTitle__F2Ppu",worksInner:"works_worksInner__2HGl9",workItem:"works_workItem__uqUhd",workTitle:"works_workTitle__16sAX",workDiscription:"works_workDiscription__2YSfQ",workImg:"works_workImg__1Kydy"}},,,function(e,t,a){e.exports={introContainer:"intro_introContainer__3gG-N",introName:"intro_introName__18Hiy",introSurname:"intro_introSurname__iMAlW",contactButton:"intro_contactButton__3549a"}},,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/avatar.a51644c9.jpg"},,,function(e,t,a){e.exports={container:"app_container__3yS5w"}},function(e,t,a){e.exports=a.p+"static/media/virtual-keyboard.19878602.gif"},function(e,t,a){e.exports=a.p+"static/media/weather.af77d88e.gif"},function(e,t,a){e.exports=a.p+"static/media/movie-search.0973d24c.gif"},function(e,t,a){e.exports=a.p+"static/media/english-for-kids.22b027cc.gif"},function(e,t,a){e.exports=a.p+"static/media/rslang.c14c277f.gif"},,function(e,t,a){e.exports=a(43)},,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(8),r=a.n(i),s=(a(35),a(12));function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var m,d,u,f,h,p,v,w,_,E=o.a.createElement("path",{d:"M40.096 14.8V54H34.104L12.488 27.456V54H5.264V14.8H11.256L32.872 41.344V14.8H40.096Z",fill:"#FFFF00"}),g=o.a.createElement("path",{d:"M42.096 14.8V54H36.104L14.488 27.456V54H7.264V14.8H13.256L34.872 41.344V14.8H42.096Z",fill:"rgb(45, 63, 118)"}),k=function(e){var t=e.svgRef,a=e.title,n=l(e,["svgRef","title"]);return o.a.createElement("svg",c({width:56,height:55,viewBox:"0 0 56 55",fill:"none",ref:t},n),a?o.a.createElement("title",null,a):null,E,g)},b=o.a.forwardRef((function(e,t){return o.a.createElement(k,c({svgRef:t},e))})),y=(a.p,a(4)),N=a.n(y),I=function(){var e=Object(n.useState)("transparent"),t=Object(s.a)(e,2),a=t[0],i=t[1],r=function(e){var t=document.querySelector("#headerLinks");t.childNodes.forEach((function(e){e.classList.contains(N.a.active)&&e.classList.remove(N.a.active)})),t.childNodes.forEach((function(t){t.innerText===e&&t.classList.add(N.a.active)}))},c=Object(n.useCallback)((function(e){window.scrollY>250?(i("#b3b3b3"),window.scrollY>691&&window.scrollY<1011?r("About"):window.scrollY>=1011&&window.scrollY<1316?r("Works"):window.scrollY>=1316&&r("Contact")):(i("transparent"),r("home"))}),[]);return Object(n.useEffect)((function(){window.addEventListener("scroll",c)}),[c]),o.a.createElement("div",{className:N.a.headerContainer,style:{backgroundColor:a}},o.a.createElement("div",{className:N.a.headerInner},o.a.createElement("div",{className:N.a.headerLogo},o.a.createElement("a",{href:"#home"},o.a.createElement(b,null))),o.a.createElement("div",{id:"headerLinks",onClick:function(e){return r(e.target.innerText)},className:N.a.headerLinks},o.a.createElement("a",{className:N.a.headerLink,href:"#about"},"About"),o.a.createElement("a",{className:N.a.headerLink,href:"#works"},"Works"),o.a.createElement("a",{className:N.a.headerLink,href:"#contact"},"Contact"))))},x=a(10),C=a.n(x),S=a(45),L=(a(36),function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(1200),c=Object(s.a)(r,2),l=c[0],m=c[1];return Object(n.useEffect)((function(){i(!0),m(document.documentElement.clientWidth),console.log(document.documentElement.clientWidth)}),[]),o.a.createElement("div",{className:C.a.introContainer},o.a.createElement("div",{className:C.a.introInner},o.a.createElement(S.a,{in:a,timeout:2e3,classNames:"name"},o.a.createElement("div",{className:C.a.introName},"Hi, I'm",l<700?o.a.createElement("br",null):" ",o.a.createElement("span",null,o.a.createElement(b,null)),"astassia")),o.a.createElement(S.a,{in:a,timeout:2e3,classNames:"surname"},o.a.createElement("div",{className:C.a.introSurname},"front-end developer")),o.a.createElement("a",{className:C.a.contactButton,href:"mailto:nastassianish@gmail.com"},"Contact me")))}),H=a(6),M=a.n(H),O=a(20),T=a.n(O),j=function(){return o.a.createElement("div",{id:"about",className:M.a.aboutContainer},o.a.createElement("div",{className:M.a.aboutInner},o.a.createElement("div",{className:M.a.aboutContent},o.a.createElement("div",{className:M.a.aboutTitle},"About me"),o.a.createElement("div",{className:M.a.aboutText},"I'm Nastassia Milashevskaya, a student of BSUIR (since 2018), The Faculty of Information Technologies and Control. My department is Information Technologies in Automated Systems. I've completed Rolling Scopes School and have an experience with HTML, CSS, CSS-preprocessors (Less, Sass), TypeScript, React js, Webpack, Jest, Git. English level A2-B1. You can see my works below.")),o.a.createElement("img",{className:M.a.aboutAvatar,src:T.a,alt:""})))},W=a(1),P=(a(39),a(18)),R=a(21),z=a(9),A=a(11),V=a(22);function Y(){m.aspect=p.offsetWidth/p.offsetHeight,m.updateProjectionMatrix(),u.setSize(p.offsetWidth,p.offsetHeight),v.setSize(p.offsetWidth,p.offsetHeight),w.setSize(p.offsetWidth,p.offsetHeight);var e=u.getPixelRatio();_.material.uniforms.resolution.value.x=1/(p.offsetWidth*e),_.material.uniforms.resolution.value.y=1/(p.offsetHeight*e)}function B(){requestAnimationFrame(B),h.rotation.y+=.1*f.getDelta(),u.setViewport(0,0,p.offsetWidth,p.offsetHeight),v.render()}var F=function(){!function(){var e=document.createElement("div");e.id="backContainer",e.classList.add("container"),document.body.append(e),p=document.getElementById("backContainer"),(m=new W.k(45,p.offsetWidth/p.offsetHeight,1,2e3)).position.z=500,(d=new W.n).background=new W.b(13882323),d.fog=new W.d(13421772,100,1500),f=new W.a;var t=new W.f(16777215,4473924);t.position.set(0,1e3,0),d.add(t);var a=new W.c(16777215,.8);a.position.set(-3e3,1e3,-1e3),d.add(a),h=new W.e;for(var n=new W.p(10),o=new W.i({color:16776960,flatShading:!0}),i=0;i<100;i++){var r=new W.h(n,o);r.position.x=500*Math.random()-250,r.position.y=500*Math.random()-250,r.position.z=500*Math.random()-250,r.scale.setScalar(2*Math.random()+1),r.rotation.x=Math.random()*Math.PI,r.rotation.y=Math.random()*Math.PI,r.rotation.z=Math.random()*Math.PI,h.add(r)}d.add(h),(u=new W.t).autoClear=!1,u.setPixelRatio(window.devicePixelRatio),u.setSize(p.offsetWidth,p.offsetHeight),p.appendChild(u.domElement);var s=new R.a(d,m);_=new z.a(V.a);var c=u.getPixelRatio();_.material.uniforms.resolution.value.x=1/(p.offsetWidth*c),_.material.uniforms.resolution.value.y=1/(p.offsetHeight*c),(v=new P.a(u)).addPass(s),v.addPass(_);var l=new z.a(A.a);(w=new P.a(u)).addPass(s),w.addPass(l),window.addEventListener("resize",Y,!1)}(),B()},G=a(23),q=a.n(G),K=a(7),Z=a.n(K),J=a(24),D=a.n(J),U=a(25),X=a.n(U),Q=a(26),$=a.n(Q),ee=a(27),te=a.n(ee),ae=a(28),ne=a.n(ae),oe=[{image:D.a,title:"Virtual Keyboard",discription:"connected with physical keyboard",link:"https://nastassiamilashevskaya.github.io/virtual-keybord/"},{image:X.a,title:"Fancy Weather",discription:"app for tracking weather anywhere",link:"https://nastassiamilashevskaya-fancy-weather.netlify.app/"},{image:$.a,title:"Movie Search",discription:"app for searching movies & games",link:"https://nastassiamilashevskaya-movie-search.netlify.app/"},{image:te.a,title:"English For Kids",discription:"app for learning english for kids",link:"https://nastassiamilashevskaya-english-for-kids.netlify.app/"},{image:ne.a,title:"RS Lang",discription:"big app for learning english created with the team of developers",link:"https://rslang-team49-jelika.netlify.app/"}],ie=function(){return o.a.createElement("div",{id:"works",className:Z.a.worksContainer},o.a.createElement("div",{className:Z.a.worksTitle},"My works"),o.a.createElement("div",{className:Z.a.worksInner},oe.map((function(e){return o.a.createElement("a",{href:e.link,key:e.title,className:Z.a.workItem},o.a.createElement("div",{className:Z.a.workTitle},o.a.createElement("div",null,e.title),o.a.createElement("div",null,e.discription)),o.a.createElement("img",{className:Z.a.workImg,src:e.image,alt:""}))}))))},re=a(5),se=a.n(re),ce=a(16),le=a(17),me=a(13),de=function(){return o.a.createElement("div",{id:"contact",className:se.a.contactContainer},o.a.createElement("div",{className:se.a.contactInner},o.a.createElement("div",{className:se.a.contactTitle},"Contact me"),o.a.createElement("div",{className:se.a.contacts},o.a.createElement("div",{className:se.a.contactItem},o.a.createElement(me.a,{icon:ce.a,size:"2x"}),o.a.createElement("span",null,"nastassiamilashevskaya#0803")),o.a.createElement("div",{className:se.a.contactItem},o.a.createElement(me.a,{icon:ce.b,size:"2x"}),o.a.createElement("span",null,o.a.createElement("a",{href:"https://t.me/Nastassianish"},"Nastassianish"))),o.a.createElement("div",{className:se.a.contactItem},o.a.createElement(me.a,{icon:le.b,size:"2x"}),o.a.createElement("span",null,"+375 (29) 5621038")),o.a.createElement("div",{className:se.a.contactItem},o.a.createElement(me.a,{icon:le.a,size:"2x"}),o.a.createElement("span",null,o.a.createElement("a",{href:"mailto:nastassianish@gmail.com"},"nastassianish@gmail.com"))))))};var ue=function(){return Object(n.useEffect)((function(){F()}),[]),o.a.createElement("div",{id:"home",className:q.a.container},o.a.createElement(I,null),o.a.createElement(L,null),o.a.createElement(j,null),o.a.createElement(ie,null),o.a.createElement(de,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[30,1,2]]]);
//# sourceMappingURL=main.144992df.chunk.js.map