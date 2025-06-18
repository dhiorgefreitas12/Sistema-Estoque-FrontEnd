<template>
    <div>
      <input v-model.number="productId" placeholder="ID do Produto" type="number" />
      <button @click="fetchProfit">Buscar Lucro</button>
  
      <div v-if="profit">
        <p>Produto ID: {{ profit.productId }}</p>
        <p>Code: {{ profit.code }}</p>
        <p>Quantidade Vendida: {{ profit.totalOutputQuantity }}</p>
        <p>Valor de Venda: {{ profit.totalSaleValue }}</p>
        <p>Custo Total: {{ profit.totalCost }}</p>
        <p>Lucro: {{ profit.profit }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import api from '../../services/api'
  import ProfitResponse from '../../types/ProfitResponse'
  
  
  
  const productId = ref<number | null>(null)
  const profit = ref<ProfitResponse | null>(null)
  
  const fetchProfit = async () => {
    const res = await api.get(`/products/profit/${productId.value}`)
    profit.value = res.data
  }
  </script>
  
  <style scoped>
div {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
}

input {
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

p {
  margin: 0.3rem 0;
}
</style>
