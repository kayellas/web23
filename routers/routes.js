/*
const router=require('express').Router()
const {login,register}= require('../controllers/controller')
router.post("/login",login)

router.post("/register",register)

/*
post: veri gönderme -request ile kullanılır.
get: veri alma 
put: veri güncelleme
patch: veri güncelleme 
delete: veri silme
*/

// module.exports=router 


const router=require('express').Router()
const {login,register,getChartData}=require('../controllers/controller')
router.post("/login",login)

router.get("/grafik",getChartData)
router.post("/register",register)
//post:veri gönderme get:veri alma put:veri güncelleme patch:veri güncelleme
//delete:veri silme


module.exports=router