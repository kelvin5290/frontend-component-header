import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ src, alt, userDomain, ...attributes }) => (
  <div  className="mx-auto d-flex flex-row"> 
  <img src={src} alt={alt} {...attributes} />
  {userDomain && (
    <img
      className="ml-2"
      onError={(ev)=>{ev.style.display = 'none'}}
      src={`https://d2ttnbhfjsw4ca.cloudfront.net/${userDomain}.png`}
      alt={alt}
      {...attributes}
    />
  )}
</div>
);

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const LinkedLogo = ({
  href,
  src,
  alt,
  userDomain,
  ...attributes
}) => (
  <a href={href} {...attributes} className="mx-auto d-flex flex-row">
    <img className="d-block" src={src} alt={alt} />
    {userDomain && (
    <img
      className="ml-2"
      onError={(ev)=>{ev.style.display = 'none'}}
      src={`https://d2ttnbhfjsw4ca.cloudfront.net/${userDomain}.png`}
      alt={alt}
      {...attributes}
    />
  )}
  </a>
  
);

LinkedLogo.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export { LinkedLogo, Logo };
export default Logo;
