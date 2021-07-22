(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{11:function(e,c,i){"use strict";i.r(c);var r=i(1),s=i.n(r),t=i(5),d=i.n(t),n=(i(2),i(3)),l=[{keyTrigger:"Q",id:"crash",url:"https://actions.google.com/sounds/v1/impacts/crash.ogg",keyCode:81},{keyTrigger:"W",id:"dumpster-bottle-smash",url:"https://actions.google.com/sounds/v1/impacts/dumpster_bottle_smash.ogg",keyCode:87},{keyTrigger:"E",id:"air-woosh-underwater",url:"https://actions.google.com/sounds/v1/water/air_woosh_underwater.ogg",keyCode:69},{keyTrigger:"A",id:"metal-bat-hits-baseball",url:"https://actions.google.com/sounds/v1/sports/metal_bat_hits_baseball.ogg",keyCode:65},{keyTrigger:"S",id:"wood-rattle",url:"https://actions.google.com/sounds/v1/doors/wood_rattle.ogg",keyCode:83},{keyTrigger:"D",id:"helicopter-by",url:"https://actions.google.com/sounds/v1/transportation/helicopter_by.ogg",keyCode:68},{keyTrigger:"Z",id:"boing",url:"https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg",keyCode:90},{keyTrigger:"X",id:"emergency-siren-short-burst",url:"https://actions.google.com/sounds/v1/emergency/emergency_siren_short_burst.ogg",keyCode:88},{keyTrigger:"C",id:"swoosh",url:"https://actions.google.com/sounds/v1/foley/swoosh.ogg",keyCode:67}],o=i(0),a=function(e){var c=e.display;return Object(o.jsx)("div",{id:"display",children:Object(o.jsx)("div",{id:"display-container",children:c})})},u=function(e){var c=e.power;return Object(o.jsx)("div",{children:c?Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{className:"label-title",children:"POWER"}),Object(o.jsx)("div",{id:"power-button-on",className:"power-button",children:"ON"})]}):Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{className:"label-title",children:"POWER"}),Object(o.jsx)("div",{id:"power-button-off",className:"power-button",children:"OFF"})]})})},j=function(e){var c=e.volumeValue,i=e.handleVolumeChange;return Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{className:"label-title",children:"VOLUME CONTROL"}),Object(o.jsx)("div",{id:"volume-control-container",children:Object(o.jsx)("input",{type:"range",id:"volume",min:"0",max:"1",value:c,onChange:i,step:"0.01"})})]})},b=function(){var e="Play a beat!",c="Power is off",i=Object(r.useState)(e),s=Object(n.a)(i,2),t=s[0],d=s[1],b=Object(r.useState)(!0),g=Object(n.a)(b,2),h=g[0],m=g[1],O=Object(r.useState)(.5),x=Object(n.a)(O,2),v=x[0],p=x[1],y=function(e){if(h){d(l[e].id);var i=document.getElementsByClassName("clip")[e];i.currentTime=0,i.volume=v,i.play()}else h||d(c)},k=function(e){for(var c=0;c<l.length;c++){var i=0;e===l[c].id&&(i=l.indexOf(l[c]),y(i))}},N=function(e){for(var c=0;c<l.length;c++){var i=0;e.keyCode===l[c].keyCode&&(i=l.indexOf(l[c]),y(i))}};return Object(r.useEffect)((function(){return document.addEventListener("keydown",N),function(){document.removeEventListener("keydown",N)}})),Object(o.jsx)("div",{id:"drum-machine",children:Object(o.jsxs)("div",{id:"inner-drum-machine-box",children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("div",{children:Object(o.jsxs)("button",{className:"drum-pad",id:l[0].id,onClick:function(){return k(l[0].id)},children:[Object(o.jsx)("audio",{className:"clip",id:l[0].keyTrigger,src:l[0].url,children:" "}),l[0].keyTrigger]})})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("div",{children:Object(o.jsxs)("button",{className:"drum-pad",id:l[1].id,onClick:function(){return k(l[1].id)},children:[Object(o.jsx)("audio",{className:"clip",id:l[1].keyTrigger,src:l[1].url,children:" "}),l[1].keyTrigger]})})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("div",{children:Object(o.jsxs)("button",{className:"drum-pad",id:l[2].id,onClick:function(){return k(l[2].id)},children:[Object(o.jsx)("audio",{className:"clip",id:l[2].keyTrigger,src:l[2].url,children:" "}),l[2].keyTrigger]})})}),Object(o.jsx)("div",{className:"col-5",onClick:function(){return h?m(!1)&d(c):m(!0)},children:Object(o.jsx)(u,{power:h})})]}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("div",{children:Object(o.jsxs)("button",{className:"drum-pad",id:l[3].id,onClick:function(){return k(l[3].id)},children:[Object(o.jsx)("audio",{className:"clip",id:l[3].keyTrigger,src:l[3].url,children:" "}),l[3].keyTrigger]})})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("div",{children:Object(o.jsxs)("button",{className:"drum-pad",id:l[4].id,onClick:function(){return k(l[4].id)},children:[Object(o.jsx)("audio",{className:"clip",id:l[4].keyTrigger,src:l[4].url,children:" "}),l[4].keyTrigger]})})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("div",{children:Object(o.jsxs)("button",{className:"drum-pad",id:l[5].id,onClick:function(){return k(l[5].id)},children:[Object(o.jsx)("audio",{className:"clip",id:l[5].keyTrigger,src:l[5].url,children:" "}),l[5].keyTrigger]})})}),Object(o.jsx)("div",{className:"col-5",children:Object(o.jsx)(a,{display:t})})]}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("div",{children:Object(o.jsxs)("button",{className:"drum-pad",id:l[6].id,onClick:function(){return k(l[6].id)},children:[Object(o.jsx)("audio",{className:"clip",id:l[6].keyTrigger,src:l[6].url,children:" "}),l[6].keyTrigger]})})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("div",{children:Object(o.jsxs)("button",{className:"drum-pad",id:l[7].id,onClick:function(){return k(l[7].id)},children:[Object(o.jsx)("audio",{className:"clip",id:l[7].keyTrigger,src:l[7].url,children:" "}),l[7].keyTrigger]})})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("div",{children:Object(o.jsxs)("button",{className:"drum-pad",id:l[8].id,onClick:function(){return k(l[8].id)},children:[Object(o.jsx)("audio",{className:"clip",id:l[8].keyTrigger,src:l[8].url,children:" "}),l[8].keyTrigger]})})}),Object(o.jsx)("div",{className:"col-5",children:Object(o.jsx)(j,{volumeValue:v,handleVolumeChange:function(c){h&&(p(c.target.value),d("Volume: "+Math.round(100*c.target.value)),setTimeout((function(){return d(e)}),1e3))}})})]})]})})},g=function(){return Object(o.jsxs)("div",{id:"app",children:[Object(o.jsx)("header",{id:"header",children:"Drum Machine"}),Object(o.jsx)(b,{}),Object(o.jsxs)("footer",{className:"footer",children:["Coded By ",Object(o.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/russelltheprogrammer",children:"RussellTheProgrammer"})," for FCC curriculum"]})]})};d.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root"))},2:function(e,c,i){}},[[11,1,2]]]);
//# sourceMappingURL=main.17d565ff.chunk.js.map