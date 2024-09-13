const { response, request } = require('express');
const fs = require('fs');
const Property = require('../database/models/propertyModel');
const cloudinary = require('../helpers/cloudinaryConf');

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
    propertyname,
    neighborhood,
    address,
    price,
    description,
    propertyType,
    typeOffer,
    bedrooms,
    bathrooms,
    parking,
  } = req.body;
  try {
    // Upload image to cloudinary
    const { path } = req.file;
    const uploadResp = await cloudinary.uploader.upload(path, {
      upload_preset: 'real_estate',
      folder: 'real_estate_img/Properties_Images',
      transformation: [
        {
          quality: 'auto',
          fetch_format: 'auto',
        },
        {
          width: 1280,
          height: 855,
          crop: 'fill',
          gravity: 'auto',
        },
      ],
    });

    console.log(uploadResp);

    if (uploadResp) {
      const property = new Property({
        propertyname,
        neighborhood,
        address,
        price,
        description,
        propertyType,
        typeOffer,
        bedrooms,
        bathrooms,
        parking,
        image: uploadResp.secure_url,
        cloudinary_id: uploadResp.public_id,
        user: req.uid,
      });
      const propertySaved = await property.save();

      // Remove the uploaded image from the uploads folder created by multer
      fs.unlinkSync(path);

      res.status(201).json({
        ok: true,
        propertySaved,
      });
    }
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

    //to destroy the existing image in cloudinary.
    const { path } = req.file;
    await cloudinary.uploader.destroy(propertyToUpdate.cloudinary_id);

    //to upload the new image.
    let uploadResp;

    if (req.file) {
      uploadResp = await cloudinary.uploader.upload(path, {
        upload_preset: 'real_estate',
        folder: 'real_estate_img/Properties_Images',
      });
    }
    console.log(uploadResp);

    const newProperty = {
      propertyname: req.body.propertyname,
      neighborhood: req.body.neighborhood,
      address: req.body.address,
      price: req.body.price,
      description: req.body.description,
      propertyType: req.body.propertyType,
      typeOffer: req.body.typeOffer,
      bedrooms: req.body.bedrooms,
      bathrooms: req.body.bathrooms,
      parking: req.body.parking,
      image: uploadResp?.secure_url || property.image,
      cloudinary_id: uploadResp?.public_id || propertyToUpdate,
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
    fs.unlinkSync(path);
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
        message: 'Property not found',
      });
    }

    if (propertyTodelete.user.toString() !== userId) {
      return res.status(401).json({
        ok: false,
        message: 'Unauthorized to delete this property',
      });
    }

    await cloudinary.uploader.destroy(propertyTodelete.cloudinary_id);
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
