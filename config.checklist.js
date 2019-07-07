/**
 * Author: 张大漾
 * - 匹配的文件. 返回 buffer, 需要考虑 [空格, 多行, 注释] 等情况
 */

const path = require('path')

const devDirectories = [path.resolve(__dirname, './lib'), path.resolve(__dirname, './pages'),]
const vueScopedDirs = [path.resolve(__dirname, './pages'),]

const rules = [{
  type: 'title',
  describe: 'Check List Rules:',
}, {
  type: 'require',
  describe: '检查文件完整性 关键性文件',
  paths: [
    path.resolve(__dirname, './lib/env.js'),
    path.resolve(__dirname, './lib/initApp.js'),
    path.resolve(__dirname, './lib/request.js'),
    path.resolve(__dirname, './public/index.html'),
  ],
}, {
  type: 'require',
  describe: '检查文件完整性 各微页面',
  paths: [
    path.resolve(__dirname, './pages/index/index.js'),
    path.resolve(__dirname, './pages/index/App.vue'),
  ],
}, {
  type: 'regex',
  regex: /^\s*const|^let/gm,
  describe: '检查dist目录 是否含有未转义的es6语法',
  paths: [],
}, {
  type: 'regex',
  regex: /^\s*'lodash'/gm,
  describe: '检查是否全量引入lodash',
  paths: devDirectories,
}, {
  type: 'regex',
  describe: '检查是否存在 冲突代码',
  regex: /^<<<<<|^>>>>>/gm,
  paths: devDirectories,
}, {
  type: 'regex',
  describe: '检查是否存在 debug',
  regex: /^\s*debugger/gm,
  paths: devDirectories,
}, {
  type: 'regex',
  describe: '检查是否存在 alert',
  regex: /alert\(/g,
  paths: devDirectories,
}, {
  type: 'regex',
  describe: '检查是否存在 console.error',
  regex: /console.error\(/g,
  paths: devDirectories,
}, {
  type: 'regex',
  describe: '检查特殊兼容性语法 includes',
  regex: /\.includes\(/g,
  paths: devDirectories,
}, {
  type: 'regex',
  describe: '检查特殊兼容性语法 Data.now',
  regex: /Data.now\(/g,
  paths: devDirectories,
}, {
  type: 'vueScoped',
  describe: '检查是否 正确添加scoped属性',
  paths: vueScopedDirs,
}, {
  type: 'limit',
  describe: '检查文件大小(kb) dist',
  paths: [path.resolve(__dirname, './dist')],
  min: 100,
  max: 2000,
}, {
  type: 'limit',
  describe: '检查文件大小(kb) pages',
  paths: [path.resolve(__dirname, './pages')],
  min: 100,
  max: 2000,
}]

const questions = [
  '是否执行 初始化所有npm包 (即将支持)?',
  '是否执行 升级版本号 (即将支持)?',
  '是否执行 对主题eslint检测 (即将支持)?',
  '是否执行 对主题单元测试? (即将支持)',
  '是否执行 对核心包eslint检测? (即将支持)',
  '是否执行 对核心包单元测试? (即将支持)',
  '是否已同步git提交?',
  '是否通过冒烟测试(自测)?',
  '是否视觉对稿过?',
  '是否修复所有bug, 存在则记录相关点?',
  '是否通知测试人员, 并完成测试?',
  '是否测试新引入的第三方组件、类库、SDK（如高德地图）?',
  '是否做过 支付宝(小程序)/微信(小程序)/口碑 测试?',
  '是否进行过code review?',
  '是否和master比较过的区别?',
  '是否对发布后的master代码进行过检查?',
  '是否检查过noble打包日志，确认打包正常?',
  '是否有埋点监控, 在关键链路调整后?',
  '是否按规范存取 sessionStorage?',
  '是否正确拼接 URL。query 不要拼到 hash 后面，如 `/index#/cart?a=1`?',
  '是否新增或变更域名?',
  '是否在预发、线上环境中存在非HTTP引用?',
  '是否需要清理CDN?',
  '是否升级过npm package, 是否需要锁定package?',
  'URL不带hash的资源文件是否都已升级版本号?',
  '若提供的外联URL变更，对相关项目是否通知到位?',
]

const checkList = {
  // debug: true,
  rules,
  questionTitle: '请仔细阅读',
  questionInterval: 5000,
  questions,
}

module.exports = checkList
