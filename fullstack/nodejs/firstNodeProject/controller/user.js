const users = require('../router/user')

exports.getUser = (req, res)=>{
    res.send({message : 'User Fetched', data: users})
};

exports.createUser = (req, res)=>{
    const data = req.body;
    const modifiedData = {id : users.length + 1, ...data}
    users.push(modifiedData)
    res.send({message : "user created", data : data })
};

exports.updateUser = (req, res)=>{
    const {id} = req.params;
    const userIndex = users.findIndex(item => item.id === +id);
    if(!user){
        return res.send({message : ' User not found'})
    }
    user.contactDetails = req.body.contactDetails
    res.send({message : 'user updated'})
}

exports.deleteUser = (req, res)=>{
    const {id} = req.params;
    const userIndex = users.findIndex(item => item.id === +id);
    if(!user){
        return res.send({message : ' User not found'})
    }
    user
}