import { CardRoute } from "./components/card";
import { FooterRoute } from "./components/footer";
import { Herocomponent } from "./components/hero";
import Logo from ".//assets/logo.png";

export function HomeRoute() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-secondary text-white py-4 px-6 flex justify-between items-center">
        <img src={Logo} alt="Go Getter Logo" className="w-16 h-16 object-contain" />
        <nav className="flex space-x-6">
          <a href="#success-stories" className="hover:underline">
            Home
          </a>
          <a href="#resources" className="hover:underline">
            Success Stories
          </a>

          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="https://wa.me/message/ZX7P5C5NH2GPA1?src=qr" className="hover:underline">
            Contact Us
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <Herocomponent />
        <CardRoute />
      </main>

      {/* Footer */}
      <FooterRoute />
    </div>
  );
}
