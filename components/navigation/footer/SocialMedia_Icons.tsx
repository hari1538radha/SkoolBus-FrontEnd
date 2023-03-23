import React from 'react';
import Facebook from '../../../assests/icon-facebook.svg';
import Linkedin from '../../../assests/icon-linkedin.svg';
import Slack from '../../../assests/icon-slack.svg';
import Twitter from '../../../assests/icon-twitter.svg';

type Props = {};

const SocialMediaIcons: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-row">
      <ul className="flex flex-row mb-5">
        <a href="#" className="mr-10">
          <Facebook />
        </a>
        <a href="#" className="mr-10">
          <Linkedin />
        </a>
        <a href="#" className="mr-10">
          <Slack />
        </a>
        <a href="#" className="mr-10">
          <Twitter />
        </a>
      </ul>
    </div>
  );
};

export default SocialMediaIcons;
