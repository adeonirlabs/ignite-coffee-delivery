const { resolve } = require('path')
const { loadConfigFromFile, mergeConfig } = require('vite')

import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  staticDirs: ['../public'],
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      strictMode: true,
    },
  },
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: true,
  },
  viteFinal: async (config) => {
    const { config: userConfig } = await loadConfigFromFile(
      resolve(__dirname, '../.vite.config.js')
    )

    return mergeConfig(config, {
      ...userConfig,
      plugins: [],
    })
  },
}
export default config
