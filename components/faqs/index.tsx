import React from 'react';
import ContactUsBanner from '../../public/contactusBanner.svg';
import Questions from './Questions';

type Props = {};

const Faqs: React.FC<Props> = (props) => {
  return (
    <div className="w-screen">
      {/* <ContactUsBanner /> */}
      <Questions />
      <Questions />
      <Questions />
      <Questions />
      <Questions />
    </div>
  );
};

export default Faqs;
