import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import zhpiData from '../data/zhpi.json'

export const useZhpiStore = defineStore('zhpi', () => {
  const allZhpi = ref(zhpiData)
  const searchQuery = ref('')
  const selectedChapter = ref<number | null>(null)

  const filteredZhpi = computed(() => {
    return allZhpi.value.filter(item => {
      const matchText = searchQuery.value === '' ||
        item.original.includes(searchQuery.value) ||
        item.zhpi.includes(searchQuery.value) ||
        item.tags.some((t: string) => t.includes(searchQuery.value))
      const matchChapter = selectedChapter.value === null ||
        item.chapter === selectedChapter.value
      return matchText && matchChapter
    })
  })

  return { allZhpi, searchQuery, selectedChapter, filteredZhpi }
})
