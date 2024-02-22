const mongoose=require("mongoose");
const complaintSchema=new mongoose.Schema({
    name: {
        type: String,
       
    },
    email: {
        type: String,
        
    },
    phone: {
        type: String,  
    },
    subject: {
        type: String,
    },
    message: {
        type: String,
        
    },

})


const Complaint=mongoose.model("Complaint",complaintSchema);
module.exports=Complaint;
