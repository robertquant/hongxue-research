<template>
  <div class="characters-page">
    <h1>人物关系图谱</h1>
    <p class="subtitle">点击人物查看关系网络</p>
    <div class="characters-grid">
      <div
        v-for="char in characters"
        :key="char.id"
        class="char-card"
        @click="selectChar(char)"
      >
        <div class="char-name">{{ char.id }}</div>
        <div class="char-role">{{ char.role }}</div>
        <div class="char-desc">{{ char.description }}</div>
      </div>
    </div>
    <div v-if="selected" class="relations-panel">
      <h3>{{ selected.id }} 的关系网</h3>
      <div class="relation-list">
        <div v-for="rel in selected.relations" :key="rel" class="relation-item">
          <span class="rel-name">{{ rel }}</span>
          <span class="rel-arrow">←→</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import charactersData from '../data/characters.json'

const characters = ref(charactersData)
const selected = ref<any>(null)

function selectChar(char: any) {
  selected.value = selected.value?.id === char.id ? null : char
}
</script>

<style scoped>
.characters-page h1 { font-size: 2rem; color: #8b4513; margin-bottom: 0.5rem; }
.subtitle { color: #888; margin-bottom: 2rem; }
.characters-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
.char-card { background: #fff; border: 2px solid #e8dcc8; border-radius: 8px; padding: 1.5rem; cursor: pointer; transition: all 0.2s; }
.char-card:hover { border-color: #8b4513; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
.char-name { font-size: 1.3rem; font-weight: bold; color: #8b4513; margin-bottom: 0.5rem; }
.char-role { background: #f0e6d8; color: #8b4513; display: inline-block; padding: 0.2rem 0.6rem; border-radius: 4px; font-size: 0.85rem; margin-bottom: 0.5rem; }
.char-desc { color: #666; font-size: 0.95rem; line-height: 1.5; }
.relations-panel { background: #fff; border: 1px solid #e8dcc8; border-radius: 8px; padding: 1.5rem; }
.relations-panel h3 { color: #8b4513; margin-bottom: 1rem; }
.relation-list { display: flex; flex-wrap: wrap; gap: 1rem; }
.relation-item { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: #faf8f5; border-radius: 20px; }
.rel-name { font-weight: bold; color: #333; }
.rel-arrow { color: #8b4513; }
</style>
