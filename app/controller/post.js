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
    const data=[
        req.body.id,
        req.body.title,
        req.body.description,
        req.body.isDone,
        req.body.isActive
    ]
    model.update(data).then(data=>{
        if(data.valid){
            res.status(200).json({
                message:"post was updated."
            })
        }
        else{
            res.status(400).json({
                message:"post was not found."
            })
        }
    })
}
exports.delete=(req,res)=>{
    const data=req.params.id?req.params.id:null;
    model.delete(data).then(data=>{
        if(data.valid){
            res.status(200).json({
                message:"post was deleted."
            })
        }
        else{
            res.status(400).json({
                message:"post was not found."
            })
        }
    })
}
exports.get=(req,res)=>{
    
}
