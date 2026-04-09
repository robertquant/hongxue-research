<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-brand">红学研究</div>
      <div class="nav-links">
        <router-link to="/">首页</router-link>
        <router-link to="/search">全文检索</router-link>
        <router-link to="/zhpi">脂批数据库</router-link>
        <router-link to="/characters">人物图谱</router-link>
        <router-link to="/continuation">续写展示</router-link>
      </div>
    </nav>
    <main class="main-content">
      <router-view />
    </main>
    <footer class="footer">
      <p>红学研究 · 脂批数据库 · 基于《红楼梦》前八十回文本</p>
    </footer>
  </div>
</template>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: "Noto Serif SC", serif; background: #faf8f5; color: #333; }
.navbar { background: #8b4513; color: #fff; padding: 1rem 2rem; display: flex; align-items: center; gap: 2rem; }
.nav-brand { font-size: 1.5rem; font-weight: bold; }
.nav-links { display: flex; gap: 1.5rem; }
.nav-links a { color: #fff; text-decoration: none; opacity: 0.9; }
.nav-links a:hover, .nav-links a.router-link-active { opacity: 1; text-decoration: underline; }
.main-content { min-height: calc(100vh - 140px); padding: 2rem; max-width: 1200px; margin: 0 auto; }
.footer { background: #f0e6d8; text-align: center; padding: 1rem; color: #888; font-size: 0.9rem; }
</style>
