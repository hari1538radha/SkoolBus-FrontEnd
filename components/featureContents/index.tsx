import React from 'react';
import ContentCard from './contentCard/ContentCard';
import NavBar from './navBar/NavBar';

type Props = {};

const FeatureContents: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col bg-[#F8F7ED] pl-[8%] pb-[3%] h-full">
      <h1 className="text-3xl font-[700] mt-[1.5%]">Featured Contents</h1>
      <NavBar />
      <div className="flex flex-row">
        <ContentCard
          title={'Surfing in Maldives'}
          description={
            'Agency provides a full service range including technical skills, design...'
          }
          rating={4.7}
          comment={42}
          userName={'Nicolas Appert'}
          userAvatar={'/avatar.svg'}
          categoryType={'Watch Now'}
        />
        <ContentCard
          title={'Surfing in Maldives'}
          description={
            'Agency provides a full service range including technical skills, design...'
          }
          rating={4.7}
          comment={42}
          userName={'Nicolas Appert'}
          userAvatar={'/avatar2.svg'}
          categoryType={'Listen Now'}
        />
        <ContentCard
          title={'Surfing in Maldives'}
          description={
            'Agency provides a full service range including technical skills, design...'
          }
          rating={4.7}
          comment={42}
          userName={'Nicolas Appert'}
          userAvatar={'/avatar3.svg'}
          categoryType={'Read More'}
        />
        <ContentCard
          title={'Surfing in Maldives'}
          description={
            'Agency provides a full service range including technical skills, design...'
          }
          rating={4.7}
          comment={42}
          userName={'Nicolas Appert'}
          userAvatar={'/avatar.svg'}
          categoryType={'Take Quiz'}
        />
      </div>
    </div>
  );
};

export default FeatureContents;
