# Vite Plugin Interpolate HTML [![npm](https://img.shields.io/npm/v/@minicdn/vitejs-plugins-interpolate-html.svg?style=flat-square&logo=npm)](https://npmjs.com/package/@minicdn/vite-plugin-interpolate-html)

参考 [create-react-app](https://github.com/facebook/create-react-app/blob/main/packages/react-dev-utils/InterpolateHtmlPlugin.js)

## Install

```bash
pnpm install --save-dev @minicdn/vitejs-plugins-interpolate-html

# or

yarn add --save-dev @minicdn/vitejs-plugins-interpolate-html

# or

npm install --save-dev @minicdn/vitejs-plugins-interpolate-html
```

## Usage

```typescript
import interpolate from "@minicdn/vitejs-plugins-interpolate-html";

module.exports = {
  plugins: [
    interpolate({
      NODE_ENV: "development",
    }),
  ],
};

// or

module.exports = {
  plugins: [
    interpolate(
      {
        NODE_ENV: "development",
      },
      {
        prefix: "%",
        suffix: "%"
      }
    ),
  ],
};
```

## Example

```html
<!DOCTYPE html>
<html lang="en" data-node-env="%NODE_ENV%">
  <head>
    <meta charset="UTF-8" />
  </head>

  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## Options

### `prefix`

  - **Type:** `string`
  - **Default:** `"%"`

### `suffx`

  - **Type:** `string`
  - **Default:** `"%"`
