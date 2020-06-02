(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{359:function(e,t,r){"use strict";r.r(t);var s=r(43),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"default-styles"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#default-styles"}},[e._v("#")]),e._v(" Default styles")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("🤔Caveats and pitfalls")]),e._v(" "),r("ul",[r("li",[e._v("Each browser interprets W3C rendering standards via own "),r("em",[e._v("Browser (Rendering) Engine")])]),e._v(" "),r("li",[e._v("Every HTML element has a default style set by "),r("em",[e._v("Browser Engine")]),e._v(". It could differ by browser and can be made consistent via "),r("a",{attrs:{href:"https://necolas.github.io/normalize.css/",target:"_blank",rel:"noopener noreferrer"}},[e._v("normalize"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[e._v("Every HTML element has predefined initial default value for each CSS property.")]),e._v(" "),r("li",[e._v("Vendor prefixes are used to 'flag' at-that-time experimental and non-standartized features.")]),e._v(" "),r("li",[e._v("To target specific browser with CSS, use "),r("a",{attrs:{href:"http://browserhacks.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Browser Hacks"),r("OutboundLink")],1),e._v(".")])])]),e._v(" "),r("h2",{attrs:{id:"browser-engine"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#browser-engine"}},[e._v("#")]),e._v(" Browser engine")]),e._v(" "),r("p",[e._v("Browser engine ("),r("em",[e._v("rendering engine")]),e._v(") is a part of a browser responsible for layout interpretation."),r("br"),e._v("\nNotable engines:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("WebKit")]),e._v(" (used by Safari)")]),e._v(" "),r("li",[r("strong",[e._v("Blink")]),e._v(" (used by Chrome, Opera and latest Edge, forked from WebKit)")]),e._v(" "),r("li",[r("strong",[e._v("Gecko")]),e._v(" (used by Firefox)")]),e._v(" "),r("li",[r("strong",[e._v("EdgeHTML")]),e._v(" (used by the first versions of Edge)")]),e._v(" "),r("li",[r("strong",[e._v("Trident")]),e._v(" (discontinued, used by Internet Explorer)")])]),e._v(" "),r("p",[e._v("Browser engines strive to interpret HTML and CSS standards set by "),r("a",{attrs:{href:"https://www.w3.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("W3C"),r("OutboundLink")],1),e._v("."),r("br"),e._v("\nHowever, their interpretations may be different and may cause bugs and inconsistencies.")]),e._v(" "),r("h2",{attrs:{id:"default-browser-engine-styles"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#default-browser-engine-styles"}},[e._v("#")]),e._v(" Default browser engine styles")]),e._v(" "),r("p",[r("em",[r("strong",[e._v("Every")])]),e._v(" HTML element has it's styling defined in "),r("a",{attrs:{href:"#browser-engine"}},[e._v("browser engine")]),e._v("."),r("br"),e._v("\ni.e. it provides bullet points and margins to "),r("code",[e._v("<ul><li>")]),e._v(" elements and numbering to "),r("code",[e._v("<ol><li>")]),e._v(".")]),e._v(" "),r("p",[e._v("Each "),r("a",{attrs:{href:"#browser-engine"}},[e._v("browser engine")]),e._v(" has it's own default style rules:")]),e._v(" "),r("ul",[r("li",[r("strong",[r("a",{attrs:{href:"http://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css",target:"_blank",rel:"noopener noreferrer"}},[e._v("WebKit"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://chromium.googlesource.com/chromium/blink/+/72fef91ac1ef679207f51def8133b336a6f6588f/Source/core/css/html.css",target:"_blank",rel:"noopener noreferrer"}},[e._v("Blink"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://hg.mozilla.org/mozilla-central/file/tip/layout/style/res/html.css",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gecko"),r("OutboundLink")],1)])])]),e._v(" "),r("p",[e._v("Most of them are the same, i.e. "),r("code",[e._v("body")]),e._v(" has "),r("code",[e._v("margin: 8px")]),e._v(" and all tags in "),r("code",[e._v("head")]),e._v(" (like "),r("code",[e._v("link")]),e._v(", "),r("code",[e._v("meta")]),e._v(" etc) have "),r("code",[e._v("display: none")]),e._v(" in every browser engine.")]),e._v(" "),r("p",[e._v("There are some differences, i.e. styling of "),r("code",[e._v("button")]),e._v(" or focus state of inputs across different engines."),r("br"),e._v("\nTo solve those inconsistencies there's a tool called "),r("strong",[r("a",{attrs:{href:"https://necolas.github.io/normalize.css/",target:"_blank",rel:"noopener noreferrer"}},[e._v("normalize"),r("OutboundLink")],1)]),e._v(" which sets opinionated defaults.")]),e._v(" "),r("h2",{attrs:{id:"default-element-styles"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#default-element-styles"}},[e._v("#")]),e._v(" Default element styles")]),e._v(" "),r("p",[r("em",[r("strong",[e._v("Every")])]),e._v(" HTML element has a default style - default value for every property."),r("br"),e._v("\nSome CSS rules are inherited from parent elements, i.e. "),r("code",[e._v("font-size")]),e._v(", but most of them have defaults.")]),e._v(" "),r("p",[e._v("By setting "),r("code",[e._v("width: 100px")]),e._v(" you're not setting it. You're overriding it from default, which is "),r("code",[e._v("auto")]),e._v("."),r("br"),e._v("\nThis is an important concept when there is a need to 'un-set' back to original value, i.e."),r("br"),e._v("\nin "),r("code",[e._v("@media")]),e._v(" queries or after JavaScript modifications.")]),e._v(" "),r("p",[e._v("When creating a simple "),r("code",[e._v("<p>text</p>")]),e._v(" tag, you already declare:")]),e._v(" "),r("div",{staticClass:"language-scss extra-class"},[r("pre",{pre:!0,attrs:{class:"language-scss"}},[r("code",[r("span",{pre:!0,attrs:{class:"token selector"}},[e._v("p ")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v("width")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" auto"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// default for width")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v("height")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" auto"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// default for height")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v("transform")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" none"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// default for transform")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v("opacity")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 1"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// default for opacity")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v("background-color")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" transparent"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// default for background-color")]),e._v("\n  ...\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),r("p",[e._v("...and only then override with custom styling.")]),e._v(" "),r("p",[e._v("Defaults for every property can be found on "),r("a",{attrs:{href:"https://www.w3schools.com/cssref/default.asp",target:"_blank",rel:"noopener noreferrer"}},[e._v("w3schools"),r("OutboundLink")],1),e._v(" or "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Reference",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"vendor-prefixes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vendor-prefixes"}},[e._v("#")]),e._v(" Vendor prefixes")]),e._v(" "),r("p",[e._v("Some CSS rules are not certified as a standard - it might be a working draft or just propopals, but latest browser creators want to already implement it.")]),e._v(" "),r("p",[e._v("That's where vendor prefixes come in.")]),e._v(" "),r("p",[e._v("CSS browser (vendor) prefixes are an agreeed semantic way to note, that some properties are experimental at the time of implementing. Notable vendor prefixes:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("-webkit-")]),e._v(" (Chrome, Safari, iOS, latest Opera);")]),e._v(" "),r("li",[r("code",[e._v("-moz-")]),e._v(" (Firefox);")]),e._v(" "),r("li",[r("code",[e._v("-ms-")]),e._v(" (Internet Explorer and Edge);")]),e._v(" "),r("li",[r("code",[e._v("-o-")]),e._v(" (old Opera);")])]),e._v(" "),r("p",[e._v("Let's take "),r("code",[e._v("transform")]),e._v(" as an example. It was a long debate how it's implementation should be standartized.\nHowever, Chrome developers wanted to start already implementing it.\nGiven that standards were not there yet, Chrome devs 'flagged' it with "),r("code",[e._v("-webkit-")]),e._v(" to note that it's experimental.")]),e._v(" "),r("p",[e._v("When "),r("code",[e._v("transform")]),e._v(" standard was finalized (with CSS3 at 2012), Chrome started using it in parallel with "),r("code",[e._v("-webkit-transform")]),e._v(".\nPrefixed version is not needed anymore, although it's kept for backwards compatibility.")]),e._v(" "),r("p",[e._v("Some CSS rules are only applicable for certain "),r("a",{attrs:{href:"#browser-engine"}},[e._v("browser engines")]),e._v(".")]),e._v(" "),r("p",[e._v("i.e. "),r("code",[e._v("-webkit-overflow-scrolling")]),e._v(" is applicable only to WebKit and Blink based browsers."),r("br"),e._v("\nIt is not a standardized feature and probably will never be.")]),e._v(" "),r("h2",{attrs:{id:"browser-hacks"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#browser-hacks"}},[e._v("#")]),e._v(" Browser hacks")]),e._v(" "),r("p",[e._v("To solve some browser-specific quirks, we can use "),r("em",[r("strong",[e._v("Browser Hacks")])]),e._v("."),r("br"),e._v(" "),r("em",[e._v("Browser Hacks")]),e._v(" are browser specific CSS expressions which target only specific set of browsers.")]),e._v(" "),r("p",[e._v("For example, to target Internet Explore 10+ or Edge, we can use an odd media query:"),r("br"),e._v(" "),r("code",[e._v("@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {}")])]),e._v(" "),r("p",[e._v("CSS inside this query will only target IE10+ and Edge. Other browsers will hyst ingore it.")]),e._v(" "),r("p",[e._v("More Browser Hacks can be found on community-driven "),r("strong",[r("a",{attrs:{href:"http://browserhacks.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Browser Hacks"),r("OutboundLink")],1)]),e._v(" page.")]),e._v(" "),r("h4",{attrs:{id:"resources"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.w3.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("W3C"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.w3schools.com/cssref/default.asp",target:"_blank",rel:"noopener noreferrer"}},[e._v("w3schools CSS Reference"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Reference",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN CSS Reference"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://necolas.github.io/normalize.css/",target:"_blank",rel:"noopener noreferrer"}},[e._v("normalize"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://browserhacks.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Browser Hacks"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);