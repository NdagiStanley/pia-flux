<template>
  <q-page>
    <div class="q-pa-md">
      <q-list
        bordered
        separator
      >
        <q-slide-item
          @right="onEntrySlideRight($event, entry)"
          v-for="entry in entries"
          :key="entry.id"
          right-color="negative"
        >
          <template v-slot:right>
            <q-icon name="delete" />
          </template>
          <q-item>
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
        </q-slide-item>
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
      <q-form
        class="row q-px-sm q-pb-sm q-col-gutter-sm bg-primary"
        @submit="addEntry"
      >
        <div class="col">
          <q-input
            ref="nameInputRef"
            v-model="addEntryForm.name"
            bg-color="white"
            outlined
            dense
            autofocus
            input-class="text-grey-7"
            placeholder="Name"
          />
        </div>
        <div class="col">
          <q-input
            v-model.number="addEntryForm.amount"
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
            type="submit"
            color="secondary"
            icon="add"
          />
        </div>
      </q-form>
    </q-footer>
  </q-page>
</template>

<script setup>
// imports

import { ref, computed, reactive } from 'vue'
import { uid, useQuasar } from 'quasar'
import { useCurrencify } from 'src/use/useCurrencify'
import { useAmountColorClass } from 'src/use/useAmountColorClass'

const $q = useQuasar()

// entries
const entries = ref([
  { id: 'id1', name: 'Salary', amount: 9999.0 },
  { id: 'id2', name: 'Expense', amount: -9999.0 },
  { id: 'id3', name: 'SalaryA', amount: 9999.0 },
  { id: 'id4', name: 'ExpenseA', amount: -9999.0 },
  { id: 'id5', name: 'ExpenseB', amount: -9999.0 },
  { id: 'id6', name: 'Other', amount: 0.0 }
])

// balance
const balance = computed(() => {
  return entries.value.reduce((accumulator, { amount }) => accumulator + amount, 0)
})

// add entry
const nameInputRef = ref(null)

const addEntryFormDefault = {
  name: '',
  amount: null
}

const addEntryForm = reactive({
  ...addEntryFormDefault
})

const addEntryFormReset = () => {
  Object.assign(addEntryForm, addEntryFormDefault)
  nameInputRef.value.focus()
}

const addEntry = () => {
  const newEntry = Object.assign({}, addEntryForm, { id: uid() })
  entries.value.push(newEntry)
  addEntryFormReset()
}

// delete
const onEntrySlideRight = ({ reset }, entry) => {
  $q.dialog({
    title: 'Delete Entry',
    message: `
      Are you sure you want to delete this entry?
      <div class="q-mt-md text-weight-bold ${useAmountColorClass(entry.amount)}">
        ${entry.name} : ${useCurrencify(entry.amount)}
      </div>
      `,
    cancel: true,
    persistent: true,
    html: true,
    ok: {
      label: 'Delete',
      color: 'negative'
      // handler: () => {
      //   entries.value = entries.value.filter((entry) => entry.id !== confirm.value.id)
      // }
    }
  })
    .onOk(() => {
      deleteEntry(entry)
    })
    .onDismiss(() => {
      reset()
    })
}

const deleteEntry = (entry) => {
  const index = entries.value.findIndex((entry) => entry.id == entry.id)
  entries.value.splice(index, 1)
  $q.notify({
    message: `Deleted entry - ${entry.name}`,
    icon: 'delete',
    timeout: 1500,
    color: 'accent',
    position: 'top',
    html: true
  })
}
</script>
