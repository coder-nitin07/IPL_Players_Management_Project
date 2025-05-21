/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: User authentication
 */


//********************   Create User Documentation      ***********************//
/**
 * @swagger
 * /auth/createUser:
 *   post:
 *     summary: Create a new user
 *     tags: [Auth]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Validation error
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *       Create User:
 *          type: object
 *          required:
 *              - name
 *              - email
 *              - password
 *          properties:
 *              id:
 *                  type: String
 *                  description: The Auto-generated id of User Collection
 *              name: 
 *                  type: String
 *                  description: User name
 *              email: 
 *                  type: String
 *                  format: email
 *                  description: User's email address
 *              password: 
 *                  type: String
 *                  description: User password should be not more than 20 and less than 6 characters
 *          example:
 *                  id: 45fgsgfdgh243cf23457jhsv
 *                  name: John
 *                  email: john@email.com
 *                  password: john@123
 */ 









//********************   Login User Documentation      ***********************//
/**
 * @swagger
 * /auth/loginUser:
 *   post:
 *     summary: Log in a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Interval Server error
 */

/**
 *  @swagger
 *      components:
 *          schemas:
 *              LoginUser:
 *                  type: object
 *                  required:
 *                      - email
 *                      - password
 *                  properties:
 *                      name: 
 *                          type: String
 *                          description: User name
 *                      email: 
 *                          type: String
 *                          format: email
 *                          description: User's email address
 *                  example:
 *                          email: john@email.com
 *                          password: john@123
 */






//********************   Logout User Documentation      ***********************//
/**
 * @swagger
 * /auth/logoutUser:
 *   post:
 *     summary: Log out the user
 *     description: |
 *       Requires a valid JWT token in the `Authorization` header using the format:  
 *       `Bearer <your-token-here>`
 *     tags: [Auth]
 *     security:
 *        - bearerAuth: []
 *     responses:
 *       200:
 *         description: User logged out successfully
 *       400:
 *         description: Missing or Invalid Token
 *       500:
 *         description: Server error
 */
