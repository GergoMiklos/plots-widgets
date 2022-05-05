module.exports = {
  "stories": [
    "../storybook/**/*.stories.mdx",
    "../storybook/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    //"@storybook/preset-scss",
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    // {
    //   name: '@storybook/addon-postcss',
    //   options: {
    //     cssLoaderOptions: {
    //       // When you have splitted your css over multiple files
    //       // and use @import('./other-styles.css')
    //       importLoaders: 1,
    //     },
    //     postcssLoaderOptions: {
    //       // When using postCSS 8
    //       implementation: require('postcss'),
    //       postcssLoaderOptions: {
    //         plugins: {
    //           tailwindcss,
    //           autoprefixer: {
    //
    //           }
    //         }
    //       }
    //     },
    //   },
    // },
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}