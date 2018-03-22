// app.vue是一个组件，不能直接挂载到网站上，所以需要通过index.js进行处理
// 引入vue类库
import Vue from 'vue'
// 引入app文件
import App from './app.vue'
// 引入css文件
import Style from './assets/styles/style.css'
// 引入styl文件
import Stylus from './assets/styles/stylus.styl'
// 引入图片
import Logo from './assets/images/logo.jpg'

// 创建一个root内容
const root = document.createElement('div')
// 将root内容放入body里
document.body.appendChild(root)

// 实例化一个vue对象
new Vue({
    // 申明一个render方法，接受一个h参数，h参数是app里的creatApp
    // 最终将App挂载到html里面
    render : (h) => h(App)
    // 这里其实只是申明出了内容
}).$mount(root) //通过$mount方法来进行挂载将root内容挂载到html页面里