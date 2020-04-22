# Position

::: tip 🤔Caveats and pitfalls
- Default `position` value for every HTML element is `static`.
- `z-index`, `top`, `bottom`, `left`, `right` works only on non-static elements.
- `top | bottom` and `left | right` values should always be set explicitly (or to `0`).
- `position: absolute` is relative to it's closest non-static ancestor and not to it's parent.
- `width` of `position: absolute` and `position: fixed` element is calculated from it's contents.
- `position: sticky` won't work if `top` or `bottom` is not set or if any of ancestor elements has `overflow` set.
:::

There are 5 available CSS `position:` values:

```scss
.el {
  position: static; // default position of every element
  position: relative; // relative to itself
  position: absolute; // relative to it's closest non-static parent element
  position: fixed; // relative to viewport
  position: sticky; // acts as relative and switches to absolute
}
```

## Static

`position: static` is _default_ for every HTML element.\
It's hard to spot as it's not displayed in DevTools.

It does _not_ react to `z-index`, `top`, `bottom`, `left`, `right` properties.\
It does _nothing_ and could be useful only to uset previously set `position` value.\
You can think about it like position `auto` or `none` (these are _not_ valid values though).

## Relative

Element with `position: relative` is relative to it's original position.

When you apply `top: 10px` to the element, it moves down _from_ top of it's initial position by 10 px.\
Same goes for all `top | right | bottom | left` properties which can be applied to `relative`.\
Negative values are allowed so `top: -10px`, will move it up _from_ top of it's initial position by 10 px.

Other elements are not affected - it retains normal document flow (unlike with `margin | padding`).

You can apply `z-index` property to move element forward/back in [Stacking Order](todo) if it or it's children are overlapping with other elements.

## Absolute

Element with `position: absolute` is relative to it's closest non-static ancestor.

When you apply `position: absolute`, you pull out the element from normal document flow.\
The rest of the elements rearrange as if the `absolute` element was removed.

It travels up through it's parents to find the closest non-static element and positions accordingly.\
If it doesn't have non-static ancestor elements, then it uses initial document `<html>`.

The element's `width` becomes relative to it's content, so it can be either different than previously.\
When you apply `width: 100%`, it becomes full width of it's non-static ancestor.

`top | right | bottom | left` properties can be applied after setting `position: absolute`.\
Default value for all of them is `auto` and the element usually ends up in top-left corner.\
However, it is not always the case and `top: 0` with `left: 0` values should be provided.\
This makes `absolute` positioning behaviour controllable and predictable.

When you apply `top: 10px`, it moves down _from_ top of it's non-static ancestor by 10 px.\
Negative values are allowed and `top: -10px` moves it up _from_ top of it's non-static ancestor by 10 px.

You can also apply `z-index` property to move element forward/back in [Stacking Order](todo).

## Fixed

Element with `position: fixed` is relative to viewport and stays in the same place when scrolling.

It's behavior is almost identical to [Absolute](#absolute).\
The key difference is that it doesn't care about ancestor structure or positioning.\
No matter how deep the element is in the DOM, it will be always positioned according to viewport.

[Stacking Order](todo) can be tricky as `fixed` element's `z-index` 'competes' with children and ancestors.

## Sticky

`position: sticky` acts as `relative` and switches to a variant of `absolute` and `fixed` when a scroll offset is met.

It's parent element defines it's boundaries - where it should start and stop being sticky.\
Scroll offset is defined by `top` or `bottom` properties when scrolling is vertical.\
Scroll offset must be set to `0` or to any value as in `position: relative` in order to work.\

Sticking won't work if `top` or `bottom` is not set or if any of ancestor elements  has `overflow` set.\
It won't work if parent element's height (if scroll is in vertical axis) is equal to sticky element's height.\

#### Resources

- [MDN - position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [How to use the position property in CSS to align elements](https://www.freecodecamp.org/news/how-to-use-the-position-property-in-css-to-align-elements-d8f49c403a26/)
- [Understanding and Using CSS Positions](https://zellwk.com/blog/css-positions/)


