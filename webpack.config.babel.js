import webpack from 'webpack';
import path from 'path';
import localConfig from './webpack.local.config';
import glob from 'glob';

const entrySrcDir = './src';

// entryファイルの一覧を取得
const entry = {};
localConfig.entries.forEach((app) => {
  entry[app] = glob.sync(`${entrySrcDir}/${app}/index.*`);
});

export default {
  mode: process.env.NODE_ENV,
  entry: entry,
  output: {
    path: localConfig.output_dir,
    filename: "[name].js",
    publicPath: '/',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './web'),
    inline: true,
    hot: true,
    https: true,
    port: 9000,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      { test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      { test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({ options: {} })
  ],
  devtool: 'inline-source-map'
}
