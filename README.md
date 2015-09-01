# .lineclamp

> text-overflow: ellipsis with multiple lines.

```css
.lineclamp {

  /* config */
  line-height: 1.25;
  height: 2.5em;
  background-color: #fff;
  /* config end */

  position: relative;
  padding-right: 1em;
  overflow: hidden;
}

.lineclamp:before {
  content: "...";
  position: absolute;
  right: 0;
  bottom: 0;
  display: inline-block;
  width: 1em;
}

.lineclamp:after {
  content: "";
  position: relative;
  right: -1em;
  float: right;
  width: 1em;
  height: 100%;
  background-color: inherit;
}
```

## Test

See the [result](http://byodkm.github.io/lineclamp/test/).

## Supported Browsers

- IE 9+
- Others
