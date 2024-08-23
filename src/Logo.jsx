import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ src, alt, userDomain, ...attributes }) => (
  <div  className="d-flex flex-row"> 
  <img src={src} alt={alt} {...attributes} />
  {/* {userDomain && (
    <img
      className="logo ml-2"
      onError={i => i.target.src=''}
      src={`https://d2ttnbhfjsw4ca.cloudfront.net/${userDomain}.png`}
    />
  )} */}
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
  <a href={href} {...attributes} className="d-flex flex-row">
    <img className="logo" src={src} alt={alt} />
    {userDomain && (
    <img
      className="logo ml-2"
      onError={i => {i.target.src='';i.className='';i.style.display='none';}}
      src={`https://d2ttnbhfjsw4ca.cloudfront.net/${userDomain}.png`}
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
