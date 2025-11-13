import Link from 'next/link';
import Image from 'next/image';
import ExpTrk from '../../public/ExpTrk.png'
import IcnGen from '../../public/IcnGen.jpeg'

export default function Projects() {
  const projectData = [
    {
      title: "Icon Generator AI",
      date: "Apr 2025",
      description: "Generate unique icons with the power of AI with secure authentication and storage.",
      points: [
        "Developed Link scalable, cloud-hosted icon generation service using Next.js and PostgreSQL.",
        "Enhanced asset delivery performance by integrating AWS CloudFront, reducing load times by 40%.",
        "Implemented secure user authentication, Razorpay payments, and S3-backed media management.",
      ],
      tech: "Next.js, PostgreSQL, AWS S3, CloudFront, Razorpay",
      image: IcnGen,
      link: "https://github.com/Maxcillius/IconGen"
    },
    {
      title: "Financial Expense Tracker",
      date: "Nov 2024",
      description: "Financial expense tracking web base platform with chart analysis.",
      points: [
        "Architected Link full-stack expense management platform with robust data visualization tools.",
        "Developed secure and modular REST APIs for transaction entry, categorization, and budget tracking.",
        "Integrated D3.js to create interactive data visualizations for spending patterns.",
      ],
      tech: "Node.js, Express, React, D3.js, PostgreSQL",
      image: ExpTrk,
      link: "https://github.com/Maxcillius/ExpenseTracker"
    },
  ];

  return (
      <div className="max-w-6xl mx-auto space-y-24">
        {projectData.map((project, index) => (
          <div 
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
              index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
            }`}
          >
            <div className={`flex flex-col justify-center ${
              index % 2 === 1 ? 'md:col-start-2' : ''
            }`}>
              <h3 className="text-3xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-5 text-lg">
                {project.description}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 mb-6">
                {project.points.map((point, pIndex) => (
                  <li key={pIndex}>{point}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.split(', ').map((t) => (
                  <span key={t} className="bg-gray-700 text-gray-300 text-xs font-medium px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex">
                <Link 
                  href={project.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-orange-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-orange-700 transition-colors duration-300 shadow-lg"
                >
                  View Project
                </Link>
              </div>
            </div>
            <div className={`flex items-center justify-center ${
              index % 2 === 1 ? 'md:col-start-1' : ''
            }`}>
              <Image 
                width={500}
                height={500}
                src={project.image} 
                alt={project.title}
                className="rounded-lg shadow-xl object-cover w-full h-auto aspect-video border-2 border-gray-700 transition-all duration-300 hover:border-orange-500"
              />
            </div>
          </div>
        ))}
      </div>
  );
}