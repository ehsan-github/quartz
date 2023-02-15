module.exports = {
  stories: [
    '../src/**/*/stories.@(ts|tsx)',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/stories/index.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    'storybook-dark-mode',
    '@chakra-ui/storybook-addon',
  ],
  framework: '@storybook/react',
  features: {
    emotionAlias: false,
  },
  core: {
    builder: 'webpack5',
  },
};
