# Z-Index

::: tip 🤔Caveats and pitfalls
- **If you want to fix a stacking (`z-index`) issue quickly, just scroll to [troubleshooting](#troubleshooting)**.
- `z-index` is unitless, whole number and relative to other values existing on the document. 
- _Stacking Context_ is a group of elements which have same parent and have either `position`, `transform` or `opacity` properties set.
- If an element has no _Stacking Context_ set, it's _Stacking Context_ is set to _root_ (`<html>`).
- Only elements within same _Stacking Context_ are competing with each other.
- For better predictability, set _Stacking Context_ and `z-index` manually. 
- Keep `fixed` and `sticky` elements as close to _**root** Stacking Context_ as possible.
:::

`z-index` CSS property describes in what order element stacks _**relatively**_ to other elements.\
`z-index` value must be unitless (no _px_ or _%_), whole (no _decimals_) and can be _**negative**_.\
`z-index` can only be used and is evaluated within it's _[Stacking Context](#stacking)_.

## Stacking
_**Stacking**_ is a concept of treating elements as layers stacking one on top of another.

_**Stacking Order**_ is an order in which elements stack as layers - which is displayed in front and so on.\
The order is controlled by unitless `z-index` value.

_**Stacking Context**_ is a group of elements which have same parent and is created by adding one of:
- `position` property with `relative`, `absolute`, `fixed` or `sticky` value;
- `transform` property with _**any**_ value except `none`;
- `opacity` property with value lower than `1` (i.e. 0.99);
- other properties on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)...

...to one or all of the child elements.

Elements inside _Stacking Context_ and their descendants can have their own _Stacking Contexts_.

Every element belongs to at least one _Stacking Context_.\
If it is not set by ancestor elements, it is the root element of the document (`<html>`).

_**Sibling elements**_ in DOM tree within the same _Static Context_ compete in _Stacking Order_ via `z-index` property.\
Higher value elements are stacked in front of lower value elements.\
Elements with the same or no `z-index` value are stacked according to appearance in the HTML.

## Traversing

The most common misconception is that _all_ elements are 'competing' in _Stacking Order_ via `z-index`. They are not.\
Adding `z-index: 9` to an element will not always 'pull' it to the top, even if it's greater than another element's `z-index: 2`.

Only sibling elements (_at the same DOM level_) within the same _Stacking Contexts_ or elements inside _**root** Stacking Context_ are competing with each other. 
So, to correctly solve `z-index` issues you have to track down ancestors of overlapping elements which are siblings to each other.

If they do not belong to defined _Stacking Context_, they belong to _**root** Stacking Context_.\
So, track their sibling ancestors, manually create _Stacking Context_ and set `z-index` values there.

There can be an issues with _Stacking Context_ when dealing with nested `fixed` and `sticky` elements.\
Try to keep `fixed` and `sticky` elements as close to _**root** Stacking Context_ as possible.


## Troubleshooting

1. Find conflicting overlapping elements in DOM tree.
2. Traverse up the DOM tree until you find the level where their ancestors become siblings (are on the same level in DOM).
3. Make sure their ancestor siblings both have _Static Contexts_ and have `z-index` defined.
4. If any of them do not have _Static Context_, set their position to `relative`.
5. Add or update suitable ancestor's `z-index` so that the one you want in front would be greater.

Note: If one of the conflicting elements comes right after `<body>`, update it's `position` and `z-index` properties.

#### Resources

- [CSS stacking contexts: What they are and how they work via Tiffany B. Brown](https://tiffanybbrown.com/2015/09/css-stacking-contexts-wtf/)
- [What No One Told You About Z-Index via PHILIP WALTON](https://philipwalton.com/articles/what-no-one-told-you-about-z-index/)
- [The stacking context via MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)
- [z-index via MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
- [Using z-index via MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index)


