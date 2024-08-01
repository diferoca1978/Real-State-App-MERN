import { Schema, model } from 'mongoose';

interface Iproperty {
  propertyname: string;
  neighborhood: string;
  address: string;
  price: string;
  description: string;
  propertyType: string;
  typeOffer: string;
  bedrooms: string;
  bathrooms: string;
  parking: string;
  image: string;
}

const propretySchema = new Schema<Iproperty>(
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
  },
  { timestamps: true }
);

export const Property = model<Iproperty>('Property', propretySchema);
