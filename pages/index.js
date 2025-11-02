export default function HomePage() {
  return (
    <div className="container mx-auto p-8">
      <section className="min-h-[75vh] flex flex-col justify-center">
        
        <h1 className="text-6xl font-bold text-blue-700 mb-4">
          Arnold.
        </h1>
        
        <h2 className="text-3xl font-light text-white mb-6">
          Executive, Professional Debater, and Technologist
        </h2>
        
        <p className="text-xl text-gray-200 max-w-3xl leading-relaxed">
          Experienced in executive roles and having a career in professional debating made Arnold what he is.
          Someone who listens, adapts, but also made sure everything goes smoothly.
        </p>
        <p className="text-xl text-gray-200 max-w-3xl leading-relaxed mt-4">
          He likes to dabble in environmental and technological project like automation and optimization.
        </p>

        <div className="mt-10">
          <a 
            href="/contact" 
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Contact Me Here!
          </a>
        </div>

      </section>

    </div>
  );
}
