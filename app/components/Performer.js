const predefinedPerformerTypes = [
  "Magician",
  "Live Singer",
  "Stand-up Comedian",
  "Classical Dancer",
  "Instrumentalist"
];

export default function Performer({ formData, setFormData }) {

  const isOtherPerformer =
    formData.performerType === "" ||
    (formData.performerType &&
      !predefinedPerformerTypes.includes(formData.performerType));

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Special handling for performerType select
    if (name === "performerType") {
      if (value === "Other") {
        setFormData((prev) => ({
          ...prev,
          performerType: ""
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          performerType: value
        }));
      }
      return;
    }

    // Generic handler
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-4 text-center">
        Requirements (Performer)
      </h2>

      {/* Performer Type */}
      <label className="block mb-3 text-md font-medium">
        Performer Type:
        <select
          name="performerType"
          defaultValue=""
          value={isOtherPerformer ? "Other" : formData.performerType}
          className="w-full border py-2.5 px-2 mb-3 rounded-md"
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select</option>
          <option value="Magician">Magician</option>
          <option value="Live Singer">Live Singer</option>
          <option value="Stand-up Comedian">Stand-up Comedian</option>
          <option value="Classical Dancer">Classical Dancer</option>
          <option value="Instrumentalist">Instrumentalist</option>
          <option value="Other">Other</option>
        </select>
      </label>

      {/* Other Performer Type */}
      {isOtherPerformer && (
        <label className="block mb-3 text-md font-medium">
          Enter performer type:
          <input
            type="text"
            name="performerType"
            placeholder="Eg: Beatboxer, DJ"
            className="w-full border p-2 mt-1 rounded-md"
            value={formData.performerType}
            onChange={handleChange}
            required
          />
        </label>
      )}

      {/* Duration */}
      <label className="block mb-3 text-md font-medium">
        Performance Duration (in hours):
        <input
          name="performanceDuration"
          type="number"
          value={formData.performanceDuration || ""}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded-md"
          required
        />
      </label>

      {/* Pay */}
      <label className="block mb-3 text-md font-medium">
        Payment for the performer per event (₹):
        <input
          name="performerPay"
          type="number"
          value={formData.performerPay || ""}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded-md"
          required
        />
      </label>
    </>
  );
}
