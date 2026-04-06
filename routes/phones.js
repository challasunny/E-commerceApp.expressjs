var express = require("express");
var router= express.Router();
var phone=require("../phones.json")
router.get("/",function(req,res){
    res.send(phone)
})

router.get("/:x",function(req,res){
   var idl=phone.find((p)=>{
    if(p.brand.toLowerCase()==req.params.x.toLowerCase()){
        return true;
    }
   })
    res.send(idl);
})
module.exports = router
