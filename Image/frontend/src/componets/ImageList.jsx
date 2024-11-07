import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageList = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const response = await axios.get('http://localhost:5000/api/images');
            setImages(response.data);
        };
        fetchImages();
    }, []);

    return (
        <div>
            <h2>Uploaded Images</h2>
            <div>
                {images.map((img) => (
                    <img key={img._id} src={img.imagePath} alt="Uploaded" style={{ width: '200px', margin: '10px' }} />
                ))}
            </div>
        </div>
    );
};

export default ImageList;
