const databaseConfig = require("../databaseConfig");

exports.add=(data)=>new Promise((resolve,reject)=>{
    try {
        databaseConfig().query("CALL add_post(?,?)",
            data,
            (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res[0]);
                }
            }
        );
    } catch (error) {
        reject(error);
    }
})
exports.update=(data)=>{
    
}
exports.delete=(data)=>{
    
}
exports.get=(data)=>{
    
}
