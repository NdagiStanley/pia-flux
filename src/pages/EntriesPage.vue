<template>
  <q-page>
    <div class="q-pa-md">
      <q-list
        bordered
        separator
      >
        <q-item
          v-for="entry in entries"
          :key="entry.id"
        >
          <q-item-section
            :class="useAmountColorClass(entry.amount)"
            class="text-weight-bold"
          >
            {{ entry.name }}
          </q-item-section>

          <q-item-section
            :class="useAmountColorClass(entry.amount)"
            class="text-weight-bold mono-font"
            side
          >
            {{ useCurrencify(entry.amount) }}
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <q-footer class="bg-transparent">
      <div class="row q-px-md q-py-sm q-mb-sm shadow-up-3">
        <div class="col text-grey-7 text-h6">Balance:</div>
        <div
          class="col text-h6 text-right mono-font"
          :class="useAmountColorClass(balance)"
        >
          {{ useCurrencify(balance) }}
        </div>
      </div>
      <div class="row q-px-sm q-pb-sm q-col-gutter-sm bg-primary">
        <div class="col">
          <q-input
            bg-color="white"
            outlined
            dense
            input-class="text-grey-7"
            placeholder="Name"
          />
        </div>
        <div class="col">
          <q-input
            bg-color="white"
            outlined
            dense
            input-class="text-right mono-font text-grey-7"
            type="number"
            step="0.01"
            placeholder="Amount"
          />
        </div>
        <div class="col col-auto">
          <q-btn
            round
            color="secondary"
            icon="add"
          />
        </div>
      </div>
    </q-footer>
  </q-page>
</template>

<script setup>
// imports

import { ref, computed } from 'vue'
import { useCurrencify } from 'src/use/useCurrencify'
import { useAmountColorClass } from 'src/use/useAmountColorClass'

// entries
const entries = ref([
  { id: 'id1', name: 'Salary', amount: 9999.0 },
  { id: 'id2', name: 'Salary', amount: -9999.0 },
  { id: 'id3', name: 'Salary', amount: 9999.0 },
  { id: 'id4', name: 'Salary', amount: -9999.0 },
  { id: 'id5', name: 'Salary', amount: 9999.0 },
  { id: 'id5', name: 'Salary', amount: 0.0 }
])

// balance
const balance = computed(() => {
  // return entries.value.reduce((acc, entry) => acc + entry.amount, 0)
  let balance = 0
  entries.value.forEach((entry) => (balance += entry.amount))
  return balance
})
</script>
