const path=require('path');

module.exports={
    entry:'./first.js',
    output:{
        // to move the bundle file inside dist folder.
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        loaders: [{
            test: /\.js/,
            use: ['babel-loader'],
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }
        ]
    }
};