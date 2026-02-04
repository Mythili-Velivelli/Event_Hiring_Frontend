import Planner from "./Planner";
import Performer from "./Performer";
import Crew from "./Crew";

export default function StepThree({ formData, setFormData, onNext, onBack }) {

  return (
    <div>
      {formData.hireType === "Planner" && (
        <Planner
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {formData.hireType === "Performer" && (
        <Performer
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {formData.hireType === "Crew" && (
        <Crew
          formData={formData}
          setFormData={setFormData}
        />
      )}

      <div className="flex justify-between mt-6">
        <button onClick={onBack} className="border px-4 py-2 rounded-md">
          Back
        </button>

        <button
          onClick={onNext}
          className="bg-black text-white px-4 py-2 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
}
