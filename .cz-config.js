/**
 * type: {Array of Object}：项目中使用的 type 和默认描述。
 *
 * scopes: {Array of Strings}：预设项目中使用的可选 scope 。如：在一个银行系统项目中使用 [“acccounts”, “payments”]；在一个旅行应用中使用 [“bookings”, “search”, “profile”]。
 *
 * scopeOverrides: {Object where key contains a Array of String}：当您想重写特定提交类型的作用域时，使用此方法。如：在类型为“fix”时指定范围 { fix: [ {name: 'merge'}, {name: 'style'}, {name: 'e2eTest'},{name: 'unitTest'} ] }。
 *
 * allowCustomScopes: {boolean, default false}：增加自定义 scope 选项，开启可以在设置 scope 时支持直接输入。
 *
 * allowBreakingChanges: {Array of Strings: default none}：配置想要 breaking change 弹出提示的scope列表，如：[‘feat’, ‘fix’]。
 *
 * appendBranchNameToCommitMessage：当配合 cz-customizable-ghooks 使用 cz-customizable 时, 可自动获取分支名称并添加到 commit message 中，此功能已经在 cz-customizable-ghooks实现，对应选项已经被添加到 cz-customizable-ghooks, v1.3.0. 中，默认值为 true。
 *
 * breakingPrefix: {string, default ‘BREAKING CHANGE:’}：设置自定义 breaking change 块。
 *
 * footerPrefix: {string, default ‘ISSUES CLOSED:’}：设置自定义 foot 块。
 */
'use strict'
module.exports = {
  types: [
    { value: '✨新增', name: '新增:    新增一个新的功能' },
    { value: '🐛修复', name: '修复:    修复一个Bug' },
    { value: '💄合并', name: '合并:    合并分支' },
    { value: '📝文档', name: '文档:    变更的只有文档' },
    { value: '♻️重构', name: '重构:    代码重构，注意和特性、修复区分开' },
    { value: '⚡️性能', name: '性能:    提升性能' },
    { value: '✅测试', name: '测试:    添加一个测试' },
    { value: '🔧工具', name: '工具:    开发工具变动(构建、脚手架工具等)' },
    { value: '⏪回滚', name: '回滚:    代码回退' }
  ],
  scopes: [],
  // 它需要匹配字段类型的值。如。:“修复”
  scopeOverrides: {
    fix: [{ name: 'merge' }, { name: 'style' }, { name: 'e2eTest' }, { name: 'unitTest' }]
  },
  // 覆盖消息，默认值如下所示
  messages: {
    type: '提交类型:',
    // scope: '此次提交的影响范围,如数据层、控制层、视图层等,多个可以用 * 代替: \n',
    // 如果allowcustomscope为true
    customScope: '此次提交的影响范围,如数据层、视图层等,多个可以用 * 代替:\n',
    subject: '标题:\n',
    body: '说明，使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联的禅道上任务，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?'
  },
  allowCustomScopes: false,
  allowBreakingChanges: ['特性', '修复'],
  // 限制主题长度
  subjectLimit: 100
}
