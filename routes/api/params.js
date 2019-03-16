module.exports = (req,res,next)=>{
    let start = req.query.start ? req.query.start - 1 : require('../../config/global').page_start - 1;
    let count = req.query.count ? req.query.count - 0 : require('../../config/global').page_num - 0;
    let q = req.query.q ? req.query.q : require('../../config/global').q;
    let rule = req.query.rule ? req.query.rule : require('../../config/global').rule;
    let _id = req.query._id;
    let dataName = req.query.dataName;

    res.params = {start,count,q,rule,dataName,_id}

    res.user_session={username:req.session.username,icon:req.session.icon}
    
    next()
}