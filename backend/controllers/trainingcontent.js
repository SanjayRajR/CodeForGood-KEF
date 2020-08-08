const Trainingcontent = require('../models/trainingcontent');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.trainingcontentById = (req, res, next, id) => {
    Trainingcontent.findById(id)
        .populate('trainingcategory')
        .exec((err, trainingcontent) => {
            if (err || !trainingcontent) {
                return res.status(400).json({
                    error: 'Trainingcontent not found'
                });
            }
            req.trainingcontent = trainingcontent;
            next();
        });
};

exports.read = (req, res) => {
    return res.json(req.trainingcontent);
};

exports.create = (req, res) => {
    const trainingcontent = new Trainingcontent(req.body);
    trainingcontent.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({ data });
    });
};

exports.remove = (req, res) => {
    let trainingcontent = req.trainingcontent;
    trainingcontent.remove((err, deletedTrainingcontent) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({
            message: 'Trainingcontent deleted successfully'
        });
    });
};



exports.list = (req, res) => {
       Trainingcontent.find()
        .populate('trainingcategory')
        .exec((err, trainingcontents) => {
            if (err) {
                return res.status(400).json({
                    error: 'Trainingcontents not found'
                });
            }
            res.json(trainingcontents);
        });
};



exports.listTrainingcategories = (req, res) => {
    Trainingcontent.distinct('trainingcategory', {}, (err, categories) => {
        if (err) {
            return res.status(400).json({
                error: 'Trainingcategories not found'
            });
        }
        res.json(categories);
    });
};

