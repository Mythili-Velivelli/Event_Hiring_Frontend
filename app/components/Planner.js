const predefinedPlannerTasks = [
  "Managing guests and invitations",
  "Coordinating food and services",
  "Overall event coordination"
];

export default function Planner({ formData, setFormData }) {

  const isOtherTask =
    formData.plannerTask === "" ||
    (formData.plannerTask &&
      !predefinedPlannerTasks.includes(formData.plannerTask));

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Special handling for plannerTask select
    if (name === "plannerTask") {
      if (value === "Other") {
        setFormData((prev) => ({
          ...prev,
          plannerTask: ""
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          plannerTask: value
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
        Requirements (Planner)
      </h2>

      {/* Expected guests */}
      <label className="block mb-3 text-md font-medium">
        Expected number of guests
        <select
          name="guestCount"
          className="w-full border p-2 mt-1 rounded-md"
          value={formData.guestCount || ""}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select</option>
          <option value="Below 50">Below 50</option>
          <option value="50-100">50 – 100</option>
          <option value="100-300">100 – 300</option>
          <option value="Above 300">Above 300</option>
        </select>
      </label>

      {/* Planner task */}
      <label className="block mb-3 text-md font-medium">
        What help do you need?
        <select
          name="plannerTask"
          defaultValue=""
          className="w-full border p-2 mt-1 rounded-md"
          value={isOtherTask ? "Other" : formData.plannerTask}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select</option>
          <option value="Managing guests and invitations">
            Managing guests and invitations
          </option>
          <option value="Coordinating food and services">
            Coordinating food and services
          </option>
          <option value="Overall event coordination">
            Overall event coordination
          </option>
          <option value="Other">Other</option>
        </select>
      </label>

      {/* Other planner task */}
      {isOtherTask && (
        <label className="block mb-3 text-md font-medium mt-3">
          Enter planner task:
          <input
            type="text"
            name="plannerTask"
            placeholder="Eg: Booking the venue"
            className="w-full border p-2 mt-1 rounded-md"
            value={formData.plannerTask}
            onChange={handleChange}
            required
          />
        </label>
      )}

      {/* Pay offered */}
      <label className="block mb-3 text-md font-medium">
        Pay offered for planner per event (₹):
        <input
          type="number"
          name="plannerPay"
          className="w-full border p-2 mt-1 rounded-md"
          value={formData.plannerPay || ""}
          onChange={handleChange}
          required
        />
      </label>
    </>
  );
}
