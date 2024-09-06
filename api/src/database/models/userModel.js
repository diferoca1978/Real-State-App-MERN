const { model, Schema } = require('mongoose');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default:
        'https://res.cloudinary.com/carofedi/image/upload/v1725487708/realEstate_images/default_avatar_q3hbli.png',
    },
    cloudinary_id: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = model('User', userSchema);
