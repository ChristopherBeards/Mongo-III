const postControllers = require('../controllers/postControllers');

module.exports = (app) => {
  //add your new routes here
  app.route('new-post').post(postControllers.createPost);
};
