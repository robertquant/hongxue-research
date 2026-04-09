<template>
  <div class="search-page">
    <h1>全文检索</h1>
    <div class="search-bar">
      <input
        v-model="query"
        type="text"
        placeholder="输入关键词搜索红楼梦原文..."
        class="search-input"
        @keyup.enter="search"
      />
      <button @click="search" class="search-btn">搜索</button>
    </div>
    <div v-if="results.length > 0" class="results">
      <p class="count">找到 {{ results.length }} 条结果</p>
      <div v-for="r in results" :key="r.id" class="result-item">
        <span class="chapter-badge">第{{ r.chapter }}回</span>
        <p>{{ r.paragraph }}</p>
      </div>
    </div>
    <div v-else-if="searched" class="no-results">未找到相关结果</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import novelData from '../data/novel.json'

const query = ref('')
const searched = ref(false)
const results = ref<any[]>([])

function search() {
  if (!query.value.trim()) return
  results.value = (novelData as any[]).filter(item =>
    item.paragraph.includes(query.value)
  )
  searched.value = true
}
</script>

<style scoped>
.search-page h1 { font-size: 2rem; color: #8b4513; margin-bottom: 1.5rem; }
.search-bar { display: flex; gap: 1rem; margin-bottom: 2rem; }
.search-input { flex: 1; padding: 0.75rem; font-size: 1rem; border: 1px solid #ddd; border-radius: 4px; font-family: inherit; }
.search-btn { padding: 0.75rem 2rem; background: #8b4513; color: #fff; border: none; border-radius: 4px; cursor: pointer; font-size: 1rem; font-family: inherit; }
.results { display: flex; flex-direction: column; gap: 1rem; }
.result-item { background: #fff; padding: 1rem 1.5rem; border-radius: 8px; border-left: 4px solid #8b4513; }
.chapter-badge { background: #f0e6d8; color: #8b4513; padding: 0.2rem 0.6rem; border-radius: 4px; font-size: 0.85rem; margin-right: 0.75rem; }
.result-item p { margin-top: 0.5rem; line-height: 1.8; }
.no-results { color: #888; text-align: center; padding: 2rem; }
</style>
