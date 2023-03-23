import SortIcon from '../../public/teachers/listview.svg';
import ArrowUp from '../../public/teachers/arrowup.svg';
type Props = {};

const Sort: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-row justify-between items-center m-7 mb-0">
      <div className="flex flex-row items-center">
        <small style={{ fontWeight: 700 }} className="text-[20px]">
          4302
        </small>
        <h1 className=" text-[20px] mx-2" style={{ fontWeight: 400 }}>
          Teachers Available
        </h1>
      </div>
      <div className="flex flex-row">
        <SortIcon />
        <h1 className=" text-[14px] opacity-90 ml-2">Sort by:{' '}</h1>
        <h1 style={{ fontWeight: 500 }} className="text-[14px] mx-1">
          High Rating
        </h1>
        <ArrowUp />
      </div>
    </div>
  );
};

export default Sort;
