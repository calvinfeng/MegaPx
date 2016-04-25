
# Layout

### `max-width`
Use `max-width` instead of fixed width for margin-auto trick

### `box-sizing`
 When you set box-sizing: border-box; on an element, the padding and border
 of that element no longer increase its width.
 ``` css
 * {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  }
  ```

## Position
### Static
Static is said to be NOT positioned.

### Relative
It means relative to its normal position

### Fixed
A fixed element is positioned relative to its viewport. It stays fix as you scroll.

### Absolute
`absolute` behaves like `fixed` except relative to the nearest positioned ancestor instead of relative to the viewport

## Fixed Header
If you use a fixed header or footer, make sure there is room for it! I put a margin-bottom on the body.
