module.exports = (sequelize, DataTypes) => {
	const urls = sequelize.define('urls', {
		hash: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		original_url: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	}, {});

	return urls;
};
