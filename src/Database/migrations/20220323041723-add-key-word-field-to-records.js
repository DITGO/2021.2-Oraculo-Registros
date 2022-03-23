'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn('records', 'key_words', {
      type: Sequelize.TEXT,
      allowNull: true,
    })
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeColumn('records', 'key_words')
  },
}
