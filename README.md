# Quasar App (pia-flux)

A Quasar Project

## Install the dependencies

```bash
pnpm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
pnpm run lint
```

### Format the files

```bash
npm run format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

## Notes from course

### Structure

- public - served as is
- src - main work done here
  - assets - is preprocessed by Vite - minified, inlining
  - boot - before the app starts
  - stores - pinia store folder
  - App.Vue - config in this as soon as the app starts

### Props

```vue
<q-icon name="hexagon" />
```

`name` prop

---

```vue
<q-drawer
  v-model="leftDrawerOpen"
  class="bg-primary"
  show-if-above
  bordered
  :width="250"
  :breakpoint="767"
>
</q-drawer>
```

`width` prop
`breakpoint` prop

### Attributes

```html
<div
  v-for="item in items"
  :key="item.id"
>
  <!-- content -->
</div>
```

`key` attribute <https://vuejs.org/guide/essentials/list#maintaining-state-with-key>

### Typography

```vue
class="text-right"
```

### JavaScript

```js
return entries.value.reduce((accumulator, { amount }) => {
  console.log('accumulator', accumulator)
  console.log('entry.amount', amount)
}, 0)
```

VS

```js
return entries.value.reduce((accumulator, { amount }) => accumulator + amount, 0)
```

Firstly, `entries.value` is an object hence the `{ amount }` which deconstructs it.
`() => {}` is reduced to `() => ...`

---
