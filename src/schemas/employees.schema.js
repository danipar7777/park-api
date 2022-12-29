/**
 * @openapi
 * components:
 *   schemas:
 *     Employee:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: Peter
 *         salary:
 *           type: integer
 *           example: 1000
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: 2023-01-03T12:23:55.034Z
 *       required: [ "id", "name", "salary", "createdAt" ]
 */
