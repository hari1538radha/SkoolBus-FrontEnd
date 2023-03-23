import Footer from '../components/navigation/footer/Footer';
import Header from '../components/navigation/header/Header';
import PatnerBrands from '../components/patneredBrands/PatnerBrands';
import SignInRegister from '../components/signin-register/SignInRegister';

export default function Home() {
  return (
    <div className="w-screen">
      <Header />
      <SignInRegister
        action="Already on Skoolbus?"
        inputField1="Your Name"
        inputField2="Create password"
        actionName="Login"
        buttonName="Join for free"
        title="Sign Up"
        isLogin={false}
        backgroundImage={'/signInBg.svg'}
      />
      <PatnerBrands />
      <Footer />
    </div>
  );
}
