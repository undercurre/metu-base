import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { createStyleImportPlugin } from 'vite-plugin-style-import'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { createHtmlPlugin } from 'vite-plugin-html'
import path from 'path'
import pkg from '../package.json'
import viteCompression from 'vite-plugin-compression'

export default [
  vue({
    reactivityTransform: true,
  }),
  VueSetupExtend(),
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
  createSvgIconsPlugin({
    // 指定需要缓存的图标文件夹
    iconDirs: [path.resolve(process.cwd(), 'src/assets/image')],
    // 指定symbolId格式
    symbolId: 'icon-[dir]-[name]',

    /**
     * 自定义插入位置
     * @default: body-last
     */
    inject: 'body-last',

    /**
     * custom dom id
     * @default: __svg__icons__dom__
     */
    customDomId: '__svg__icons__dom__',
  }),
  createHtmlPlugin({
    minify: true,
    // /**
    //  * 在这里写entry后，你将不需要在`index.html`内添加 script 标签，原有标签需要删除
    //  * @default src/main.ts
    //  */
    // entry: 'src/main.ts',
    // /**
    //  * 如果你想将 `index.html`存放在指定文件夹，可以修改它，否则不需要配置
    //  * @default index.html
    //  */
    // template: 'public/index.html',

    /**
     * 需要注入 index.html ejs 模版的数据
     */
    inject: {
      data: {
        title: pkg.name,
        injectScript: `<script src="./inject.js"></script>`,
      },
      tags: [
        {
          injectTo: 'body-prepend',
          tag: 'div',
          attrs: {
            id: 'tag',
          },
        },
      ],
    },
  }),
  viteCompression(),
]
