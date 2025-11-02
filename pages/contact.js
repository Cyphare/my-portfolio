// pages/contact.js

export default function ContactPage() {
  return (
    // We add 'page-fade-in' for the same animation as other pages
    <div className="container mx-auto p-8 page-fade-in">
      
      {/* --- Main Heading --- */}
      <h1 className="text-4xl font-bold mb-8">Get In Touch</h1>

      <div className="bg-white p-8 border rounded-lg shadow-sm max-w-lg">
        <p className="text-lg text-gray-700 mb-6">
          The best way to reach me is through Instagram.
        </p>

        {/* --- Instagram Link --- */}
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase">
            Instagram
          </h2>
          <a 
            href="https://www.instagram.com/gvrael" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl text-blue-600 font-semibold hover:underline transition-all duration-200"
          >
            @gvrael
          </a>
        </div>
      </div>
    </div>
  );
}
