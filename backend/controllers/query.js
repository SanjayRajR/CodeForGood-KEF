const Query = require('../models/query');
const { errorHandler } = require("../helpers/dbErrorHandler");
var q_id = null;

exports.queryById = (req, res, next, id) => {
    q_id = id;
    Query.findById(id).exec((err, query) => {
        if (err || !query) {
            return res.status(400).json({
                error: 'Query not found'
            });
        }
        req.profile = query;
        next();
    });
};

exports.createQuery = (req, res) => {
    const query = new Query(req.body);
    query.save((err, query) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({ query });
    });
};
exports.read = (req, res) => {
    const query = Query.findById(q_id).exec((err, query) => {
        if (err || !query) {
            return res.status(400).json({
                error: 'Query not found'
            });
        }
        else
        res.json({query});
})
};

exports.querylist = (req, res) => {
    Query.find().exec((err, query) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(query);
    });
};

exports.respondQuery= (req, res) => {
    console.log(q_id);
    console.log(req.body.response);

    Query.findByIdAndUpdate(q_id, {response: req.body.response}, function (err, docs) { 
        if (err){ 
            console.log(err) 
        } 
        else{ 
            console.log("Updated Query : ", docs); 
            res.json({docs});
        } 
    }); 
};