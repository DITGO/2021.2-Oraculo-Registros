'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn('history', 'received_by', {
      type: Sequelize.TEXT,
      allowNull: true,
    })
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeColumn('history', 'received_by')
  },
}
