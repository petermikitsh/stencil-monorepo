import { Config } from '@stencil/core';
import alias from 'rollup-plugin-alias';
// import watch from 'rollup-watch';

export const config: Config = {
  namespace: 'project-b',
  globalScript: 'src/global.ts',
  enableCache: false,
  // rollupPlugins: [
  //   alias({
  //     entries: [
  //       {
  //         find: 'project-a',
  //         replacement: '../project-a'
  //       }, 
  //     ]
  //   })
  // ],
  // excludeSrc: [],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
};
