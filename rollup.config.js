// import { createDefaultConfig } from '@open-wc/building-rollup';
//
// export default createDefaultConfig({ input: './index.html' });

// if you need to support IE11 use "modern-and-legacy-config" instead.
import { createCompatibilityConfig } from '@open-wc/building-rollup';
import cpy from 'rollup-plugin-cpy';

const configs = createCompatibilityConfig({
  input: './index.html',
});
export default configs.map(config => ({
  ...config,
  output: {
    ...config.output,
    sourcemap: false,
  },
  plugins: [
    ...config.plugins,
    cpy({
      files: [ './assets/' ],
      dest: 'dist',
      options: {
        parents: true,
      },
    }),
  ],
}));
