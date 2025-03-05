# Pia Flux

Landing page: <https://piaflux.notion.site>
Site: <https://pf.md.bio>

This is a multi-platform project built with Quasar.

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

---

## Extra

This project is inspired by Danny Connell's of Make Apps Academy, project: Moneyballs. The objective is to start off from the course then expand it to a usable open source app. It is hosted on Netlify.

## Notes as I go along

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

### Favicons

Use <https://realfavicongenerator.net> to generate icons. There's also a CLI command to check whether everything is OK.

```sh
npx realfavicon check <port | URL>
```

[Report](https://realfavicongenerator.net/favicon-checker/reports/d4266c98-05af-47ec-826b-59caa6b1f531)

---

## Credits

- Danny Connell's, of Make Apps Academy, project: Moneyballs
- Brand Assets: Icons on Notion. Read more at:
  - <https://piaflux.notion.site/pia-flux-cube>
  - <https://github.com/NdagiStanley/loading-gif-creator#credits>
