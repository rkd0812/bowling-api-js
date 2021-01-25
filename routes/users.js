const express = require('express');
const router = express.Router();

/**
 * @swagger
 *  /users:
 *    get:
 *      tags:
 *      - user
 *      description: 모든 사용자 조회
 *      produces:
 *      - application/json
 *      parameters:
 *        - in: query
 *          name: id
 *          required: false
 *          schema:
 *            type: string
 *            description: 사용자 id
 *      responses:
 *       200:
 *        description: 사용자 조회
 *        schema:
 *          $ref: '#/components/schemas/User'
 */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
