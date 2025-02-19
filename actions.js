
let input_text = function(text, delay_before, delay_after){
    return {"module":"action", "action":"input_text", "param":[text], "delay_before":delay_before,"delay_after":delay_after, "desc":"输入"+text};
}
let click_by_content_desc = function(text, delay_before, delay_after){
    return {"module":"action", "action":"click_by_content_desc", "param":[text], "delay_before":delay_before,"delay_after":delay_after, "desc":"点击"+text};
}
let click_by_resource_id = function(id, delay_before, delay_after){
    return {"module":"action", "action":"click_by_resource_id", "param":[id], "delay_before":delay_before,"delay_after":delay_after, "desc":"点击"+id};
}
let swipeup = function(duration, delay_before, delay_after){
    return {"module":"action", "action":"swipeup", "param":[duration], "delay_before":delay_before,"delay_after":delay_after, "desc":"上滑"};
}
let swipedown = function(duration, delay_before, delay_after){
    return {"module":"action", "action":"swipedown", "param":[duration], "delay_before":delay_before,"delay_after":delay_after, "desc":"下滑"};
}
let tap_left_center = function(delay_before, delay_after){
    return {"module":"action", "action":"tap_left_center", "param":[], "delay_before":delay_before,"delay_after":delay_after, "desc":"点击屏幕左中"};
}
let is_detail_page = function(delay_before, delay_after){
    return {"module":"xhs_action", "action":"is_detail_page", "param":[], "delay_before":delay_before,"delay_after":delay_after, "desc":"判断是否详情页"};
}
let go_back = function(delay_before, delay_after){
    return {"module":"action", "action":"go_back", "param":[], "delay_before":delay_before,"delay_after":delay_after, "desc":"返回"};
}
let is_page = function(pages, delay_before, delay_after){
    return {"module":"action", "action":"is_page", "param":[pages], "delay_before":delay_before,"delay_after":delay_after, "desc":"判断是否"+page};
}

module.exports = {
    input_text,
    click_by_content_desc,
    click_by_resource_id,
    swipeup,
    swipedown,
    tap_left_center,
    is_detail_page,
    go_back,
    is_page
}