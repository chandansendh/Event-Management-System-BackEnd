const Contact = require("../Model/constact-model");

const contactForm=async(req,res)=>{
    try {
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({message:"message send successfully"});
    } catch (error) {
        return res.status(500).json({message:"massage not delivered"})
    }
};

module.exports=contactForm;