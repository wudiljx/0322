// 2.申明绝对路径const保证不出错误,path文件是nodejs里面的一个基本包主要用来处理路径
const path = require('path')

// 1.准备打包资源
module.exports = {
    // 申明入口，创建一个入口文件index.js
    //__dirname代表当前文件目录所在的地址
    // 通过path.join将当前文件目录的路径和后面的路径拼接起来，形成一个绝对路径
    entry : path.join(__dirname , 'src/index.js'),
    // 申明出口
    // 打包成一个名为bundle.js的文件，文件的路径在当前目录的dist文件夹里
    // 同时在package.json文件里添加指定调用的webpack文件
    output : {
        filename : 'bundle.js',
        path : path.join(__dirname , 'dist')
    },
    // 添加一个配置
    module : {
        // 增加配置规则
        // 安装对应的配置loader
        // style-loader url-loader file-loader
        rules : [
            {
                test : /\.vue$/,    //检测文件类型，正则表达式
                loader : 'vue-loader'       //使用vue-loader来处理.vue文件
            },
            {
                test : /\.css$/,
                use : [
                    'style-loader', //在js代码里会以js代码形式出现，再通过js代码显示到html页面里
                    'css-loader'
                ]
            },
            {
                test : /\.styl$/,   //一个css预处理工具
                use : [
                    'style-loader', //依赖于style-loader和css-loader
                    'css-loader',
                    'stylus-loader' //处理styl文件的loader
                ]
            },
            {
                test : /\.(gif|jpg|jpeg|png|svg)$/,
                use : [
                    {
                        loader : 'url-loader',//可以将图片转换成base64代码，直接写在js里
                        options : {
                            limit : 1024,       //如果图片小于1024，就写入代码里
                            name : '[name].[ext]' //文件名的输出
                        }
                    }
                ]
            }
        ]
    }
}