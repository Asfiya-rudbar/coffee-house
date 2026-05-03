function Contact() {
  return (
    <div className="min-h-screen bg-[#faf3e0] flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-[#3e2723]">
        Contact Us ☎️
      </h1>

      <div className="bg-white p-10 rounded-3xl shadow-xl max-w-lg w-full text-center">
        <p className="text-xl text-[#6f4e37] mb-4">
          📧 Email: <span className="font-semibold text-[#3e2723]">coffeehouse@gmail.com</span>
        </p>
        <p className="text-xl text-[#6f4e37]">
          📞 Phone: <span className="font-semibold text-[#3e2723]">+92 300 1234567</span>
        </p>
      </div>

      <p className="mt-10 text-gray-500 text-sm">
        We would love to hear from you!
      </p>
    </div>
  );
}

export default Contact;
