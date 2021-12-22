const joy =require('@hapi/joi');
const { validateErrorResponse } = require('../helper/errorResponse');
const schema = require("./schema/post")

exports.add=(req,res,next)=>{
        const validation =schema.add.validate(req.body)
        validateErrorResponse(validation,res,next)
       
    }

    exports.update=(req,res,next)=>{
        const validation =schema.update.validate(req.body)
        validateErrorResponse(validation,res,next)
    }

    exports.PostId=(req,res,next)=>{
        const validation =schema.postId.validate(req.params)
        validateErrorResponse(validation,res,next)
    }