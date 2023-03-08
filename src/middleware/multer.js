const multer =  require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        let imgDestination = req.originalUrl.includes('product')? 'products' : 'users';
        let dest = path.resolve(__dirname, `../../public/images/${imgDestination}`);
        cb(null, dest) 
    },
    filename: (req, file, cb)=>{
        let imgFilename = req.originalUrl.includes('product')? 'products-' : 'users-';
        let name = `${imgFilename}` + Date.now() + path.extname(file.originalname)
        cb(null, name)
    }
})

const upload = multer({storage});

module.exports = upload