# Selector

::: tip 🤔Caveats and pitfalls
- A selector can be combined, nested and grouped, thus becoming a complex string. 
- Nesting and adding combinators `>`, `~`, `+` increase specifity and selectors become difficult to maintain. It should be **avoided**.
- ID selectors styling should avoided as it's not reusable and very aggresive specifity-wise.
- Every selector selects _all_ corresponding items. 
  :::

## Usage

CSS selector is a string describing which HTML elements to select. Valid examples:\
`.demoClass`\
`* > div`\
`body .demo1:nth-last-of-type(2) ~ div#demo2`

They are mainly used for:

- Selecting HTML elements to style with CSS (`SCSS`, `LESS`, `stylus` etc);
- Selecting and manipulating HTML elements with JS (`querySelectorAll`, `jQuery/Sizzle` etc);
- Accessing HTML elements with testing libraries (`enzyme`, `PhantomJS` etc);

Every selector selects _all_ corresponding items.

## Types

- **ID** - starts with `#`, i.e. `#my-element` selects `<div id="my-element"></div>`;
- **class** - starts with `.`, i.e. `.my-element` selects `<div class="my-element"></div>`;
- **element** - element's name minus angle (`<` `>`) brackets, i.e. `body`, `div`, `img`;
- **universal** - `*` symbol (wildcard), selects all the elements;
- **attribute** - element's attribute, enclosed in square (`[` `]`) brackets. i.e.:\
`[disabled]` selects `<input type="text" disabled />` \
It can contain attribute's value as well, i.e.:\
`[name="address"]` selects `<input type="text" name="address" />`
- **pseudo** - starts with `:` and selects [pseudo](./pseudoselectors.md) elements invisible in DOM tree i.e. `:before`

## Specifity

Selector string can contain multiple expressions i.e. `input.my-input[disabled]`.\
It can also contain multiple expressions of the same type i.e. `input.first-class.second-class`.\
_Note no space between expressions._

Adding more data to selector increases **specifity** - targeting elements more accurately,\
filtering out similar elements which don't match the selector exactly.

i.e. `input` is less specific, as it targets all the `input` elements in HTML.\
`input.my-input[disabled]` targets specific `inputs` which have class `my-input` and attribute `disabled`. \
More specific selector's CSS will override the one which is less specific.

It is pretty difficult to maintain and override complex selectors.\
They should be as asbtract as possible to achieve certain goal.\
Specifity should always be as small as possible.

## Nesting

Use selector's context (ancestor selectors) to target elements more accurately.\
`.ancestor .target.second` will select an element which has both `target` and
`second` classes and is inside another element which has class `ancestor`.\
_Note the space between `.ancestor` and `.target.second`._ \
Ancestor doesn't have to be a direct parent, it can traverse multiple levels up.

This is called nesting and could be multiple levels deep i.e.: \
`.ancestor .something-in-between .something-else .target.second` \
Target element for selector will always be the last part of expression, right after _space_ character.

Adding nesting to selector increases specifity. This should be avoided if not neccessary.\
It's quite easy to overlook as CSS preprocessors (i.e. SCSS) makes nesting effortless.

## Combinators

- `>` selects **all children** elements which have first part of selector as _direct parent_ element.\
_Direct child combinator_: \
`div > p` selects **all** `p` elements with `div` as their direct parent element.\
`>` does not affect deeper-nested descendants.

- `+` selects **first** element which has the same parent and comes  _after_ first part of selector.\
_Adjacent sibling combinator_: \
`div + p` selects **first** `p` element with the same parent as `div`, coming right _after_ that `div`. 

- `~` selects **all** elements which have the same parent and come _after_ first part of selector.\
_General sibling combinator_: \
`div ~ p` selects **all** the `p` elements with the same parent as `div`, coming right _after_ that `div`. 

Adding combinators to selector increases specifity. This should be avoided if not neccessary.

## Grouping

Selectors may be grouped with `,` symbol.\
i.e. `img, .some-class` is a valid selector which selects **all** `<img>` elements **and** all elements which have class `some-class`.\
It's possible to group selectors of any specifity level.


## ID selectors in CSS

ID selectors (starting with `#`) override other CSS selectors in **any** specifity levels.\
ID selectors are 'competing' in specifity levels only with other ID selectors (nested etc).\
Because they are so aggressive, it's considered a bad practice to use CSS on ID selectors.

#### Resources

- [CSS selectors reference on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- [CSS selectors usage on MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors)
- [Beginner Concepts: How CSS Selectors Work on CSS tricks](https://css-tricks.com/how-css-selectors-work/)
- [CSS Selector Reference on W3Schools](https://www.w3schools.com/cssref/css_selectors.asp)
- [Child and Sibling Selectors on CSS tricks](https://css-tricks.com/child-and-sibling-selectors/)
- [Understand ‘+’, ‘>’ and ‘~’ symbols in CSS Selector](https://techbrij.com/css-selector-adjacent-child-sibling)
- [Specificity on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
- [Cascade and inheritance on MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#Specificity_2)