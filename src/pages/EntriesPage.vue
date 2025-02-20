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
            :class="[{ 'text-positive': entry.amount > 0 }, { 'text-negative': entry.amount < 0 }]"
          >
            {{ entry.name }}
          </q-item-section>

          <q-item-section
            :class="[{ 'text-positive': entry.amount > 0 }, { 'text-negative': entry.amount < 0 }]"
            side
          >
            {{ useCurrencify(entry.amount) }}
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script setup>
// imports

import { ref } from 'vue'
import { useCurrencify } from 'src/use/useCurrencify'

// entries
const entries = ref([
  { id: 'id1', name: 'Salary', amount: 9999.0 },
  { id: 'id2', name: 'Salary', amount: -9999.0 },
  { id: 'id3', name: 'Salary', amount: 9999.0 },
  { id: 'id4', name: 'Salary', amount: -9999.0 },
  { id: 'id5', name: 'Salary', amount: 9999.0 }
])
</script>
