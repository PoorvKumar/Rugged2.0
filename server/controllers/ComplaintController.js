const Complaint=require('../models/complaints');


const addComplaint=async (req,res,next)=>{

    try{

   
    const {name,email,phone,subject,message}=req.body;

    const complaint=new Complaint({name,email,phone,subject,message});
   

    await complaint.save()
    console.log(req.body);
    res.status(200).send()

}
catch (e){
   next(e);

}
}

const getComplaints=async (req,res,next)=>{
    try {
        const complaints = await Complaint.find();
        res.status(200).json(complaints);
    } catch (e) {
        next(e);
    }
}
module.exports={addComplaint,getComplaints};