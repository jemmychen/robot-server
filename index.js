// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// 初始化Express应用和HTTP服务器
const app = express();
const server = http.createServer(app);

//----todo 服务器下发人物
let tasks = {
    "search":[
        {"module":"action", "action":"click_by_resource_id", "param":["com.xingin.xhs:id/hjp"], "delay":2, "desc":"点击搜索"},
        {"module":"action", "action":"click_by_resource_id", "param":["com.xingin.xhs:id/f98"], "delay":2, "desc":"点击搜索框"},
        {"module":"action", "action":"input_text", "param":["成都美食"], "delay":2, "desc":"输入搜索关键字"},
        {"module":"action", "action":"click_by_resource_id", "param":["com.xingin.xhs:id/lqi"], "delay":5, "desc":"点击搜索按钮"},
        {"module":"action", "action":"swipeup", "param":[300], "delay":2, "desc":"上滑"},
        {"module":"action", "action":"swipeup", "param":[300], "delay":2, "desc":"上滑"},
        {"module":"action", "action":"swipedown", "param":[300], "delay":2, "desc":"下滑"},
        {"module":"action", "action":"tap_left_center", "param":[], "delay":2, "desc":"随机点击搜索结果"},
        {"module":"xhs_action", "action":"is_detail_page", "param":[], "delay":2, "desc":"判断是否详情页"},
        {"module":"action", "action":"click_by_content_desc", "param":["点赞"], "delay":2, "desc":"点击喜欢"},
        {"module":"action", "action":"click_by_content_desc", "param":["收藏"], "delay":2, "desc":"点击收藏"},
        {"module":"action", "action":"go_back", "param":[], "delay":0.5, "desc":"返回"},
        {"module":"action", "action":"go_back", "param":[], "delay":0.5, "desc":"返回"},
        {"module":"action", "action":"go_back", "param":[], "delay":1, "desc":"返回"},
        {"module":"action", "action":"go_back", "param":[], "delay":1, "desc":"返回"}
    ]
}

let clients = {};
// 初始化Socket.IO
const io = socketIo(server);

// 监听客户端连接
io.on('connection', (socket) => {
  console.log('A user connected');

  // 监听客户端的LOGIN事件
  socket.on('LOGIN', (data, callback) => {
    const { username, password } = data;

    // 假设的用户名和密码验证逻辑
    if (username === 'admin' && password === 'password123') {
      // 登录成功，返回信息
      callback({ success: true, message: 'Login successful'});
    } else {
      // 登录失败，返回错误信息
      callback({ success: false, message: 'Invalid username or password' });
    }
    clients[socket.id] = socket;
  });

  socket.on('DEVICE_LIST', (data, callback) => {
    console.log(data);
    socket.devices = data;
  });

  // 监听客户端断开连接
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// 设置服务器监听端口
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
