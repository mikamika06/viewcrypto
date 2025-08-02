/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    'postcss-preset-env': {
      /* use stage 2 features + css nesting rules */
      stage: 2,
      features: {
        'nesting-rules': true,
        'custom-selectors': { preserve: true },
        'custom-media-queries': true,
      },
    },
    ...(process.env.NODE_ENV === 'production'
      ? {
          autoprefixer: {},
          cssnano: { 
            preset: ['default', {
              discardComments: {
                removeAll: true,
              },
            }] 
          },
        }
      : {}),
  },
};
