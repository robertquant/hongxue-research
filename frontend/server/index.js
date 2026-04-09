import express from 'express'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = 3000

app.use(express.json())

// 脂批数据 API
app.get('/api/zhpi', (req, res) => {
  const data = JSON.parse(readFileSync(join(__dirname, '../src/data/zhpi.json'), 'utf-8'))
  const { q, chapter } = req.query
  let result = data
  if (q) result = result.filter(i => i.original.includes(q) || i.zhpi.includes(q))
  if (chapter) result = result.filter(i => i.chapter === Number(chapter))
  res.json({ success: true, data: result })
})

// 人物数据 API
app.get('/api/characters', (req, res) => {
  const data = JSON.parse(readFileSync(join(__dirname, '../src/data/characters.json'), 'utf-8'))
  res.json({ success: true, data })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
