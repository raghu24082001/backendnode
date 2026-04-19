import newdatamodal from "../model/authmodal.js"


export const createdata = async (req,res)=>{

      try {
       
       const {name,email,mobile} = req.body

       const createdatabase = await newdatamodal.create({name,email,mobile})

       res.status(200).json({msg:"sucessfully created"})

      } catch (error) {

         res.status(500).json({msg:"error",error})
          console.log('error',error)

      }
}

export const getdata = async (req,res)=>{

      try {
       
       

       const createdatabase = await newdatamodal.find()

       res.status(200).json(createdatabase)

       console.log(createdatabase)

      } catch (error) {

         res.status(500).json({msg:"error",error})
          console.log('error',error)

      }
}