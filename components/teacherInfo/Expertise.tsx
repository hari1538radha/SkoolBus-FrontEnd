type Props = {};

const Expertise: React.FC<Props> = (props) => {
  return (
    <div className="mx-[14%]">
      <h1 className="text-[30px] my-6" style={{ fontWeight: 600 }}>
        Area of Expertise
      </h1>
      <div className="flex flex-col">
        <div className="flex flex-row  items-center">
          <h1
            className="600 text-[16px] text-[#000000] mx-3"
            style={{ fontWeight: 400 }}
          >
            Communication
          </h1>
        </div>
        <div className="flex flex-row  items-center">
          <h1
            className="600 text-[16px] text-[#000000] mx-3"
            style={{ fontWeight: 400 }}
          >
            Build Personal Brand
          </h1>
        </div>
        <div className="flex flex-row  items-center">
          <h1
            className="600 text-[16px] text-[#000000] mx-3"
            style={{ fontWeight: 400 }}
          >
            Strategy Development
          </h1>
        </div>
        <div className="flex flex-row items-center">
          <h1
            className="600 text-[16px] text-[#000000] mx-3"
            style={{ fontWeight: 400 }}
          >
            Creative
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
