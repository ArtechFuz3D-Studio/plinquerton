(this.webpackJsonpplinquerton=this.webpackJsonpplinquerton||[]).push([[0],{42:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var r=n(35),s=(n(42),n(8)),i=n(14),o=n(9),c=n(7),a=n(4),j=n(13),u=n(50),b=n(51),O=n(52),f=n(53),p=n(54),l=n(22),h=n(11),m=["shake","args","vec"],d=["offset","position"];function x(t){var e=t.args,n=void 0===e?[1.2,32,32]:e,r=t.v,s=void 0===r?new c.Vector3:r,i=Object(a.useRef)(),j=Object(l.d)((function(){return{args:1.2,mass:1,material:{restitution:.95}}})),O=Object(o.a)(j,2),f=O[0],p=O[1];return Object(l.c)((function(){return{position:[0,-15,0],rotation:[-Math.PI/2,0,0],onCollide:function(){return p.position.set(0,0,0),p.velocity.set(0,0,0)}}})),Object(l.c)((function(){return{position:[-15,0,0],rotation:[-Math.PI/2,Math.PI/2,0]}})),Object(l.c)((function(){return{position:[15,0,0],rotation:[Math.PI/2,-Math.PI/2,0]}})),Object(a.useEffect)((function(){return p.position.subscribe((function(t){return i.current.position.lerp(s.set(t[0],t[1],18+Math.max(0,t[1])/2),.05),i.current.lookAt(0,0,0)}))}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(u.a,{ref:i,makeDefault:!0,position:[0,0,12.5],fov:55}),Object(h.jsxs)("mesh",{ref:f,children:[Object(h.jsx)("sphereGeometry",{args:n}),Object(h.jsx)("meshPhysicalMaterial",{map:Object(b.a)("/cross.jpg"),transmission:1,roughness:0,thickness:10,envMapIntensity:1})]})]})}var v=Object(a.forwardRef)((function(t,e){var n=t.shake,r=void 0===n?0:n,u=t.args,b=void 0===u?[1,1.5,4]:u,f=t.vec,p=void 0===f?new c.Vector3:f,d=Object(i.a)(t,m),x=Object(a.useRef)(),v=Object(l.b)((function(){return Object(s.a)(Object(s.a)({args:b},d),{},{onCollide:function(t){return r+=t.contact.impactVelocity/12.5}})})),g=Object(o.a)(v,2),M=g[0],y=g[1];return Object(j.b)((function(){return x.current.position.lerp(p.set(0,r=c.MathUtils.lerp(r,0,.1),0),.2)})),Object(a.useImperativeHandle)(e,(function(){return y}),[y]),Object(h.jsx)("group",{ref:x,children:Object(h.jsx)(O.a,{ref:M,args:b,radius:.4,smoothness:10,children:Object(h.jsx)("meshPhysicalMaterial",{transmission:1,roughness:0,thickness:3,envMapIntensity:4})})})}));function g(t){var e=t.args,n=void 0===e?[5,1.5,4]:e,r=Object(a.useRef)();return Object(j.b)((function(t){return r.current.position.set(10*t.mouse.x,-5,0),r.current.rotation.set(0,0,t.mouse.x*Math.PI/4)})),Object(h.jsx)(v,{ref:r,args:n,material:{restitution:1.3}})}function M(t){var e=t.offset,n=void 0===e?0:e,r=Object(o.a)(t.position,3),c=r[0],u=r[1],b=r[2],O=Object(i.a)(t,d),f=Object(a.useRef)();return Object(j.b)((function(t){return f.current.position.set(c+Math.sin(n+t.clock.elapsedTime)*t.viewport.width/4,u,b)})),Object(h.jsx)(v,Object(s.a)({ref:f,args:[3,1.5,4],material:{restitution:1.1}},O))}var y=function(t){return Object(h.jsxs)("mesh",Object(s.a)(Object(s.a)({scale:Object(f.a)(5e3,3800,3)},t),{},{children:[Object(h.jsx)("planeGeometry",{}),Object(h.jsx)("meshBasicMaterial",{map:Object(b.a)("/bg.jpg")})]}))},I=function(){return Object(h.jsx)(j.a,{dpr:1.5,camera:{position:[0,2,12],fov:50},children:Object(h.jsxs)(l.a,{iterations:5,gravity:[0,-30,0],children:[Object(h.jsx)(x,{}),Object(h.jsx)(g,{}),Array.from({length:6},(function(t,e){return Object(h.jsx)(M,{position:[0,1+4.5*e,0],offset:1e4*e},e)})),Object(h.jsx)(v,{args:[10,1.5,4],position:[-11,-7,0],rotation:[0,0,-.7],material:{restitution:1.2}}),Object(h.jsx)(v,{args:[10,1.5,4],position:[11,-7,0],rotation:[0,0,.7],material:{restitution:1.2}}),Object(h.jsx)(p.a,{preset:"warehouse"}),Object(h.jsx)(y,{position:[0,0,-5]})]})})};Object(r.render)(Object(h.jsx)(I,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.b453800f.chunk.js.map