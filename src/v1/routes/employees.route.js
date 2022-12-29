import { Router } from 'express';
import {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployeeById,
  deleteEmployeeById,
} from '../../controllers/employees.controller.js';

const router = Router();

const route = 'employees';

/**
 * @openapi
 * /employees:
 *   get:
 *     tags:
 *       - Employees
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                   $ref: "#/components/schemas/Employee"
 *       500:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error: 
 *                   type: string
 *                   example: Something is wrong

 */
router.get(`/${route}`, getAllEmployees);

/**
 * @openapi
 * /employees/{id}:
 *   get:
 *     tags:
 *       - Employees
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Employee's ID
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: "#/components/schemas/Employee"
 *       404:
 *         description: Not Found
 *       500:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error: 
 *                   type: string
 *                   example: Something is wrong

 */
router.get(`/${route}/:id`, getEmployeeById);

/**
 * @openapi
 * /employees:
 *   post:
 *     tags:
 *       - Employees
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Peter
 *               salary:
 *                 type: integer
 *                 example: 1000
 *             required:
 *               -  name
 *               -  salary
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: "#/components/schemas/Employee"
 *       500:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error: 
 *                   type: string
 *                   example: Something is wrong

 */
router.post(`/${route}`, createEmployee);

/**
 * @openapi
 * /employees/{id}:
 *   patch:
 *     tags:
 *       - Employees
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Employee's ID
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Peter
 *               salary:
 *                 type: integer
 *                 example: 1000
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: "#/components/schemas/Employee"
 *       404:
 *         description: Not Found
 *       500:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error: 
 *                   type: string
 *                   example: Something is wrong

 */
router.patch(`/${route}/:id`, updateEmployeeById);

/**
 * @openapi
 * /employees/{id}:
 *   delete:
 *     tags:
 *       - Employees
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Employee's ID
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       204:
 *         description: OK
 *       404:
 *         description: Not Found
 *       500:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error: 
 *                   type: string
 *                   example: Something is wrong

 */
router.delete(`/${route}/:id`, deleteEmployeeById);

export default router;
