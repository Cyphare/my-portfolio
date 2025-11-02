// This is your Home Page: pages/index.js

export default function HomePage() {
  return (
    <div className="container mx-auto p-8">
      
      {/* This is a "Hero" section. 
        'min-h-[75vh]' makes it tall (75% of the viewport height).
        'flex', 'flex-col', 'justify-center' are Tailwind classes to center the content vertically.
      */}
      <section className="min-h-[75vh] flex flex-col justify-center">
        
        <h1 className="text-6xl font-bold text-blue-700 mb-4">
          ARNOLD {/* [cite: 1] */}
        </h1>
        
        <h2 className="text-3xl font-light text-gray-800 mb-6">
          Executive, Professional Debater, and Technologist
        </h2>
        
        <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
          Experienced in executive roles and having a career in professional debating made Arnold what he is.
          Someone who listens, adapts, but also made sure everything goes smoothly. {/* [cite: 2, 3] */}
        </p>
        <p className="text-xl text-gray-600 max-w-3xl leading-relaxed mt-4">
          He likes to dabble in environmental and technological project like automation and optimization. {/* [cite: 4] */}
        </p>

        {/* Optional: A call-to-action button */}
        <div className="mt-10">
          <a 
            href="/experience" 
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            View My Experience
          </a>
        </div>

      </section>

    </div>
  );
}