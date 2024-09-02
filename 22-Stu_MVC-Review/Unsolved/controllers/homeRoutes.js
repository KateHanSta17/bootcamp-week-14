const router = require('express').Router();

router.get('/', async (req, res) => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] }
  });
  const user = users.map((user) => user.get({ plain: true }));
  // TODO: Render template with Sequelize data
  res.render('homepage' , {
user ,
  });
});

module.exports = router;
