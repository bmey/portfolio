webpackJsonp([2],{253:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(4),i=n.n(c),s=n(256),l=n(275),u=n(276),p=n(279),f=n(280),m=n(263),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),b(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Work"),m.a.map(function(e,t){return i.a.createElement("div",{key:e.key},i.a.createElement(u.a,{title:e.title,quote:e.caption,backgroundImage:e.src}),i.a.createElement(p.a,{images:[e.src],description:e.caption,url:"http://www.google.com",inverseDisplayOrder:t%2===0}))}),i.a.createElement(s.a,{useSecondaryBackground:!0},i.a.createElement(l.a,null)),i.a.createElement(s.a,null,i.a.createElement(f.a,null)))}}]),t}(c.Component);t.default=y},256:function(e,t,n){"use strict";var r=n(4),o=n.n(r),a=n(257),c=(n.n(a),function(e){var t=e.useSecondaryBackground?"secondary-background":"";return o.a.createElement("div",{className:"section "+t+" "+(e.className||"")},e.children)});t.a=c},257:function(e,t,n){var r=n(258);"string"===typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(250)(r,o);r.locals&&(e.exports=r.locals)},258:function(e,t,n){t=e.exports=n(249)(!0),t.push([e.i,".section.secondary-background{background-color:#ccc}.section{padding:20px 30px 30px}","",{version:3,sources:["C:/Dev/projects/portfolio/src/components/section/section.css"],names:[],mappings:"AAAA,8BACE,qBAAuB,CAAE,AAE3B,SACE,sBAAwB,CAAE",file:"section.css",sourcesContent:[".section.secondary-background {\n  background-color: #ccc; }\n\n.section {\n  padding: 20px 30px 30px; }\n"],sourceRoot:""}])},263:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(264),o=n.n(r),a=n(265),c=n.n(a),i=n(266),s=n.n(i),l=[{key:"project1",src:o.a,imageClassName:"img-horizontal",altText:"Project 1",title:"Project 1",caption:"I was having the most wonderful dream. Except you were there, and you were there, and you were there!"},{key:"project2",src:c.a,imageClassName:"img-horizontal",altText:"Project 2",title:"Project 2",caption:"Bender, were trying our best. Check it out, yall. Everyone who was invited is here."},{key:"project3",src:s.a,imageClassName:"img-horizontal",altText:"Project 3",title:"Project 3",caption:"Ah, the Breakfast Club soundtrack! I cant wait til Im old enough to feel ways about stuff!"}]},264:function(e,t,n){e.exports=n.p+"static/media/project-1-splash.0781d78e.jpg"},265:function(e,t,n){e.exports=n.p+"static/media/project-2-splash.2fa0e6bb.jpg"},266:function(e,t,n){e.exports=n.p+"static/media/project-3-splash.be272788.jpg"},275:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(4),i=n.n(c),s=n(101),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"text-center"},i.a.createElement("h2",null,"How I Work"),i.a.createElement(s.h,null,i.a.createElement(s.m,null,i.a.createElement(s.f,{xs:12,md:6},i.a.createElement("div",null,"Icon Carousel")),i.a.createElement(s.f,{xs:12,md:6},i.a.createElement("p",null,"Lorem Ipsum!")))))}}]),t}(c.Component);t.a=u},276:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(277),i=(n.n(c),n(4)),s=n.n(i),l=n(6),u=n.n(l),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),p(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.quote,r=e.backgroundImage,o=s.a.createElement("div",{className:"text-center"},s.a.createElement("span",{style:{fontSize:"24px"}},'"'),s.a.createElement("span",null,n),s.a.createElement("span",{style:{fontSize:"24px"}},'"'));return s.a.createElement("div",null,s.a.createElement("div",{className:"project-banner",style:{backgroundImage:"url("+r+")"}},s.a.createElement("h2",null,t),s.a.createElement("div",{className:"project-quote d-none d-sm-block"},o)),s.a.createElement("div",{className:"project-quote d-block d-sm-none"},o))}}]),t}(i.Component);f.propTypes={title:u.a.string.isRequired,quote:u.a.string.isRequired,backgroundImage:u.a.string.isRequired},t.a=f},277:function(e,t,n){var r=n(278);"string"===typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(250)(r,o);r.locals&&(e.exports=r.locals)},278:function(e,t,n){t=e.exports=n(249)(!0),t.push([e.i,".project-banner{height:22vh;background-position:50%;background-repeat:no-repeat;background-size:cover;color:#fff}.project-quote{padding:20px}@media (max-width:575px){.project-banner{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}}","",{version:3,sources:["C:/Dev/projects/portfolio/src/components/pages/work/ProjectBanner.css"],names:[],mappings:"AAAA,gBACE,YAAa,AACb,wBAA4B,AAC5B,4BAA6B,AAC7B,sBAAuB,AACvB,UAAa,CAAE,AAEjB,eACE,YAAc,CAAE,AAElB,yBACE,gBACE,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AAClB,uBAAwB,AAC5B,sBAAuB,AACnB,kBAAoB,CAAE,CAAE",file:"ProjectBanner.css",sourcesContent:[".project-banner {\n  height: 22vh;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: white; }\n\n.project-quote {\n  padding: 20px; }\n\n@media (max-width: 575px) {\n  .project-banner {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center; } }\n"],sourceRoot:""}])},279:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(4),i=n.n(c),s=n(6),l=n.n(s),u=n(101),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),p(t,[{key:"render",value:function(){var e=this.props,t=e.images,n=e.description,r=e.url,o=e.inverseDisplayOrder,a=i.a.createElement(u.f,{xs:12,sm:6},i.a.createElement("p",null,n),i.a.createElement("a",{href:r},i.a.createElement(u.a,null,"Visit")));return i.a.createElement(u.h,{className:"text-center"},i.a.createElement(u.m,null,o&&a,i.a.createElement(u.f,{xs:12,sm:6},t.map(function(e,t){return i.a.createElement("span",{key:t},e)})),!o&&a))}}]),t}(c.Component);f.propTypes={images:l.a.array.isRequired,description:l.a.string.isRequired,url:l.a.string.isRequired,inverseDisplayOrder:l.a.bool},t.a=f},280:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(4),i=n.n(c),s=n(101),l=n(58),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return i.a.createElement(s.h,{className:"text-center"},i.a.createElement(s.m,null,i.a.createElement(s.f,{xs:12,md:6},i.a.createElement("h2",null,"Ready to start a project?"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet. Sed et posuere mauris. Etia congue pharetra felis."),i.a.createElement(l.b,{to:"/contact"},i.a.createElement(s.a,{color:"primary"},"Contact me"))),i.a.createElement(s.f,{xs:12,md:6},i.a.createElement("b",null,"Still not convinced?"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet. Etia congue pharetra felis. Sed et posuere mauris."),i.a.createElement(l.b,{to:"/about"},"Learn more about me"))))}}]),t}(c.Component);t.a=p}});
//# sourceMappingURL=2.3e66d1e6.chunk.js.map