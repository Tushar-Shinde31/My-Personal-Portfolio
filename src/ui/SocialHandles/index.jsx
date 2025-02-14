import React from 'react';
import './SocialHandles.css';
import { socialHandles } from '../../data';

const SocialHandles = () => {
  return (
    <div className="social__handles__container">
      {socialHandles.map((media, index) => (
        <a
          href={media.link}
          target="_blank"
          rel="noopener noreferrer"
          className="social__handle"
          key={index}
        >
          <div className="icon__container">
            {media.icon}
            <span className="tooltip">{media.name}</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialHandles;
