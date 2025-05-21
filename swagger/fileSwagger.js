
/**
 * @swagger
 * tags:
 *   name: File
 *   description: Image upload APIs
 */


/**
 * @swagger
 * /file/uploadFile:
 *   post:
 *     summary: Upload an image file to Cloudinary
 *     tags: [File]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/FileUpload'
 *     responses:
 *       200:
 *         description: Image uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Image Uploaded Successfully
 *                 imageUrl:
 *                   type: string
 *                   example: https://res.cloudinary.com/demo/image/upload/v12345678/sample.jpg
 *       400:
 *         description: No file uploaded
 *       500:
 *         description: Error while uploading the image to Cloudinary
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     FileUpload:
 *       type: object
 *       properties:
 *         file:
 *           type: string
 *           format: binary
 *           description: The image file to upload
 */
