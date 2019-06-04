const mysql = require('mysql');

const db = mysql.createConnection({
    host:'localhost',
    user:'ravi',
    password:'ravi',
    database:'angularprojects',
    multipleStatements:true
});

db.connect((err)=>{
    if(!err){
        console.log("Connected...");
    }else{
        console.log('error : '+JSON.stringify(err,undefined,2));
    }
});

let mydata = {};
mydata.insertUser = (user) =>{
        // db.query('insert into userdata (name,email,street,city,pincode) values(?,?,?,?,?)',[name,email,street,city,pin],(err,result)=>{
        //     if(err){
        //         return (err);
        //     }
        //     return (result);
        // });
        return new Promise((resolve,reject)=>{
            db.query('insert into userdata set ?',user,(err,result)=>{
                if(err)
                    return reject(false);
                else
                    return resolve(true);
            });
        });
};

module.exports = mydata;