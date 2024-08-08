import classNames from "classnames";
import { barColorClasses } from "../constants/barColors";
import { useRef } from "react";
import ResizeHandle from "./ResizeHandle";
import { MAX_HISTOGRAM_VALUE } from "../constants/config";
import useHistogramHook from "../hooks/useHistogramHook";

const PIXEL_DRAG_SIZE = 30; // Delta in number of pixels to change the value of bar
// TODO: This should correspond to change with the size of the histogram

interface ResizableBarProps {
  value: number;
  maxValue?: number;
  barIndex: number;
  changeBarValue: (newValue: number, barIndex: number) => void;
}

const ResizableBar: React.FC<ResizableBarProps> = ({
  value,
  maxValue = MAX_HISTOGRAM_VALUE,
  barIndex,
  changeBarValue,
}) => {
  const clientY = useRef<number>(0); // Used to keep track of the position of the cursor
  const { readOnlyMode } = useHistogramHook();
  /**
   * Handles the start of a drag event by setting the initial clientY position
   * and adding event listeners for drag movement and end.
   */
  const handleDragStart = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    clientY.current = e.clientY;

    /**
     * Handles the movement during a drag event by calculating the change in position,
     * adjusting the step based on the drag size, and updating the bar value accordingly.
     */
    const handleDragMove = (moveEvent: PointerEvent) => {
      const deltaY = clientY.current - moveEvent.clientY;
      const stepAdjustment = Math.round(deltaY / PIXEL_DRAG_SIZE);
      changeBarValue(Math.max(0, value + stepAdjustment), barIndex);
    };

    /**
     * Handles the end of a drag event by removing event listeners.
     */
    const handleDragEnd = () => {
      document.removeEventListener("pointermove", handleDragMove);
      document.removeEventListener("pointerup", handleDragEnd);
    };

    document.addEventListener("pointermove", handleDragMove);
    document.addEventListener("pointerup", handleDragEnd);
  };

  return (
    <div
      className={classNames(
        "min-w-20 text-center font-bold border border-b-0 border-slate-600 relative rounded-t-sm z-20",
        barColorClasses[barIndex]
      )}
      style={{ height: `${(value / maxValue) * 40}vh` }}
    >
      {value}
      {!readOnlyMode && <ResizeHandle onDrag={handleDragStart} />}
    </div>
  );
};

export default ResizableBar;
