const path = require('path');

const indexController = {    
    index: (req, res) =>  {
    /**
     *  logica
     */     
        res.render(path.join(__dirname, "../views/index.ejs"))
    },
};

module.exports = indexController;