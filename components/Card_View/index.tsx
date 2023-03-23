import Image from 'next/image';
import { useState } from 'react';
import ClassDecsriptionCard from '../class/ClassDecsriptionCard';
import FilterOptions from '../filter';
import SearchBar from './SearchBar';
import ListIcon from '../../public/teachers/listview.svg';
import GridIcon from '../../public/gridview.svg';
import ArrowUp from '../../public/teachers/arrowup.svg';
import ClassDescriptionListView from '../class/ClassDescription_ListView';
type Props = {};

const CardView: React.FC<Props> = (props) => {
  const [grid, setGrid] = useState(false);
  return (
    <div className="">
      <Image
        src="/teachers/teacherBanner.svg"
        alt=""
        className="w-full"
        width={2}
        height={2}
      />
      <SearchBar />
      <div className="flex flex-row">
        <FilterOptions />
        <div className="px-5 w-full">
          <div className="flex flex-row justify-between items-center m-7 mb-0">
            <div className="flex flex-row items-center">
              <small style={{ fontWeight: 700 }} className="text-[30px]">
                Total 14302
              </small>
              <h1 className=" text-[30px] mx-2 text-[#828282]">Classes</h1>
            </div>
            <div className="flex flex-row items-center">
              <div onClick={() => setGrid(!grid)} className="cursor-pointer">
                {grid ? <GridIcon /> : <ListIcon />}
              </div>
              <h1 className=" text-[14px] opacity-90 ml-2">Sort by: </h1>
              <h1 style={{ fontWeight: 500 }} className="text-[14px] mx-1">
                High Rating
              </h1>
              <ArrowUp />
            </div>
          </div>
          <div className="flex flex-row flex-wrap w-full justify-around px-5">
            {grid ? (
              <>
                <ClassDescriptionListView
                  title={'Sanskrit'}
                  classIcon="sanskrit"
                />
                <ClassDescriptionListView
                  title={'Sanskrit'}
                  classIcon="sanskrit"
                />
                <ClassDescriptionListView
                  title={'Sanskrit'}
                  classIcon="sanskrit"
                />
                <ClassDescriptionListView
                  title={'Sanskrit'}
                  classIcon="sanskrit"
                />
                <ClassDescriptionListView
                  title={'Sanskrit'}
                  classIcon="sanskrit"
                />
              </>
            ) : (
              <>
                <ClassDecsriptionCard title={'Sanskrit'} classIcon="sanskrit" />
                <ClassDecsriptionCard title={'Sanskrit'} classIcon="sanskrit" />
                <ClassDecsriptionCard title={'Sanskrit'} classIcon="sanskrit" />
                <ClassDecsriptionCard title={'Sanskrit'} classIcon="sanskrit" />
                <ClassDecsriptionCard title={'Sanskrit'} classIcon="sanskrit" />
                <ClassDecsriptionCard title={'Sanskrit'} classIcon="sanskrit" />
                <ClassDecsriptionCard title={'Sanskrit'} classIcon="sanskrit" />
                <ClassDecsriptionCard title={'Sanskrit'} classIcon="sanskrit" />
                <ClassDecsriptionCard title={'Sanskrit'} classIcon="sanskrit" />
              </>
            )}
          </div>
          <button
            className="w-full shadow-md border-2 rounded-full border-[#FF4A6C] text-[18px] h-[60px] text-[#FF4A6C] my-10 px-10"
            style={{ fontWeight: 500 }}
          >
            LOAD MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardView;
