// axios拦截器
// 本质就是往Promise链前后插入函数：
// 请求拦截器 在请求发出前修改config，比如：1.加token
// 响应拦截器在数据返回前做统一处理，比如：1.通过错误处理2.接口错误提醒

// 应用：
// 常用于：
// 请求前自动附加 Token、统一 headers；
// 响应后统一处理错误、自动跳转登录；
// 简化返回结果，只取 data。

// 请求拦截器
axios.interface.request.use(config => {
    const token = localStorage.getItem('token')
    if(token) config.headers.Authorization = `Bearer ${token}`
    return config
})

// 注册请求拦截器
axios.interceptors.request.use(config => {
  if (config.method === 'post') { 
    // 告诉服务器 请求体数据是json格式
    config.headers['Content-Type'] = 'application/json'; 
  }
  return config; 
});


// 注册拦截器-只返回数据
axios.interface.response.use(config => config.data)

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log("未登录，跳转登录页");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => res,
  (err) => {
    alert(err.response?.data?.message || "请求失败");
    return Promise.reject(err);
  }
);
