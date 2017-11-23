var userSQL = {   
    queryAll:'SELECT * FROM user',  
    getUserByName:'SELECT * FROM user WHERE username = ? and password = ?',
};
module.exports = userSQL;
