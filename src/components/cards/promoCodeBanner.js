import React from 'react';

const PromoCodeBanner = ({ blok }) => {
  return (
    <div className="su-text-center">
      <h3>{blok.introText}</h3>
      <div>{blok.promoCode}</div>
    </div>
  )
}

export default PromoCodeBanner;