module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define(
        'Comment',
        {
            author: DataTypes.STRING,
            state: DataTypes.STRING,
            text: DataTypes.TEXT,
        },
        { hierarchy: true,
          onDelete: 'CASCADE' },
    );
    return Comment;
};
