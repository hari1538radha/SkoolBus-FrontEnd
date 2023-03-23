import Search from '../../public/searchBar/search.svg';
import Cut from '../../public/searchBar/cut.svg';

type Props = {};

const SearchBar: React.FC<Props> = (props) => {
  return (
    <div className=" flex flex-row rounded-lg items-center bg-[#F1F4F7] h-[109px]  px-[9%] py-5 w-full">
      <input
        placeholder="Type your keywords (Ex: Sayef, Alex, Domic...)"
        className="h-[54px] w-full rounded-l-lg shadow-lg pl-10 items-center"
      />
      <div className="h-[54px] bg-white justify-center py-3 px-4 items-center">
        <Cut />
      </div>
      <div className="bg-[#2DBB76] h-[54px] justify-center px-4 py-3 items-center rounded-r-lg">
        <Search />
      </div>
    </div>
  );
};

export default SearchBar;
