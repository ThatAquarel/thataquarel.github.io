import{G as t,S as o,M as i,a as n,b as e,P as s,W as r,c as a,A as c}from"./vendor.5c5f0129.js";const h=new e,d=new s(75,window.innerWidth/window.innerHeight,.01,1e3),l=new r({canvas:document.querySelector("#bg"),alpha:!0});l.setPixelRatio(window.devicePixelRatio),l.setSize(window.innerWidth,window.innerHeight),l.setClearColor(0,0),l.render(h,d);const _=new class{constructor(e){const s=new t,r=new o;let a=new i({color:11184810,transparent:!0,opacity:1});r.load("../res/3d/intro_0.stl",(t=>{this.intro_0a=new n(t,a),this.intro_0a.position.setZ(-10),s.add(this.intro_0a),this.intro_0b=new n(t,a),this.intro_0b.position.setZ(-138),this.intro_0b.rotateZ(Math.PI),s.add(this.intro_0b),this.intro_0c=new n(t,a),this.intro_0c.position.setZ(-266),this.intro_0c.rotateZ(Math.PI),s.add(this.intro_0c)})),r.load("../res/3d/intro_1.stl",(t=>{this.intro_1=new n(t,a),this.intro_1.position.setZ(55),s.add(this.intro_1)})),r.load("../res/3d/intro_2.stl",(t=>{this.intro_2=new n(t,a),this.intro_2.position.setZ(-40),s.add(this.intro_2)})),r.load("../res/3d/intro_cyl.stl",(t=>{this.intro_cyl_a=[],this.intro_cyl_b=[],this.intro_cyl_c=[];for(let o=0;o<3;o++){let i=2*o*Math.PI/3+Math.PI/2,e=40*Math.cos(i),r=40*Math.sin(i);const c=new n(t,a);c.position.set(e,19.2+r,0),s.add(c),this.intro_cyl_a.push(c)}for(let o=0;o<3;o++){let i=2*o*Math.PI/3-Math.PI/2;console.log(i);let e=40*Math.cos(i),r=40*Math.sin(i);const c=new n(t,a);c.position.set(e,19.2+r,-128),s.add(c),this.intro_cyl_b.push(c)}for(let o=0;o<3;o++){let i=2*o*Math.PI/3-Math.PI/2;console.log(i);let e=40*Math.cos(i),r=40*Math.sin(i);const c=new n(t,a);c.position.set(e,19.2+r,-256),s.add(c),this.intro_cyl_c.push(c)}})),s.scale.set(.035,.035,.035),s.position.set(1,-.3,0),this.intro=s,this.scene=e,this.scene.add(this.intro),this.material=a}update(t){null!=this.intro_0a&&null!=this.intro_0b&&null!=this.intro_1&&null!=this.intro_2&&null!=this.intro_cyl_a&&null!=this.intro_cyl_b&&this._update(t)}_update(t){let o=.4*t,i=t;this.material.opacity=Math.max(1+t/9e3),this.intro.rotation.x=.001*i,this.intro.rotation.y=-25e-5*i,this.intro.rotation.z=3e-4*i,this.intro_0a.position.z=o*o*25e-6-10,this.intro_0b.position.z=o*o*-3e-5-138,this.intro_0c.position.z=o*o*-7e-5-266,this.intro_1.position.z=o*o*75e-6+55,this.intro_2.position.z=o*o*1e-4-40,this.intro_cyl_a.forEach((t=>{t.position.setZ(o*o*5e-5)})),this.intro_cyl_b.forEach((t=>{t.position.setZ(o*o*-1e-5-128)})),this.intro_cyl_c.forEach((t=>{t.position.setZ(o*o*-5e-5-256)}))}}(h),p=new a(16777215);p.position.set(5,5,5);const w=new c(16777215);h.add(p,w);let m=5;function u(){const t=document.body.getBoundingClientRect().top;_.update(t),d.position.z=-.0015*t+10,d.position.x=3e-4*t+m}window.innerWidth<900&&(m=0),document.body.onscroll=u,u(),function t(){requestAnimationFrame(t),l.render(h,d)}(),function(){const t=new Date,o=new Intl.DateTimeFormat("en-US",{timeZone:"America/Toronto",hour:"2-digit",minute:"2-digit",hour12:!0}).format(t);document.getElementById("time").innerHTML=`<i>⏰</i> ${o}, Montréal, Canada`}();const y=document.getElementById("engineering"),g=document.getElementById("engineering-section");y.addEventListener("click",(function(){window.scrollTo({top:g.offsetTop,behavior:"smooth"})}));const f=document.getElementById("photography"),M=document.getElementById("photography-section");f.addEventListener("click",(function(){window.scrollTo({top:M.offsetTop,behavior:"smooth"})}));const b=document.getElementById("comedy"),I=document.getElementById("comedy-section");b.addEventListener("click",(function(){window.scrollTo({top:I.offsetTop,behavior:"smooth"})}));
