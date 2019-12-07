const path=require('path');             //path is imported from node.js
module.exports={
    mode:"development",                  // it will run in development mode
   // devtool:"none",                     //it will remove eval function in webpack
   entry :"./src/index.js",             //entry point for webpack
    output:{                            //output point for webpack
        filename:"main.js",             /* file name that will be 
                                        outputed and will be added in index.html */
        path:path.resolve(__dirname,"build")        // __dirname returns the current directory
    }

};