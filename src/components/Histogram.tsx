import ResizableBar from "./ResizableBar";
import classNames from "classnames";
import useHistogramHook from "../hooks/useHistogramHook";
import { HORIZONTAL_LINE_INTERVAL } from "../constants/config";

interface HistogramProps {
  className?: string;
}

const Histogram = ({ className }: HistogramProps) => {
  const { barValues, maxGraphValue, setBarValue } = useHistogramHook();

  const yAxisMarks = Array.from({ length: maxGraphValue + 1 }, (_, idx) => idx); // Array to mark numbers along the Y-Axis

  return (
    <div className={classNames("flex flex-col justify-center", className)}>
      <div className="border-slate-400 rounded-lg border min-w-[600px] px-8 py-2">
        <h2>Histogram</h2>
        <div className="relative">
          <div
            className={classNames(
              "flex justify-between items-end border-l-2 border-b-2 border-slate-400 bg-slate-100 px-8",
              "h-[40vh]"
            )}
          >
            {barValues.map((bar, idx) => (
              <ResizableBar
                key={idx}
                value={bar}
                barIndex={idx}
                maxValue={maxGraphValue}
                changeBarValue={(newValue, barIndex) => {
                  setBarValue(barIndex, newValue);
                }}
              />
            ))}
          </div>
          {/* Y-axis markings */}
          <div className="absolute left-0 top-0 h-full">
            {yAxisMarks.map((mark) => (
              <div
                key={mark}
                className="text-xs absolute"
                style={{
                  bottom: `${(mark / maxGraphValue) * 100 - 1}%`,
                  left: "-20px",
                }}
              >
                {mark}
              </div>
            ))}
          </div>
          {/* Horizontal lines */}
          {yAxisMarks
            .filter((mark) => mark % HORIZONTAL_LINE_INTERVAL === 0) // Hide lines not falling on the interval
            .map((mark) => (
              <div
                key={mark}
                className="absolute w-full bg-gray-300 z-10 h-[1px]"
                style={{
                  bottom: `${(mark / maxGraphValue) * 100}%`,
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Histogram;
