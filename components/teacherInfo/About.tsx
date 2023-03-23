import Expertise from "./Expertise";
import Highlights from "./HighLights";

type Props = {};

const About: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col justify-end ml-[30%]">
      <h1 className="text-[30px] my-8" style={{ fontWeight: 600 }}>
        About Me
      </h1>
      <h1 className="text-[15px] opacity-60" style={{ fontWeight: 500 }}>
        Imperdiet aliquam elementum rhoncus et aliquet nec elementum proin
        interdum. Interdum scelerisque senectus adipiscing lorem condimentum
        adipiscing amet, id enim. Integer cursus in nec in condimentum. Maecenas
        commodo, enim, praesent pellentesque egestas sed neque.
        <br></br>
        <br></br>
        <br></br>Lacus fringilla pharetra tortor, fermentum ornare hendrerit.
        Commodo habitant pharetra dignissim tempus nec. At eget sed facilisis id
        aliquam elementum, porttitor eu.
      </h1>
      <div className="flex flex-row">
        <Highlights/>
        <Expertise/>
      </div>
    </div>
  );
};

export default About;
