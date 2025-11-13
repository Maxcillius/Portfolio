'use client'

import Image from "next/image";
import golang from '../../public/Go.png'
import nodejs from '../../public/Nodejs.png'
import expressjs from '../../public/Express.png'
import postgresql from '../../public/PostgresSQL.png'
import mongodb from '../../public/MongoDB.png'
import aws from '../../public/AWS.png'
import docker from '../../public/Docker.png'
import kubernetes from '../../public/Kubernetes.png'
import nextjs from '../../public/Next.js.png'
import reactjs from '../../public/React.png'
import cpp from '../../public/C++ (CPlusPlus).png'
import javascript from '../../public/JavaScript.png'
import typescript from '../../public/TypeScript.png'

import { useState } from "react";


export default function TechStack() {
  const [filter, setFilter] = useState('ALL');

const technologies = [
  // --- Backend First ---
  { 
    name: 'Node.js', 
    icon: nodejs, 
    category: 'WEB', 
    description: 'Primary backend runtime for building scalable APIs and services.' 
  },
  { 
    name: 'Go (Golang)', 
    icon: golang, 
    category: 'LANGUAGES', 
    description: 'High-performance language ideal for microservices and distributed systems.' 
  },
  { 
    name: 'Express.js', 
    icon: expressjs, 
    category: 'WEB', 
    description: 'Minimal, powerful backend framework used to build REST APIs.' 
  },
  { 
    name: 'PostgreSQL', 
    icon: postgresql, 
    category: 'DATABASE & CLOUD', 
    description: 'My primary relational database used across major projects.' 
  },
  { 
    name: 'MongoDB', 
    icon: mongodb, 
    category: 'DATABASE & CLOUD', 
    description: 'NoSQL database used for flexible document-based storage.' 
  },
  { 
    name: 'AWS (S3, EC2)', 
    icon: aws, 
    category: 'DATABASE & CLOUD', 
    description: 'Cloud storage, CDN optimization, and secure asset delivery.' 
  },
  { 
    name: 'Docker', 
    icon: docker, 
    category: 'DEVOPS', 
    description: 'Containerizing applications for reliable, portable deployments.' 
  },
  { 
    name: 'Kubernetes', 
    icon: kubernetes, 
    category: 'DEVOPS', 
    description: 'Orchestrating containers and building scalable microservice architectures.' 
  },
  { 
    name: 'Next.js', 
    icon: nextjs, 
    category: 'WEB', 
    description: 'Framework used to build full-stack and production-ready applications.' 
  },
  { 
    name: 'React.js', 
    icon: reactjs, 
    category: 'WEB', 
    description: 'Frontend library for fast and interactive UI development.' 
  },
  { 
    name: 'C++', 
    icon: cpp, 
    category: 'LANGUAGES', 
    description: 'Core language for DSA, problem-solving, and competitive programming.' 
  },
  { 
    name: 'JavaScript', 
    icon: javascript, 
    category: 'LANGUAGES', 
    description: 'Primary languages for full-stack development and API design.' 
  },
    { 
    name: 'TypeScript', 
    icon: typescript, 
    category: 'LANGUAGES', 
    description: 'Primary languages for full-stack development and API design.' 
  },
];

  const filters = ['ALL', 'WEB', 'LANGUAGES', 'DATABASE & CLOUD'];

  const filteredTech = technologies.filter(tech => 
    filter === 'ALL' || tech.category === filter
  );

  return (
    <>
      <div className="flex justify-center items-center mb-8 bg-gray-900/50 border border-gray-700 rounded-md p-2">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`
              px-4 py-2 mx-1 rounded-md text-sm font-medium uppercase tracking-wider
              transition-all duration-300
              ${filter === f 
                ? 'bg-orange-600 text-white shadow-md' 
                : 'text-gray-400 hover:bg-gray-700 hover:text-white'
              }
            `}
          >
            {f}
          </button>
        ))}
      </div>
      <p className="text-center text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
        Technologies that I use but not limit to
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-13 w-fit gap-3">
        {filteredTech.map((tech) => (
          <div 
            key={tech.name} 
            className="group cursor-pointer w-fit"
            title={tech.description}
          >
            <div className="flex flex-row justify-center">
                <div className="aspect-square w-26 h-26 bg-gray-900 border-2 border-gray-700 rounded-lg overflow-hidden transition-all duration-300 group-hover:border-orange-500 group-hover:-translate-y-1 group-hover:shadow-xl">
                    <Image width={1000} height={1000} src={tech.icon} alt={tech.name}/>
                </div>
            </div>
            <h3 className="mt-3 text-center text-gray-200 font-semibold tracking-wide uppercase text-sm">{tech.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
}