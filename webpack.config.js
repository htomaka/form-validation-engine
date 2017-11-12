module.exports = {
  entry: './src/index.js',
  output: {
    filename: './build/bundle.js',
  },
  module: {
    rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['env']
                }
              }
            },
            {
              test: /\.html$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'raw-loader'
              }
            }
        ]
  }
};
