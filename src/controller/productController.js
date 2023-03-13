const Sequelize = require('sequelize');
const {Movie, Genre, Actor} = require('../database/models')

const productController= {
    movies: async (req, res) => {
        try {
            const movie = await Movie.findAll({
                include: [{association: 'genre'}, {association: 'actor'}]
            })
            res.render('products/movies', {
                movie,
            })            
        } catch (error) {
            res.send('error');
        }
    },
    create: async (req, res) => {
        try {
            const genre = await Genre.findAll()

            res.render('products/create', {
                genre
            })
        } catch (error) {
            res.send('error');
        }

    },
    createProcess: async (req, res) => {
        try {
            
            await Movie.create({
                ...req.body
            })

            res.redirect('/product')
        } catch (error) {
            res.send('error')
        }
    },
    edit: async (req, res) => {
        try {
            const movie = await Movie.findByPk(req.params.id,)
            const genre = await Genre.findAll()

            res.render('products/edit', {
                movie, 
                genre
            })
        } catch (error) {
            res.send('error');
        }
        
    },
    editProcess: async (req, res) => {
        try {
            const movie = await Movie.findByPk(req.params.id)
            await Movie.update(
                {
                    ...movie,
                    ...req.body,
                    release_date: req.body.release_date? req.body.release_date: movie.release_date 
                },
                {
                    where: {
                        id: req.params.id
                    }
                }
            )

            res.redirect('/product/'+ movie.id)
        } catch (error) {
            console.log('error');
        }
    },
    // delete: async (req, res) => {
    //     try {
    //         await Movie.destroy(
    //             {
    //                 where: {
    //                     id: req.params.id
    //                 }
    //             },
                
    //         )   

    //         res.redirect('/product')
    //     } catch (error) {
    //         res.send('error')
    //     }
        
    // },
    delete: async (req, res) => {
    
        try {
    
            await Movie.destroy({
                where: { id: req.params.id },
            });

                        
            res.redirect('/product');
        } catch (error) {
    
            res.send(error);
        }
    },
    
    detail: async (req, res) => {
        try {
            const movie = await Movie.findByPk(req.params.id, {
                include: [{association: 'genre'}, {association: 'actor'}]
            })

            res.render('products/detail', {
                movie
            })
        } catch (error) {
            res.send('error');
        }
    },
    a: async (req,res)=> {
        try {
            const a = await Actor.findAll()

            res.send(a)
        } catch (error) {
            res.send('error')
        }
    }
}

module.exports = productController