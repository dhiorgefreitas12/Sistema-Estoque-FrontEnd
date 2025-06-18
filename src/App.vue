<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/products">📦 Produtos</RouterLink>
      <RouterLink to="/movements">📊 Movimentações</RouterLink>
      <RouterLink to="/profit">💰 Lucro</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  width: 100%;
  background: #42b983;
  padding: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

nav a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s;
}

nav a:hover {
  opacity: 0.8;
}

nav a.router-link-exact-active {
  border-bottom: 2px solid #fff;
}

main {
  max-width: 960px;
  margin: 2rem auto;
  padding: 0 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

body {
  margin: 0;
  background: #f9f9f9;
}
</style>
