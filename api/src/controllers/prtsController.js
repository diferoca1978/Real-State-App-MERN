const { response, request } = require('express');
const Property = require('../database/models/propertyModel');

const showAllByUserId = async (req, res = response) => {
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
  const {
    propertyName,
    neighborhood,
    address,
    price,
    description,
    propertyType,
    typeOffer,
    bedrooms,
    bathrooms,
    parking,
    imageUrls,
  } = req.body;

  try {
    const property = new Property({
      propertyName,
      neighborhood,
      address,
      price,
      description,
      propertyType,
      typeOffer,
      bedrooms,
      bathrooms,
      parking,
      imageUrls,
      user: req.uid,
    });
    const propertySaved = await property.save();

    res.status(201).json({
      ok: true,
      propertySaved,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: 'Property could not be saved.',
    });
  }
};

const updateProperty = async (req = request, res = response) => {
  const property = req.params.id;

  try {
    let propertyToUpdate = await Property.findById(property);

    if (!propertyToUpdate) {
      return res.status(404).json({
        ok: false,
        message: 'Property not found ❌',
      });
    }

    if (propertyToUpdate.user.toString() !== req.uid) {
      return res.status(401).json({
        ok: false,
        message: 'Unauthorized to make changes',
      });
    }

    const newProperty = {
      propertyName: req.body.propertyName,
      neighborhood: req.body.neighborhood,
      address: req.body.address,
      price: req.body.price,
      description: req.body.description,
      propertyType: req.body.propertyType,
      typeOffer: req.body.typeOffer,
      bedrooms: req.body.bedrooms,
      bathrooms: req.body.bathrooms,
      parking: req.body.parking,
      image: req.body.image,
      user: req.uid,
    };

    const propertyUpdated = await Property.findByIdAndUpdate(
      propertyToUpdate.id,
      newProperty,
      { new: true }
    );
    res.json({
      ok: true,
      Message: 'Success 🚀 update process done',
    });
  } catch (error) {
    console.timeLog({ error });
    res.status(500).json({
      ok: false,
      message: 'Upss!! an error has occurred with the upload process',
    });
  }
};

const deleteProperty = async (req = request, res = response) => {
  const userId = req.uid;
  const property = req.params.id;

  try {
    const propertyTodelete = await Property.findById(property);

    if (!propertyTodelete) {
      return res.status(404).json({
        ok: false,
        message: 'Property not found ❌',
      });
    }

    if (propertyTodelete.user.toString() !== userId) {
      return res.status(401).json({
        ok: false,
        message: 'Unauthorized to delete this property',
      });
    }

    const propertyDeleted = await Property.findByIdAndDelete(
      propertyTodelete.id
    );

    if (propertyDeleted) {
      res.json({
        ok: true,
        message: 'Success 🚀 property was deleted',
      });
    }
  } catch (error) {
    console.log({ error });
    res.status(500).json({
      ok: false,
      message: 'Upss!! an error has occurred with the delete process',
    });
  }
};

module.exports = {
  showAllByUserId,
  createProperty,
  updateProperty,
  deleteProperty,
};
