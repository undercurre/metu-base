module.exports = {
  types: [
    { value: '✨feat', name: '✨  新增功能' },
    { value: '🐛fix', name: '🐛  修复bug' },
    { value: '📝docs', name: '📝  变更文档' },
    { value: '💄style', name: '💄  变更格式' },
    {
      value: '♻️refactor',
      name: '♻️  重构代码',
    },
    {
      value: '⚡️perf',
      name: '⚡️  性能优化',
    },
    { value: '✅test', name: '✅  单元测试' },
    {
      value: '🔧chore',
      name: '🔧  变更开发工具',
    },
    { value: '⏪revert', name: '⏪  回滚代码' },
  ],

  scopes: [
    { name: '数据层' },
    { name: '视图层' },
    { name: '控制层' },
    { name: '业务层' },
    { name: '项目管理' },
  ], // 提交影响的范围

  // 如果要覆盖特定提交类型的范围，请使用此选项
  scopeOverrides: {
      chore: [
        { name: 'package' },
        { name: 'lint' }
      ]
  },

  messages: {
    type: "选择一种你的提交类型:", // 提交类型
    scope: "确定提交的影响范围 (可选):", // 作用域
    customScope: "自定义影响范围", // 自定义作用域
    subject: "概要:\n", // 概要
    body: '说明，使用"|"换行(可选)：\n', // 说明
    breaking: "非兼容性说明 (可选):\n", // 重大变更
    footer: "关联关闭的issue，例如：#31, #34(可选):\n", // 脚注
    confirmCommit: "确定提交说明?(yes/no)", // 最终确认
  },

  // _config全局性配置
  skipQuestions: [], // 跳过的问题
  appendBranchNameToCommitMessage: true, // 如果使用 ，则可以自动将分支名称追加到提交消息中。
  // usePreparedCommit: false, // 是否使用已经准备好的提交 to re-use commit from ./.git/COMMIT_EDITMSG
  // type
  typePrefix: '[', 
  typeSuffix: ']', // type的前后缀 [feat] this is a new feature
  // scope
  allowCustomScopes: true, // 是否允许自定义提交影响范围
  skipEmptyScopes: false, // 是否允许空范围跳过question
  // subject
  subjectLimit: 100, // 短说明长度限制
  breaklineChar: '|', // 用|代替换行
  upperCaseSubject: false, // 大写短说明
  subjectSeparator: ':', // 短说明中的type分隔符，feat: this is a new feature
  // breaking
  askForBreakingChangeFirst : false, // 先询问是否是重大变更
  breakingPrefix: '!', // 设置重大改变的前缀
  allowBreakingChanges: ['feat', 'fix'], // 配置允许重大变更的type
  // footer
  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-', // 在footer中的前缀
  ticketNumberRegExp: '\\d{1,5}',
  footerPrefix: 'ISSUES CLOSED:', // 设置关联问题的前缀
}
