import React from 'react';
import ImageUpload from './componets/ImageUpload';
import ImageList from './componets/ImageList';

const App = () => {
    return (
        <div>
            <h1>Image Upload App</h1>
            <ImageUpload />
            <ImageList />
        </div>
    );
};

export default App;
