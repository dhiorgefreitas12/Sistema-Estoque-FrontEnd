<template>
  <div>
    <ul>
      <li v-for="p in products" :key="p.id">
        {{ p.code }} - {{ p.description }} ({{ p.productType }}) | Estoque: {{ p.stockQuantity }}
        <button @click="deleteProduct(p.id)">Deletar</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import api from '../../services/api'

const props = defineProps<{ products: any[] }>()
const emit = defineEmits(['deleted'])

const deleteProduct = async (id: number) => {
  await api.delete(`/products/${id}`)
  emit('deleted')
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  background: #fff;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li button {
  background: #e74c3c;
  padding: 0.5rem 1rem;
  border: none;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
}

li button:hover {
  background: #c0392b;
}
</style>
