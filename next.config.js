const withTypescript = require('@zeit/next-typescript');
const withCss = require('@zeit/next-css');

module.exports = withCss(
  withTypescript({
    webpack(config) {
      const customConfig = { ...config };

      customConfig.resolve.alias = {
        ...config.resolve.alias,
        components: `${__dirname}/components`,
        containers: `${__dirname}/containers`,
        lib: `${__dirname}/lib`,
        pages: `${__dirname}/pages`,
        static: `${__dirname}/static`,
        tests: `${__dirname}/tests`,
        theme: `${__dirname}/theme`,
      };

      return customConfig;
    },
  }),
);
