import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
    const [image, setImage] = useState(null);

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);

        try {
            await axios.post('http://localhost:5000/api/images/upload', formData);
            alert('Image uploaded successfully!');
            setImage(null);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <form onSubmit={handleUpload}>
            <input type="file" accept="image/*" onChange={handleFileChange} required />
            <button type="submit">Upload Image</button>
        </form>
    );
};

export default ImageUpload;
