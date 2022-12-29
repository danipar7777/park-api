import { handleResponse, handleError } from '../utils/handlers.js';
import employeesService from '../services/employees.service.js';

export const getAllEmployees = (req, res) => {
  employeesService
    .getAllEmployees()
    .then(data => handleResponse(res, data))
    .catch(err => handleError(res, err));
};

export const getEmployeeById = (req, res) => {
  const id = Number(req.params.id);
  employeesService
    .getEmployeeById(id)
    .then(data => handleResponse(res, data, 'GET'))
    .catch(err => handleError(res, err));
};

export const createEmployee = (req, res) => {
  const { name, salary } = req.body;
  employeesService
    .createEmployee({ name, salary })
    .then(data => handleResponse(res, data, 'POST'))
    .catch(err => handleError(res, err));
};

export const updateEmployeeById = (req, res) => {
  const id = Number(req.params.id);
  const { name, salary } = req.body;
  employeesService
    .updateEmployeeById(id, { name, salary })
    .then(data => handleResponse(res, data))
    .catch(err => handleError(res, err));
};

export const deleteEmployeeById = (req, res) => {
  const id = Number(req.params.id);
  employeesService
    .deleteEmployeeById(id)
    .then(data => handleResponse(res, data, 'DELETE'))
    .catch(err => handleError(res, err));
};
