const { defineConfig } = require('@vue/cli-service')
module.exports = {
  css:{
    loaderOptions:{
      sass:{
        additionalData:`@import "@/styles/Common.scss";`,
      }
    }
  }
}
