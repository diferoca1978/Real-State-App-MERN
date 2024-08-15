const { response, request } = require('express');
const Property = require('../database/models/propertyModel');

const showAll = async (req, res = response) => {
  const userId = req.uid;

  try {
    const properties = await Property.find({ user: userId }).populate(
      'user',
      'name'
    );

    res.json({
      ok: true,
      properties,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: 'Contact with customer service',
    });
  }
};

const createProperty = async (req = request, res = response) => {
  const newProperty = new Property(req.body);

  try {
    newProperty.user = req.uid;

    const propertySaved = await newProperty.save();

    res.status(201).json({
      ok: true,
      property: {
        propertyId: newProperty.id,
        property: propertySaved,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: 'Contact with customer service',
    });
  }
};

module.exports = {
  showAll,
  createProperty,
};
