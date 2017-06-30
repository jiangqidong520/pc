var http=require('http')
var fs=require('fs')
http.createServer(function(req,res){
    var url=req.url
    console.log(url)
    switch (url){
        case"index1.html":
            fs.readFile("index1.html","utf-8",function(err,data){
                if(err){
                    console.log("读取失败")
                    console.log(err)
                }else{
                    res.writeHead(200,{"content-wrap":"text/html"})
                    res.end(data)
                }
            });
            break;
        case "index2.html":
            fs.readFile("index2.html","utf-8",function(err,data){
                if(err){
                    console.log("读取失败")
                    console.log(err)
                }else {
                    res.writeHead(200,{"content-wrap":"text/html"})
                    res.end(data)
                }
            });
            break;
        case"index3.html":
            fs.readFile("index3.html","utf-8",function(err,data){
                if(err){
                    console.log("读取失败")
                    console.log(err)
                }else{
                    res.writeHead(200,{"content-wrap":"text/html"})
                    res.end(data)
                }
            });
            break;
        case"index1.css":
            fs.readFile("index1.css","utf-8",function(err,data){
                if(err){
                    console.log("读取失败")
                    console.log(err)
                }else{
                    res.writeHead(200,{"content-wrap":"text/css"})
                    res.end(data)
                }
            });
            break;
        case "index1,js":
            fs.readFile("index1.js","utf-8",function(err,data){
                if(err){
                    console.log("读取失败")
                    console.log(err)
                }else{
                    res.writeHead(200,{"content-wrap":"text/javascript"})
                    res.end(data)
                }
            });
            break;
        case "img.html":
            fs.readFile("img.html","utf-8",function(err,data){
                if(err){
                    console.log("读取失败")
                    console.log(err)
                }else{
                    res.writeHead(200,{"content-wrap":"text/html"})
                    res.end(data)
                }
            });
            break;
        case "1.png":
            fs.readFile("1.png",function(err,data){
                if(err){
                    console.log("读取失败")
                    console.log(err)
                }else{
                    res.writeHead(200,{"content-wrap":"image/png"})
                    res.end(data)
                }
            });
            break;
        default:"err.html"
            fs.readFile("err.html","utf-8",function(err,data){
                if(err){
                    console.log("读取失败")
                    console.log(err)
                }else{
                    res.writeHead(200,{"content-wrap":"text/html"})
                    res.end(data)
                }
            });
            break;
    }
}).listen(3000)