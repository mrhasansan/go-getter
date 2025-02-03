import { CardRoute } from "./components/card";
import { FooterRoute } from "./components/footer";
import { Herocomponent } from "./components/hero";
import Logo from "./assets/gogetterlogo.svg";
import { useState } from "react";
import { Testimonials } from "./components/testimonials";
import { PricingCards } from "./components/price";
import { ListEvent } from "./components/events";
import { FaWhatsapp } from "react-icons/fa";

export function HomeRoute() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close the menu after clicking
  };

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <header className="bg-white text-black flex justify-between items-center fixed top-0 left-0 w-full z-50">
        <div>
          {/* Logo */}
          <img src={Logo} alt="Go Getter Logo" className="w-16 h-16 object-contain" />
        </div>
        <div>
          {/* Hamburger Icon (Visible on small devices) */}
          <button className="sm:hidden text-black text-3xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✕" : "☰"}
          </button>

          {/* Navigation Menu */}
          <nav className={`${isOpen ? "block" : "hidden"} absolute top-16 left-0 w-full sm:static sm:flex sm:space-x-6 px-6`}>
            <button onClick={() => scrollToSection("home")} className="block px-6 py-2 hover:underline">
              Home
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="block px-6 py-2 hover:underline">
              Success Stories
            </button>
            <button onClick={() => scrollToSection("events")} className="block px-6 py-2 hover:underline">
              Events
            </button>
            <div className="bg-primary text-white rounded hover:bg-yellow-500 transition">
              <a href="https://wa.me/message/ZX7P5C5NH2GPA1?src=qr" className="block px-6 py-2">
                Contact Us
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="my-6">
        {/* Add IDs to match the navbar links */}
        <section id="home" className="min-h-screen">
          <Herocomponent />
        </section>
        <section id="stories" className="min-h-screen">
          <CardRoute />
        </section>
        <section id="pricing" className="min-h-screen">
          <PricingCards />
        </section>
        <section id="testimonials" className="min-h-screen">
          <Testimonials />
        </section>
        <section id="events" className="min-h-screen">
          <ListEvent />
        </section>
      </main>

      {/* Footer */}
      <FooterRoute />

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center">
        {/* Ikon WhatsApp */}
        <a href=" https://wa.me/message/ZX7P5C5NH2GPA1?src=qr" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition">
          <FaWhatsapp size={28} />
        </a>
      </div>
    </div>
  );
}
