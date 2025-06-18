<template>
  <div>
    <h2>Cadastrar Produto</h2>
    <form @submit.prevent="saveProduct">
      <label>
        Código
        <input v-model="form.code" required />
      </label>

      <label>
        Descrição
        <input v-model="form.description" required />
      </label>

      <label>
        Tipo (ELETRONICO, ELETRODOMESTICO...)
        <input v-model="form.productType" required />
      </label>

      <label>
        Preço Fornecedor
        <input v-model.number="form.supplierPrice" type="number" required />
      </label>

      <label>
        Estoque
        <input v-model.number="form.stockQuantity" type="number" required />
      </label>

      <button type="submit">Salvar</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import api from '../../services/api'

const emit = defineEmits(['saved'])

const form = reactive({
  code: '',
  description: '',
  productType: '',
  supplierPrice: 0,
  stockQuantity: 0
})

const saveProduct = async () => {
  await api.post('/products', form)
  Object.assign(form, {
    code: '',
    description: '',
    productType: '',
    supplierPrice: 0,
    stockQuantity: 0
  })
  emit('saved')
}
</script>

<style scoped>
div {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

h2 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  display: flex;
  flex-direction: column;
  font-weight: 600;
  color: #333;
}

input {
  margin-top: 0.5rem;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  max-width: 100%;
}

button {
  padding: 0.8rem;
  background: #42b983;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #36966f;
}
</style>
