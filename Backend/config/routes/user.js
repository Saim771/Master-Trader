const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/auth');
const { 
  getUsers,
  getUser,
  updateUser,
  deleteUser 
} = require('../controllers/users');

// Protected routes (require valid JWT)
router.route('/')
  .get(protect, getUsers);

router.route('/:id')
  .get(protect, getUser)
  .put(protect, updateUser)
  .delete(protect, deleteUser);

module.exports = router;
  
