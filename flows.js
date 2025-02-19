let actions = require('./actions.js');

let search = [
    actions.click_by_resource_id("com.xingin.xhs:id/hjp", 0, 2),
    actions.click_by_resource_id("com.xingin.xhs:id/f98", 0, 2),
    actions.input_text("成都美食", 0, 2),
    actions.click_by_resource_id("com.xingin.xhs:id/lqi", 0, 5),
    actions.swipeup(300, 0, 2),
    actions.swipeup(300, 0, 2),
    actions.swipedown(300, 0, 2),
    actions.tap_left_center([], 0, 2),
    actions.is_page([["DetailFeedActivity","NoteDetailActivity"]], 0, 2),
    actions.click_by_content_desc("点赞", 0, 2),
    actions.click_by_content_desc("收藏", 0, 2),
    actions.go_back([], 0, 0.5),
    actions.go_back([], 0, 0.5),
    actions.go_back([], 0, 0.5),
    actions.go_back([], 0, 0.5)
]

function getFlow(flow_name){
    return search;
}

module.exports = {
    getFlow
}