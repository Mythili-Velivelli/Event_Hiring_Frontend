export default function Performer({ formData, setFormData }) {
    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    return (
        <>
            <h2 className="text-xl font-bold mb-4 text-center">
                Requirements (Performer)
            </h2>

            <label className="block mb-3 text-md font-medium">
                Performer Type:
                <select
                    name="performerType"
                    value={formData.performerType || ""}
                    className="w-full border py-2.5 px-2 mb-3 rounded-md"
                    onChange={handleChange}
                >
                    <option value="" disabled>Select</option>
                    <option value="magician">Magician</option>
                    <option value="Live Singer">Live Singer</option>
                    <option value="Stand-up Comedian">Stand-up Comedian</option>
                    <option value="Classical Dancer">Classical Dancer</option>
                    <option value="Instrumentalist"></option>
                    <option value="Other">Other</option>
                </select>
                {formData.performerType === "Other" && (
                    <label className="block mb-3 text-md font-medium">
                        Enter performer type:
                        <input
                            type="text"
                            name="customPerformerType"
                            placeholder="Eg: Beatboxer, DJ"
                            className="w-full border p-2 mt-1 rounded-md"
                            onChange={handleChange}
                            required
                        />
                    </label>
                )}

            </label>


            <label className="block mb-3 text-md font-medium">
                Performance Duration (in hours):
                <input
                    name="performanceDuration"
                    type="number"
                    value={formData.performanceDuration || ""}
                    onChange={handleChange}
                    className="w-full border p-2 mb-3 rounded-md"
                />
            </label>
            <label className="block mb-3 text-md font-medium">
                Payment for the performer per event(in ₹):
                <input
                    name="performerPay"
                    type="number"
                    value={formData.performerPay || ""}
                    onChange={handleChange}
                    className="w-full border p-2 mb-3 rounded-md"
                />
            </label>
        </>
    )
}