webpackJsonp([2],{100:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),s=n.n(a),c=n(27),l=n(16),A=n(181),u=n(129),m=n(133),p=n(134),d=n.n(p),g=n(118),f=n(135),h=n(138),B=n(182),C=(n.n(B),n(184)),b=(n.n(C),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),y=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),b(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"text-center"},s.a.createElement(f.a,{className:"home",backgroundImage:d.a},s.a.createElement("h1",null,"Bryan Mey"),s.a.createElement(l.b,{to:"/contact"},s.a.createElement(c.a,{color:"primary"},"Contact me"))),s.a.createElement(g.a,{className:"work"},s.a.createElement("h2",null,"Work"),s.a.createElement("div",{className:"grid-section-work"},s.a.createElement("div",{className:"caption"},"Doomsday device? Ah, now the ball's in Farnsworth's court! I saw you with those two \"ladies of the evening\" at Elzars. Explain that. Now Fry, it's been a few years since medical school, so remind me."),s.a.createElement(l.b,{to:"/work",className:"cta"},s.a.createElement(c.a,{color:"secondary"},"Learn more")),s.a.createElement(A.a,{items:h.a,cssModule:{carousel:"item-main"}}))),s.a.createElement(g.a,{useSecondaryBackground:!0},s.a.createElement("h2",null,"About"),s.a.createElement("div",{className:"grid-section-about"},s.a.createElement(u.a,{size:m.a}),s.a.createElement("div",{className:"item-main"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum lorem nec maximus venenatis. Sed et posuere mauris. Nunc sed facilisis lectus. Nunc sit amet dui scelerisque, euismod magna. Etiam eget sem eros. Vivamus congue pharetra felis."),s.a.createElement(l.b,{to:"/about"},s.a.createElement(c.a,{color:"secondary"},"Learn more about me")))),s.a.createElement(g.a,null,s.a.createElement("h2",null,"Want to talk?"),s.a.createElement("p",null,"Lorem ipsum dolor sit amet. Sed et posuere mauris. Nam vitae ipsum vel id euismod magna. Etia congue pharetra felis."),s.a.createElement(l.b,{to:"/contact"},s.a.createElement(c.a,{color:"primary"},"Contact me"))))}}]),t}(a.Component);t.default=y},118:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(119),a=(n.n(i),function(e){var t=e.useSecondaryBackground?"secondary-background":"";return o.a.createElement("div",{className:"section "+t+" "+(e.className||"")},e.children)});t.a=a},119:function(e,t,n){var r=n(120);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(98)(r,o);r.locals&&(e.exports=r.locals)},120:function(e,t,n){t=e.exports=n(97)(!0),t.push([e.i,".section.secondary-background{background-color:#ccc}.section{padding:20px 30px 30px}","",{version:3,sources:["C:/Dev/projects/portfolio/src/components/section/section.css"],names:[],mappings:"AAAA,8BACE,qBAAuB,CAAE,AAE3B,SACE,sBAAwB,CAAE",file:"section.css",sourcesContent:[".section.secondary-background {\n  background-color: #ccc; }\n\n.section {\n  padding: 20px 30px 30px; }\n"],sourceRoot:""}])},129:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),s=n.n(a),c=n(1),l=n.n(c),A=n(130),u=n.n(A),m=n(131),p=(n.n(m),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),d=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),p(t,[{key:"render",value:function(){var e=this.props,t=e.size,n=e.style,r={height:t+"rem"};return s.a.createElement("img",{src:u.a,alt:"Bryan Mey",className:"circular-square",style:Object.assign({},r,n)})}}]),t}(a.Component);d.propTypes={size:l.a.number.isRequired,style:l.a.object},t.a=d},130:function(e,t,n){e.exports=n.p+"static/media/headshot.3f937e41.jpg"},131:function(e,t,n){var r=n(132);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(98)(r,o);r.locals&&(e.exports=r.locals)},132:function(e,t,n){t=e.exports=n(97)(!0),t.push([e.i,".circular-square{border-radius:50%}","",{version:3,sources:["C:/Dev/projects/portfolio/src/components/headshot/headshot.css"],names:[],mappings:"AAAA,iBACE,iBAAmB,CAAE",file:"headshot.css",sourcesContent:[".circular-square {\n  border-radius: 50%; }\n"],sourceRoot:""}])},133:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=6.25},134:function(e,t,n){e.exports=n.p+"static/media/splash-1250x500.0441e75b.jpg"},135:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),s=n.n(a),c=n(1),l=n.n(c),A=n(136),u=(n.n(A),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),m=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.backgroundImage,r=e.className;return s.a.createElement("div",{className:"section-hero "+(r||""),style:{backgroundImage:"url("+n+")"}},t)}}]),t}(a.Component);m.propTypes={backgroundImage:l.a.string.isRequired,children:l.a.any.isRequired,className:l.a.string},t.a=m},136:function(e,t,n){var r=n(137);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(98)(r,o);r.locals&&(e.exports=r.locals)},137:function(e,t,n){t=e.exports=n(97)(!0),t.push([e.i,".section-hero{height:75vh;background-position:50%;background-repeat:no-repeat;background-size:cover}","",{version:3,sources:["C:/Dev/projects/portfolio/src/components/section-hero/section-hero.css"],names:[],mappings:"AAAA,cACE,YAAa,AACb,wBAA4B,AAC5B,4BAA6B,AAC7B,qBAAuB,CAAE",file:"section-hero.css",sourcesContent:[".section-hero {\n  height: 75vh;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n"],sourceRoot:""}])},138:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(139),o=n.n(r),i=n(140),a=n.n(i),s=n(141),c=n.n(s),l=[{key:"project1",src:o.a,secondaryImages:["img","img","img"],imageClassName:"img-horizontal",altText:"Project 1",title:"Project 1",caption:"I was having the most wonderful dream. Except you were there, and you were there, and you were there!"},{key:"project2",src:a.a,secondaryImages:["img","img","img"],imageClassName:"img-horizontal",altText:"Project 2",title:"Project 2",caption:"Bender, were trying our best. Check it out, yall. Everyone who was invited is here."},{key:"project3",src:c.a,secondaryImages:["img","img","img"],imageClassName:"img-horizontal",altText:"Project 3",title:"Project 3",caption:"Ah, the Breakfast Club soundtrack! I cant wait til Im old enough to feel ways about stuff!"}]},139:function(e,t,n){e.exports=n.p+"static/media/project-1-splash.0781d78e.jpg"},140:function(e,t,n){e.exports=n.p+"static/media/project-2-splash.2fa0e6bb.jpg"},141:function(e,t,n){e.exports=n.p+"static/media/project-3-splash.be272788.jpg"},181:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),s=n.n(a),c=n(1),l=n.n(c),A=n(27),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),m=function(e){function t(){var e,n,i,a;r(this,t);for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),i.state={activeIndex:0,animating:!1},a=n,o(i,a)}return i(t,e),u(t,[{key:"onExiting",value:function(){this.setState({animating:!0})}},{key:"onExited",value:function(){this.setState({animating:!1})}},{key:"next",value:function(e){if(!this.state.animating){var t=this.state.activeIndex===e.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:t})}}},{key:"previous",value:function(e){if(!this.state.animating){var t=0===this.state.activeIndex?e.length-1:this.state.activeIndex-1;this.setState({activeIndex:t})}}},{key:"goToIndex",value:function(e){this.state.animating||this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this,t=this.state.activeIndex,n=this.props.items;return s.a.createElement(A.b,{activeIndex:t,next:function(){return e.next(n)},previous:function(){return e.previous(n)},interval:!1},s.a.createElement(A.d,{items:n,activeIndex:t,onClickHandler:function(t){return e.goToIndex(t)}}),n.map(function(t){return s.a.createElement(A.e,{onExiting:function(){return e.onExiting()},onExited:function(){return e.onExited()},key:t.key,src:t.src,altText:t.altText,cssModule:{"img-fluid":"img-fluid "+t.imageClassName}},s.a.createElement("div",{className:"carousel-caption"},s.a.createElement("h3",null,t.title),s.a.createElement("p",null,t.caption)))}),s.a.createElement(A.c,{direction:"prev",directionText:"Previous",onClickHandler:function(){return e.previous(n)}}),s.a.createElement(A.c,{direction:"next",directionText:"Next",onClickHandler:function(){return e.next(n)}}))}}]),t}(a.Component);m.propTypes={items:l.a.array.isRequired},t.a=m},182:function(e,t,n){var r=n(183);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(98)(r,o);r.locals&&(e.exports=r.locals)},183:function(e,t,n){t=e.exports=n(97)(!0),t.push([e.i,'h2{margin-bottom:20px}.section-hero.home{display:grid;grid-template-columns:1fr;-ms-flex-align:center;align-items:center}.section-hero.home h1{grid-column:1/1;grid-row:1/4;color:#fff}.section-hero.home a{grid-column:1/1;grid-row:4/5}.grid-section-about{display:grid;grid-template-columns:1fr;grid-gap:2rem;justify-items:center}.grid-section-about .item-main{padding:0 20px}.grid-section-about img{-ms-flex-item-align:self-end;align-self:self-end}.grid-section-about a{-ms-flex-item-align:self-start;align-self:self-start}@media (min-width:768px){.grid-section-about{grid-template-columns:2fr 1fr;grid-template-areas:"main photo" "main cta"}.grid-section-about .item-main{grid-area:main;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border:1px solid #aaa;border-radius:5px;background-color:#eee;padding:30px}.grid-section-about img{grid-area:photo}.grid-section-about a{grid-area:cta}}',"",{version:3,sources:["C:/Dev/projects/portfolio/src/components/pages/home/Home.css"],names:[],mappings:"AAAA,GACE,kBAAoB,CAAE,AAExB,mBACE,aAAc,AACd,0BAA2B,AAC3B,sBAAuB,AACnB,kBAAoB,CAAE,AAC1B,sBACE,gBAAmB,AACnB,aAAgB,AAChB,UAAa,CAAE,AACjB,qBACE,gBAAmB,AACnB,YAAgB,CAAE,AAEtB,oBACE,aAAc,AACd,0BAA2B,AAC3B,cAAe,AACf,oBAAsB,CAAE,AACxB,+BACE,cAAgB,CAAE,AACpB,wBACE,6BAA8B,AAC1B,mBAAqB,CAAE,AAC7B,sBACE,+BAAgC,AAC5B,qBAAuB,CAAE,AAEjC,yBACE,oBACE,8BAA+B,AAC/B,2CAA6C,CAAE,AAC/C,+BACE,eAAgB,AAChB,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,sBAAuB,AACvB,kBAAmB,AACnB,sBAAuB,AACvB,YAAc,CAAE,AAClB,wBACE,eAAiB,CAAE,AACrB,sBACE,aAAe,CAAE,CAAE",file:"Home.css",sourcesContent:['h2 {\n  margin-bottom: 20px; }\n\n.section-hero.home {\n  display: grid;\n  grid-template-columns: 1fr;\n  -ms-flex-align: center;\n      align-items: center; }\n  .section-hero.home h1 {\n    grid-column: 1 / 1;\n    grid-row: 1 / 4;\n    color: white; }\n  .section-hero.home a {\n    grid-column: 1 / 1;\n    grid-row: 4 / 5; }\n\n.grid-section-about {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 2rem;\n  justify-items: center; }\n  .grid-section-about .item-main {\n    padding: 0 20px; }\n  .grid-section-about img {\n    -ms-flex-item-align: self-end;\n        align-self: self-end; }\n  .grid-section-about a {\n    -ms-flex-item-align: self-start;\n        align-self: self-start; }\n\n@media (min-width: 768px) {\n  .grid-section-about {\n    grid-template-columns: 2fr 1fr;\n    grid-template-areas: "main photo" "main cta"; }\n    .grid-section-about .item-main {\n      grid-area: main;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-align: center;\n          align-items: center;\n      border: 1px solid #aaa;\n      border-radius: 5px;\n      background-color: #eee;\n      padding: 30px; }\n    .grid-section-about img {\n      grid-area: photo; }\n    .grid-section-about a {\n      grid-area: cta; } }\n'],sourceRoot:""}])},184:function(e,t,n){var r=n(185);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(98)(r,o);r.locals&&(e.exports=r.locals)},185:function(e,t,n){t=e.exports=n(97)(!0),t.push([e.i,'.grid-section-work{display:grid;grid-template-columns:1fr;grid-gap:2rem;justify-items:center}.grid-section-work .carousel img{min-height:100%;width:100%;-webkit-filter:brightness(40%);filter:brightness(40%)}.grid-section-work .caption{-ms-flex-item-align:self-end;align-self:self-end}.grid-section-work .cta{-ms-flex-item-align:self-start;align-self:self-start}.grid-section-work .carousel .img-square{position:absolute;top:50%;left:0;margin-top:-50%}@media (max-width:767.98px){.section.work{padding-left:0;padding-right:0}.section.work .caption{padding:0 30px}.section.work .carousel,.section.work .carousel-item{height:30vh;min-height:200px;width:100%}}@media (min-width:768px){.grid-section-work{grid-template-columns:2fr 1fr;grid-template-areas:"main caption" "main cta"}.grid-section-work .carousel{grid-area:main}.grid-section-work .carousel,.grid-section-work .carousel-item{height:40vh;min-height:250px;width:100%}.grid-section-work .caption{grid-area:caption}.grid-section-work .cta{grid-area:cta}}',"",{version:3,sources:["C:/Dev/projects/portfolio/src/components/pages/home/work.css"],names:[],mappings:"AAAA,mBACE,aAAc,AACd,0BAA2B,AAC3B,cAAe,AACf,oBAAsB,CAAE,AACxB,iCACE,gBAAiB,AACjB,WAAY,AACZ,+BAAgC,AACxB,sBAAwB,CAAE,AACpC,4BACE,6BAA8B,AAC1B,mBAAqB,CAAE,AAC7B,wBACE,+BAAgC,AAC5B,qBAAuB,CAAE,AAC/B,yCACE,kBAAmB,AACnB,QAAS,AACT,OAAQ,AACR,eAAiB,CAAE,AAEvB,4BACE,cACE,eAAgB,AAChB,eAAiB,CAAE,AACnB,uBACE,cAAgB,CAAE,AACpB,qDAEE,YAAa,AACb,iBAAkB,AAClB,UAAY,CAAE,CAAE,AAEtB,yBACE,mBACE,8BAA+B,AAC/B,6CAA+C,CAAE,AACjD,6BACE,cAAgB,CAAE,AACpB,+DAEE,YAAa,AACb,iBAAkB,AAClB,UAAY,CAAE,AAChB,4BACE,iBAAmB,CAAE,AACvB,wBACE,aAAe,CAAE,CAAE",file:"work.css",sourcesContent:['.grid-section-work {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 2rem;\n  justify-items: center; }\n  .grid-section-work .carousel img {\n    min-height: 100%;\n    width: 100%;\n    -webkit-filter: brightness(40%);\n            filter: brightness(40%); }\n  .grid-section-work .caption {\n    -ms-flex-item-align: self-end;\n        align-self: self-end; }\n  .grid-section-work .cta {\n    -ms-flex-item-align: self-start;\n        align-self: self-start; }\n  .grid-section-work .carousel .img-square {\n    position: absolute;\n    top: 50%;\n    left: 0;\n    margin-top: -50%; }\n\n@media (max-width: 767.98px) {\n  .section.work {\n    padding-left: 0;\n    padding-right: 0; }\n    .section.work .caption {\n      padding: 0 30px; }\n    .section.work .carousel,\n    .section.work .carousel-item {\n      height: 30vh;\n      min-height: 200px;\n      width: 100%; } }\n\n@media (min-width: 768px) {\n  .grid-section-work {\n    grid-template-columns: 2fr 1fr;\n    grid-template-areas: "main caption" "main cta"; }\n    .grid-section-work .carousel {\n      grid-area: main; }\n    .grid-section-work .carousel,\n    .grid-section-work .carousel-item {\n      height: 40vh;\n      min-height: 250px;\n      width: 100%; }\n    .grid-section-work .caption {\n      grid-area: caption; }\n    .grid-section-work .cta {\n      grid-area: cta; } }\n'],sourceRoot:""}])}});
//# sourceMappingURL=2.0a8138ec.chunk.js.map