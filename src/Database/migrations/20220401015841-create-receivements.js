'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('receivements', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      record_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'records', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      department_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'departments', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      received: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  async down(queryInterface) {
    return queryInterface.dropTable('receivements')
  },
}
