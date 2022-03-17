'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('records', 'link', {
      type: Sequelize.TEXT,
      allowNull: true,
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeColumn('records', 'link')
  },
}
