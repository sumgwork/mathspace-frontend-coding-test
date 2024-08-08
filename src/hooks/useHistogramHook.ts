import { useContext } from "react";
import { HistogramContext } from "../provider/HistogramProvider";

/**
 * This hook only returns the context values from the HistogramContext
 * Recommended to be used in order to facilitate single import in the components
 */
const useHistogramHook = () => {
  const {
    barValues,
    maxGraphValue,
    setBarValue,
    setMaxGraphValue,
    readOnlyMode,
    toggleReadOnlyMode,
  } = useContext(HistogramContext);
  return {
    barValues,
    maxGraphValue,
    setBarValue,
    setMaxGraphValue,
    readOnlyMode,
    toggleReadOnlyMode,
  };
};

export default useHistogramHook;
