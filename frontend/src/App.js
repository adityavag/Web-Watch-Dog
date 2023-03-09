import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState("");
  return (
    <div className="container h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-2xl font-medium text-blue-500 mb-4">
          Web Watch Dog<span role="img" aria-label="dog"> 🐕</span>
        </h1>
        <div>
          <input
            className="outline-none border-2 border-blue-500 rounded-md backdrop-blur-xl bg-white/20 shadow-md px-3 py-3"
            type="text"
            placeholder="Enter URL"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
            />
            <button 
              className="bg-blue-500 text-white px-8 py-3 ml-4 rounded-md"
              onClick={test}>
              Submit
            </button>
            <div className="mt-5">
              {/* {} */}
            </div>
        </div>
      </div> 
    </div>
  );
}

export default App;
