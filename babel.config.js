module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@actions': './src/actions',
          '@components': './src/components',
          '@interfaces': './src/interfaces',
          '@redux': './src/redux',
          '@services': './src/services',
          '@utilities': './src/utilities',
        },
      },
    ],
  ],
};
