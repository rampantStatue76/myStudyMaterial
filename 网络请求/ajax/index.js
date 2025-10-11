// 创建过程：

// 1.创建XHR对象
const xhr = new XMLHttpRequest();

// 2.配置请求参数
xhr.open(method,url,async)
xhr.open('GET', '/api/data', true); // 异步 GET 请求，目标 URL 为 /api/data

// 3.设置请求头
xhr.setRequestHeader('Content-Type', 'application/json'); //post请求发送JSON数据

// 4.监听请求状态变化
// readyState：请求状态码（0~4，4 表示请求已完成且响应就绪）
xhr.onreadystatechange = function () { 
    if (xhr.readyState == 4 && xhr.status == 200) { 
        console.log(xhr.responseText); // 主动释放,JS本身也会回收的 xhr = null; 
    } 
}; 

// 5.发送请求
const data = { username: 'test', password: '123' };
xhr.send(JSON.stringify(data)); // 将 JSON 对象转为字符串
