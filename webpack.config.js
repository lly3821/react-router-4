const path = require('path')
const webpack = require('webpack')

config = {
    entry:'./src/index.js',

    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'/'
    },
    resolve:{
        extensions:[".js",".jsx",".json",".css"]
    },
    devtool:'inline-source-map',
    mode:'development',
    devServer:{
        hot:true,
        inline:true,
        contentBase:'./dist'
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:['babel-loader'],
                exclude:/node_modules/
            }
        ]
    }
}

module.exports = config