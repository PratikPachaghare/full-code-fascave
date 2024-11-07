const express = require('express');
const multer = require('multer');
const Image = require('../models/Image'); // Ensure this path is correct
const router = express.Router();
const path = require('path');

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

// Route to upload image
router.post('/upload', upload.single('image'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    const image = new Image({
        imagePath: `/uploads/${req.file.filename}`,
    });
    await image.save();
    res.status(200).json(image);
});

// Route to get all images
router.get('/', async (req, res) => {
    try {
        const images = await Image.find();
        res.status(200).json(images);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching images' });
    }
});


module.exports = router;
