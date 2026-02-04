export default function StepTwo({
  hireType,
  setFormData,
  onNext,
  onBack
}) {

  const handleNext = () => {
    if (!hireType) {
      alert("Please select an option");
      return;
    }
    onNext();
  };

  const handleChange=(e)=>{
       setFormData((prev) => ({
              ...prev,
              hireType: e.target.value
            }))
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-center">
        Who do you want to hire?
      </h2>

      <label className="flex items-center gap-2">
        <input
          type="radio"
          value="Planner"
          checked={hireType === "Planner"}
          onChange={handleChange}
        />
        Event Planner
      </label>

      <label className="flex items-center gap-2">
        <input
          type="radio"
          value="Performer"
          checked={hireType === "Performer"}
          onChange={handleChange}
        />
        Performer
      </label>

      <label className="flex items-center gap-2">
        <input
          type="radio"
          value="Crew"
          checked={hireType === "Crew"}
          onChange={handleChange}
        />
        Crew
      </label>

      <div className="flex justify-between mt-6">
        <button onClick={onBack} className="border px-4 py-2 rounded-md">
          Back
        </button>

        <button
          onClick={handleNext}
          className="bg-black text-white px-4 py-2 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
}
