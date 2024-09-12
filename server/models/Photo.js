const { Schema, model } = require('mongoose');

const photoSchema = new Schema(
  {
      userId: {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
      name: {
        type: String,
        required: true,
        },
      caption: {
        type: String,
        required: true,
        },
      image: {
        data: Buffer,
        contentType: String,
        },
      URL: {
        type: String,
        trim: true,
      },
    },
  );

const Photo = model('Photo', photoSchema);

module.exports = Photo;
    // file type
    // ios
    // Aperture
    // lens type