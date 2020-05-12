# Pseudo-class

::: tip 🤔Caveats and pitfalls
- Pseudo-class selector selects elements with specific **UI state** or **DOM context** and must have an element it's related to (i.e. `.btn:last-child:hover`).
- Pseudo-class selectors only work in CSS (not JS).
- While manipulating an element with pseudo-class, it's possible to also target and manipulate it's context (sibling or descendant elements).
- Combining pseudo-classes with other selectors enables creation of context and state related layouts (menu dropdowns, form validation etc).
- Using pseudo-classes increases specifity, so should be avoided if not neccessary.
:::

Pseudo-class is an extended selector denoted by preceding colon `:`, i.e. `:hover`.\
It must be applied to another selector i.e. `.btn:hover`, `input:focus`.\
It selects HTML elements with certain UI state (i.e. `:focus`, `:active`, `:valid`) or in specific DOM position context (i.e. `:root`, `:first-child`, `:not()`).\
Pseudo-class selectors do not work in JS.

State-related pseudo-classes can be only applied to certain HTML elements, i.e. `:checked` is only valid for `checkbox` and `radio` inputs. `:focus` is valid for form controls and elements with `tabindex` and `contenteditable` attributes.

When an element's state changes (i.e. element gets `:hover`, `:checked` etc), it's possible to change not only the element itself, but also use it's context. For example, when you `:hover` an ancestor element (`.container`), it also updates style of the nested button.

<iframe src="https://codesandbox.io/embed/pseudo-class-hover-isrcb" style="width:100%; height:200px; border: 0"></iframe>

Using complex selectors with [nesting](./selector.md#nesting) and [combinators](./selector.md#combinators) can create interesting context and state related effects. Example bellow is a multi conditional CSS form validation.

There are sibling controls - _required_ text input with _minlength="3"_ attribute and _required_ checkbox.
Sibling _span_ should only turn green on hover, when text input is valid and checkbox is checked.

```scss
input[type="text"]:valid + input[type="checkbox"]:checked + span:hover {
  color: green;
}
```

<iframe src="https://codesandbox.io/embed/pseudo-class-valid-8cfn4" style="width:100%; height:200px; border: 0"></iframe>

This approach creates very high-specifity (difficult to override) and low-maintainability (difficult to reason about) selectors, so should be done with care.

## :not()

:not() is a functional pseudo-class that takes a selector as an argument and selects elements that are not represented by the argument.
i.e. `.some-class:not(.special-class-to-exclude)`.\
It can also take other simple selectors (no nesting or combinators) and pseudo-classes.\
i.e. `.some-class:not(:hover)` would target `.some-class` elements which are not hovered.

## :hover / :active

`:hover` is applied while mouse hovers over target element's box.\
`:active` is applied while mouse is being pressed within target element's box.\
`:hover` and `:active` can be applied to _any_ html element.

## :focus 

`:focus` is applied when a focusable element get focus - on click/touch, while tabbing or via JS.\
Valid and applicable elements:\
`input`, `textarea`, `button`, `a` and elements with `tabindex` and `contenteditable` attributes.

## :checked / :disabled / :valid / :invalid

Form and it's control elements have pseudo-classes which derive from form validity and values.

`:checked` is applied when `checkbox` or `radio` input is _selected_.\
`:disabled` is applied when `input`, `textarea` or `button` has _disabled_ attribute.\
`:valid` is applied when `input` or `textarea` field meets validity criteria. There can be multiple criteria and they are passed via attributes (`required`, `type="email"`, `pattern`, `minlength` etc).\
`:invalid` is an opposite to `:valid`. 

## :placeholder-shown

`:placeholder-shown` is almost exact opposite to `:focus`.\
It is applied when `input`/`textarea` has _placeholder_ attribute and it has no value entered.\
It can be combined with `:focus` and `:not` to enforce same behavior while it has some text.

Note how labels keep being stuck when inputs have text, even though they lose focus.

```css
.input:focus + .label,
.input:not(:placeholder-shown) + .label {
  transform: scale(0.5) translateY(-16px);
}
```

<iframe src="https://codesandbox.io/embed/pseudo-class-placeholder-shown-v0gpo" style="width:100%; height:220px; border: 0"></iframe>


## :nth- / :first- / :only- / :last-

Selectors which start with `:nth-` are functional pseudo-classes that takes parameters how to select elements from the same parent.\
- **`:nth-child()`** (the most common one)
- `:nth-last-child()`
- `:nth-last-of-type()`
- `:nth-of-type()`

Parameters could be either with _even_/_odd_ keywords (i.e. `:nth-child(even)`, `:nth-child(odd)`)  or a formula `:nth-child(An + B)`, where **A** is iteration step size and **B** is start offset.

These selectors iterate through sibling elements and select only those which meet formula filter.

There are additional selectors which select either **first**, **last** or **only** child or element which matches a certain type:
- `:first-child` (selects only first element in parent wrapper)
- `:first-of-type` (selects only first element of that type in parent wrapper)
- `:only-child` (selects only if there is one child element in parent wrapper)
- `:only-of-type` (selects only if there is one child element of that type in parent wrapper)
- `:last-child` (selects only last element in parent wrapper)
- `:last-of-type` (selects only last element of that type in parent wrapper)


#### Resources
- [Pseudo classes via MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
- [Understanding Pseudo-Class Selectors via hackernoon](https://hackernoon.com/understanding-pseudo-class-selectors-mg443t89)
- [Meet the Pseudo Class Selectors via CSS Tricks](https://css-tricks.com/pseudo-class-selectors/)
- [CSS Pseudo-classes via w3schools](https://www.w3schools.com/css/css_pseudo_classes.asp)
- [:nth-child() CSS Reference via codrops](https://tympanus.net/codrops/css_reference/nth-child/)
