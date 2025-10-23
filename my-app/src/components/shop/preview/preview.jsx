import React from 'react';

import Cards from '../cards/cards.jsx';
import './preview.css';

const Preview = () => {
  return (
    <>
      <div className="preview-container">
        <h3 className="tc">¡Explore nuestro catálogo!</h3>
        <div className="cards-wrapper">
          <Cards />
        </div>
      </div>
    </>
  )
}

export default Preview;