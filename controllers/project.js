'use strict'
let Project = require('../Models/project') //importamos el modelo con require()
let controllers = {
    home: function (req, res) {
       return res.status(200).send({
           message: 'soy la home'
       });
    },
    test: function (req, res) {
        return res.status(200).send({
            message: ' soy el mensaje de test'
        });
    },
    saveProject: function (req, res) {
        let project = new Project();
        let params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;
//guardar  los datos recibidos en la base de datos
        project.save((err, projectStore) =>{
           if (err) return res.status(500).send({message:'Error al Guardar documento'});

           if(!projectStore) return res.status(404).send({message: 'al guardar en la base de datos' });

           return res.status(200).send({project: projectStore});
        });

    },
    getProject: function(req, res){
        let projectId = req.params.id;
        Project.findById(projectId, (err,Project) =>{
           if(err) return res.status(500).send({message: 'error al devolver los datos'});
           if(!Project) return res. status(404).send({message: 'archivo no encontrado'});
           return res.status(200).send({
             Project
          });
        });
    },
    getProjectList: function( req, res) {
        Project.find({}).exec((err,projects) => {
           if (err) return res.status(500).send({message: 'error al devolver los datos'});
           if (!projects) return res.status(404).send({message: 'no hay proyectos que mostrar'});

           return res.status(200).send({
               projects
           });
        });
    },

    uploadImage: function (req, res) {
        let projectId = req.params.id;
        let fileName = 'Imagen no subida';
        if (req.files) {
            return res.status(200).send({
                files: req.files
            });
        } else {
            return res.status(200).send({
                message: fileName
            });
        }
    }
    };

    module.exports = controllers; //importamos el controllador a routes
