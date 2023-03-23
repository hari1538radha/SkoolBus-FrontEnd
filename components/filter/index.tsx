import Categories from "./Categories";
import Duration from "./Duration";
import PriceRange from "./PriceRange";
import Ratings from "./Ratings";
import SkillLevel from "./SkillLevel";

type Props = {};

const FilterOptions: React.FC<Props> = (props) => {
  return (
    <div className="w-[23%] ml-[10%] py-6">
      <Categories/>
      <PriceRange/>
      <Duration/>
      <SkillLevel/>
      <Ratings/>
    </div>
  );
};

export default FilterOptions;
