const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    imagePath: {
        type: String,
        required: true,
    },
});

const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;
