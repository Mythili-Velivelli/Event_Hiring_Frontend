const predefinedCrewServices = [
  "Stage Decoration",
  "Lighting & Electrical Setup",
  "Photography & Videography",
  "Catering & Serving Staff"
];

export default function Crew({ formData, setFormData }) {
  const isOtherCrewService =
    formData.crewServiceType === "Other" ||
    (formData.crewServiceType &&
      !predefinedCrewServices.includes(formData.crewServiceType));

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-4 text-center">
        Requirements (Crew)
      </h2>

      {/* Crew Service Type */}
      <label className="block mb-3 text-md font-medium">
        Service Type:
        <select
          className="w-full border px-2 py-2.5 mt-1 rounded-md"
          name="crewServiceType"
          value={formData.crewServiceType || ""}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select</option>
          <option value="Stage Decoration">Stage Decoration</option>
          <option value="Lighting & Electrical Setup">
            Lighting & Electrical Setup
          </option>
          <option value="Photography & Videography">
            Photography & Videography
          </option>
          <option value="Catering & Serving Staff">
            Catering & Serving Staff
          </option>
          <option value="Other">Other</option>
        </select>
      </label>

      {/* Custom Crew Service */}
      {isOtherCrewService && (
        <label className="block mb-3 text-md font-medium mt-3">
          Enter crew service type:
          <input
            type="text"
            name="crewServiceType"
            placeholder="Eg: Security, Cleaning, Valet Parking"
            className="w-full border p-2 mt-1 rounded-md"
            value={
              formData.crewServiceType === "Other"
                ? ""
                : formData.crewServiceType
            }
            onChange={handleChange}
            required
          />
        </label>
      )}

      {/* Number of Crew Members */}
      <label className="block mb-3 text-md font-medium">
        Number of crew members required:
        <input
          name="crewCount"
          type="number"
          min="1"
          value={formData.crewCount || ""}
          onChange={handleChange}
          className="w-full border p-2 mt-1 rounded-md"
          required
        />
      </label>

      {/* Pay */}
      <label className="block mb-3 text-md font-medium">
        Payment for crew per event (₹):
        <input
          name="crewPay"
          type="number"
          value={formData.crewPay || ""}
          onChange={handleChange}
          className="w-full border p-2 mt-1 rounded-md"
          required
        />
      </label>
    </>
  );
}
