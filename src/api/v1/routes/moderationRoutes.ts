import { Router } from "express";
import {
	moderatePost,
	flagUser,
	getPostById,
	getUserProfile,
	getFlaggedContentStats,
} from "../controllers/moderationController";

const router: Router = Router();

router.get("/post/:id", getPostById);
router.post("/post/:id/moderate", moderatePost);
router.get("/user/:id/profile", getUserProfile);
router.post("/user/:id/flag", flagUser);
router.get("/content/flags/stats", getFlaggedContentStats);

export default router;

/**
 * @swagger
 * /moderation/post/{id}:
 *   get:
 *     summary: Get a post by ID
 *     tags: [Moderation, Public]  # Marked as Public
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Post ID
 *     responses:
 *       200:
 *         description: Post details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Post'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */
router.get("/post/:id", getPostById);

/**
 * @swagger
 * /moderation/post/{id}/moderate:
 *   post:
 *     summary: Moderate a post
 *     tags: [Moderation]  # Internal only, no Public tag
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Post ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               action:
 *                 type: string
 *                 enum: [flag, hide, remove]
 *               reason:
 *                 type: string
 *     responses:
 *       200:
 *         description: Post moderated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */
router.post("/post/:id/moderate", moderatePost);