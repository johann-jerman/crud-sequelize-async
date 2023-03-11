module.exports = (sequelize, DataType) => {
    const Genre = sequelize.define('Genre', 
        {
            id: {
                type: DataType.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataType.STRING(100),
                allowNull: false
            },
            ranking: {
                type: DataType.INTEGER.UNSIGNED,
                allowNull: false,
                unique: true
            },
            active: {
                type: DataType.TINYINT,
                allowNull: false,
                defaultValue: 1
            }
        },
        {
            tablename: 'genres',
            timetamps: true,
            underscored: true
        }
    );

    Genre.associate = (models) => {
        Genre.hasMany(models.Movie, {
            as: 'movies',
            foreingKey: 'genre_id'
        })
    };

    return Genre
}