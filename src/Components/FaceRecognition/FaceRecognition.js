import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  const divStyle = {
    top: box.topRow,
    right: box.rightCol,
    bottom: box.bottomRow,
    left: box.leftCol
  }
    return (
        <div className='center ma'>
          <div className='absolute ma2'>
            <img src={imageUrl} alt='' width='500px' height='auto' id='inputImage'/>
            <div className='bounding-box' style={divStyle}></div>
           </div>
        </div>
    );
}

export default FaceRecognition;