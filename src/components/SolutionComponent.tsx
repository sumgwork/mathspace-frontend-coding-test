import YAxisMaximumValueInput from "./YAxisMaximumValueInput";
import Histogram from "./Histogram";
import ReadOnlyToggle from "./ReadOnlyToggle";

const SolutionComponent = () => {
  return (
    <div className="flex flex-col items-center gap-16">
      <YAxisMaximumValueInput />
      <Histogram className="flex-1" />
      <ReadOnlyToggle />
    </div>
  );
};

export default SolutionComponent;
