module.exports = {
  // baseUrl: '/', // default

  // outputDir: 'dist', // default

  assetsDir: 'assets',

  // indexPath: 'index.html', // default

  filenameHashing: false,

  pages: {
    index: {
      entry: 'src/main',
      template: 'public/index.html',
      filename: 'index.html',
      title: '文档集合',
    },
  },

  lintOnSave: process.env.NODE_ENV !== 'production',

  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },

  productionSourceMap: false,

  css: {
    sourceMap: process.env.NODE_ENV !== 'production',

    loaderOptions: {
      sass: {
        data: '@import "@/utils/sass/index.scss";',
      },
    },
  },
};
