import React, { useState } from "react";
import "./../styles/App.css";

const Step = ({ step, formData, handleChange, nextStep, prevStep, handleSubmit }) => {
  return (
    <div>
      {step === 1 && (
        <div>
          <input
            id="first_name"
            type="text"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
          />
          <input
            id="last_name"
            type="text"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
      )}

      {step === 2 && (
        <div>
          <input
            id="model"
            type="text"
            placeholder="Car Model"
            value={formData.model}
            onChange={handleChange}
          />
          <input
            id="car_price"
            type="number"
            placeholder="Car Price"
            value={formData.car_price}
            onChange={handleChange}
          />
        </div>
      )}

      {step === 3 && (
        <div>
          <input
            id="card_info"
            type="text"
            placeholder="Card Info"
            value={formData.card_info}
            onChange={handleChange}
          />
          <input
            id="expiry_date"
            type="text"
            placeholder="Expiry Date"
            value={formData.expiry_date}
            onChange={handleChange}
          />
        </div>
      )}

      {/* Navigation Buttons */}
      <div style={{ marginTop: "10px" }}>
        {step > 1 && (
          <button type="button" onClick={prevStep}>
            Previous
          </button>
        )}
        {step < 3 && (
          <button type="button" onClick={nextStep}>
            Next
          </button>
        )}
        {step === 3 && (
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Navigation
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // Final submit
  const handleSubmit = () => {
    console.log("Form Submitted:", formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <div id="main">
      {/* Do not remove the main div */}
      <Step
        step={step}
        formData={formData}
        handleChange={handleChange}
        nextStep={nextStep}
        prevStep={prevStep}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;
