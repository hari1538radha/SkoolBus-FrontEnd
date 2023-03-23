import React from 'react';
import MenuIcons from './MenuIcons';

type Props = {};

const NavBar: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-row my-[2.5%] border-b-2  pb-[0.8%] w-fit items-center">
      <MenuIcons title="All" imagePath={'/FeatureContent/All.svg'} />
      <MenuIcons title="Audio" imagePath={'/FeatureContent/Audio.svg'} />
      <MenuIcons title="Video" imagePath={'/FeatureContent/Video.svg'} />
      <MenuIcons title="Writng" imagePath={'/FeatureContent/Writing.svg'} />
      <MenuIcons title="Documents" imagePath={'/FeatureContent/Document.svg'} />
      <MenuIcons title="Quiz" imagePath={'/FeatureContent/Quiz.svg'} />
    </div>
  );
};

export default NavBar;
