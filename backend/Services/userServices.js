const fs = require('fs');

module.exports.getusers = async (req,res)=>{
   var allUsers = await getAllUsersFromFile();
   res.json({allUsers});
};

module.exports.postuser = async (req,res)=>{
    console.log("inside post user");
    var users =await getAllUsersFromFile();
    users.push(req.body);
    var addUsers = await addusers(users);
    res.json({addUsers});
 };

 module.exports.updateusers = async (req,res)=>{
    const mail = req.params.email;
    var users = await getAllUsersFromFile();
    var index = users.findIndex((usr)=>usr.email === mail);
    users[index] = req.body;
    var allUsers = await addusers(users);
    res.json({allUsers});
 };

 module.exports.deleteusers = async (req,res)=>{
    const mail = req.params.email;
    var users = await getAllUsersFromFile();
    var index = users.findIndex((usr)=>usr.email === mail);
    users.splice(index,1);
    var allUsers = await addusers(users);
    res.json({allUsers});
 };

 const getAllUsersFromFile = ()=>{
    console.log("inside getAllUSer");
     return new Promise((resolve,reject)=>{
        fs.readFile("./data/users.json",(err,data)=>{
            if(err)
            {
                console.log(err);
                reject([]);
            }
            else
            {
                if(!Buffer.from(data).toString())
                {
                    resolve([]);
                }
                else 
                {
                    var allusers = JSON.parse(Buffer.from(data).toString())
                    resolve(allusers);
                }
            }
        })
     })
 }

 const addusers = (users)=>{
    return new Promise((resolve,reject)=>{
        fs.writeFile("./data/users.json",JSON.stringify(users),async (err)=>{
            if(err)
            {
                console.log(err);
            }
            else
            {
                const allusers = await getAllUsersFromFile();
                resolve(allusers);
            }
        })
    })
 }