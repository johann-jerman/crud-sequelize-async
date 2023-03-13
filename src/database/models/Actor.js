module.exports = (sequelize, DataType) => {
    const Actor = sequelize.define('Actor',
        {
            id: {
                type: DataType.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true
            },
            first_name: {
                type: DataType.STRING(100),
                allowNull: false
            },
            last_name: {
                type: DataType.STRING(100),
                allowNull: false
            },
            rating: {
                type: DataType.DECIMAL(3,1),
                allowNull: true
            },
            favorite_movie_id: {
                type: DataType.BIGINT(10).UNSIGNED,
                allowNull: true   
            }
        },
        {
            tablename: 'actors',
            timestamps: true,
            underscored: true
        }
    )

    Actor.associate = (models)=> {
        Actor.belongsToMany(models.Movie, {
            as: 'movies',
            through: 'actor_movie',
            foreingKey: 'actor_id',
            otherKey: 'movie_id'
        })
    }

    return Actor
}

