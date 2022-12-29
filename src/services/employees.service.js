import prisma from '../db.js';

const getAllEmployees = () => Promise.resolve(prisma.Employee.findMany());

const getEmployeeById = id => Promise.resolve(prisma.Employee.findUnique({ where: { id } }));

const createEmployee = data => Promise.resolve(prisma.Employee.create({ data }));

const updateEmployeeById = (id, data) =>
  Promise.resolve(prisma.Employee.update({ where: { id }, data }));

const deleteEmployeeById = id => Promise.resolve(prisma.Employee.delete({ where: { id } }));

export default {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployeeById,
  deleteEmployeeById,
};
