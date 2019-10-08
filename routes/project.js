'use strict'

let express = require('express');
let projectController = require('../controllers/project');


let router = express.Router();

// ESTE MIDDLEWARE ES NECESARIO PARA PODER SUBIR IMAGENES

let multipart = require('connect-multiparty');
let multipartMiddleware = multipart({ uploadDir: './uploads'});

router.get('/home', projectController.home);
router.post('/test', projectController.test);
router.post('/saveProject', projectController.saveProject);
router.get('/project/:id', projectController.getProject);
router.get('/projectsList', projectController.getProjectList);
router.post('/upload-image/:id', multipartMiddleware, projectController.uploadImage);


module.exports = router; // este modulo se carga en el app routes
