export function PricingCards() {
  const plans = [
    {
      icon: "💡", // Replace with your actual icon or image
      title: "One-On-One",
      price: "75.000",
      features: [
        "Familiar dengan format IELTS Academic",
        "Simulasi & pembahasan soal lengkap untuk semua skill (Listening, Reading, Writing, Speaking)",
        "Tips & strategi menjawab soal dengan mudah",
        "Diskusi secara personal dengan tutor",
        "Bisa re-schedule kelas/flexible",
        "Bisa milih materi sesuai yang dibutuhkan",
        "Akses recording kelas gratis",
        "Kelas 100% Online via Zoom Meeting!",
        "Rekaman kelas (as requested)",
      ],
      buttonLabel: "Join Class",
    },
    {
      icon: "⚙️",
      title: "IELTS Group",
      price: "Rp 30.000",
      features: [
        "Familiar dengan format IELTS Academic",
        "Simulasi & pembahasan soal lengkap untuk semua skill (Listening, Reading, Writing, Speaking)",
        "Tips & strategi menjawab soal dengan mudah",
        "Diskusi secara berkelompok dengan tutor",
        "jam kelas sudah ditentukan",
        "Materi telah ditetapkan",
        "Bundling 10 kali pertemuan",
        "Akses recording kelas gratis",
        "Kelas 100% Online via Zoom Meeting!",
        "Dapat memilih satu skill saja kelas dg minimal 5 peserta ",
      ],
      buttonLabel: "Join Class",
    },
    {
      icon: "⚡",
      title: "TOEFL",
      price: "Rp 25.000",
      features: [
        "Familiar dengan format TOEFL ITP",
        "Simulasi & pembahasan soal lengkap untuk semua skill (Listening, Reading, Structure)",
        "Tips & strategi menjawab soal dengan mudah",
        "Diskusi secara berkelompok dengan tutor",
        "jam kelas sudah ditentukan",
        "Materi telah ditetapkan",
        "Bundling 10 kali pertemuan",
        "Akses recording kelas gratis",
        "Kelas 100% Online via Zoom Meeting!",
        "Dapat memilih satu skill saja kelas dg minimal 5 peserta ",
      ],
      buttonLabel: "Join Class",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Paket Bundling untuk Belajar Lebih Murah dan Lengkap!</h2>
      </div>
      <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center cursor-pointer border-2 border-gray-200 hover:border-blue-500 transition duration-300">
              {/* Icon */}
              <div className="text-4xl mb-4">{plan.icon}</div>

              {/* NEW: Features moved above title and price */}
              <ul className="text-gray-600 space-y-2 mb-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Title */}
              <h2 className="text-xl font-bold mb-2">{plan.title}</h2>

              {/* Price */}
              <p className={`text-lg font-semibold ${plan.price === "FREE" ? "text-green-500" : "text-blue-600"} mb-4`}>{plan.price} /meeting</p>

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
    </div>
  );
}
