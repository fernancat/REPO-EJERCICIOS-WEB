export function defineUser(sequelize){

    return  sequelize.define('User', {
            username: DataTypes.STRING,
            birthday: DataTypes.DATE,
        });



}