(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{357:function(e,t,s){"use strict";s.r(t);var r=s(43),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"selector"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#selector"}},[e._v("#")]),e._v(" Selector")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("🤔Caveats and pitfalls")]),e._v(" "),s("ul",[s("li",[e._v("A selector can be combined, nested and grouped, thus becoming a complex string.")]),e._v(" "),s("li",[e._v("Nesting and adding combinators "),s("code",[e._v(">")]),e._v(", "),s("code",[e._v("~")]),e._v(", "),s("code",[e._v("+")]),e._v(" increase specifity and selectors become difficult to maintain. It should be "),s("strong",[e._v("avoided")]),e._v(".")]),e._v(" "),s("li",[e._v("ID selectors styling should avoided as it's not reusable and very aggresive specifity-wise.")]),e._v(" "),s("li",[e._v("Every selector selects "),s("em",[e._v("all")]),e._v(" corresponding items.")])])]),e._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),s("p",[e._v("CSS selector is a string describing which HTML elements to select. Valid examples:"),s("br"),e._v(" "),s("code",[e._v(".demoClass")]),s("br"),e._v(" "),s("code",[e._v("* > div")]),s("br"),e._v(" "),s("code",[e._v("body .demo1:nth-last-of-type(2) ~ div#demo2")])]),e._v(" "),s("p",[e._v("They are mainly used for:")]),e._v(" "),s("ul",[s("li",[e._v("Selecting HTML elements to style with CSS ("),s("code",[e._v("SCSS")]),e._v(", "),s("code",[e._v("LESS")]),e._v(", "),s("code",[e._v("stylus")]),e._v(" etc);")]),e._v(" "),s("li",[e._v("Selecting and manipulating HTML elements with JS ("),s("code",[e._v("querySelectorAll")]),e._v(", "),s("code",[e._v("jQuery/Sizzle")]),e._v(" etc);")]),e._v(" "),s("li",[e._v("Accessing HTML elements with testing libraries ("),s("code",[e._v("enzyme")]),e._v(", "),s("code",[e._v("PhantomJS")]),e._v(" etc);")])]),e._v(" "),s("p",[e._v("Every selector selects "),s("em",[e._v("all")]),e._v(" corresponding items.")]),e._v(" "),s("h2",{attrs:{id:"types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#types"}},[e._v("#")]),e._v(" Types")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("ID")]),e._v(" - starts with "),s("code",[e._v("#")]),e._v(", i.e. "),s("code",[e._v("#my-element")]),e._v(" selects "),s("code",[e._v('<div id="my-element"></div>')]),e._v(";")]),e._v(" "),s("li",[s("strong",[e._v("class")]),e._v(" - starts with "),s("code",[e._v(".")]),e._v(", i.e. "),s("code",[e._v(".my-element")]),e._v(" selects "),s("code",[e._v('<div class="my-element"></div>')]),e._v(";")]),e._v(" "),s("li",[s("strong",[e._v("element")]),e._v(" - element's name minus angle ("),s("code",[e._v("<")]),e._v(" "),s("code",[e._v(">")]),e._v(") brackets, i.e. "),s("code",[e._v("body")]),e._v(", "),s("code",[e._v("div")]),e._v(", "),s("code",[e._v("img")]),e._v(";")]),e._v(" "),s("li",[s("strong",[e._v("universal")]),e._v(" - "),s("code",[e._v("*")]),e._v(" symbol (wildcard), selects all the elements;")]),e._v(" "),s("li",[s("strong",[e._v("attribute")]),e._v(" - element's attribute, enclosed in square ("),s("code",[e._v("[")]),e._v(" "),s("code",[e._v("]")]),e._v(") brackets. i.e.:"),s("br"),e._v(" "),s("code",[e._v("[disabled]")]),e._v(" selects "),s("code",[e._v('<input type="text" disabled />')]),e._v(" "),s("br"),e._v("\nIt can contain attribute's value as well, i.e.:"),s("br"),e._v(" "),s("code",[e._v('[name="address"]')]),e._v(" selects "),s("code",[e._v('<input type="text" name="address" />')])]),e._v(" "),s("li",[s("strong",[e._v("pseudo")]),e._v(" - starts with "),s("code",[e._v(":")]),e._v(" and selects "),s("RouterLink",{attrs:{to:"/CSS/pseudoselectors.html"}},[e._v("pseudo")]),e._v(" elements invisible in DOM tree i.e. "),s("code",[e._v(":before")])],1)]),e._v(" "),s("h2",{attrs:{id:"specifity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#specifity"}},[e._v("#")]),e._v(" Specifity")]),e._v(" "),s("p",[e._v("Selector string can contain multiple expressions i.e. "),s("code",[e._v("input.my-input[disabled]")]),e._v("."),s("br"),e._v("\nIt can also contain multiple expressions of the same type i.e. "),s("code",[e._v("input.first-class.second-class")]),e._v("."),s("br"),e._v(" "),s("em",[e._v("Note no space between expressions.")])]),e._v(" "),s("p",[e._v("Adding more data to selector increases "),s("strong",[e._v("specifity")]),e._v(" - targeting elements more accurately,"),s("br"),e._v("\nfiltering out similar elements which don't match the selector exactly.")]),e._v(" "),s("p",[e._v("i.e. "),s("code",[e._v("input")]),e._v(" is less specific, as it targets all the "),s("code",[e._v("input")]),e._v(" elements in HTML."),s("br"),e._v(" "),s("code",[e._v("input.my-input[disabled]")]),e._v(" targets specific "),s("code",[e._v("inputs")]),e._v(" which have class "),s("code",[e._v("my-input")]),e._v(" and attribute "),s("code",[e._v("disabled")]),e._v(". "),s("br"),e._v("\nMore specific selector's CSS will override the one which is less specific.")]),e._v(" "),s("p",[e._v("It is pretty difficult to maintain and override complex selectors."),s("br"),e._v("\nThey should be as asbtract as possible to achieve certain goal."),s("br"),e._v("\nSpecifity should always be as small as possible.")]),e._v(" "),s("h2",{attrs:{id:"nesting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nesting"}},[e._v("#")]),e._v(" Nesting")]),e._v(" "),s("p",[e._v("Use selector's context (ancestor selectors) to target elements more accurately."),s("br"),e._v(" "),s("code",[e._v(".ancestor .target.second")]),e._v(" will select an element which has both "),s("code",[e._v("target")]),e._v(" and\n"),s("code",[e._v("second")]),e._v(" classes and is inside another element which has class "),s("code",[e._v("ancestor")]),e._v("."),s("br"),e._v(" "),s("em",[e._v("Note the space between "),s("code",[e._v(".ancestor")]),e._v(" and "),s("code",[e._v(".target.second")]),e._v(".")]),e._v(" "),s("br"),e._v("\nAncestor doesn't have to be a direct parent, it can traverse multiple levels up.")]),e._v(" "),s("p",[e._v("This is called nesting and could be multiple levels deep i.e.: "),s("br"),e._v(" "),s("code",[e._v(".ancestor .something-in-between .something-else .target.second")]),e._v(" "),s("br"),e._v("\nTarget element for selector will always be the last part of expression, right after "),s("em",[e._v("space")]),e._v(" character.")]),e._v(" "),s("p",[e._v("Adding nesting to selector increases specifity. This should be avoided if not neccessary."),s("br"),e._v("\nIt's quite easy to overlook as CSS preprocessors (i.e. SCSS) makes nesting effortless.")]),e._v(" "),s("h2",{attrs:{id:"combinators"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#combinators"}},[e._v("#")]),e._v(" Combinators")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v(">")]),e._v(" selects "),s("strong",[e._v("all children")]),e._v(" elements which have first part of selector as "),s("em",[e._v("direct parent")]),e._v(" element."),s("br"),e._v(" "),s("em",[e._v("Direct child combinator")]),e._v(": "),s("br"),e._v(" "),s("code",[e._v("div > p")]),e._v(" selects "),s("strong",[e._v("all")]),e._v(" "),s("code",[e._v("p")]),e._v(" elements with "),s("code",[e._v("div")]),e._v(" as their direct parent element."),s("br"),e._v(" "),s("code",[e._v(">")]),e._v(" does not affect deeper-nested descendants.")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("+")]),e._v(" selects "),s("strong",[e._v("first")]),e._v(" element which has the same parent and comes  "),s("em",[e._v("after")]),e._v(" first part of selector."),s("br"),e._v(" "),s("em",[e._v("Adjacent sibling combinator")]),e._v(": "),s("br"),e._v(" "),s("code",[e._v("div + p")]),e._v(" selects "),s("strong",[e._v("first")]),e._v(" "),s("code",[e._v("p")]),e._v(" element with the same parent as "),s("code",[e._v("div")]),e._v(", coming right "),s("em",[e._v("after")]),e._v(" that "),s("code",[e._v("div")]),e._v(".")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("~")]),e._v(" selects "),s("strong",[e._v("all")]),e._v(" elements which have the same parent and come "),s("em",[e._v("after")]),e._v(" first part of selector."),s("br"),e._v(" "),s("em",[e._v("General sibling combinator")]),e._v(": "),s("br"),e._v(" "),s("code",[e._v("div ~ p")]),e._v(" selects "),s("strong",[e._v("all")]),e._v(" the "),s("code",[e._v("p")]),e._v(" elements with the same parent as "),s("code",[e._v("div")]),e._v(", coming right "),s("em",[e._v("after")]),e._v(" that "),s("code",[e._v("div")]),e._v(".")])])]),e._v(" "),s("p",[e._v("Adding combinators to selector increases specifity. This should be avoided if not neccessary.")]),e._v(" "),s("h2",{attrs:{id:"grouping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grouping"}},[e._v("#")]),e._v(" Grouping")]),e._v(" "),s("p",[e._v("Selectors may be grouped with "),s("code",[e._v(",")]),e._v(" symbol."),s("br"),e._v("\ni.e. "),s("code",[e._v("img, .some-class")]),e._v(" is a valid selector which selects "),s("strong",[e._v("all")]),e._v(" "),s("code",[e._v("<img>")]),e._v(" elements "),s("strong",[e._v("and")]),e._v(" all elements which have class "),s("code",[e._v("some-class")]),e._v("."),s("br"),e._v("\nIt's possible to group selectors of any specifity level.")]),e._v(" "),s("h2",{attrs:{id:"id-selectors-in-css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#id-selectors-in-css"}},[e._v("#")]),e._v(" ID selectors in CSS")]),e._v(" "),s("p",[e._v("ID selectors (starting with "),s("code",[e._v("#")]),e._v(") override other CSS selectors in "),s("strong",[e._v("any")]),e._v(" specifity levels."),s("br"),e._v("\nID selectors are 'competing' in specifity levels only with other ID selectors (nested etc)."),s("br"),e._v("\nBecause they are so aggressive, it's considered a bad practice to use CSS on ID selectors.")]),e._v(" "),s("h4",{attrs:{id:"resources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSS selectors reference on MDN"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSS selectors usage on MDN"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://css-tricks.com/how-css-selectors-work/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Beginner Concepts: How CSS Selectors Work on CSS tricks"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://www.w3schools.com/cssref/css_selectors.asp",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSS Selector Reference on W3Schools"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://css-tricks.com/child-and-sibling-selectors/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Child and Sibling Selectors on CSS tricks"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://techbrij.com/css-selector-adjacent-child-sibling",target:"_blank",rel:"noopener noreferrer"}},[e._v("Understand ‘+’, ‘>’ and ‘~’ symbols in CSS Selector"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity",target:"_blank",rel:"noopener noreferrer"}},[e._v("Specificity on MDN"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#Specificity_2",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cascade and inheritance on MDN"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=o.exports}}]);