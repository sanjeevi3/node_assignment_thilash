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
exports.update=(data)=>new Promise((resolve,reject)=>{
    try {
        databaseConfig().query("CALL update_post(?,?,?,?,?)",
            data,
            (err, res) => {
                if (err) {
                    reject(err);
                } else {

                    resolve(res[0][0]);
                }
            }
        );
    } catch (error) {
        reject(error);
    }
})
exports.delete=(data)=>new Promise((resolve,reject)=>{
    try {
        databaseConfig().query("CALL delete_post(?)",
            data,
            (err, res) => {
                if (err) {
                    reject(err);
                } else {

                    resolve(res[0][0]);
                }
            }
        );
    } catch (error) {
        reject(error);
    }
})
exports.get=(data)=>new Promise((resolve,reject)=>{
    try {
        databaseConfig().query("CALL get_post(?)",
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
