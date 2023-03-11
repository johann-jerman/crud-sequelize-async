const { movies } = require("../../controller/productController");

module.exports = (sequelize, DataType) => {
    
    const Movie = sequelize.define('Movie', 
        {
            id: {
                type: DataType.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true
            },
            title: {
                type: DataType.STRING(500),
                allowNull: false,
            },
            rating: {
                type: DataType.DECIMAL(3,1).UNSIGNED,
                allowNull: false
            },
            awards: {
                type: DataType.INTEGER.UNSIGNED,
                allowNull: false
            },
            release_date: {
                type: DataType.DATE,
                allowNull: false
            },
            length: {
                type: DataType.INTEGER.UNSIGNED,
                allowNull: true
            },
            genre_id: {
                type: DataType.INTEGER.UNSIGNED,
                allowNull: true
            }
        },
        {
            tablename: 'movies',
            timestamps: true,
            underscored: true
        }
    );

    Movie.associate = (models) => {
        Movie.belongsTo(models.Genre, {
            as: 'genre',
            foreingKey: 'genre_id'
        });

        Movie.belongsToMany(models.Actor, {
            as: 'actor',
            through: 'actor_movie',
            foreingKey: 'movie_id',
            otherKey: 'actor_id'
        })
    };

    return Movie;
}