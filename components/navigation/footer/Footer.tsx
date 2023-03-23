import menu from './constants';
import ContactUs from './ContactUs';
import SocialMediaIcons from './SocialMedia_Icons';

type Props = {};

const Footer: React.FC<Props> = (props) => {
  return (
    <div
      className="relative flex flex-row items-center justify-evenly w-full h-full pt-[5%] pb-[2%] mt-[2%]"
      style={{
        backgroundImage: `url('/Wave.svg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="flex flex-col">
        <h1 className="text-xs font-bold text-gray-300 mb-1">FOLLOW US</h1>
        <SocialMediaIcons />
        <div>
          <h1 className="text-xs font-bold text-gray-300 mb-3">MENU</h1>
          <div className="flex flex-col flex-wrap h-[12rem] w-[10rem]">
            {menu.map((item, index) => (
              <a href="#" key={index} className="mb-3 mr-10">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default Footer;
