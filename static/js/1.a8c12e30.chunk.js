webpackJsonp([1],{251:function(e,t,a){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(4),c=a.n(i),s=a(102),l=a(58),m=a(256),u=a.n(m),A=a(257),p=(a.n(A),a(259)),d=(a.n(p),function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}()),g=function(e){function t(){return r(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),d(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"text-center"},c.a.createElement("img",{src:"http://lorempixel.com/g/1250/500/",alt:"hero"}),c.a.createElement("div",null,c.a.createElement("h1",null,"Bryan Mey"),c.a.createElement(l.b,{to:"/contact"},c.a.createElement(s.a,{color:"primary"},"Contact me"))),c.a.createElement("div",{className:"section"},c.a.createElement("h2",null,"Work"),c.a.createElement("img",{src:"http://lorempixel.com/g/1250/300/",alt:"project teaser"}),c.a.createElement("div",null,c.a.createElement("h3",null,"Project Name")),c.a.createElement(l.b,{to:"/work"},c.a.createElement(s.a,{color:"secondary"},"Learn more about my work"))),c.a.createElement("div",{style:{backgroundColor:"#ccc",padding:"20px 30px 30px"}},c.a.createElement("h2",null,"About"),c.a.createElement("div",{className:"grid-section-about"},c.a.createElement("img",{src:u.a,alt:"Bryan Mey",className:"circular-square",style:{height:"100px"}}),c.a.createElement("div",{className:"item-main"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum lorem nec maximus venenatis. Sed et posuere mauris. Nunc sed facilisis lectus. Nunc sit amet dui scelerisque, euismod magna. Etiam eget sem eros. Vivamus congue pharetra felis."),c.a.createElement(l.b,{to:"/about"},c.a.createElement(s.a,{color:"secondary"},"Learn more about me")))),c.a.createElement("div",{className:"section"},c.a.createElement("h2",null,"Want to talk?"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet. Sed et posuere mauris. Nam vitae ipsum vel id euismod magna. Etia congue pharetra felis."),c.a.createElement(l.b,{to:"/contact"},c.a.createElement(s.a,{color:"primary"},"Contact me"))))}}]),t}(i.Component);t.default=g},256:function(e,t,a){e.exports=a.p+"static/media/headshot.3f937e41.jpg"},257:function(e,t,a){var r=a(258);"string"===typeof r&&(r=[[e.i,r,""]]);var n={};n.transform=void 0;a(250)(r,n);r.locals&&(e.exports=r.locals)},258:function(e,t,a){t=e.exports=a(249)(!0),t.push([e.i,".circular-square{border-radius:50%}","",{version:3,sources:["C:/projects/portfolio/src/components/Shared/utility.css"],names:[],mappings:"AAAA,iBACE,iBAAmB,CAAE",file:"utility.css",sourcesContent:[".circular-square {\n  border-radius: 50%; }\n"],sourceRoot:""}])},259:function(e,t,a){var r=a(260);"string"===typeof r&&(r=[[e.i,r,""]]);var n={};n.transform=void 0;a(250)(r,n);r.locals&&(e.exports=r.locals)},260:function(e,t,a){t=e.exports=a(249)(!0),t.push([e.i,'h2{margin-bottom:20px}.grid-section-about{display:grid;grid-template-columns:1fr;grid-gap:2rem;justify-items:center}.grid-section-about .item-main{padding:0 20px}@media (min-width:768px){.grid-section-about{grid-template-columns:2fr 1fr;grid-template-areas:"main photo" "main cta"}.grid-section-about .item-main{grid-area:main;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border:1px solid #aaa;border-radius:5px;background-color:#eee;padding:30px}.grid-section-about img{grid-area:photo}.grid-section-about a{grid-area:cta}}',"",{version:3,sources:["C:/projects/portfolio/src/components/Home/Home.css"],names:[],mappings:"AAAA,GACE,kBAAoB,CAAE,AAExB,oBACE,aAAc,AACd,0BAA2B,AAC3B,cAAe,AACf,oBAAsB,CAAE,AACxB,+BACE,cAAgB,CAAE,AAEtB,yBACE,oBACE,8BAA+B,AAC/B,2CAA6C,CAAE,AAC/C,+BACE,eAAgB,AAChB,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,sBAAuB,AACvB,kBAAmB,AACnB,sBAAuB,AACvB,YAAc,CAAE,AAClB,wBACE,eAAiB,CAAE,AACrB,sBACE,aAAe,CAAE,CAAE",file:"Home.css",sourcesContent:['h2 {\n  margin-bottom: 20px; }\n\n.grid-section-about {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 2rem;\n  justify-items: center; }\n  .grid-section-about .item-main {\n    padding: 0 20px; }\n\n@media (min-width: 768px) {\n  .grid-section-about {\n    grid-template-columns: 2fr 1fr;\n    grid-template-areas: "main photo" "main cta"; }\n    .grid-section-about .item-main {\n      grid-area: main;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-align: center;\n          align-items: center;\n      border: 1px solid #aaa;\n      border-radius: 5px;\n      background-color: #eee;\n      padding: 30px; }\n    .grid-section-about img {\n      grid-area: photo; }\n    .grid-section-about a {\n      grid-area: cta; } }\n'],sourceRoot:""}])}});
//# sourceMappingURL=1.a8c12e30.chunk.js.map