import React from "react";

const Step = ({ step, formData, handleChange, nextStep, prevStep, handleSubmit }) => {
  return (
    <div>
      {/* Step 1 */}
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

      {/* Step 2 */}
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

      {/* Step 3 */}
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

export default Step;
