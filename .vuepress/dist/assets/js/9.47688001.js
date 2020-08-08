(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{354:function(e,t,o){"use strict";o.r(t);var s=o(43),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"pseudo-element"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pseudo-element"}},[e._v("#")]),e._v(" Pseudo-element")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("🤔Caveats and pitfalls")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("::before")]),e._v("/"),o("code",[e._v("::after")]),e._v(" is available for every HTML element except  "),o("code",[e._v("<img>")]),e._v(", "),o("code",[e._v("<canvas>")]),e._v(", "),o("code",[e._v("<input>")]),e._v(", "),o("code",[e._v("<textarea>")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("content")]),e._v(" property is required for every "),o("code",[e._v("::before")]),e._v("/"),o("code",[e._v("::after")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("::before")]),e._v("/"),o("code",[e._v("::after")]),e._v(" enables creation of 2 additional dummy DOM elements per node. They should "),o("strong",[e._v("only")]),e._v(" be used for minor presentational UI pieces.")]),e._v(" "),o("li",[o("code",[e._v("::selection")]),e._v(" can cause accessibility issues. Mostly text-styling properties are valid.")]),e._v(" "),o("li",[o("code",[e._v("::placeholder")]),e._v(" is an experimental rule. Mostly text-styling properties are valid.")]),e._v(" "),o("li",[e._v("Modern browsers support single "),o("code",[e._v(":")]),e._v(", although the W3C standard is double colon "),o("code",[e._v("::")]),e._v(".")])])]),e._v(" "),o("p",[e._v("Pseudo-element is an extended selector denoted by preceding double colon "),o("code",[e._v("::")]),e._v(", i.e. "),o("code",[e._v("::before")]),e._v("."),o("br"),e._v("\nModern browsers can also use single color "),o("code",[e._v(":")]),e._v(", i.e. "),o("code",[e._v(":before")]),e._v("."),o("br"),e._v("\nSome pseudo-elements can be applied to another selector (i.e. "),o("code",[e._v(".btn::first-letter")]),e._v(")."),o("br"),e._v("\nOthers are valid as individual selectors(i.e. "),o("code",[e._v("::placeholder")]),e._v(").")]),e._v(" "),o("p",[e._v("Pseudo-element selectors enable styling specific part of already selected element (i.e. "),o("code",[e._v(".btn::first-letter")]),e._v(") or parts of the app which are not in the DOM (text selection, placeholders, scrollbar).\\")]),e._v(" "),o("p",[e._v("It's impossible to select an element via pseudo-element selector with JS."),o("br"),e._v("\nHowever, it's possible to get or update CSS for some pseudo-elements via "),o("code",[e._v("getComputedStyle()")]),e._v(".\nEssentially, setting a CSS value for a pseudo-element "),o("em",[o("strong",[e._v("creates")])]),e._v(" it.")]),e._v(" "),o("h2",{attrs:{id:"before-after"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#before-after"}},[e._v("#")]),e._v(" ::before / ::after")]),e._v(" "),o("p",[e._v("Setting "),o("code",[e._v("::before")]),e._v("/"),o("code",[e._v("::after")]),e._v(" and adding custom "),o("code",[e._v("content")]),e._v(" property "),o("em",[o("strong",[e._v("creates")])]),e._v(" an inline element just before or after that element itself:")]),e._v(" "),o("div",{staticClass:"language-scss extra-class"},[o("pre",{pre:!0,attrs:{class:"language-scss"}},[o("code",[o("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".btn::before ")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v("content")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v("'text'")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 'content' property is always required for before/after")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),o("p",[e._v("This CSS would render "),o("code",[e._v('<button class="btn">click</button>')]),e._v(" button with text "),o("em",[o("strong",[e._v("textclick")])]),e._v(".")]),e._v(" "),o("p",[o("code",[e._v("content")]),e._v(" property is required, but could be set to "),o("code",[e._v("content: ''")]),e._v(" - an empty string."),o("br"),e._v(" "),o("em",[o("strong",[e._v("All")])]),e._v(" the other CSS properties ("),o("code",[e._v("display")]),e._v(", "),o("code",[e._v("position")]),e._v(", "),o("code",[e._v("z-index")]),e._v(" etc) behave exactly the same as they would on a normal HTML element.")]),e._v(" "),o("p",[e._v("Almost all HTML elements can have "),o("code",[e._v("::before")]),e._v("/"),o("code",[e._v("::after")]),e._v(", exceptions being: "),o("code",[e._v("<img>")]),e._v(", "),o("code",[e._v("<canvas>")]),e._v(", "),o("code",[e._v("<input>")]),e._v(", "),o("code",[e._v("<textarea>")]),e._v(".")]),e._v(" "),o("p",[o("code",[e._v("::before")]),e._v("/"),o("code",[e._v("::after")]),e._v(" is often used for creating small UI pieces - icons, borders, gradients etc."),o("br"),e._v("\nWith no changes to HTML you still get 3 times as many elements, because each of them has 2 additional elements -  "),o("code",[e._v("::before")]),e._v(" and "),o("code",[e._v("::after")]),e._v(".")]),e._v(" "),o("p",[e._v("To add an icon to the button, you'd either have to add "),o("code",[e._v('<span class="btn__icon"></span>')]),e._v(" and:")]),e._v(" "),o("div",{staticClass:"language-scss extra-class"},[o("pre",{pre:!0,attrs:{class:"language-scss"}},[o("code",[o("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".btn__icon ")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...iconMarkup")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),o("p",[e._v("...or to solve it with "),o("code",[e._v("::before")]),e._v("/"),o("code",[e._v("::after")]),e._v(", you wouldn't touch HTML, only add this to CSS:")]),e._v(" "),o("div",{staticClass:"language-scss extra-class"},[o("pre",{pre:!0,attrs:{class:"language-scss"}},[o("code",[o("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".btn::before ")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v("content")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v("''")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...iconMarkup")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),o("p",[e._v("It's a double-edged sword as it enables more styling possiblities without touching HTML."),o("br"),e._v("\nHowever, "),o("code",[e._v("::before")]),e._v("/"),o("code",[e._v("::after")]),e._v(" are not semantic, accessible and sometimes can be hard to track, debug and override."),o("br"),e._v(" "),o("code",[e._v("content")]),e._v(" property does not get indexed by search engines and it's manipulation with JS is limited.")]),e._v(" "),o("h2",{attrs:{id:"selection"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#selection"}},[e._v("#")]),e._v(" ::selection")]),e._v(" "),o("p",[e._v("When "),o("code",[e._v("::selection")]),e._v(" rules are set in CSS, it creates an new pseudo-element."),o("br"),e._v("\nThese rules describe how selected text (selection by dragging mouse pointer over some content) looks."),o("br"),e._v("\nOnly a handful of rules are valid, mainly text-related:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("background-color")])]),e._v(" "),o("li",[o("code",[e._v("caret-color")])]),e._v(" "),o("li",[o("code",[e._v("color")])]),e._v(" "),o("li",[o("code",[e._v("cursor")])]),e._v(" "),o("li",[o("code",[e._v("font properties")])]),e._v(" "),o("li",[o("code",[e._v("outline and its longhands")])]),e._v(" "),o("li",[o("code",[e._v("text-decoration and its associated properties")])]),e._v(" "),o("li",[o("code",[e._v("text-emphasis-color")])]),e._v(" "),o("li",[o("code",[e._v("text-shadow")])])]),e._v(" "),o("p",[e._v("As "),o("code",[e._v("::selection")]),e._v(" pseudo-element is not related to DOM, it's very opinionated and unstable."),o("br"),e._v("\nIt could be used to enchance branding, however it can also lead to accessibility issues.")]),e._v(" "),o("h2",{attrs:{id:"placeholder"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#placeholder"}},[e._v("#")]),e._v(" ::placeholder")]),e._v(" "),o("p",[o("code",[e._v("::placeholder")]),e._v(" pseudo-element style overrides form input placeholder CSS rules."),o("br"),e._v("\nIt is only applied to "),o("code",[e._v("<input>")]),e._v(" element which have "),o("code",[e._v("placeholder")]),e._v(" attribute defined.")]),e._v(" "),o("p",[e._v("Only a handful of rules are valid, mainly text-related:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("background properties")])]),e._v(" "),o("li",[o("code",[e._v("color")])]),e._v(" "),o("li",[o("code",[e._v("font properties")])]),e._v(" "),o("li",[o("code",[e._v("letter-spacing")])]),e._v(" "),o("li",[o("code",[e._v("line-height")])]),e._v(" "),o("li",[o("code",[e._v("opacity")])]),e._v(" "),o("li",[o("code",[e._v("text-decoration")])]),e._v(" "),o("li",[o("code",[e._v("text-indent")])]),e._v(" "),o("li",[o("code",[e._v("text-transform")])]),e._v(" "),o("li",[o("code",[e._v("vertical-align")])]),e._v(" "),o("li",[o("code",[e._v("word-spacing")])])]),e._v(" "),o("p",[e._v("It is also able to transition those properties with pseudo-classes.")]),e._v(" "),o("p",[o("code",[e._v("::placeholder")]),e._v(" support is rather limited as it's not a standard CSS3 feature.")]),e._v(" "),o("h4",{attrs:{id:"resources"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/::before",target:"_blank",rel:"noopener noreferrer"}},[e._v("::before via MDN"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/::selection",target:"_blank",rel:"noopener noreferrer"}},[e._v("::selection via MDN"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder",target:"_blank",rel:"noopener noreferrer"}},[e._v("::placeholder via MDN"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.w3schools.com/cssref/sel_before.asp",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSS ::before Selector via w3schools"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.w3schools.com/cssref/sel_selection.asp",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSS ::selection Selector via w3schools"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.w3schools.com/cssref/sel_placeholder.asp",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSS ::placeholder Selector via w3schools"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://css-tricks.com/almanac/selectors/a/after-and-before/",target:"_blank",rel:"noopener noreferrer"}},[e._v("::before / ::after via CSS Tricks"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://css-tricks.com/almanac/selectors/s/selection/",target:"_blank",rel:"noopener noreferrer"}},[e._v("::selection via CSS Tricks"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://css-tricks.com/almanac/selectors/p/placeholder/",target:"_blank",rel:"noopener noreferrer"}},[e._v("::placeholder via CSS Tricks"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);