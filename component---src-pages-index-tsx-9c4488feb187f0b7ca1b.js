(self.webpackChunkgerard_vergnaud=self.webpackChunkgerard_vergnaud||[]).push([[691],{4575:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},3913:function(e){function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},1322:function(e,t,n){"use strict";n.d(t,{Db:function(){return y},JP:function(){return g},OO:function(){return f},nI:function(){return b},zv:function(){return A}});var r=n(4575),a=n.n(r),s=n(3913),i=n.n(s),c=n(9713),o=n.n(c),l=n(7294);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m,d={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0},f=l.createContext();function g(){return d}var A=function(){function e(){a()(this,e),this.usedNamespaces={}}return i()(e,[{key:"addUsedNamespaces",value:function(e){var t=this;e.forEach((function(e){t.usedNamespaces[e]||(t.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function b(){return m}var y={type:"3rdParty",init:function(e){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};d=p(p({},d),e)}(e.options.react),function(e){m=e}(e)}}},5019:function(e,t,n){"use strict";n.d(t,{$:function(){return y}});var r=n(3038),a=n.n(r),s=n(9713),i=n.n(s),c=n(7294),o=n(1322);function l(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"==typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var u={};function p(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"==typeof t[0]&&u[t[0]]||("string"==typeof t[0]&&(u[t[0]]=new Date),l.apply(void 0,t))}function m(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function d(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.languages[0],a=!!t.options&&t.options.fallbackLng,s=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var i=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!i(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||(!(t.services.backendConnector.backend&&(!t.options.resources||t.options.partialBundledLanguages))||!(!i(r,e)||a&&!i(s,e))))}function f(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return p("i18n.languages were undefined or empty",t.languages),!0;var r=void 0!==t.options.ignoreJSONStructure;return r?t.hasLoadedNamespace(e,{precheck:function(t,r){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e))return!1}}):d(e,t,n)}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e,t){var n=(0,c.useRef)();return(0,c.useEffect)((function(){n.current=t?n.current:e}),[e,t]),n.current};function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=(0,c.useContext)(o.OO)||{},s=r.i18n,i=r.defaultNS,l=n||s||(0,o.nI)();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new o.zv),!l){p("You will need to pass in an i18next instance by using initReactI18next");var u=function(e){return Array.isArray(e)?e[e.length-1]:e},d=[u,{},!1];return d.t=u,d.i18n={},d.ready=!1,d}l.options.react&&void 0!==l.options.react.wait&&p("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var g=A(A(A({},(0,o.JP)()),l.options.react),t),y=g.useSuspense,h=g.keyPrefix,N=e||i||l.options&&l.options.defaultNS;N="string"==typeof N?[N]:N||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(N);var x=(l.isInitialized||l.initializedStoreOnce)&&N.every((function(e){return f(e,l,g)}));function q(){return l.getFixedT(null,"fallback"===g.nsMode?N:N[0],h)}var v=(0,c.useState)(q),j=a()(v,2),k=j[0],P=j[1],E=N.join(),S=b(E),O=(0,c.useRef)(!0);(0,c.useEffect)((function(){var e=g.bindI18n,t=g.bindI18nStore;function n(){O.current&&P(q)}return O.current=!0,x||y||m(l,N,(function(){O.current&&P(q)})),x&&S&&S!==E&&O.current&&P(q),e&&l&&l.on(e,n),t&&l&&l.store.on(t,n),function(){O.current=!1,e&&l&&e.split(" ").forEach((function(e){return l.off(e,n)})),t&&l&&t.split(" ").forEach((function(e){return l.store.off(e,n)}))}}),[l,E]);var w=(0,c.useRef)(!0);(0,c.useEffect)((function(){O.current&&!w.current&&P(q),w.current=!1}),[l]);var I=[k,l,x];if(I.t=k,I.i18n=l,I.ready=x,x)return I;if(!x&&!y)return I;throw new Promise((function(e){m(l,N,(function(){e()}))}))}},7743:function(e,t,n){"use strict";var r=n(7294),a=n(5019);t.Z=function(){var e=(0,a.$)()[0];return r.createElement("footer",{className:"py-2 px-4 bg-primary text-light mt-auto"},r.createElement("ul",{className:"flex items-center justify-center"},r.createElement("li",{className:"mx-2"},r.createElement("a",{className:"underline",href:"/"},e("siteOwner"))),r.createElement("li",{className:"mx-2"},r.createElement("a",{className:"underline",href:"/contact"},e("contact.footer")))))}},1580:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(7294),a=n(5414),s=n(5019),i=n(7743),c=function(){var e=(0,s.$)()[0];return r.createElement("main",{className:"min-h-screen bg-primary text-light flex flex-col"},r.createElement(a.q,null,r.createElement("title",null,"Gérard Vergnaud"),r.createElement("meta",{name:"description",content:e("siteDescription")})),r.createElement("div",{className:"p-8"},r.createElement("div",{className:"rounded-full w-32 h-32 overflow-hidden flex items-center align-center mx-auto"},r.createElement("img",{src:"data:image/jpeg;base64,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",alt:"Gérard Vergnaud"})),r.createElement("h1",{className:"mt-4 font-bold text-4xl text-center"},"Gérard Vergnaud"),r.createElement("h2",{className:"mt-4 text-2xl text-center"},e("home.subtitle")),r.createElement("section",{className:"my-8 mx-auto max-w-2xl text-justify"},r.createElement("p",{className:"styled-first-letter"},"Le but de ce site est de mettre à la disposition des collègues et de leurs étudiants, des contributions leur permettant de saisir certains des enjeux de la recherche en didactique, à la lumière de la psychologie cognitive. Les contributions empiriques ne sont pas moins essentielles que les considérations théoriques : elles s'appuient les unes les autres."),r.createElement("p",{className:"styled-first-letter pt-8"},"En même temps il faut prendre au sérieux les contenus de connaissance, explicites ou implicites, qui organisent l'activité en situation au cours des apprentissages, et de leur développement sur le long terme. Ces contenus de connaissance sont spécifiques de l'activité en jeu, de son domaine et de la visée personnelle de l'apprenant, professionnelle par exemple."),r.createElement("p",{className:"styled-first-letter pt-8"},"Didactiques des disciplines et didactiques professionnelles sont largement spécifiques des contenus de connaissance : c'est ce qui fait leur originalité par rapport à la pédagogie générale, la psychologie, ou les sciences humaines en général. Pourtant la psychologie est visiblement essentielle dans l'approche développée ici ; pourquoi ? parce qu'il s'agit de la pensée : de la pensée comme activité, comme représentation, comme conceptualisation."),r.createElement("p",{className:"styled-first-letter pt-8"},"La didactique, dans ses analyses empiriques et théoriques, ne peut pas se passer de la psychologie. Mais, réciproquement, la psychologie bénéficie en retour des recherches en didactique : par les exemples présentés par la didactique et leur analyse, et par l'épistémologie incontournable des rapports entre les situations auxquelles on est confronté et les formes d'activité progressivement développées pour s'y adapter."),r.createElement("p",{className:"styled-first-letter pt-8"},"Les exemples sont essentiels, et ils ne sont pas encore très nombreux parce que les recherches scientifiques en didactique ne sont pas encore à la hauteur des ambitions des chercheurs et des utilisateurs de leurs résultats."),r.createElement("p",{className:"styled-first-letter pt-8"},"Aussi bien, je demande aux lecteurs qui consulteront ce site, de ne pas aborder les textes de ce site comme on prend connaissance des textes de physique, d'histoire, de biologie, de géologie, ou de mathématiques, quand on est physicien, historien, biologiste, géologue, ou mathématicien professionnel. La raison en est simple : l'apprentissage et le développement des connaissances chez les élèves et les apprentis, à l'école ou dans la vie ordinaire, ne ressemble que de très loin, et toujours imparfaitement, aux connaissances issues de plusieurs siècles d'histoire, voire de millénaires. Même si, paradoxalement, le cheminement de l'apprentissage, ressemble à certains égards au cheminement de l'histoire : par les hésitations, les erreurs, la persistance des fausses routes."),r.createElement("p",{className:"styled-first-letter pt-8"},"Comme beaucoup d'exemples présentés ici concernent les mathématiques, il faut accepter que la didactique des mathématiques ne s'intéresse pas qu'aux succès, mais aussi aux balbutiements des élèves et à l'évolution de leurs erreurs, puisqu'elles ne sont pas toutes également négatives : certaines d'entre elles témoignent d'une prise de conscience non négligeable. La rationalité fait une partie de son chemin à travers des conceptualisations hésitantes.")),r.createElement("ul",{className:"flex flex-col mx-auto max-w-2xl text-lg"},r.createElement("li",{className:"my-2"},r.createElement("a",{className:"button button-inverted block",href:"/premiers-exemples"},e("firstExamples.title"))),r.createElement("li",{className:"my-2"},r.createElement("a",{className:"button button-inverted block",href:"/forme-operatoire-et-forme-predictive"},e("operatingForm.title"))),r.createElement("li",{className:"my-2"},r.createElement("a",{className:"button button-inverted block",href:"/activite-representation-et-conceptualisation"},e("activityAndConcept.title"))),r.createElement("li",{className:"my-2"},r.createElement("a",{className:"button button-inverted block",href:"/developpement-apprentissage-experience"},e("development.title"))),r.createElement("li",{className:"my-2"},r.createElement("a",{className:"button button-inverted block",href:"/piaget-vygotski-frege-constructivisme"},e("piaget.title"))),r.createElement("li",{className:"my-2"},r.createElement("a",{className:"button button-inverted block",href:"/premieres-annees-de-chercheur"},e("firstYears.title"))),r.createElement("li",{className:"my-2"},r.createElement("a",{className:"button button-inverted block",href:"/didactique-professionnelle-culture-experience"},e("professional.title"))),r.createElement("li",{className:"my-2"},r.createElement("a",{className:"button button-inverted block",href:"/epistemologie-psychologie-et-didactique"},e("epistemology.title"))),r.createElement("li",{className:"my-2"},r.createElement("a",{className:"button button-inverted block",href:"/theorie-des-champs-conceptuels"},e("conceptualFields.title"))),r.createElement("li",{className:"my-2"},r.createElement("a",{className:"button button-inverted block",href:"/textes-non-publies"},e("unpublished.title"))),r.createElement("li",{className:"my-2"},r.createElement("a",{className:"button button-inverted block",href:"/annexes"},e("appendix.title"))))),r.createElement(i.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-9c4488feb187f0b7ca1b.js.map