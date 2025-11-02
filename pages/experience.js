import { supabase } from '../lib/supabaseClient';

// This function runs at build time, fetching your data
export async function getStaticProps() {
  // Fetch data from the 'experiences' table
  const { data, error } = await supabase
    .from('experiences')
    .select('*')
    .order('created_at', { ascending: false }); // Show newest first

  if (error) {
    console.error('Error fetching experiences:', error);
  }

  return {
    props: {
      experiences: data, // Pass the data to the page
    },
    revalidate: 60, // Optional: Re-fetch data every 60s
  };
}

// This is your page component
export default function ExperiencePage({ experiences }) {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">My Experience</h1>

      <div className="space-y-8">
        {experiences && experiences.map((exp) => (
          <div key={exp.id} className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-blue-700">{exp.organization}</h2>
            <p className="text-xl text-gray-800">{exp.role}</p>
            <p className="text-sm text-gray-500 mb-2">{exp.dates}</p>
            <ul className="list-disc list-inside space-y-1">
              {exp.description_points && exp.description_points.split('\n').map((point, index) => (
                point.trim() && <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
