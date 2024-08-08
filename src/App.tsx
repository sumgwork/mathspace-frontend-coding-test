import { HistogramProvider } from "./provider/HistogramProvider";
import SolutionComponent from "./components/SolutionComponent";

function App() {
  return (
    <HistogramProvider>
      <div className="prose min-h-screen max-w-6xl mx-auto bg-white py-8 px-2 lg:px-6">
        <div className="border-b mb-8">
          <h1>Mathspace Frontend Test Solution</h1>
          <p>
            Submitted by: <strong>Sumit Govil</strong>
          </p>
        </div>
        {/* Actual component sits here */}
        <SolutionComponent />
      </div>
    </HistogramProvider>
  );
}

export default App;
