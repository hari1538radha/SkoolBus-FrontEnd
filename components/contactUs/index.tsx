import React from 'react';
import ContactUsBanner from '../../public/contactusBanner.svg';
import ContactInfo from './ContactInfo';
import Map from './Map';
import MessageUs from './MessageUs';
type Props = {};

const ContactUs: React.FC<Props> = (props) => {
  return (
    <div className="w-screen">
      
      <div className="flex flex-row w-screen justify-between px-[220px] py-10 ">
        <div>
          <ContactInfo />
          <Map/>
        </div>
        <MessageUs />
      </div>
    </div>
  );
};

export default ContactUs;
