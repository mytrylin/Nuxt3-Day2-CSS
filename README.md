# NUXT3 - Day2 - 專案引入 CSS 樣式


安裝SASS

> npm install -D sass

### 撰寫預處理器

```html
<!-- pages/index.vue -->

<template>
  <h1>Hello world</h1>
</template>

<style lang="scss">
$primary:blue;
h1{
  color: $primary;
}
</style>
```

### 手動建立樣式表級路徑 (nuxi add 不支援 assers/，目錄需手動建立)

```css
/* assets/stylesheets/all.scss */

.title{
  color:red;
  font-style: italic;
}

```

### 設定 nuxt.config.ts 設定全域樣式

```ts
// nuxt.config.ts
export default defineNuxtConfig({
	//... 其他設定
  css: [
    '@/assets/stylesheets/all.scss', 
  ],
})

```

> @ 是專案資料夾 “根目錄” 路徑的縮寫 ( alias ) ，@ 會指向 nuxt3-project/

### 在 SFC 中使用樣式

```html
<!-- pages/index.vue -->
<template>
  <p class="title">全域共用樣式</p>
</template>

```

### vite 設定全域共用 SASS

```ts
export default defineNuxtConfig({
  compatibilityDate: "2024-08-16",
  devtools: { enabled: true },
  css: ["@/assets/stylesheets/all.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/stylesheets/variables" as *;
          `,
        },
      },
    },
  },
});
```
這一段設定的目的是讓變數在編譯的時候自動加載到每個 SFC 的 style 中
此後就不需要在每個 SFC 都寫 @import "@/assets/stylesheets/all.scss"

### 文件參考
[nuxt-link](https://nuxt.com/docs/api/components/nuxt-link)

[nuxt-config#css](https://nuxt.com.cn/docs/api/nuxt-config#css)

[nuxt-config#alias](https://nuxt.com/docs/api/nuxt-config#alias)

[vite shared-options](https://vite.dev/config/shared-options.html#css-preprocessoroptions-extension-additionaldata)

[nuxt-link]()



