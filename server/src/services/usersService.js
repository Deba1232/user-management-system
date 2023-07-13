import usersModel from "../models/usersModel.js";

const usersTable = usersModel.user;

export const userService = {
  createUser: async (userData) => {
    const create = await usersTable.create(userData);
    return create;
  },
  getUsers: async () => {
    const users = await usersTable.findAll();
    return users;
  },
  getUserById: async (userId) => {
    const user = await usersTable.findOne({ where: { id: userId } });
    return user;
  },
  updateUser: async (userId, userData) => {
    let user = await usersTable.findOne({ where: { id: userId } });

    user.update(userData);
    user.save();

    return user;
  },
  deleteUser: async function deleteUser(userId) {
    const user = await usersTable.destroy({ where: { id: userId } });

    return user;
  },
};