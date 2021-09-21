const router = require('express').Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  const allUsers = await User.find({});
  res.json(allUsers);
});

router.get('/:id', (req, res) => {
  res.json({
    message: `Infos of user whose id is ${req.params.id}.`,
  });
});

router.post('/', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const user = await newUser.save();
    res.json(user);
  } catch (err) {
    console.log('SERGEN');
    console.log(err);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (user) {
      return res.json(user);
    } else {
      return res.status(404).json({
        message: 'User not found.',
      });
    }
  } catch (err) {
    console.log(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete({ _id: req.params.id });
    if (deletedUser) {
      return res.json(deletedUser);
    } else {
      return res.status(404).json({
        message: 'User not found.',
      });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
