# Pseudo-element

::: tip 🤔Caveats and pitfalls
- `::before`/`::after` is available for every HTML element except  `<img>`, `<canvas>`, `<input>`, `<textarea>`.
- `content` property is required for every `::before`/`::after`.
- `::before`/`::after` enables creation of 2 additional dummy DOM elements per node. They should **only** be used for minor presentational UI pieces.
- `::selection` can cause accessibility issues. Mostly text-styling properties are valid.
- `::placeholder` is an experimental rule. Mostly text-styling properties are valid.
- Modern browsers support single `:`, although the W3C standard is double colon `::`.
:::

Pseudo-element is an extended selector denoted by preceding double colon `::`, i.e. `::before`.\
Modern browsers can also use single color `:`, i.e. `:before`.\
Some pseudo-elements can be applied to another selector (i.e. `.btn::first-letter`).\
Others are valid as individual selectors(i.e. `::placeholder`).

Pseudo-element selectors enable styling specific part of already selected element (i.e. `.btn::first-letter`) or parts of the app which are not in the DOM (text selection, placeholders, scrollbar).\

It's impossible to select an element via pseudo-element selector with JS.\
However, it's possible to get or update CSS for some pseudo-elements via `getComputedStyle()`.
Essentially, setting a CSS value for a pseudo-element _**creates**_ it.

## ::before / ::after

Setting `::before`/`::after` and adding custom `content` property _**creates**_ an inline element just before or after that element itself:

```scss
.btn::before {
  content: 'text'; // 'content' property is always required for before/after
}
```

This CSS would render `<button class="btn">click</button>` button with text _**textclick**_.

`content` property is required, but could be set to `content: ''` - an empty string.\
_**All**_ the other CSS properties (`display`, `position`, `z-index` etc) behave exactly the same as they would on a normal HTML element.

Almost all HTML elements can have `::before`/`::after`, exceptions being: `<img>`, `<canvas>`, `<input>`, `<textarea>`.

`::before`/`::after` is often used for creating small UI pieces - icons, borders, gradients etc.\
With no changes to HTML you still get 3 times as many elements, because each of them has 2 additional elements -  `::before` and `::after`.

To add an icon to the button, you'd either have to add `<span class="btn__icon"></span>` and:
```scss
.btn__icon {
  // ...iconMarkup
}
```
...or to solve it with `::before`/`::after`, you wouldn't touch HTML, only add this to CSS:
```scss
.btn::before {
  content: '';
  // ...iconMarkup
}
```

It's a double-edged sword as it enables more styling possiblities without touching HTML.\
However, `::before`/`::after` are not semantic, accessible and sometimes can be hard to track, debug and override.\
`content` property does not get indexed by search engines and it's manipulation with JS is limited.

## ::selection
When `::selection` rules are set in CSS, it creates an new pseudo-element.\
These rules describe how selected text (selection by dragging mouse pointer over some content) looks.\
Only a handful of rules are valid, mainly text-related:
- `background-color`
- `caret-color`
- `color`
- `cursor`
- `font properties`
- `outline and its longhands`
- `text-decoration and its associated properties`
- `text-emphasis-color`
- `text-shadow`

As `::selection` pseudo-element is not related to DOM, it's very opinionated and unstable.\
It could be used to enchance branding, however it can also lead to accessibility issues.

## ::placeholder

`::placeholder` pseudo-element style overrides form input placeholder CSS rules.\
It is only applied to `<input>` element which have `placeholder` attribute defined.

Only a handful of rules are valid, mainly text-related:
- `background properties`
- `color`
- `font properties`
- `letter-spacing`
- `line-height`
- `opacity`
- `text-decoration`
- `text-indent`
- `text-transform`
- `vertical-align`
- `word-spacing`

It is also able to transition those properties with pseudo-classes.

`::placeholder` support is rather limited as it's not a standard CSS3 feature. 

#### Resources

- [::before via MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::before)
- [::selection via MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::selection)
- [::placeholder via MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder)
- [CSS ::before Selector via w3schools](https://www.w3schools.com/cssref/sel_before.asp)
- [CSS ::selection Selector via w3schools](https://www.w3schools.com/cssref/sel_selection.asp)
- [CSS ::placeholder Selector via w3schools](https://www.w3schools.com/cssref/sel_placeholder.asp)
- [::before / ::after via CSS Tricks](https://css-tricks.com/almanac/selectors/a/after-and-before/)
- [::selection via CSS Tricks](https://css-tricks.com/almanac/selectors/s/selection/)
- [::placeholder via CSS Tricks](https://css-tricks.com/almanac/selectors/p/placeholder/)
