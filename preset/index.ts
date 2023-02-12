import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { createStyleImportPlugin } from 'vite-plugin-style-import'

export default [
  vue({
    reactivityTransform: true,
  }),
  AutoImport({
    // 要转换的文件后缀
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/,
      /\.vue\?vue/, // .vue
      /\.md$/, // .md
    ],

    // 注册到全局
    imports: [
      // presets
      'vue',
      'vue-router',
      // custom
      // {
      //   '@vueuse/core': [
      //     // named imports
      //     'useMouse', // import { useMouse } from '@vueuse/core',
      //     // alias
      //     ['useFetch', 'useMyFetch'], // import { useFetch as useMyFetch } from '@vueuse/core',
      //   ],
      //   axios: [
      //     // default imports
      //     ['default', 'axios'], // import { default as axios } from 'axios',
      //   ],
      // },
    ],
    // 对目录下的默认模块出口启用按文件名自动导入的功能
    defaultExportByFilename: false,

    // 自动导入目录下的模块导出
    // 默认情况下，它只扫描目录下一级模块
    dirs: [
      // './hooks',
      // './composables' // only root modules
      // './composables/**', // all nested modules
      // ...
    ],

    // 用于生成相应 .d.ts 文件的文件路径。
    // 在本地安装“typescript”时默认为“./auto-imports.d.ts”。
    // 将“false”设置为禁用。
    dts: './src/auto-imports.d.ts',

    // 在 Vue 模板中自动导入
    // see https://github.com/unjs/unimport/pull/15 and https://github.com/unjs/unimport/pull/72
    vueTemplate: false,

    // 自定义解析器，与“unplugin-vue-components”兼容
    // see https://github.com/antfu/unplugin-auto-import/pull/23/
    resolvers: [
      /* ... */
    ],

    // 生成相应的 .eslintrc-auto-import.json 文件.
    // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
    eslintrc: {
      enabled: false, // Default `false`
      filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
      globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
    },
  }),
  Components({
    // 要搜索组件的目录的路径。
    dirs: ['src/components'],

    // 组件的有效文件扩展名。
    extensions: ['vue'],
    // 搜索子目录
    deep: true,
    // 自定义组件的解析器。
    resolvers: [],

    // 生成 `components.d.ts` global declarations,
    // also accepts a path for custom filename
    // default: `true` if package typescript is installed
    dts: false,

    // 允许子目录作为组件的命名空间前缀
    directoryAsNamespace: false,

    // 折叠文件夹和组件的相同前缀（骆驼敏感）
    // 以防止命名空间组件名称内重复。
    // 当“目录作为命名空间：true”时工作
    collapseSamePrefixes: false,
    // 用于忽略命名空间前缀的子目录路径。
    // 当“目录作为命名空间：true”时工作
    globalNamespaces: [],

    // 自动导入指令
    // 默认值：Vue 3 为 'true'，Vue 2 为 'false'
    // 需要 Babel 来为 Vue 2 进行转换，默认情况下出于性能问题将其禁用。
    // 要安装 Babel，请运行：“npm install -D @babel/parser”
    directives: true,

    // 解析前转换路径
    importPathTransform: (v) => v,

    // 允许组件覆盖具有相同名称的其他组件
    allowOverrides: false,

    // 用于转换目标的筛选器
    include: [/\.vue$/, /\.vue\?vue/],
    exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],

    // 项目的 Vue 版本。如果未指定，它将自动检测。
    // Acceptable value: 2 | 2.7 | 3
    version: 3,
  }),
  createStyleImportPlugin({
    resolves: [
      /* ... */
    ],
  }),
]
