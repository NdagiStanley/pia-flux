<template>
  <q-page>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card
        flat
        bordered
        class="my-card"
        id="secondary"
      >
        <q-card-section>
          <div class="text-h6">Secondary</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>
      <q-card
        flat
        bordered
        class="my-card"
        id="dark"
      >
        <q-card-section>
          <div class="text-h6">Dark</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>

      <q-card
        flat
        bordered
        class="my-card"
        id="positive"
      >
        <q-card-section>
          <div class="text-h6">Positive</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>

      <q-card
        flat
        bordered
        class="my-card"
        id="negative"
      >
        <q-card-section>
          <div class="text-h6">Negative</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>

      <q-card
        flat
        bordered
        class="my-card"
        id="info"
      >
        <q-card-section>
          <div class="text-h6">Info</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>

      <q-card
        flat
        bordered
        class="my-card"
        id="warning"
      >
        <q-card-section>
          <div class="text-h6">Warning</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 250px;
}

#secondary {
  background-color: $secondary;
}

#dark {
  background-color: $dark;
}

#positive {
  background-color: $positive;
}

#negative {
  background-color: $negative;
}

#info {
  background-color: $info;
}

#warning {
  background-color: $warning;
}
</style>
