const path = require('path');
const globule = require('globule');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const MODE = process.env.NODE_ENV === 'development' ? 'development' : 'production';

const dir = {
  src: 'src',
  dist: 'assets',
};

/**
 * 対象のpugファイルから、 new HtmlWebpackPluginを生成
 */
const HtmlWebpackPlugins = [];
const pages = globule.find(`./${dir.src}/pug/**/*.pug`, {
  ignore: [`./${dir.src}/pug/**/_*.pug`],
});
pages.forEach((page) => {
  const fileName = page.replace(`./${dir.src}/pug/`, '').replace('.pug', '.html');
  HtmlWebpackPlugins.push(
    new HtmlWebpackPlugin({
      template: page,
      publicPath: path.resolve(__dirname, ''),
      filename: `../static/${fileName}`,
      inject: false, //scriptタグの自動挿入/
      minify: false,
    }),
  );
});

/**
 * BrowserSyncPluginの設定（`pug` or `php`で設定分岐）
 */
const browserSyncConfig = {
  host: 'localhost',
  port: 3000,
  open: 'external',
};

if (process.env.NODE_KEY === 'static') {
  // pug(html)
  browserSyncConfig.server = { baseDir: ['./'] };
  browserSyncConfig.startPath = '/static/';
} else if (process.env.NODE_KEY === 'server') {
  // php
  browserSyncConfig.proxy = 'http://sacck.wp/';
  browserSyncConfig.files = ['**/*.php'];
}

const config = {
  mode: MODE,
  entry: {
    app: `./${dir.src}/js/index.js`,
  },
  output: {
    path: path.resolve(__dirname, `./${dir.dist}`),
    filename: './js/[name].js',
  },
  devtool: MODE === 'development' ? 'source-map' : false,
  module: {
    rules: [
      // js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // scss
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'), // dart-sassを優先
              sassOptions: {
                fiber: require('fibers'),
              },
            },
          },
        ],
      },
      // pug
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              sources: false, // 属性のインポートをfalseにする
              minimize: false,
            },
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[name].css',
    }),
    new StylelintPlugin({
      configFile: path.resolve(__dirname, '.stylelintrc.js'),
      fix: true,
    }),
    new ESLintPlugin({
      fix: true,
    }),
    ...HtmlWebpackPlugins,
    new BrowserSyncPlugin(browserSyncConfig),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${dir.src}/img`,
          to: 'img',
          noErrorOnMissing: true,
        },
      ],
    }),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      pngquant: {
        quality: '70-80',
      },
      gifsicle: {
        interlaced: false,
        optimizationLevel: 1,
        colors: 256,
      },
      svgo: {},
      plugins: [
        ImageminMozjpeg({
          quality: 85,
          progressive: true,
        }),
      ],
    }),
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)$/i,
          options: {
            quality: '70-80',
          },
        },
      ],
      detailedLogs: true,
    }),
  ],
};

module.exports = config;
