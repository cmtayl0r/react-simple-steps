import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  {
    /* 
    Create a state variable `step` and a function `setStep` to update the state.
    Initialize the state with 1.
    */
  }
  const [step, setStep] = useState(1);

  const handlePrevious = () => {
    // handle previous click
    if (step > 1) setStep(step - 1);
  };
  const handleNext = () => {
    // handle next click
    if (step < 3) setStep(step + 1);
  };

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      <p className="message">
        {/* Display the message from array based on the current step */}
        Step {step}: {messages[step - 1]}
      </p>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#FFF" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#FFF" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
