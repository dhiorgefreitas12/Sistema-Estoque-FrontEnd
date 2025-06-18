<template>
  <div>
    <h1>Produtos</h1>
    <ProductForm @saved="fetchProducts" />
    <ProductList :products="products" @deleted="fetchProducts" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import api from '../services/api'
import ProductForm from '../components/Product/ProductForm.vue'
import ProductList from '../components/Product/ProductList.vue'
import type { Product } from '../types/Product.ts'


const products = ref<Product[]>([])

const fetchProducts = async () => {
  const res = await api.get<Product[]>('/products')
  products.value = res.data
}

onMounted(fetchProducts)
</script>
