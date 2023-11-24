
const dbConn=require("../db/mysql_connect")
const bcrypt=require("bcrypt")
const login=async(req,res)=>{
    /*
    console.log(req,body)
    return res.json(req,body)
    */
   const kullanici_adi =req.body.kullanici_adi
   const sifre=req.body.sifre


/*   
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
    const kullanici_adi=req.body.kullanici_adi
    const sifre=req.body.sifre
    const eposta =req.body.eposta
    const adi=req.body.adi
    const soyadi=req.body.soyadi
    const tel_no=req.body.tel_no
    const cinsiyet=req.body.cinsiyet
    const dogum_tarihi=req.body.dogum_tarihi
    dbConn.query("SELECT * FROM kullanici WHERE kullanici_adi=?", kullanici_adi, (err,results)=>{
        if(results.length===0){
            return res.status(201).json({
                success:false,
                message:"kayıt mevcut"
            })
            }else{
            dbConn.query("INSERT INTO kullanici (kullanici_adi,s,fre,eposta,ad,soyadi,tel_no,cinsiyet,dogum_tarihi) VALUES (?,?,?,?,?,?,?,?)"
            ,[kullanici_adi,sifre,eposta,adi,soyadi,tel_no,cinsiyet,dogum_tarihi], (err,results)=>{
                return res.status(201).json({
                    success:true,
                    message:"kayıt başarılı"
                })
            })
        }else{
            console.log(err)
        }
        
    })
    
}

module.exports={login,register} */

dbConn.query("SELECT * FROM kullanicilar WHERE kullanici_adi=?",
[kullanici_adi],(error,results)=>{
    if(results.length>0){
        const comparePassword=bcrypt.compare(sifre,results[0].sifre)
        if(comparePassword){
            return res.status(203).json({
                success:true,
                message:"Kullanıcı Girişi Başarılı"
            })
        }else{
            return res.status(203).json({
                success:false,
                message:"Kullanıcı veya Şifre Uyumsuz"
            })
        }
    }else{
        return res.status(203).json({
            success:false,
            message:"Kullanıcı Girişi Başarısız"
        })
    }
})
}

const register=async(req,res)=>{
const kullanici_adi=req.body.kullanici_adi
const sifre=await bcrypt.hash(req.body.sifre,10)
const eposta=req.body.eposta
const adi=req.body.adi
const soyadi=req.body.soyadi
const tel_no=req.body.tel_no
const cinsiyet=req.body.cinsiyet
const dogum_tarihi=req.body.dogum_tarihi
dbConn.query("select * from kullanicilar where kullanici_adi=?",kullanici_adi,(err,result)=>{
if(result.length>0){
    return res.status(201).json({
        success:false,
        message:"Kayıt Mevcut"
    })
}else{
    dbConn.query("INSERT INTO kullanicilar (kullanici_adi,sifre,eposta,adi,soyadi,tel_no,cinsiyet,dogum_tarihi) VALUES (?,?,?,?,?,?,?,?)"
    ,[kullanici_adi,sifre,eposta,adi,soyadi,tel_no,cinsiyet,dogum_tarihi],(err,result)=>{
        if(!err){
            return res.status(201).json({
                success:true,
                message:"Kayıt Başarılı"
            })
        }else{
            console.log(err)
        }
          

    })    
}
})
} 

module.exports={login,register}
