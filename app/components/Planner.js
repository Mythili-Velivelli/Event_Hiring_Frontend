export default function Planner({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-4 text-center">Requirements (Planner)</h2>

      {/* Expected guests */}
      <label className="block mb-3 text-md font-medium">
        Expected number of guests
        <select
          name="guestCount"
          className="w-full border p-2 mt-1 rounded-md"
          value={formData.guestCount || ""}
          onChange={handleChange}
        >
          <option value="" disabled>Select</option>
          <option value="below 50">Below 50</option>
          <option value="50-100">50 – 100</option>
          <option value="100-300">100 – 300</option>
          <option value="above-300">Above 300</option>
        </select>
      </label>

      {/* Help needed */}
      <label className="block mb-3 text-md font-medium">
        What help do you need?
        <select
          name="plannerTask"
          className="w-full border p-2 mt-1  rounded-md"
          value={formData.plannerTask || ""}
          onChange={handleChange}
        >
          <option value="" disabled>Select</option>
          <option value="Number Of Guests">Managing guests and invitations</option>
          <option value="Food">Coordinating food and services</option>
          <option value="Overall">Overall event coordination</option>
          <option value="Other">Other</option>
        </select>
         {formData.performerType === "Other" && (
                    <label className="block mb-3 text-md font-medium">
                        Enter planner task:
                        <input
                            type="text"
                            name="customPerformerType"
                            placeholder="Eg:Booking the venue"
                            className="w-full border p-2 mt-1 rounded-md"
                            onChange={handleChange}
                            required
                        />
                    </label>
                )}
      </label>

      {/* Pay offered */}
      <label className="block mb-3 text-md font-medium">
        Pay offered for planner per event(in ₹):
        <input
          type="number"
          name="plannerPay"
          className="w-full border p-2 mt-1  rounded-md"
          value={formData.plannerPay || ""}
          onChange={handleChange}
        />
      </label>
    </>
  );
}
