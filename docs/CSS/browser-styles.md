# Default Browser Engine styles

::: tip 🤔Caveats and pitfalls
- Each browser interprets W3C rendering standards via own _Browser (Rendering) Engine_
- Every HTML element has a default style set by _Browser Engine_. It could differ by browser and can be made consistant via [normalize](https://necolas.github.io/normalize.css/).
- Every HTML element has predefined initial default value for each CSS property. 
- Vendor prefixes are used to 'flag' at-that-time experimental and non-standartized features.
- To target specific browser with CSS, use [Browser Hacks](http://browserhacks.com/).
:::

## Browser engine

Browser engine (_rendering engine_) is a part of a browser responsible for layout interpretation.\
Notable engines:
- **WebKit** (used by Safari)
- **Blink** (used by Chrome, Opera and latest Edge, forked from WebKit)
- **Gecko** (used by Firefox)
- **EdgeHTML** (used by the first versions of Edge)
- **Trident** (discontinued, used by Internet Explorer)

Browser engines strive to interpret HTML and CSS standards set by [W3C](https://www.w3.org/).\
However, their interpretations may be different and may cause bugs and inconsistencies. 

## Default browser engine styles

_**Every**_ HTML element has it's styling defined in [browser engine](#browser-engine).\
i.e. it provides bullet points and margins to `<ul><li>` elements and numbering to `<ol><li>`.

Each [browser engine](#browser-engine) has it's own default style rules:
- **[WebKit](http://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css)**
- **[Blink](https://chromium.googlesource.com/chromium/blink/+/72fef91ac1ef679207f51def8133b336a6f6588f/Source/core/css/html.css)**
- **[Gecko](https://hg.mozilla.org/mozilla-central/file/tip/layout/style/res/html.css)**

Most of them are the same, i.e. `body` has `margin: 8px` and all tags in `head` (like `link`, `meta` etc) have `display: none` in every browser engine.

There are some differences, i.e. styling of `button` or focus state of inputs across differenet engines.\
To solve those inconsistencies there's a tool called **[normalize](https://necolas.github.io/normalize.css/)** which sets opionated defaults.

## Default element styles

_**Every**_ HTML element has a default style - default value for every property.\
Some CSS rules are inherited from parent elements, i.e. `font-size`, but most of them have defaults.

By setting `width: 100px` you're not setting it. You're overriding it from default, which is `auto`.\
This is an important concept when there is a need to 'un-set' back to original value, i.e.\
in `@media` queries or after JavaScript modifications.

When creating a simple `<p>text</p>` tag, you already declare:
``` scss
p {
  width: auto; // default for width
  height: auto; // default for height
  transform: none; // default for transform
  opacity: 1; // default for opacity
  background-color: transparent; // default for background-color
  ...
}
```
...and only then override with custom styling.

Defaults for every property can be found on [w3schools](https://www.w3schools.com/cssref/default.asp) or [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference).

## Vendor prefixes

Some CSS rules are not certified as a standard - it might be a working draft or just propopals, but latest browser creators want to already implement it.

That's where vendor prefixes come in.

CSS browser (vendor) prefixes are an agreeed semantic way to note, that some properties are experimental at the time of implementing. Notable vendor prefixes:
- `-webkit-` (Chrome, Safari, iOS, latest Opera);
- `-moz-` (Firefox);
- `-ms-` (Internet Explorer and Edge);
- `-o-` (old Opera);

Let's take `transform` as an example. It was a long debate how it's implementation should be standartized.
However, Chrome developers wanted to start already implementing it.
Given that standards were not there yet, Chrome devs 'flagged' it with `-webkit-` to note that it's experimental.

When `transform` standard was finalized (with CSS3 at 2012), Chrome started using it in parallel with `-webkit-transform`.
Prefixed version is not needed anymore, although it's kept for backwards compatibility. 

Some CSS rules are only applicable for certain [browser engines](#browser-engine).

i.e. `-webkit-overflow-scrolling` is applicable only to WebKit and Blink based browsers.\
It is not a standardized feature and probably will never be.

## Browser hacks

To solve some browser-specific quirks, we can use _**Browser Hacks**_.\
_Browser Hacks_ are browser specific CSS expressions which target only specific set of browsers.

For example, to target Internet Explore 10+ or Edge, we can use an odd media query:\
`@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {}`

CSS inside this query will only target IE10+ and Edge. Other browsers will hyst ingore it.

More Browser Hacks can be found on community-driven **[Browser Hacks](http://browserhacks.com/)** page.

#### Resources
- [W3C](https://www.w3.org/)
- [w3schools CSS Reference](https://www.w3schools.com/cssref/default.asp)
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [normalize](https://necolas.github.io/normalize.css/)
- [Browser Hacks](http://browserhacks.com/)
