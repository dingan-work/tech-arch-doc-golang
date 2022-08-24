import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/ganhua/ganhua/vue/blog/tech-arch-doc/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/ganhua/ganhua/vue/blog/tech-arch-doc/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
