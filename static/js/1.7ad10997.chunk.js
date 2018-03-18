webpackJsonp([1],{101:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),c=n.n(i),s=n(118),l=n(186),u=n(199),p=n(202),f=n(206),d=n(138),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),A=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),m(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Work"),d.a.map(function(e,t){return c.a.createElement("div",{key:e.key},c.a.createElement(u.a,{title:e.title,quote:e.caption,backgroundImage:e.src}),c.a.createElement(p.a,{images:e.secondaryImages,description:e.caption,url:"http://www.google.com",inverseDisplayOrder:t%2===0}))}),c.a.createElement(s.a,{useSecondaryBackground:!0},c.a.createElement(l.a,null)),c.a.createElement(s.a,null,c.a.createElement(f.a,null)))}}]),t}(i.Component);t.default=A},104:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(0),c=r(i),s=n(1),l=r(s),u=function(e,t){var n=e.children,r=e.color,i=e.size,s=e.style,l=e.width,u=e.height,p=o(e,["children","color","size","style","width","height"]),f=t.reactIconBase,d=void 0===f?{}:f,m=i||d.size||"1em";return c.default.createElement("svg",a({children:n,fill:"currentColor",preserveAspectRatio:"xMidYMid meet",height:u||m,width:l||m},d,p,{style:a({verticalAlign:"middle",color:r||d.color},d.style||{},s)}))};u.propTypes={color:l.default.string,size:l.default.oneOfType([l.default.string,l.default.number]),width:l.default.oneOfType([l.default.string,l.default.number]),height:l.default.oneOfType([l.default.string,l.default.number]),style:l.default.object},u.contextTypes={reactIconBase:l.default.shape(u.propTypes)},t.default=u,e.exports=t.default},118:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(119),i=(n.n(a),function(e){var t=e.useSecondaryBackground?"secondary-background":"";return o.a.createElement("div",{className:"section "+t+" "+(e.className||"")},e.children)});t.a=i},119:function(e,t,n){var r=n(120);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(98)(r,o);r.locals&&(e.exports=r.locals)},120:function(e,t,n){t=e.exports=n(97)(!0),t.push([e.i,".section.secondary-background{background-color:#ccc}.section{padding:20px 30px 30px}","",{version:3,sources:["C:/Dev/projects/portfolio/src/components/section/section.css"],names:[],mappings:"AAAA,8BACE,qBAAuB,CAAE,AAE3B,SACE,sBAAwB,CAAE",file:"section.css",sourcesContent:[".section.secondary-background {\n  background-color: #ccc; }\n\n.section {\n  padding: 20px 30px 30px; }\n"],sourceRoot:""}])},138:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(139),o=n.n(r),a=n(140),i=n.n(a),c=n(141),s=n.n(c),l=[{key:"project1",src:o.a,secondaryImages:["img","img","img"],imageClassName:"img-horizontal",altText:"Project 1",title:"Project 1",caption:"I was having the most wonderful dream. Except you were there, and you were there, and you were there!"},{key:"project2",src:i.a,secondaryImages:["img","img","img"],imageClassName:"img-horizontal",altText:"Project 2",title:"Project 2",caption:"Bender, were trying our best. Check it out, yall. Everyone who was invited is here."},{key:"project3",src:s.a,secondaryImages:["img","img","img"],imageClassName:"img-horizontal",altText:"Project 3",title:"Project 3",caption:"Ah, the Breakfast Club soundtrack! I cant wait til Im old enough to feel ways about stuff!"}]},139:function(e,t,n){e.exports=n.p+"static/media/project-1-splash.0781d78e.jpg"},140:function(e,t,n){e.exports=n.p+"static/media/project-2-splash.2fa0e6bb.jpg"},141:function(e,t,n){e.exports=n.p+"static/media/project-3-splash.be272788.jpg"},186:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),s=n(187),l=n(191),u=n(197),p=(n.n(u),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),p(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"text-center"},c.a.createElement("h2",null,"How I Work"),c.a.createElement("div",{className:"process-content d-flex flex-column flex-md-row align-items-center"},c.a.createElement(s.a,{items:l.a,className:""}),c.a.createElement("div",{className:"process-description-long"},"Blame the wizards! For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! It's just like the story of the grasshopper and the octopus.",c.a.createElement("br",null),c.a.createElement("br",null),"All year long, the grasshopper kept burying acorns for winter, while the octopus mooched off his girlfriend and watched TV. But then the winter came, and the grasshopper died, and the octopus ate all his acorns.")))}}]),t}(i.Component);t.a=f},187:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),s=n(1),l=n.n(s),u=n(27),p=n(188),f=n(189),d=(n.n(f),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),m=function(e){function t(){var e,n,a,i;r(this,t);for(var c=arguments.length,s=Array(c),l=0;l<c;l++)s[l]=arguments[l];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),a.state={activeIndex:0,animating:!1},i=n,o(a,i)}return a(t,e),d(t,[{key:"onExiting",value:function(){this.setState({animating:!0})}},{key:"onExited",value:function(){this.setState({animating:!1})}},{key:"next",value:function(e){if(!this.state.animating){var t=this.state.activeIndex===e.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:t})}}},{key:"previous",value:function(e){if(!this.state.animating){var t=0===this.state.activeIndex?e.length-1:this.state.activeIndex-1;this.setState({activeIndex:t})}}},{key:"goToIndex",value:function(e){this.state.animating||this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this,t=this.state.activeIndex,n=this.props.items;return c.a.createElement(u.b,{activeIndex:t,next:function(){return e.next(n)},previous:function(){return e.previous(n)},interval:!1,className:"d-flex flex-column-reverse"},c.a.createElement(p.a,{items:n,activeIndex:t,onClickHandler:function(t){return e.goToIndex(t)}}),n.map(function(t){var n=t.iconComponent;return c.a.createElement(u.e,{onExiting:function(){return e.onExiting()},onExited:function(){return e.onExited()},key:t.key},c.a.createElement(n,{size:50}),c.a.createElement("h3",null,t.title),c.a.createElement("p",{className:"icon-carousel-caption"},t.caption))}),c.a.createElement(u.c,{direction:"prev",directionText:"Previous",onClickHandler:function(){return e.previous(n)}}),c.a.createElement(u.c,{direction:"next",directionText:"Next",onClickHandler:function(){return e.next(n)}}))}}]),t}(i.Component);m.propTypes={items:l.a.array.isRequired},t.a=m},188:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),s=n(1),l=n.n(s),u=n(29),p=n.n(u),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),f(t,[{key:"render",value:function(){var e=this.props,t=e.items,n=e.activeIndex,r=e.onClickHandler,o=t.map(function(e,t){var o=p()({active:n===t}),a=e.iconComponent;return c.a.createElement("li",{key:e.key,onClick:function(e){e.preventDefault(),r(t)},className:o,alt:e.altText,title:e.title},c.a.createElement(a,{size:20}))});return c.a.createElement("ol",{className:"icon-carousel-indicator"},o)}}]),t}(i.Component);d.propTypes={items:l.a.array.isRequired,activeIndex:l.a.number.isRequired,onClickHandler:l.a.func.isRequired},t.a=d},189:function(e,t,n){var r=n(190);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(98)(r,o);r.locals&&(e.exports=r.locals)},190:function(e,t,n){t=e.exports=n(97)(!0),t.push([e.i,".icon-carousel-indicator{list-style:none;padding:initial;margin:initial}.icon-carousel-indicator,.icon-carousel-indicator li{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.icon-carousel-indicator li{width:2.5rem;height:2.5rem;-ms-flex-align:center;align-items:center;border-radius:50%;background-color:#fff;color:#333;opacity:.75;margin:0 .25rem}.icon-carousel-indicator li:hover{opacity:.9}.icon-carousel-indicator li.active{opacity:1;color:#111}@media (min-width:1200px){.icon-carousel-caption{padding:0 5.5rem}}@media (min-width:992px) and (max-width:1199.98px){.icon-carousel-caption{padding:0 4rem}}@media (min-width:768px) and (max-width:991.98px){.icon-carousel-caption{padding:0 3rem}}@media (min-width:576px) and (max-width:767.98px){.icon-carousel-caption{padding:0 5.5rem}}@media (max-width:575.98px){.icon-carousel-caption{padding:.5rem 4rem 0}}","",{version:3,sources:["C:/Dev/projects/portfolio/src/components/iconCarousel/index.css"],names:[],mappings:"AAAA,yBAKE,gBAAiB,AACjB,gBAAiB,AACjB,cAAgB,CAAE,AAEpB,qDARE,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AAClB,sBAAwB,CAkBR,AAbtB,4BACE,aAAc,AACd,cAAe,AAKf,sBAAuB,AACnB,mBAAoB,AACxB,kBAAmB,AACnB,sBAAwB,AACxB,WAAY,AACZ,YAAc,AACd,eAAkB,CAAE,AACpB,kCACE,UAAa,CAAE,AACjB,mCACE,UAAW,AACX,UAAY,CAAE,AAElB,0BACE,uBACE,gBAAkB,CAAE,CAAE,AAE1B,mDACE,uBACE,cAAgB,CAAE,CAAE,AAExB,kDACE,uBACE,cAAgB,CAAE,CAAE,AAExB,kDACE,uBACE,gBAAkB,CAAE,CAAE,AAE1B,4BACE,uBACE,oBAAuB,CAAE,CAAE",file:"index.css",sourcesContent:[".icon-carousel-indicator {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  list-style: none;\n  padding: initial;\n  margin: initial; }\n\n.icon-carousel-indicator li {\n  width: 2.5rem;\n  height: 2.5rem;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  border-radius: 50%;\n  background-color: white;\n  color: #333;\n  opacity: 0.75;\n  margin: 0 0.25rem; }\n  .icon-carousel-indicator li:hover {\n    opacity: 0.9; }\n  .icon-carousel-indicator li.active {\n    opacity: 1;\n    color: #111; }\n\n@media (min-width: 1200px) {\n  .icon-carousel-caption {\n    padding: 0 5.5rem; } }\n\n@media (min-width: 992px) and (max-width: 1199.98px) {\n  .icon-carousel-caption {\n    padding: 0 4rem; } }\n\n@media (min-width: 768px) and (max-width: 991.98px) {\n  .icon-carousel-caption {\n    padding: 0 3rem; } }\n\n@media (min-width: 576px) and (max-width: 767.98px) {\n  .icon-carousel-caption {\n    padding: 0 5.5rem; } }\n\n@media (max-width: 575.98px) {\n  .icon-carousel-caption {\n    padding: 0.5rem 4rem 0; } }\n"],sourceRoot:""}])},191:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n(192),o=n.n(r),a=n(193),i=n.n(a),c=n(194),s=n.n(c),l=n(195),u=n.n(l),p=n(196),f=n.n(p),d=[{key:"step1-discovery",iconComponent:o.a,altText:"Step 1 Discovery",title:"Discovery",caption:"1 I was having the most wonderful dream. Except you were there, and you were there, and you were there!"},{key:"step2-define",iconComponent:i.a,altText:"Step 2 Define",title:"Define",caption:"2 I was having the most wonderful dream. Except you were there, and you were there, and you were there!"},{key:"step3-design",iconComponent:s.a,altText:"Step 3 Design",title:"Design",caption:"3 I was having the most wonderful dream. Except you were there, and you were there, and you were there!"},{key:"step4-develop",iconComponent:u.a,altText:"Step 4 Develop",title:"Develop",caption:"4 I was having the most wonderful dream. Except you were there, and you were there, and you were there!"},{key:"step5-deliver",iconComponent:f.a,altText:"Step 5 Deliver",title:"Deliver",caption:"5 I was having the most wonderful dream. Except you were there, and you were there, and you were there!"}]},192:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(0),i=r(a),c=n(104),s=r(c),l=function(e){return i.default.createElement(s.default,o({viewBox:"0 0 40 40"},e),i.default.createElement("g",null,i.default.createElement("path",{d:"m23.7 23.7l6.3-13.7-13.7 6.3-6.3 13.7z m-3.7-20.3c9.2 0 16.6 7.4 16.6 16.6s-7.4 16.6-16.6 16.6-16.6-7.4-16.6-16.6 7.4-16.6 16.6-16.6z m0 14.8c1 0 1.8 0.8 1.8 1.8s-0.8 1.8-1.8 1.8-1.8-0.8-1.8-1.8 0.8-1.8 1.8-1.8z"})))};t.default=l,e.exports=t.default},193:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(0),i=r(a),c=n(104),s=r(c),l=function(e){return i.default.createElement(s.default,o({viewBox:"0 0 40 40"},e),i.default.createElement("g",null,i.default.createElement("path",{d:"m24.8 21.8c2.2-1.6 3.6-4.1 3.6-6.8 0-4.6-3.8-8.4-8.4-8.4s-8.4 3.8-8.4 8.4c0 2.7 1.4 5.2 3.6 6.8l1.4 1v3.8h6.8v-3.8z m-4.8-18.4c6.4 0 11.6 5.2 11.6 11.6 0 4-1.9 7.4-5 9.5v3.9c0 0.9-0.7 1.6-1.6 1.6h-10c-0.9 0-1.6-0.7-1.6-1.6v-3.9c-3.1-2.1-5-5.5-5-9.5 0-6.4 5.2-11.6 11.6-11.6z m-5 31.6v-1.6h10v1.6c0 0.9-0.7 1.6-1.6 1.6h-6.8c-0.9 0-1.6-0.7-1.6-1.6z"})))};t.default=l,e.exports=t.default},194:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(0),i=r(a),c=n(104),s=r(c),l=function(e){return i.default.createElement(s.default,o({viewBox:"0 0 40 40"},e),i.default.createElement("g",null,i.default.createElement("path",{d:"m29.1 20q1.1 0 1.8-0.7t0.7-1.8-0.7-1.8-1.8-0.7-1.7 0.7-0.8 1.8 0.8 1.8 1.7 0.7z m-5-6.6q1.1 0 1.8-0.8t0.7-1.7-0.7-1.8-1.8-0.7-1.7 0.7-0.8 1.8 0.8 1.7 1.7 0.8z m-8.2 0q1 0 1.7-0.8t0.8-1.7-0.8-1.8-1.7-0.7-1.8 0.7-0.7 1.8 0.7 1.7 1.8 0.8z m-5 6.6q1 0 1.7-0.7t0.8-1.8-0.8-1.8-1.7-0.7-1.8 0.7-0.7 1.8 0.7 1.8 1.8 0.7z m9.1-15q6.2 0 10.6 3.9t4.4 9.5q0 3.4-2.5 5.8t-5.9 2.4h-2.8q-1.1 0-1.8 0.8t-0.7 1.7q0 0.9 0.6 1.7t0.6 1.7q0 1.1-0.7 1.8t-1.8 0.7q-6.2 0-10.6-4.4t-4.4-10.6 4.4-10.6 10.6-4.4z"})))};t.default=l,e.exports=t.default},195:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(0),i=r(a),c=n(104),s=r(c),l=function(e){return i.default.createElement(s.default,o({viewBox:"0 0 40 40"},e),i.default.createElement("g",null,i.default.createElement("path",{d:"m31.6 16.6v-3.2h-3.2v3.2h3.2z m0 5v-3.2h-3.2v3.2h3.2z m-5-5v-3.2h-3.2v3.2h3.2z m0 5v-3.2h-3.2v3.2h3.2z m0 6.8v-3.4h-13.2v3.4h13.2z m-15-11.8v-3.2h-3.2v3.2h3.2z m0 5v-3.2h-3.2v3.2h3.2z m1.8-3.2v3.2h3.2v-3.2h-3.2z m0-5v3.2h3.2v-3.2h-3.2z m5 5v3.2h3.2v-3.2h-3.2z m0-5v3.2h3.2v-3.2h-3.2z m15-5c1.8 0 3.2 1.4 3.2 3.2v16.8c0 1.8-1.4 3.2-3.2 3.2h-26.8c-1.8 0-3.2-1.4-3.2-3.2v-16.8c0-1.8 1.4-3.2 3.2-3.2h26.8z"})))};t.default=l,e.exports=t.default},196:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(0),i=r(a),c=n(104),s=r(c),l=function(e){return i.default.createElement(s.default,o({viewBox:"0 0 40 40"},e),i.default.createElement("g",null,i.default.createElement("path",{d:"m23.4 21.6h5l-8.4-8.2-8.4 8.2h5v6.8h6.8v-6.8z m8.9-4.9q3.2 0.3 5.4 2.6t2.3 5.7q0 3.4-2.5 5.9t-5.9 2.5h-21.6q-4.1 0-7.1-3t-2.9-7q0-3.9 2.6-6.7t6.3-3.3q1.6-3 4.6-4.9t6.5-1.9q4.5 0 8 2.9t4.3 7.2z"})))};t.default=l,e.exports=t.default},197:function(e,t,n){var r=n(198);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(98)(r,o);r.locals&&(e.exports=r.locals)},198:function(e,t,n){t=e.exports=n(97)(!0),t.push([e.i,"@media (min-width:576px){.process-description-long{margin-left:1rem}.carousel,.process-description-long{-ms-flex-preferred-size:50%;flex-basis:50%}.carousel{margin-right:1rem}}@media (max-width:575.98px){.process-content>*{margin:1rem 0}}","",{version:3,sources:["C:/Dev/projects/portfolio/src/components/pages/work/ProcessSection.css"],names:[],mappings:"AAAA,yBACE,0BAGE,gBAAkB,CAAE,AACtB,oCAHE,4BAA6B,AACzB,cAAgB,CAKC,AAHvB,UAGE,iBAAmB,CAAE,CAAE,AAE3B,4BACE,mBACE,aAAe,CAAE,CAAE",file:"ProcessSection.css",sourcesContent:["@media (min-width: 576px) {\n  .process-description-long {\n    -ms-flex-preferred-size: 50%;\n        flex-basis: 50%;\n    margin-left: 1rem; }\n  .carousel {\n    -ms-flex-preferred-size: 50%;\n        flex-basis: 50%;\n    margin-right: 1rem; } }\n\n@media (max-width: 575.98px) {\n  .process-content > * {\n    margin: 1rem 0; } }\n"],sourceRoot:""}])},199:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(200),c=(n.n(i),n(0)),s=n.n(c),l=n(1),u=n.n(l),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),p(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.quote,r=e.backgroundImage,o=s.a.createElement("div",{className:"text-center"},s.a.createElement("span",{style:{fontSize:"24px"}},'"'),s.a.createElement("span",null,n),s.a.createElement("span",{style:{fontSize:"24px"}},'"'));return s.a.createElement("div",null,s.a.createElement("div",{className:"project-banner",style:{backgroundImage:"url("+r+")"}},s.a.createElement("h2",null,t),s.a.createElement("div",{className:"project-quote d-none d-sm-block"},o)),s.a.createElement("div",{className:"project-quote d-block d-sm-none"},o))}}]),t}(c.Component);f.propTypes={title:u.a.string.isRequired,quote:u.a.string.isRequired,backgroundImage:u.a.string.isRequired},t.a=f},200:function(e,t,n){var r=n(201);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(98)(r,o);r.locals&&(e.exports=r.locals)},201:function(e,t,n){t=e.exports=n(97)(!0),t.push([e.i,".project-banner{height:12rem;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;position:relative;background-position:50%;background-repeat:no-repeat;background-size:cover;color:#fff}.project-banner h2{position:absolute;left:0;top:0}.project-quote{padding:20px}@media (max-width:575.98px){.project-banner h2{position:static}}","",{version:3,sources:["C:/Dev/projects/portfolio/src/components/pages/work/ProjectBanner.css"],names:[],mappings:"AAAA,gBACE,aAAc,AACd,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AAClB,uBAAwB,AAC5B,sBAAuB,AACnB,mBAAoB,AACxB,kBAAmB,AACnB,wBAA4B,AAC5B,4BAA6B,AAC7B,sBAAuB,AACvB,UAAa,CAAE,AACf,mBACE,kBAAmB,AACnB,OAAQ,AACR,KAAO,CAAE,AAEb,eACE,YAAc,CAAE,AAElB,4BACE,mBACE,eAAkB,CAAE,CAAE",file:"ProjectBanner.css",sourcesContent:[".project-banner {\n  height: 12rem;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  position: relative;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: white; }\n  .project-banner h2 {\n    position: absolute;\n    left: 0;\n    top: 0; }\n\n.project-quote {\n  padding: 20px; }\n\n@media (max-width: 575.98px) {\n  .project-banner h2 {\n    position: initial; } }\n"],sourceRoot:""}])},202:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),s=n(1),l=n.n(s),u=n(27),p=n(203),f=n.n(p),d=n(204),m=(n.n(d),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),A=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),m(t,[{key:"render",value:function(){var e=this.props,t=e.images,n=e.description,r=e.url,o=e.inverseDisplayOrder;return c.a.createElement("div",{className:"project-details"},c.a.createElement(u.h,{fluid:!0,className:"text-center"},c.a.createElement(u.m,null,c.a.createElement(u.f,{xs:12,sm:6,className:"secondary-images d-flex align-items-center justify-content-around "+(o?"order-sm-2":"")},t.map(function(e,t){return c.a.createElement(f.a,{size:100,key:t})})),c.a.createElement(u.f,{xs:12,sm:6,className:"call-to-action "+(o?"order-sm-1":"")},c.a.createElement("p",null,n),c.a.createElement("a",{href:r},c.a.createElement(u.a,null,"Visit"))))))}}]),t}(i.Component);A.propTypes={images:l.a.array.isRequired,description:l.a.string.isRequired,url:l.a.string.isRequired,inverseDisplayOrder:l.a.bool},t.a=A},203:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(0),i=r(a),c=n(104),s=r(c),l=function(e){return i.default.createElement(s.default,o({viewBox:"0 0 40 40"},e),i.default.createElement("g",null,i.default.createElement("path",{d:"m14.1 22.5l-5.7 7.5h23.2l-7.5-10-5.7 7.5z m20.9 9.1q0 1.4-1 2.4t-2.4 1h-23.2q-1.4 0-2.4-1t-1-2.4v-23.2q0-1.4 1-2.4t2.4-1h23.2q1.4 0 2.4 1t1 2.4v23.2z"})))};t.default=l,e.exports=t.default},204:function(e,t,n){var r=n(205);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(98)(r,o);r.locals&&(e.exports=r.locals)},205:function(e,t,n){t=e.exports=n(97)(!0),t.push([e.i,".project-details{margin-top:20px;margin-bottom:20px}.project-details .call-to-action,.project-details .secondary-images{padding-bottom:20px}","",{version:3,sources:["C:/Dev/projects/portfolio/src/components/pages/work/ProjectDetails.css"],names:[],mappings:"AAAA,iBACE,gBAAiB,AACjB,kBAAoB,CAAE,AACtB,oEAEE,mBAAqB,CAAE",file:"ProjectDetails.css",sourcesContent:[".project-details {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n  .project-details .secondary-images,\n  .project-details .call-to-action {\n    padding-bottom: 20px; }\n"],sourceRoot:""}])},206:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),s=n(27),l=n(16),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return c.a.createElement(s.h,{className:"text-center"},c.a.createElement(s.m,null,c.a.createElement(s.f,{xs:12,md:6},c.a.createElement("h2",null,"Ready to start a project?"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet. Sed et posuere mauris. Etia congue pharetra felis."),c.a.createElement(l.b,{to:"/contact"},c.a.createElement(s.a,{color:"primary"},"Contact me"))),c.a.createElement(s.f,{xs:12,md:6},c.a.createElement("b",null,"Still not convinced?"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet. Etia congue pharetra felis. Sed et posuere mauris."),c.a.createElement(l.b,{to:"/about"},"Learn more about me"))))}}]),t}(i.Component);t.a=p}});
//# sourceMappingURL=1.7ad10997.chunk.js.map