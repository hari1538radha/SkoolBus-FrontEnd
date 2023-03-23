import Footer from '../components/navigation/footer/Footer';
import Header from '../components/navigation/header/Header';
import PatnerBrands from '../components/patneredBrands/PatnerBrands';
import SignInRegister from '../components/signin-register/SignInRegister';

export default function Home() {
  return (
    <div className="w-screen">
      <Header />
      <SignInRegister
        action="New to Skoolbus?"
        inputField1="Your Name"
        inputField2="Your password"
        actionName="Sign Up"
        buttonName="Login"
        title="Welcome Back"
        isLogin={true}
        backgroundImage={'/loginBg.svg'}
      />
      <PatnerBrands />
      <Footer />
    </div>
  );
}
