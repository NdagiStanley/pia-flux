# Notes as I go along

## Project Structure

- public - served as is
- src - main work done here
  - assets - is preprocessed by Vite - minified, inlining
  - boot - before the app starts
  - stores - pinia store folder
  - App.Vue - config in this as soon as the app starts

## Vue.js/ Quasar

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

## JavaScript

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

## Favicons

Use <https://realfavicongenerator.net> to generate icons. There's also a CLI command to check whether everything is OK.

```sh
npx realfavicon check <port | URL>
```

[Report](https://realfavicongenerator.net/favicon-checker/reports/d4266c98-05af-47ec-826b-59caa6b1f531)
