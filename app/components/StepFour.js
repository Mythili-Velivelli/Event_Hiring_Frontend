import { useState } from "react"
export default function StepFour({ formData, onBack }) {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
     
  const formatDate = (dateStr) => {
  const [year, month, day] = dateStr.split("-")
  const monthName = new Date(year, month - 1).toLocaleString("en-IN", {
    month: "long"
  })
  return `${day} ${monthName} ${year}`
}


    const handleSubmit = async () => {
        setLoading(true)
        try {
            const res = await fetch("http://localhost:5000/requirements", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            if (res.ok) {
                setSuccess(true)
            }
            else
                alert("Something went wrong")
        } catch (err) {
            alert("Backend is not reachable")
        }
        finally {
            setLoading(false)
        }
        
    }
    if (success) {
        return (
            <div className="text-center">
                <h2 className="text-xl font-bold mb-3">Success 🎉</h2>
                <p>Your hiring request has been posted successfully</p>
            </div>
        )
    }
    return (
        <div className="text-[1.1rem]">
            <h2 className="text-xxl text-center font-bold mb-3">Review the Details</h2>
            {/* Event Details */}
            
            <div className="mb-3">
                <p><b>Event Name:</b> {formData.eventName}</p>
                <p><b>Event Type:</b> {formData.eventType}</p>
                <p><b>Date:</b> {formatDate(formData.date)}</p>
                <p><b>Location:</b> {formData.location}</p>
                {formData.venue && <p><b>Venue:</b> {formData.venue}</p>}
            </div>

            {/* Hire Type */}
            <div className="mb-3 text-l">
                <p><b>Hiring:</b> {formData.hireType}</p>
            </div>

            {/* Dynamic Section */}
            {formData.hireType === "Planner" && (
                <div className="mb-3">
                    <p><b>Expected Number of Guests:</b> {formData.guestCount}</p>
                    <p><b>Planner Task:</b> {formData.plannerTask}</p>
                    <p><b>Payment for the Planner per event:</b> ₹{formData.plannerPay}</p>
                </div>
            )}

            {formData.hireType === "Performer" && (
                <div className="mb-3">
                    <p><b>Performer:</b> {formData.performerType}</p>
                    <p><b>Duration:</b> {formData.performanceDuration} hours</p>
                    <p><b>Payment for the Performer per event:</b> ₹{formData.performerPay}</p>

                </div>
            )}

            {formData.hireType === "Crew" && (
                <div className="mb-3">
                    <p><b>Crew Service:</b> {formData.crewServiceType}</p>
                    <p><b>Duration:</b> {formData.serviceDuration} hours</p>
                    <p><b>Payment for the Crew per event:</b> ₹{formData.crewPay}</p>
                </div>
            )}
            <div className="flex justify-between mt-6">
                <button
                    className="border px-4 py-2 rounded-md"
                    onClick={onBack}
                >
                    Back</button>
                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="bg-black text-white px-4 py-2 rounded-md"
                >
                    {loading ? "Submitting.." : "Submit"}
                </button>
            </div>
        </div>
    )
}