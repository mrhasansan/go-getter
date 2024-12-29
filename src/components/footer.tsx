import { FaInstagram, FaWhatsapp, FaYoutube, FaTiktok } from "react-icons/fa";

export function FooterRoute() {
  return (
    <footer className=" bg-black text-white py-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Social Media Icons */}
        <div className="flex justify-center mt-8 space-x-6 text-2xl">
          <a href="https://www.instagram.com/gogetter_academy/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <FaInstagram />
          </a>
          <a href=" https://wa.me/message/ZX7P5C5NH2GPA1?src=qr" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <FaWhatsapp />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <FaYoutube />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <FaTiktok />
          </a>
        </div>
        <p className="mt-8">&copy; 2024 Go-Getter Academy. All rights reserved.</p>
      </div>
    </footer>
  );
}
