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
          <q-item-section> {{ entry.name }} </q-item-section>

          <q-item-section side> {{ currencify(entry.amount) }} </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script setup>
// imports

import { ref } from 'vue'

// entries
const entries = ref([
  { id: 'id1', name: 'Salary', amount: 9999.0 },
  { id: 'id2', name: 'Salary', amount: -9999.0 },
  { id: 'id3', name: 'Salary', amount: 9999.0 },
  { id: 'id4', name: 'Salary', amount: -9999.0 },
  { id: 'id5', name: 'Salary', amount: 9999.0 }
])

// currencify
function currencify(amount) {
  let positiveNegativeSymbol = ''
  if (amount > 0) {
    positiveNegativeSymbol = '+'
  } else if (amount < 0) {
    positiveNegativeSymbol = '-'
  }

  const currencySymbol = '$'

  const amountPositive = Math.abs(amount)

  const amountFormatted = amountPositive.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
  return `${positiveNegativeSymbol} ${currencySymbol} ${amountFormatted}`
}
</script>
