import React, { useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

export default function CropImage() {

  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ aspect: 1 });
  const [croppedImage, setCroppedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCropChange = (newCrop) => {
    setCrop(newCrop);
  };

  const handleImageLoaded = (image) => {
    console.log('Image loaded:', image);
  };

  const handleCropComplete = (crop) => {
    // You can perform additional actions when the user finishes cropping
    console.log('Crop complete:', crop);
  };

  const handleCropClick = () => {
    if (image) {
      const canvas = document.createElement('canvas');
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      const cropX = crop.x * scaleX;
      const cropY = crop.y * scaleY;
      const cropWidth = crop.width * scaleX;
      const cropHeight = crop.height * scaleY;

      canvas.width = cropWidth;
      canvas.height = cropHeight;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(
        image,
        cropX,
        cropY,
        cropWidth,
        cropHeight,
        0,
        0,
        cropWidth,
        cropHeight
      );

      const croppedImageUrl = canvas.toDataURL('image/jpeg');
      setCroppedImage(croppedImageUrl);
    }
  };

  return (
    <div>
      <label htmlFor="uploadImage">Upload Image:</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        id="uploadImage"
      />

      {image && (
        <div>
          <ReactCrop
            src={image}
            crop={crop}
            onChange={handleCropChange}
            onImageLoaded={handleImageLoaded}
            onComplete={handleCropComplete}
          />
          <button onClick={handleCropClick}>Crop Image</button>
        </div>
      )}

      {croppedImage && (
        <div>
          <h2>Cropped Image Preview:</h2>
          <img
            src={croppedImage}
            alt="Cropped"
            style={{ maxWidth: '100%', maxHeight: '400px' }}
          />
        </div>
      )}
    </div>
  );
};


