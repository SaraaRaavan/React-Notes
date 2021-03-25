import { ErrorBoundary } from "react-error-boundary";
import NotePad from "./note-pad/note-pad.js";
import ErrorFallback from "./components/error-fallback.js";
import "react-quill/dist/quill.snow.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <NotePad />
      </ErrorBoundary>
    </div>
  );
}

export default App;
