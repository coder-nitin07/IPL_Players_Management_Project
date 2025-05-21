/**
 * @swagger
 *  tags:
 *      name: Player
 *      description: IPL Player Management Routes
 */


//********************   Create Player Documentation      ***********************//
/**
 * @swagger
 * /players:
 *   post:
 *     summary: Create a new IPL player
 *     tags: [Player]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Create_Player'
 *     responses:
 *       201:
 *         description: Player created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Create_Player'
 *       400:
 *         description: Bad request – invalid player data
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Create_Player:
 *       type: object
 *       required:
 *         - name
 *         - team
 *         - country
 *         - runs
 *         - image
 *         - role
 *         - salary
 *       properties:
 *         name:
 *           type: string
 *         team:
 *           type: string
 *         country:
 *           type: string
 *         runs:
 *           type: integer
 *         image:
 *           type: string
 *           format: uri
 *         role:
 *           type: string
 *         salary:
 *           type: number
 *       example:
 *         UUID: 6235734543256 (Automatically generated unique for each player) 
 *         name: Virat Kohli
 *         team: RCB
 *         country: India
 *         runs: 8000
 *         image: https://example.com/player.jpg
 *         role: Batsman
 *         salary: 1500000
 * 
 */




//********************   Get Player Documentation      ***********************//
/**
 * @swagger
 *  /player/{id}/description:
 *      get: 
 *          summary: Get details of a specific player by ID
 *          tags: [ Player ] 
 *          security:
 *              - bearerAuth: []
 *          parameter: 
 *              - in: path
 *                name: id
 *                required: true
 *                schema:
 *                  type: string
 *                description: mongoDB Object of the Player
 *          responses:
 *              200:
 *                  description: Player retrived successfully
 *                  content: 
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: String
 *                                      example: Successfully get the Player
 *                                  Player:
 *                                       $ref: '#/components/schemas/Get_Player'
 *              404:
 *                  description: Player not found
 *              500:
 *                  description: Server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Get_Player:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Auto-generated UUID
 *         name:
 *           type: string
 *         team:
 *           type: string
 *         country:
 *           type: string
 *         role:
 *           type: string
 *         runs:
 *           type: number
 *         salary:
 *           type: number
 *         image:
 *           type: string
 *           format: uri
 *       example:
 *         id: "4a3f4b60-9c8f-11ee-b9d1-0242ac120002"
 *         name: "Virat Kohli"
 *         team: "RCB"
 *         country: "India"
 *         role: "Batsman"
 *         runs: 7000
 *         salary: 15000000
 *         image: "https://res.cloudinary.com/demo/image/upload/sample.jpg"
 */





//********************   Update Player Documentation      ***********************//
/**
 * @swagger
 * /player/{id}:
 *   patch:
 *     summary: Update a player's details
 *     tags: [Player]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB ObjectId of the player
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               team:
 *                 type: string
 *               country:
 *                 type: string
 *               role:
 *                 type: string
 *               runs:
 *                 type: number
 *               salary:
 *                 type: number
 *               image:
 *                 type: string
 *                 format: uri
 *     responses:
 *       200:
 *         description: Player updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 updatedPlayer:
 *                   $ref: '#/components/schemas/Update_Player'
 *       404:
 *         description: Player not found
 *       500:
 *         description: Server error
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     Update_Player:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Auto-generated UUID of the player
 *         name:
 *           type: string
 *           description: Player's name
 *         team:
 *           type: string
 *           description: IPL team name
 *         country:
 *           type: string
 *           description: Country the player represents
 *         role:
 *           type: string
 *           description: Player's role (e.g., Batsman, Bowler, All-Rounder)
 *         runs:
 *           type: number
 *           description: Total runs scored by the player
 *         salary:
 *           type: number
 *           description: Player's salary in crores
 *         image:
 *           type: string
 *           format: uri
 *           description: Cloudinary image URL of the player
 *       example:
 *         id: "c9a1e5e1-9a1e-4f7d-bb85-abc123456789"
 *         name: "Virat Kohli"
 *         team: "RCB"
 *         country: "India"
 *         role: "Batsman"
 *         runs: 6789
 *         salary: 15
 *         image: "https://res.cloudinary.com/demo/image/upload/v1234567890/player.jpg"
 */





//********************   Delete Player Documentation      ***********************//
/**
 * @swagger
 * /player/{id}:
 *   delete:
 *     summary: Delete a player by ID
 *     tags: [Player]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB ObjectId of the player
 *     responses:
 *       200:
 *         description: Player deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Player deleted Successfully
 *                 deletedPlayer:
 *                   $ref: '#/components/schemas/Delete_Player'
 *       404:
 *         description: Player not found
 *       500:
 *         description: Server error
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     Delete_Player:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Auto-generated UUID of the player
 *         name:
 *           type: string
 *         team:
 *           type: string
 *         country:
 *           type: string
 *         runs:
 *           type: number
 *         image:
 *           type: string
 *         role:
 *           type: string
 *         salary:
 *           type: number
 *       example:
 *         id: "afc23412-23sd-234f-sdf3-3ff32a34ff12"
 *         name: "Virat Kohli"
 *         team: "RCB"
 *         country: "India"
 *         runs: 6700
 *         image: "https://example.com/image.jpg"
 *         role: "Batsman"
 *         salary: 1500000
 */







//********************   Get ALL Player Documentation      ***********************//
/**
 * @swagger
 * /player:
 *   get:
 *     summary: Get all players with filtering, pagination, and sorting
 *     tags: [Player]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: team
 *         schema:
 *           type: string
 *         description: Filter by team name
 *       - in: query
 *         name: country
 *         schema:
 *           type: string
 *         description: Filter by player country
 *       - in: query
 *         name: role
 *         schema:
 *           type: string
 *         description: Filter by player role
 *       - in: query
 *         name: runs
 *         schema:
 *           type: number
 *         description: Minimum runs to filter players
 *       - in: query
 *         name: salary
 *         schema:
 *           type: number
 *         description: Minimum salary to filter players
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Search by player name
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           enum: [runs, salary]
 *         description: Sort by runs or salary in descending order
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of items per page
 *     responses:
 *       200:
 *         description: Players fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 total:
 *                   type: integer
 *                   example: 32
 *                 players:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Get_All_Players'
 *       500:
 *         description: Failed to fetch the Players Data
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     Get_All_Players:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         team:
 *           type: string
 *         country:
 *           type: string
 *         runs:
 *           type: number
 *         image:
 *           type: string
 *         role:
 *           type: string
 *         salary:
 *           type: number
 */
