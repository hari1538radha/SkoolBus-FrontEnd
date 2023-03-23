import Carousel from '../components/carouselView';
import Classes from '../components/class';
import Course from '../components/courses';
import FeatureContents from '../components/featureContents';
import Footer from '../components/navigation/footer/Footer';
import Header from '../components/navigation/header/Header';
import TeachersSlide from '../components/teachers/TeachersSlide';

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <FeatureContents />
      <Course/>
      <Classes/>
      <TeachersSlide
        title="Teachers"
        arrowBgColor="#828282"
        backgroundColor="#ffffff"
      />
      <Footer />

    </>
  );
}
