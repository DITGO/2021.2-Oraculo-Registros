'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('record', 'deadline', {
      type: Sequelize.TEXT,
      allowNull: true,
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('record', 'deadline')
  }
};
