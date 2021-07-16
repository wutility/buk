import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/index.js',
  output: [
    {
      name: 'buk',
      file: 'build/index.umd.js',
      format: 'umd'
    },
    {
      file: 'build/index.esm.js',
      format: 'esm',
      sourcemap: false
    },
    {
      file: 'build/index.js',
      format: 'cjs',
      sourcemap: false
    }
  ],
  plugins: [
    terser()
  ]
};
