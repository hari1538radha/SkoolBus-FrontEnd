import Course from '../components/courses';
import CourseSlide from '../components/courses/CourseSlide';
import Footer from '../components/navigation/footer/Footer';
import Header from '../components/navigation/header/Header';
import Reviews from '../components/reviews';
import TeacherInfo from '../components/teacherInfo';
import TeachersSlide from '../components/teachers/TeachersSlide';

export default function teachers() {
  return (
    <>
      <Header />
      <TeacherInfo />
      <CourseSlide
        title="My Courses"
        arrowBgColor="#828282"
        backgroundColor="#ffffff"
      />
      <Reviews />
      <TeachersSlide
        title="Similar Teachers"
        arrowBgColor="#828282"
        backgroundColor="#ffffff"
      />
      <Footer />
    </>
  );
}
