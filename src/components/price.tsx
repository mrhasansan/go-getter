import { MdGroups } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";

export function PricingCards() {
  const plans = [
    {
      icon: <IoMdPerson />,
      title: "One-On-One",
      price: "Rp 75.000",
      features: [
        "Format IELTS Academic",
        "Latihan lengkap semua skill",
        "Tips strategi menjawab soal",
        "Diskusi personal dengan tutor",
        "Jadwal fleksibel & materi sesuai kebutuhan",
        "Rekaman kelas & akses recording",
        "100% online via Zoom",
      ],
      buttonLabel: "Daftar Kelas",
    },
    {
      icon: <MdGroups />,
      title: "IELTS Group",
      price: "Rp 30.000",
      features: ["Format IELTS Academic", "Latihan lengkap semua skill", "Tips strategi menjawab soal", "Diskusi kelompok dengan tutor", "Jadwal tetap & materi terstruktur", "Paket 10 sesi belajar", "100% online via Zoom"],
      buttonLabel: "Daftar Kelas",
    },
    {
      icon: <MdGroups />,
      title: "TOEFL Group",
      price: "Rp 25.000",
      features: ["Format TOEFL ITP", "Latihan Reading, Listening, Structure", "Tips strategi menjawab soal", "Diskusi kelompok dengan tutor", "Jadwal tetap & materi terstruktur", "Paket 10 sesi belajar", "100% online via Zoom"],
      buttonLabel: "Daftar Kelas",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center cursor-pointer border-2 border-gray-200 hover:border-logblue transition duration-300">
            {/* Icon */}
            <div className="flex justify-center items-center text-8xl mb-4 text-logblue">{plan.icon}</div>

            {/* Title */}
            <h2 className="text-xl font-bold mb-2">{plan.title}</h2>

            {/* Title */}
            <ul className="text-gray-600 text-start space-y-2 my-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-primary font-bold mr-2">
                    <IoIosCheckmarkCircle />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            {/* Price */}
            <p className={`text-lg font-semibold ${plan.price === "FREE" ? "text-green-500" : "text-logblue"} mb-4`}>{plan.price}/pertemuan</p>

            {/* Button */}

            <button
              className={`px-4 py-2 rounded-lg font-medium ${plan.price === "FREE" ? "bg-gradient-to-r from-blue-400 to-green-400 text-white" : "bg-white border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white"}`}
            >
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSekJpRp6pvNgdazWMVAgjye3Kvce1obWR74nqF-Kao9XvYqwA/viewform">{plan.buttonLabel}</a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
