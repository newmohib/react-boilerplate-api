(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{e49f8aa1553de612e1e8:function(e,r,n){"use strict";n.r(r);var t=n("8af190b70a6bc55c6f1b"),c=n.n(t),a=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),i=n("0d7f0986bcd2f33d8a2a"),o=n("ab039aecd4a1d4fedc0e"),d=n("a28fc3c963a1d4d1a2e5"),s=n("ab4cb61bcb2dc161defb"),f=n("adc20f99e57c573c589c"),l=n("d95b0cf107403b178365"),u=n("7edf83707012a871cdfb"),v={},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,r=arguments.length>1?arguments[1]:void 0;return Object(u.a)(e,function(){r.type})},m=function(e){return e.viewUsers||v},p=function(){return Object(d.a)(m,function(e){return e})},h=regeneratorRuntime.mark(w);function w(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},h)}var y,g=Object(o.defineMessages)({header:{id:"".concat("app.containers.ViewUsers",".header"),defaultMessage:"This is the ViewUsers container!"}});function j(e,r,n,t){y||(y="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var c=e&&e.defaultProps,a=arguments.length-3;if(r||0===a||(r={children:void 0}),r&&c)for(var i in c)void 0===r[i]&&(r[i]=c[i]);else r||(r=c||{});if(1===a)r.children=t;else if(a>1){for(var o=new Array(a),d=0;d<a;d++)o[d]=arguments[d+3];r.children=o}return{$$typeof:y,type:e,key:void 0===n?null:""+n,ref:null,props:r,_owner:null}}n.d(r,"ViewUsers",function(){return O});var U=j(i.Helmet,{},void 0,j("title",{},void 0,"ViewUsers"),j("meta",{name:"description",content:"Description of ViewUsers"}));function O(){return Object(l.a)({key:"viewUsers",reducer:b}),Object(f.a)({key:"viewUsers",saga:w}),j("div",{},void 0,U,j("div",{className:"container form-wrapper",style:{height:"calc(100vh - 65px)"}},void 0,j("div",{className:"row justify-content-center h-100"},void 0,j("div",{className:"col-10 col-lg-6 col-md-8 col-sm-10 h-100 d-flex align-items-center"},void 0,j("div",{className:"form-container formStyle"},void 0,j("div",{className:"container"},void 0,j("h3",{className:"text-center headerStyle"},void 0,c.a.createElement(o.FormattedMessage,g.header))))))))}var k=Object(d.b)({viewUsers:p()});var N=Object(a.connect)(k,function(e){return{dispatch:e}});r.default=Object(s.compose)(N,t.memo)(O)}}]);