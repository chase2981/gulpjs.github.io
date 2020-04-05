(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(7),i=(n(0),n(134)),s={id:"series",title:"series()",hide_title:!0,sidebar_label:"series()"},o={id:"api/series",title:"series()",description:"# series()",source:"@site/docs/api/series.md",permalink:"/docs/en/api/series",sidebar_label:"series()",sidebar:"docs",previous:{title:"lastRun()",permalink:"/docs/en/api/lastrun"},next:{title:"parallel()",permalink:"/docs/en/api/parallel"}},c=[{value:"Usage",id:"usage",children:[]},{value:"Signature",id:"signature",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Errors",id:"errors",children:[]}]},{value:"Forward references",id:"forward-references",children:[]},{value:"Avoid duplicating tasks",id:"avoid-duplicating-tasks",children:[]}],l={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"series"},"series()"),Object(i.b)("p",null,"Combines task functions and/or composed operations into larger operations that will be executed one after another, in sequential order. There are no imposed limits on the nesting depth of composed operations using ",Object(i.b)("inlineCode",{parentName:"p"},"series()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"parallel()"),"."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { series } = require('gulp');\n\nfunction javascript(cb) {\n  // body omitted\n  cb();\n}\n\nfunction css(cb) {\n  // body omitted\n  cb();\n}\n\nexports.build = series(javascript, css);\n")),Object(i.b)("h2",{id:"signature"},"Signature"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"series(...tasks)\n")),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"parameter"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"note"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"tasks",Object(i.b)("br",null),Object(i.b)("strong",{parentName:"td"},"(required)")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"function",Object(i.b)("br",null),"string"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Any number of task functions can be passed as individual arguments. Strings can be used if you've registered tasks previously, but this is not recommended.")))),Object(i.b)("h3",{id:"returns"},"Returns"),Object(i.b)("p",null,"A composed operation to be registered as a task or nested within other ",Object(i.b)("inlineCode",{parentName:"p"},"series")," and/or ",Object(i.b)("inlineCode",{parentName:"p"},"parallel")," compositions."),Object(i.b)("p",null,"When the composed operation is executed, all tasks will be run sequentially. If an error occurs in one task, no subsequent tasks will be run."),Object(i.b)("h3",{id:"errors"},"Errors"),Object(i.b)("p",null,'When no tasks are passed, throws an error with the message, "One or more tasks should be combined using series or parallel".'),Object(i.b)("p",null,'When invalid tasks or unregistered tasks are passed, throws an error with the message, "Task never defined".'),Object(i.b)("h2",{id:"forward-references"},"Forward references"),Object(i.b)("p",null,"A forward reference is when you compose tasks, using string references, that haven't been registered yet. This was a common practice in older versions, but this feature was removed to achieve faster task runtime and promote the use of named functions."),Object(i.b)("p",null,'In newer versions, you\'ll get an error, with the message "Task never defined", if you try to use forward references. You may experience this when trying to use ',Object(i.b)("inlineCode",{parentName:"p"},"exports")," for your task registration ",Object(i.b)("em",{parentName:"p"},"and")," composing tasks by string. In this situation, use named functions instead of string references."),Object(i.b)("p",null,"During migration, you may need to use the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/gulpjs/undertaker-forward-reference"}),"forward reference registry"),". This will add an extra closure to every task reference and dramatically slow down your build. ",Object(i.b)("strong",{parentName:"p"},"Don't rely on this fix for very long"),"."),Object(i.b)("h2",{id:"avoid-duplicating-tasks"},"Avoid duplicating tasks"),Object(i.b)("p",null,"When a composed operation is run, each task will be executed every time it was supplied."),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"clean")," task referenced in two different compositions would be run twice and lead to undesired results. Instead, refactor the ",Object(i.b)("inlineCode",{parentName:"p"},"clean")," task to be specified in the final composition."),Object(i.b)("p",null,"If you have code like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// This is INCORRECT\nconst { series, parallel } = require('gulp');\n\nconst clean = function(cb) {\n  // body omitted\n  cb();\n};\n\nconst css = series(clean, function(cb) {\n  // body omitted\n  cb();\n});\n\nconst javascript = series(clean, function(cb) {\n  // body omitted\n  cb();\n});\n\nexports.build = parallel(css, javascript);\n")),Object(i.b)("p",null,"Migrate to this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { series, parallel } = require('gulp');\n\nfunction clean(cb) {\n  // body omitted\n  cb();\n}\n\nfunction css(cb) {\n  // body omitted\n  cb();\n}\n\nfunction javascript(cb) {\n  // body omitted\n  cb();\n}\n\nexports.build = series(clean, parallel(css, javascript));\n")))}b.isMDXComponent=!0},134:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return n?a.a.createElement(m,o({ref:t},l,{components:n})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);