const {Movie, Genre} = require('../database/models')

const productController= {
    movies: async (req, res) => {
        try {
            const movie = await Movie.findAll()
    
            res.render('products/movies', {
                movie,
            })

        } catch (error) {
            console.log(error);   
        }
    },
    create: async (req, res) => {
        try {
            const genre = await Genre.findAll()

            res.render('products/create', {
                genre
            })
        } catch (error) {
            console.log(error);
        }

    },
    createProcess: (req, res) => {
        
    },
    edit: async (req, res) => {
        try {
            const movie = await Movie.findByPk(req.params.id, {
                include: [{association: 'genre'}]
            })

            res.render('products/edit', {
                movie
            })
        } catch (error) {
            console.log(error);
        }
        
    },
    editProcess: async (req, res) => {
        try {
            
        } catch (error) {
            console.log(error);
        }
    },
    delete: (req, res) => {
        
    },
    detail: async (req, res) => {
        try {
            const movie = await Movie.findByPk(req.params.id, {
                include: [{association: 'genre'}]
            })
            console.log(movie);
            res.render('products/detail', {
                movie
            })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = productController