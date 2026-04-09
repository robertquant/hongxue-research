<template>
  <div class="zhpi-page">
    <h1>脂砚斋批语数据库</h1>
    <p class="subtitle">基于甲戌本、庚辰本等脂本系统整理</p>

    <div class="search-bar">
      <input
        v-model="store.searchQuery"
        type="text"
        placeholder="搜索正文、批语或标签..."
        class="search-input"
      />
      <select v-model="store.selectedChapter" class="chapter-select">
        <option :value="null">全部回目</option>
        <option v-for="n in 80" :key="n" :value="n">第{{ n }}回</option>
      </select>
    </div>

    <div class="result-count">共找到 {{ store.filteredZhpi.length }} 条批语</div>

    <div class="zhpi-list">
      <div v-for="item in store.filteredZhpi" :key="item.id" class="zhpi-card">
        <div class="card-header">
          <span class="chapter-tag">第{{ item.chapter }}回</span>
          <span class="section-title">{{ item.section }}</span>
        </div>
        <div class="card-body">
          <div class="original-text">
            <label>原文：</label>
            <p>{{ item.original }}</p>
          </div>
          <div class="zhpi-text">
            <label>脂批：</label>
            <p class="zhpi-content">{{ item.zhpi }}</p>
          </div>
          <div class="meta">
            <span class="source">{{ item.source }}</span>
            <div class="tags">
              <span v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useZhpiStore } from '../stores/zhpi'
const store = useZhpiStore()
</script>

<style scoped>
.zhpi-page h1 { font-size: 2rem; color: #8b4513; margin-bottom: 0.5rem; }
.subtitle { color: #888; margin-bottom: 2rem; }
.search-bar { display: flex; gap: 1rem; margin-bottom: 1.5rem; }
.search-input { flex: 1; padding: 0.75rem; font-size: 1rem; border: 1px solid #ddd; border-radius: 4px; font-family: inherit; }
.chapter-select { padding: 0.75rem; font-size: 1rem; border: 1px solid #ddd; border-radius: 4px; font-family: inherit; }
.result-count { color: #888; margin-bottom: 1rem; }
.zhpi-list { display: flex; flex-direction: column; gap: 1.5rem; }
.zhpi-card { background: #fff; border: 1px solid #e8dcc8; border-radius: 8px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
.card-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
.chapter-tag { background: #8b4513; color: #fff; padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.9rem; }
.section-title { font-size: 1.1rem; color: #555; }
.original-text { margin-bottom: 1rem; }
.original-text label { color: #888; font-size: 0.85rem; }
.original-text p { color: #333; line-height: 1.8; margin-top: 0.25rem; }
.zhpi-text { background: #fdf6e8; border-left: 3px solid #d4a017; padding: 1rem; margin-bottom: 1rem; border-radius: 0 4px 4px 0; }
.zhpi-text label { color: #b8860b; font-size: 0.85rem; }
.zhpi-content { color: #5c4008; line-height: 1.8; margin-top: 0.25rem; font-style: italic; }
.meta { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; }
.source { color: #aaa; font-size: 0.8rem; }
.tags { display: flex; gap: 0.5rem; flex-wrap: wrap; }
.tag { background: #f0e6d8; color: #8b4513; padding: 0.2rem 0.6rem; border-radius: 12px; font-size: 0.8rem; }
</style>
