const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');
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
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields) => {
        const { name, description, trainingcategory } = fields;

        if (!name || !description || !trainingcategory) {
            return res.status(400).json({
                error: 'All fields are required'
            });
        }

        let trainingcontent = new Trainingcontent(fields);

       
        trainingcontent.save((err, result) => {
            if (err) {
                console.log('TRAININGCONTENT CREATE ERROR ', err);
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(result);
        });
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

exports.update = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields) => {
        
        let trainingcontent = req.trainingcontent;
        trainingcontent = _.extend(trainingcontent, fields);
        trainingcontent.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(result);
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

