const { Sequelize, dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {

    const alias = 'Usuario';

    const cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },

        image: dataTypes.STRING,

        name: dataTypes.STRING,

        lastName: dataTypes.STRING,

        email: dataTypes.STRING,

        gender: dataTypes.STRING,

        productosComprados: dataTypes.STRING,

        password: dataTypes.STRING,

    }

    const config = {
        tableName: 'users',
        timestamps: false
    }

    const Usuario = sequelize.define(alias, cols, config);

    // Usuario.associate = function(models){
    //     Usuario.belongsToMany(models.Producto, {
    //         as: "products",
    //         through: "user_producto",
    //         foreingKey: "user_id",


    //     })
    // }


    
    return Usuario;

    


}