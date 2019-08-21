const path = require('path');
const uglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = env => {
    const dev = env.NODE_ENV === "dev";
    
    let config = {
        entry: './assets/js/app.js',
        watch: dev,
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
            publicPath: "/dist/"
        },
        devtool: dev ? "cheap-module-eval-source-map" : "source-map",
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: ['babel-loader']
                }
            ]
        },
        plugins: []
    };
    
    if(!dev)
    {
        config.plugins.push(new uglifyJSPlugin(
            {sourceMap: true}
        ))
    }
  
    return config;
  };