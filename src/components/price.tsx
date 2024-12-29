export function PricingCards() {
  const plans = [
    {
      icon: "💡", // Replace with your actual icon or image
      title: "IELTS Introduction Class",
      price: "500.000",
      features: ["10 sesi IELTS Prep ", "90 menit/sesi", "Latihan IELTS", "E-certificate", "Akses zoom premium", "Rekaman kelas (as requested)"],
      buttonLabel: "Join Class",
    },
    {
      icon: "⚙️",
      title: "IELTS Introduction Private",
      price: "Rp 500.000",
      features: ["10 sesi IELTS Prep ", "90 menit/sesi", "Latihan IELTS", "E-certificate", "Akses zoom premium", "Rekaman kelas (as requested)"],
      buttonLabel: "Join Class",
    },
    {
      icon: "⚡",
      title: "IELTS Reading",
      price: "Rp 500.000",
      features: ["10 sesi IELTS Prep ", "90 menit/sesi", "Latihan IELTS", "E-certificate", "Akses zoom premium", "Rekaman kelas (as requested)"],
      buttonLabel: "Join Class",
    },
    {
      icon: "⚡",
      title: "IELTS Listening",
      price: "Rp 500.000",
      features: ["10 sesi IELTS Prep ", "90 menit/sesi", "Latihan IELTS", "E-certificate", "Akses zoom premium", "Rekaman kelas (as requested)"],
      buttonLabel: "Join Class",
    },
    {
      icon: "⚡",
      title: "IELTS Writing",
      price: "Rp 500.000",
      features: ["10 sesi IELTS Prep ", "90 menit/sesi", "Latihan IELTS", "E-certificate", "Akses zoom premium", "Rekaman kelas (as requested)"],
      buttonLabel: "Join Class",
    },
    {
      icon: "⚡",
      title: "IELTS Speaking",
      price: "Rp 500.000",
      features: ["10 sesi IELTS Prep ", "90 menit/sesi", "Latihan IELTS", "E-certificate", "Akses zoom premium", "Rekaman kelas (as requested)"],
      buttonLabel: "Join Class",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center cursor-pointer border-2 border-gray-200 hover:border-blue-500 transition duration-300">
            {/* Icon */}
            <div className="text-4xl mb-4">{plan.icon}</div>

            {/* Title */}
            <h2 className="text-xl font-bold mb-2">{plan.title}</h2>

            {/* Title */}
            <ul className="text-gray-600 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  {feature}
                </li>
              ))}
            </ul>
            {/* Price */}
            <p className={`text-lg font-semibold ${plan.price === "FREE" ? "text-green-500" : "text-blue-600"} mb-4`}>{plan.price}</p>

            {/* Button */}

            <button
              className={`px-4 py-2 rounded-lg font-medium ${plan.price === "FREE" ? "bg-gradient-to-r from-blue-400 to-green-400 text-white" : "bg-white border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white"}`}
            >
              {plan.buttonLabel}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
