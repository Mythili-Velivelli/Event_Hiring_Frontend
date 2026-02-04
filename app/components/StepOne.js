const predefinedEventTypes = [
  "Birthday",
  "Wedding",
  "Family Get-Together",
  "Retirement Ceremony"
];

export default function StepOne({ formData, setFormData, onNext }) {

  // derive whether this is "Other" from stored value
  const isOther =
  formData.eventType === "" ||
  !predefinedEventTypes.includes(formData.eventType);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Special handling ONLY for eventType select
    if (name === "eventType") {
      if (value === "Other") {
        // Switch to custom input mode
        setFormData((prev) => ({
          ...prev,
          eventType: ""
        }));
      } else {
        // Normal predefined value
        setFormData((prev) => ({
          ...prev,
          eventType: value
        }));
      }
      return;
    }

    // Generic handler (date, location, name, and custom typing)
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4 text-center">
        Event Details
      </h2>

      {/* Event Name */}
      <label className="block mb-3 text-md font-medium">
        Event Name:
        <input
          name="eventName"
          value={formData.eventName}
          onChange={handleChange}
          className="w-full border p-2 mt-1 rounded-md"
        />
      </label>

      {/* Event Type */}
      <label className="block mb-3 text-md font-medium">
        Event Type:
        <select
          name="eventType"
          defaultValue=""
          value={isOther ? "Other" : formData.eventType}
          onChange={handleChange}
          className="w-full border px-2 py-2.5 mt-1 rounded-md"
          required
        >
          <option value="" disabled>select</option>
          <option value="Birthday">Birthday Party</option>
          <option value="Wedding">Wedding</option>
          <option value="Family Get-Together">Family Get-Together</option>
          <option value="Retirement Ceremony">Retirement Ceremony</option>
          <option value="Other">Other</option>
        </select>
      </label>

      {/* Other Event Type Input */}
      {isOther && (
        <label className="block mb-3 text-md font-medium mt-3">
          Enter event type:
          <input
            type="text"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            placeholder="Eg: Welcome Party, Farewell Party"
            className="w-full border p-2 mt-1 rounded-md"
            required
          />
        </label>
      )}

      {/* Date */}
      <label className="block mb-3 text-md font-medium">
        Event Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border p-2 mt-1 rounded-md"
          required
        />
      </label>

      {/* Location */}
      <label className="block mb-3 text-md font-medium">
        Location:
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border p-2 mt-1 rounded-md"
          required
        />
      </label>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 mt-6 rounded-md"
        >
          Next
        </button>
      </div>
    </form>
  );
}
