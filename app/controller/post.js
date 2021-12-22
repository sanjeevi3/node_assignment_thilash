const { serverErrorResponse } = require("../helper/errorResponse")
const model = require("../model/post")

exports.add=(req,res)=>{
    const data=[
        req.body.title,
        req.body.description
    ]
    model.add(data).then(data=>{
        res.status(200).json({
            message : "post was added successfully"
        });
    }).catch(err=>{
        console.log(err)
        serverErrorResponse(res);
    })
}
exports.update=(req,res)=>{
    
}
exports.delete=(req,res)=>{
    
}
exports.get=(req,res)=>{
    
}
