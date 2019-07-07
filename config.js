/**
 * Author: 张大漾
 * - 匹配的文件. 返回 buffer, 需要考虑 [空格, 多行, 注释] 等情况
 */

const checkList = require('./config.checklist')

const config = {
    checkList,
}

module.exports = config
