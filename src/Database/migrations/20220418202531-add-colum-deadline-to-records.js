'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('records', 'deadline', {
      type: Sequelize.TEXT,
      allowNull: true,
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('records', 'deadline')
  }
};
