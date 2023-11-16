
const dbConn=require("../db/mysql_connect")

const login=async(req,res)=>{
    /*
    console.log(req,body)
    return res.json(req,body)
    */
   const kullanici_adi =req.body.kullanici_adi
   const sifre=req.body.sifre

   dbConn.query("SELECT * FROM kullanici WHERE kullanici_adi=? AND sifre?", 
   [kullanici_adi, sifre], (error, results)=>{

        if(results.length>0){
            return res.status(200).json({
                success :true,
                data: res.body,
                message: "giriş başarılı"

            })
    

        }else{
            return res.status(203).json({
                 success: false,
                 message:"kullanıcı girişi başarılı"
        })
    }

    })
}
    
const register=async(req,res)=>{
    console.log(req,body)
}

module.exports={login,register}
