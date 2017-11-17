const path=require('path');

module.exports={
    entry:'./src/first.js',
    output:{
        // to move the bundle file inside dist folder.
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules: [{
            test: /\.js/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }
        ]
    }
};