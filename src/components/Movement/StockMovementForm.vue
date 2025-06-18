<template>
  <div>
    <h2>Registrar Movimentação de Estoque</h2>
    <form @submit.prevent="processMovement">
      <label>
        ID Produto
        <input v-model.number="form.productId" type="number" required />
      </label>

      <label>
        Tipo de Movimento
        <select v-model="form.movementType" required>
          <option disabled value="">Selecione</option>
          <option value="ENTRY">ENTRADA</option>
          <option value="SAID">SAIDA</option>
        </select>
      </label>

      <label>
        Preço Venda
        <input v-model.number="form.salePrice" type="number" required />
      </label>

      <label>
        Quantidade
        <input v-model.number="form.quantityMoved" type="number" required />
      </label>

      <button type="submit">Registrar Movimento</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import api from '../../services/api'

const form = reactive({
  productId: 0,
  movementType: '',
  salePrice: 0,
  quantityMoved: 0
})

const processMovement = async () => {
  await api.post('/movements', form)
  Object.assign(form, {
    productId: 0,
    movementType: '',
    salePrice: 0,
    quantityMoved: 0
  })
  alert('Movimentação registrada!')
}
</script>

<style scoped>
div {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  max-width: 500px;
  margin: 0 auto;
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

input, select {
  margin-top: 0.5rem;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
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
