module.exports = {
    // 1.一行代码的最大字符数，默认是80(printWidth: <int>)
    printWidth: 80,
    // 2.tab宽度为2空格(tabWidth: <int>)
    tabWidth: 2,
    // 3.是否使用tab来缩进，我们使用空格(useTabs: <bool>)
    useTabs: false,
    // 4.结尾是否添加分号，false的情况下只会在一些导致ASI错误的其工况下在开头加分号，我选择无分号结尾的风格(semi: <bool>)
    semi: false,
    // 5.使用单引号(singleQuote: <bool>)
    singleQuote: true,
    // 6.object对象中key值是否加引号（quoteProps: "<as-needed|consistent|preserve>"）as-needed只有在需求要的情况下加引号，consistent是有一个需要引号就统一加，preserve是保留用户输入的引号
    quoteProps: 'as-needed',
    // 7.在jsx文件中的引号需要单独设置（jsxSingleQuote: <bool>）
    jsxSingleQuote: false,
    // 8.尾部逗号设置，es5是尾部逗号兼容es5，none就是没有尾部逗号，all是指所有可能的情况，需要node8和es2017以上的环境。（trailingComma: "<es5|none|all>"）
    trailingComma: 'es5',
    // 9.object对象里面的key和value值和括号间的空格(bracketSpacing: <bool>)
    bracketSpacing: true,
    // 10.jsx标签多行属性写法时，尖括号是否另起一行(jsxBracketSameLine: <bool>)
    bracketSameLine: false,
    // 11.将多行 HTML（HTML、JSX、Vue、Angular）元素放在最后一行的末尾，而不是单独放在下一行（不适用于自闭合元素）。
    jsxBracketSameLine: false,
    // 12.箭头函数单个参数的情况是否省略括号，默认always是总是带括号（arrowParens: "<always|avoid>"）
    arrowParens: 'always',
    // 13.range是format执行的范围，可以选执行一个文件的一部分，默认的设置是整个文件（rangeStart: <int>  rangeEnd: <int>）
    rangeStart: 0,
    rangeEnd: Infinity,
    // 13.Prettier 可以将自身限制为仅格式化文件顶部包含特殊注释（称为杂注）的文件。
    requirePragma: false,
    // 13.添加上述标记
    insertPragma: false,
    // 13.换行
    proseWrap: "preserve",
    // 13.指定 HTML、Vue、角度和车把的全局空白敏感度。有关详细信息，请参阅区分空格的格式。
    htmlWhitespaceSensitivity: 'css',
    // 14.vue script和style标签中是否缩进,开启可能会破坏编辑器的代码折叠
    vueIndentScriptAndStyle: false,
    // 15.endOfLine: "<lf|crlf|cr|auto>" 行尾换行符,默认是lf,
    endOfLine: 'lf',
    // 16.embeddedLanguageFormatting: "off",默认是auto,控制被引号包裹的代码是否进行格式化
    embeddedLanguageFormatting: 'off',
    // 17.在 HTML、Vue 和 JSX 中每行强制使用单个属性。
    singleAttributePerLine: true,
    // 还有parser和filepath两个选项可以配置解析器
  }