const path = require("path");

module.exports={
    mode: "production", 
    entry: "./index.js", 
    output: {
        path: path.resolve(__dirname, "public"),
        publicPath: '/',
        filename: "main.js"
    },
    target: "web",
    devServer: {
        port: "3000",
        static: ["./public"],
        open: true,
        hot: true ,
        liveReload: true,
        client: {
            overlay: false,
        }
    },
    resolve: {
        extensions: ['.js','.jsx','.json'] 
    },
    module:{
        rules: [
            {
                exclude: /node_modules/, //folder to be excluded
                use:  'babel-loader' //loader which we are going to use
            }
        ]
    },
    stats: {
        warnings: false
    }
}