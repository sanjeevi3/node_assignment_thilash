const { number,boolean } = require('./helper');
const joy =require('@hapi/joi');
const { text } = require('./helper');
const post={
    title: text("tittle",5,50),
    description : text("description", 10, 200),
    
}
const postId={
    id:number("id",0)
}
module.exports ={
    add:joy.object(post),
    update:joy.object({
        ...postId,
        ...post,
        isDone:boolean("isDone"),
        isActive:boolean("isDone")
    }),
    postId:joy.object(postId)

}
