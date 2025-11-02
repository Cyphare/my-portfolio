import { supabase } from '../lib/supabaseClient';

export async function getStaticProps() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('year', { ascending: false });

  if (error) {
    console.error('Error fetching projects:', error);
  }

  return {
    props: {
      projects: data || [], 
    },
    revalidate: 60, 
  };
}

export default function EducationPage({ projects }) {
  return (
    <div className="container mx-auto p-8">
      
      {/* --- Education Section --- */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6">Education</h1>
        <div className="p-4 border rounded-lg shadow-sm bg-white">
          <h2 className="text-2xl font-semibold text-blue-700">Universitas Gadjah Mada</h2>
          <p className="text-xl text-gray-800">Bachelor of Information Technology</p>
          <p className="text-sm text-gray-500 mb-2">Jul 2024 - Jul 2028 (Expected)</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-black">Got into my dream study program.</li>
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
                <p className="text-black">{project.description}</p>
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
            <li className="text-black">Designed a shape/face detection sensor (Image Processing) and Dynamic System (Matlab & Simulink).</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Achievements</h2>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li className="text-black">3rd Champion of English Debate by UINSK (2025)</li>
            <li className="text-black">1st Champion and Best Speaker of English Debate by UAD (2025)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Certifications</h2>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-black">TOEFL ITP certification with a score 637/677 from Real Equivalent English (2023)</li>
          </ul>
        </div>
      </section>

    </div>
  );
}
