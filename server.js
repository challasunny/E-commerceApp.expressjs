var express=require("express");
var app=express();
var bodyParser=require('body-parser')
app.set('view engine','pug')
// var phone=require("./phones.json")
app.use(bodyParser.urlencoded({extended:false}) );
app.use(express.static(__dirname + "/public"));
var phoneRouter=require("./routes/phones.js")
function authenticate(req,res,next){
    
}
app.use("/phone", authenticate, phoneRouter);

app.get("/login",function(req,res){
    res.sendFile(__dirname + "/public/login.html");
})
app.get("/register",function(req,res){
    res.sendFile(__dirname + "/public/registration.html");
})
app.get("/forgot-password",function(req,res){
    res.sendFile(__dirname + "/public/forgot.html");
})
app.get("/products",function(req,res){
    res.sendFile(__dirname + "/public/products.html");
})
app.get("/contact",function(req,res){
    res.sendFile(__dirname + "/public/contact.html");
})
app.get("/",function(req,res){
    console.log("request recieved");
    res.sendFile(__dirname + "/public/home.html");
    res.send("kiliki");
})
app.get("/:x",function(req,res){
   var idl=phone.find((p)=>{
    if(p.brand==req.params.x){
        return true;
    }
   })
    res.send(idl);
})
app.listen(4500,function(){
    console.log("my server is running 4500");
})
