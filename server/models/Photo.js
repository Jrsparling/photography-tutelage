const mongoose = require('mongoose');
const User = require('./user');

const { Schema } = mongoose;

const photoSchema = new Schema({
      userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      URL: {
        type: String,
        required: true,
        trim: true
      },
    });
    // file type
    // ios
    // Aperture
    // lens type