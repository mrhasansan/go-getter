export function BundlingPackages() {
  const packages = [
    {
      title: "IELTS Preparation",
      subtitle: "Class",
      description: "Cocok untuk pengenalan all skills",
      features: ["10 sesi IELTS Prep ", "90 menit/sesi", "Latihan IELTS", "E-certificate", "Akses zoom premium", "Rekaman kelas (as requested)"],
    },
    {
      title: "IELTS Preparation",
      subtitle: "Private ",
      description: "Cocok untuk pengenalan all skills",
      features: ["10 sesi IELTS Prep ", "90 menit/sesi", "Latihan IELTS", "E-certificate", "Akses zoom premium", "Rekaman kelas (as requested)"],
    },
    {
      title: "IELTS Writing",
      subtitle: "Class",
      description: "Cocok untuk improvement writing skills",
      features: ["10 sesi writing task 1 dan 2", "90 menit/sesi", "Pre-Test, Progress Test, dan Post-Test", "E-certificate", "Progress Report berkala", "Akses zoom premium", "Rekaman kelas (as requested)"],
    },
    {
      title: "IELTS Speaking",
      subtitle: "Private Bundling Class",
      description: "Cocok untuk Improvement Writing Skill",
      features: ["10 sesi speaking", "90 menit/sesi", "Pre-Test, Progress Test, dan Post-Test", "E-certificate", "Progress Report berkala", "Akses zoom premium", "Rekaman kelas (as requested)"],
    },
    {
      title: "IELTS Listening",
      subtitle: "Private Bundling Class",
      description: "Cocok untuk Improvement Listening Skill",
      features: ["10 sesi speaking", "90 menit/sesi", "Pre-Test, Progress Test, dan Post-Test", "E-certificate", "Progress Report berkala", "Akses zoom premium", "Rekaman kelas (as requested)"],
    },
    {
      title: "IELTS Reading",
      subtitle: "Private Bundling Class",
      description: "Cocok untuk Improvement Reading skill",
      features: ["10 sesi speaking", "90 menit/sesi", "Pre-Test, Progress Test, dan Post-Test", "E-certificate", "Progress Report berkala", "Akses zoom premium", "Rekaman kelas (as requested)"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-logblue">Paket Bundling untuk Belajar Lebih Murah dan Lengkap!</h2>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-800">{pkg.title}</h3>
            <h4 className="text-logblue font-semibold">{pkg.subtitle}</h4>
            <p className="text-gray-600 mt-2 mb-4">{pkg.description}</p>
            <ul className="text-gray-600 space-y-2">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="bg-primary text-white mt-4 py-2 px-4 rounded hover:bg-logblue flex items-center justify-center w-full">Tanya Detail</button>
          </div>
        ))}
      </div>
    </div>
  );
}
