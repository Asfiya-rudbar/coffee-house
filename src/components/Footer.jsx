import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#3e2723] text-white mt-0">
      <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-3 gap-16 text-center md:text-left">
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Coffee House ☕</h2>
          <p className="text-sm text-gray-300">
            Fresh coffee, cozy vibes & sweet moments.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-1 text-gray-300">
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/menu">Menu</Link></li>
            <li><Link to ="/cart">Cart</Link></li>
            <li><Link to ="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-300">📞 +92 300 1234567</p>
          <p className="text-gray-300">📧 coffeehouse@gmail.com</p>
        </div>

      </div>

      <div className="text-center py-4 text-sm bg-[#2e1c18]">
        © 2026 Coffee House. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
