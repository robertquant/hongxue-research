<template>
  <div class="home-page">
    <div class="hero">
      <h1>红学研究</h1>
      <p class="tagline">脂砚斋批语数据库 · 红楼梦全文检索 · 人物关系图谱</p>
      <p class="description">基于前八十回文本，系统整理脂砚斋批语线索，<br>探索后四十回失落结局。</p>
    </div>
    <div class="feature-cards">
      <router-link to="/zhpi" class="feature-card">
        <h3>脂批数据库</h3>
        <p>甲戌本、庚辰本等脂批系统整理，支持全文检索</p>
      </router-link>
      <router-link to="/search" class="feature-card">
        <h3>全文检索</h3>
        <p>按回目、人物、关键词检索红楼梦原文</p>
      </router-link>
      <router-link to="/characters" class="feature-card">
        <h3>人物图谱</h3>
        <p>金陵十二钗及相关人物关系可视化</p>
      </router-link>
      <router-link to="/continuation" class="feature-card">
        <h3>续写展示</h3>
        <p>后四十回探佚研究及脂批线索整理</p>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.hero { text-align: center; padding: 4rem 2rem; background: linear-gradient(135deg, #8b4513, #d4a017); color: #fff; border-radius: 12px; margin-bottom: 3rem; }
.hero h1 { font-size: 3rem; margin-bottom: 1rem; }
.tagline { font-size: 1.2rem; opacity: 0.9; margin-bottom: 1.5rem; }
.description { font-size: 1rem; opacity: 0.8; line-height: 1.8; }
.feature-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; }
.feature-card { background: #fff; border: 1px solid #e8dcc8; border-radius: 8px; padding: 2rem; text-decoration: none; color: inherit; transition: all 0.2s; }
.feature-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.1); border-color: #8b4513; }
.feature-card h3 { color: #8b4513; margin-bottom: 0.75rem; font-size: 1.3rem; }
.feature-card p { color: #666; line-height: 1.6; }
</style>
