var tipSQL = {   
    queryAll:'SELECT * FROM tip_blog',  
    //getTipById:'SELECT * FROM tip_blog WHERE id = ?',
    deleteTipById:'delete from tip_blog where id = ?',
    insertTip:'insert into tip_blog(tipname) values (?);',
    updateTip:'update tip_blog set tipname=? where id=?'
};
module.exports = tipSQL;