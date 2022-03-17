'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn('records', 'have_physical_object', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    })
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeColumn('records', 'have_physical_object')
  },
}
