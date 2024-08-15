const { Schema, model } = require('mongoose');

const propertySchema = new Schema(
  {
    propertyname: {
      type: String,
      required: true,
      trim: true,
    },
    neighborhood: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    propertyType: {
      type: String,
      required: true,
      trim: true,
    },
    typeOffer: {
      type: String,
      required: true,
      trim: true,
    },
    bedrooms: {
      type: String,
      required: true,
      trim: true,
    },
    bathrooms: {
      type: String,
      required: true,
      trim: true,
    },
    parking: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model('Property', propertySchema);
