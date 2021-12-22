const { number,boolean } = require('./helper');
const joy =require('@hapi/joi');
const { text } = require('./helper');
const post={
    title: text("tittle",5,50),
    description : text("description", 10, 200),
    //isDone:boolean("isDone"),
    //isActive:boolean("isDone")
}
module.exports ={
    add:joy.object(post),
    update:null,
    postId:null

}
