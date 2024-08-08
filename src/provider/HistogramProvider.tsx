/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useState } from "react";
import {
  INITIAL_BAR_VALUES,
  INITIAL_HISTOGRAM_SIZE,
} from "../constants/config";

interface IHistogramProvider {
  maxGraphValue: number;
  setMaxGraphValue: (newValue: number) => void;
  barValues: number[];
  setBarValue: (barIndex: number, newValue: number) => void;
  readOnlyMode: boolean;
  toggleReadOnlyMode: () => void;
}

export const HistogramContext = createContext<IHistogramProvider>({
  maxGraphValue: INITIAL_HISTOGRAM_SIZE,
  setMaxGraphValue: (_newValue: number): void => {},
  barValues: [],
  setBarValue: (_barIndex: number, _newValue: number): void => {},
  readOnlyMode: false,
  toggleReadOnlyMode: (): void => {},
});

export const HistogramProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [maxGraphValue, setMaxGraphValue] = useState<number>(
    INITIAL_HISTOGRAM_SIZE
  );
  const [barValues, setBarValues] = useState<number[]>(INITIAL_BAR_VALUES);
  const [readOnlyMode, setReadOnlyMode] = useState<boolean>(false);

  /**
   * Reason for storing bar values in context is to ensure that the histogram's size doesn't go below
   * the bar's value which has maximum height
   */
  const setBarValue = (barIndex: number, newValue: number) => {
    if (newValue > maxGraphValue) return; // don't allow the bar to be bigger than the graph
    const newBarValues = [...barValues];
    newBarValues[barIndex] = newValue;
    setBarValues(newBarValues);
  };

  const setGraphValue = (newValue: number) => {
    const maxBarValue = Math.max(...barValues);

    if (newValue < maxBarValue) return; // don't allow the graph to be smaller than the bar's value
    setMaxGraphValue(newValue);
  };

  const toggleReadOnlyMode = () => {
    setReadOnlyMode((prev) => !prev);
  };

  return (
    <HistogramContext.Provider
      value={{
        maxGraphValue,
        setMaxGraphValue: setGraphValue,
        barValues,
        setBarValue,
        readOnlyMode,
        toggleReadOnlyMode,
      }}
    >
      {children}
    </HistogramContext.Provider>
  );
};
