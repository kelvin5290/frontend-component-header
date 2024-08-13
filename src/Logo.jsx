import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ src, alt, userDomain, ...attributes }) => (
  <>
  <img src={src} alt={alt} {...attributes} />
  {userDomain && (
    <img
      src={`https://d2ttnbhfjsw4ca.cloudfront.net/${userDomain}.png`}
      alt={alt}
      {...attributes}
    />
  )}
</>
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
  <a href={href} {...attributes}>
    <img className="d-block" src={src} alt={alt} />
    {userDomain && (
    <img
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
