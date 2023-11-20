# Converters

There a few converter functions in the library that can parse colors from different formats.

The supported color formats are:

- Arrays in the form of `[mode,number,number,number,number?]` .
The `mode` is the color space for example 'hsl' which we pass our channel values to. The fourth optional number value is the `alpha` or opacity channel which expects a value between [0,1], any value beyond this domain is normalized back to that range.

- Any value of the type `Number` between 0 and 16,777,215. For example a binary number e.g `0x3af1d3`

- Plain objects with channels as keys ,a required `mode` property and an optional alpha property. For example: `{ mode:'rgb', r:20, g:40, b:100, alpha:0.5 }` .

- CSS named colors for example 'blue' or 'antiquewhite' .

- And of course hexadecimal strings.

### API

