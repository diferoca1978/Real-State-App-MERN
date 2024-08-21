const fs = require('fs');
const path = require('path');
const { response } = require('express');
const { validationResult } = require('express-validator');

const validationResults = (req, res = response, next) => {
  const fieldErrors = validationResult(req);
  if (!fieldErrors.isEmpty()) {
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
    return res.status(400).json({
      ok: false,
      errors: fieldErrors.mapped(),
      oldData: req.body,
    });
  }

  next();
};

module.exports = validationResults;
