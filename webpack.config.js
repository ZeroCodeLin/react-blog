module.exports = {
  entry: __dirname + '/src/main.js',
  output:{
    path: __dirname +'/public',
    filename:'bundle.js'
  },
  devServer:{
    port:'8081',
    contentBase:'./public',
    historyApiFallback:true,
    inline:true
  },
  module:{
    rules:[
      {
        test:/(\.jsx|\.js)$/,
        use:{
          loader:'babel-loader',
          options:{
            presets:[
              'es2015','react'
            ]
          }
        },
        exclude:/node_modules/
      },
      {
        test:/\.css$/,
        use:[
            {
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }
        ]
      }
    ]
  }
}
