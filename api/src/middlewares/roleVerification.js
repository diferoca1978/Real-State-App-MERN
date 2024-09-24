//const roles = require('../helpers/roles');

const checkRole = (...role) => {
  return (req, res, next) => {
    const userRole = req.role;

    if (!role.includes(userRole)) {
      return res.status(403).json({
        ok: false,
        message: 'Access denied 🤖',
      });
    }
    next();
  };
};

module.exports = checkRole;
