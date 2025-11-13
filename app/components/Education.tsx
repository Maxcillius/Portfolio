// --- Education Component ---
export default function Education() {
  const educationData = [
    {
      degree: "B.Tech, Information Technology",
      institution: "National Institute of Technology Raipur",
      location: "Raipur, Chhattisgarh", // Added location
      year: "2023 - 2027",
      grade: "7.94/10.0 CGPA",
    },
    {
      degree: "CBSE XII (Science)",
      institution: "Kendriya Vidyalaya Raigarh",
      location: "Raigarh, Chhattisgarh", // Added location
      year: "2021 - 2023",
      grade: "92%",
    },
    {
      degree: "CBSE X",
      institution: "Kendriya Vidyalaya Raigarh",
      location: "Raigarh, Chhattisgarh", // Added location
      year: "2021",
      grade: "85%",
    },
  ];

  return (
      <div className="max-w-3xl mx-auto space-y-6">
        {educationData.map((edu, index) => (
          // UPDATED: Card styling to match the new reference image
          <div 
            key={index} 
            className="bg-neutral-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:bg-neutral-700 hover:shadow-lg"
          >
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-xl font-semibold text-white">{edu.institution}</h3>
              <span className="text-sm font-medium text-gray-400 flex-shrink-0 ml-4">{edu.year}</span>
            </div>
            <p className="text-gray-400 mb-2">{edu.location}</p>
            <p className="text-gray-300">{edu.degree}</p>
          </div>
        ))}
      </div>
  );
}