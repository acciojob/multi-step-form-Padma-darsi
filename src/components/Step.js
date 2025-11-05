import React from "react";

function Step({ step, formData, handleChange, nextStep, prevStep, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <div>
          <div>
            <label htmlFor="first_name">First Name:</label>
            <input
              type="text"
              id="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="last_name">Last Name:</label>
            <input
              type="text"
              id="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <div>
            <label htmlFor="model">Car Model:</label>
            <input
              type="text"
              id="model"
              value={formData.model}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="car_price">Car Price:</label>
            <input
              type="number"
              id="car_price"
              value={formData.car_price}
              onChange={handleChange}
            />
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <div>
            <label htmlFor="card_info">Card Info:</label>
            <input
              type="text"
              id="card_info"
              value={formData.card_info}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="expiry_date">Expiry Date:</label>
            <input
              type="month"
              id="expiry_date"
              value={formData.expiry_date}
              onChange={handleChange}
            />
          </div>
        </div>
      )}

      <div style={{ marginTop: "20px" }}>
        {step > 1 && (
          <button type="button" onClick={prevStep} style={{ marginRight: "10px" }}>
            Previous
          </button>
        )}
        {step < 3 && (
          <button type="button" onClick={nextStep}>
            Next
          </button>
        )}
        {step === 3 && <button type="submit">Submit</button>}
      </div>
    </form>
  );
}

export default Step;
