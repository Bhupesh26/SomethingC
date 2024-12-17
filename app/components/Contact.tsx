export const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-gray">
      <div className="container mx-auto px-6 py-16">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-orange-500 uppercase mb-4">
            Contact Us
          </h2>
          <p className="text-gray-300">
            Seperate dedicated sections for contacting team for specific problem / queries etc..
          </p>
        </div>

        {/* Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white p-8 rounded-lg text-gray-800 shadow-lg">
          {/* Address */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-orange-500 p-4 rounded-full mb-4">
              <img
                src="/images/key.png" // Replace with your custom image path
                alt="Address Icon"
                className="w-8 h-8"
              />
            </div>
            <h3 className="font-bold mb-2">key@noceilinggames.com</h3>
            <p>Dedicated mail-id for requesting game-key for creator, public figure, etc....</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-orange-500 p-4 rounded-full mb-4">
              <img
                src="/images/web.png" // Replace with your custom image path
                alt="Email Icon"
                className="w-8 h-8"
              />
            </div>
            <h3 className="font-bold mb-2">www.keymailer.co/g/games/48f23528</h3>
            <p>Dedicated site for requesting game-key for creator, public figure, etc....</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-orange-500 p-4 rounded-full mb-4">
              <img
                src="/images/office.png" // Replace with your custom image path
                alt="Phone Icon"
                className="w-8 h-8"
              />
            </div>
            <h3 className="font-bold mb-2">
    contact@noceilinggames.com
</h3>
            <p>Business-related and other:</p>
            <p>(Any key request emails sent will not be taken into account.) </p>

          </div>
        </div>
      </div>
    </section>
  );
};

