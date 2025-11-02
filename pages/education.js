import { supabase } from '../lib/supabaseClient';

// --- Step 1: Data Fetching ---
// This function runs at build time to get your 'projects' from Supabase
export async function getStaticProps() {
  // Fetch data from the 'projects' table
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('year', { ascending: false }); // Show newest projects first

  if (error) {
    console.error('Error fetching projects:', error);
  }

  return {
    props: {
      projects: data || [], // Pass the data to the page, ensure it's an array
    },
    revalidate: 60, // Optional: Re-fetch data every 60s
  };
}

// --- Step 2: Page Component ---
// This is your page component that displays the data
export default function EducationPage({ projects }) {
  return (
    <div className="container mx-auto p-8">
      
      {/* --- Education Section --- */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6">Education</h1>
        <div className="p-4 border rounded-lg shadow-sm bg-white">
          <h2 className="text-2xl font-semibold text-blue-700">Universitas Gadjah Mada</h2> {/* [cite: 37] *}
          <p className="text-xl text-gray-800">Bachelor of Information Technology</p> {/* [cite: 39] */}
          <p className="text-sm text-gray-500 mb-2">Jul 2024 - Jul 2028 (Expected)</p> {/* [cite: 38] */}
          <ul className="list-disc list-inside space-y-1">
            <li className="text-black"Very diligent on my study program.</li> {/* [cite: 40] */}
          </ul>
        </div>
      </section>

      {/* --- Projects Section (from Supabase) --- */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects && projects.length > 0 ? (
            projects.map((project) => (
              <div key={project.id} className="p-4 border rounded-lg shadow-sm bg-white">
                <h2 className="text-2xl font-semibold text-blue-700">{project.name}</h2>
                <p className="text-sm text-gray-500 mb-2">Year: {project.year}</p>
                <p>{project.description}</p>
              </div>
            ))
          ) : (
            <p>No projects found. (Did you add them to your Supabase 'projects' table?)</p>
          )}
        </div>
      </section>

      {/* --- Skills & Achievements Section --- */}
      <section>
        <h1 className="text-3xl font-bold mb-6">Skills & Achievements</h1>
        <div className="p-4 border rounded-lg shadow-sm bg-white">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Hard Skills</h2>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li className="text-black">Designed a shape/face detection sensor (Image Processing) and Dynamic System (Matlab & Simulink).</li> {/* [cite: 53] */}
          </ul>
          
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Achievements</h2>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li className="text-black">3rd Champion of English Debate by UINSK (2025)</li> {/* [cite: 54] */}
            <li className="text-black">1st Champion and Best Speaker of English Debate by UAD (2025)</li> {/* [cite: 54] */}
          </ul>

          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Certifications</h2>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-black">TOEFL ITP certification with a score 637/677 from Real Equivalent English (2023)</li> {/* [cite: 55] */}
          </ul>
        </div>
      </section>

    </div>
  );
}
