const { Model, DataTypes } = require('sequelize')

class Receivement extends Model {
  static init(sequelize) {
    super.init(
      {
        received: { type: DataTypes.BOOLEAN },
      },
      {
        sequelize,
        tableName: 'receivements',
      }
    )
  }

  static associate(models) {
    this.belongsTo(models.Record, { foreignKey: 'record_id', as: 'record' })
    this.belongsTo(models.Department, {
      foreignKey: 'department_id',
      as: 'department',
    })
  }
}

module.exports = Receivement
