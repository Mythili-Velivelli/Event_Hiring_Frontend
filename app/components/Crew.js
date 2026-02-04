export default function crew({formData,setFormData}){
    const handleChange=(e)=>{
        setFormData((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
    return (
        <>
        <h2 className="text-xl font-bold mb-4 text-center">Requirements (Crew)</h2>
        <label className="block mb-3 text-md font-medium">
            Service:
            <select
              className="w-full border px-2 py-2.5 mt-1 rounded-md"
              name="crewServiceType"
              value={formData.crewServiceType || ""}
              onChange={handleChange}
            >
                <option value="" disabled>Select</option>
                <option value="Stage Decoration">Stage Decoration</option>
                <option value="Lighting Setup">Lighting & Electrical Setup</option>
                <option value="Sound System">Photography & Videography</option>
                <option value="Cleaning">Catering & Serving Staff</option>
                 <option value="Other">Other</option>
            </select>
            {formData.crewServiceType === "Other" && (
          <label className="block mb-3 text-md font-medium mt-3">
            Enter crew service type:
            <input
              type="text"
              name="customEventType"
              placeholder="Eg:Cleaning, Security"
              className="w-full border p-2 mt-1 rounded-md"
              onChange={handleChange}
              required
            />
          </label>
        )}
        </label>
        <label className="block mb-3 text-md font-medium">
            Service Duration (in hours):
            <input
              name="serviceDuration"
              type="number"
              value={formData.serviceDuration || ""}
              onChange={handleChange}
              className="w-full border p-2 mt-1 rounded-md"
            />
        </label>
         <label className="block mb-3 text-md font-medium">
            Payment for the performer per event(in ₹):
            <input
              name="crewPay"
              type="number"
              value={formData.crewPay || ""}
              onChange={handleChange}
              className="w-full border p-2 mt-1 rounded-md"
            />
        </label>
        </>
    )
}