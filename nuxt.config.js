module.exports = {
  css: ['~/assets/app.styl'],
  plugins: [
    '~/plugins/vuetify.js'
  ],
  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|styl|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  }
};
