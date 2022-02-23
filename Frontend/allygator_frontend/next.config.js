
module.exports = ({
  reactStrictMode: true,
  images: {
    disableStaticImages: true
  },
  webpack: (config, options) => {
      const { isServer } = options;
      config.module.rules.push({
          test: /\.(ogg|mp3|wav|mpe?g|png|jpe?g|gif|svg)$/i,
          exclude: config.exclude,
          use: [
              {
                  loader: require.resolve('file-loader'),
                  options: {
                      limit: config.inlineImageLimit,
                      publicPath: `_next/static/images/`,
                      outputPath: `${isServer ? '../' : ''}static/images/`,
                      name: '[name]-[hash].[ext]',
                      esModule: config.esModule || false,
                  },
              },
          ],
      });
      return config
  },
})