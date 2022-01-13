'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      password: '123456',
      email: 'example@example.com',
      address: " VN",
      gender: 1,
      typeRole: "ROLE",
      keyRole: "R1",
      tel: "0337427763",

      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
