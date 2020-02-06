module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define(
        'Comment',
        {
            author: DataTypes.STRING,
            state: DataTypes.STRING,
            text: DataTypes.STRING,
        },
        { hierarchy: true },
    );
    return Comment;
};
