const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    loaderOptions: {
      scss: {
        additionalData: '',
        // additionalData: `@import "@/assets/your-variables.scss";`,
      },
    },
  },
})
