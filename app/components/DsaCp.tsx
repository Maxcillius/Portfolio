'use client';

import Link from 'next/link';
import leetcode from '../../public/leetcode.webp'
import codeforces from '../../public/Codeforces.webp'
import codechef from '../../public/codechef.jpeg'
import Image from 'next/image';

export default function DSAProfiles() {
  const cpData = [
    {
      name: "LeetCode",
      rating: "1720 (Max Rating)",
      details: "Top 8% in Biweekly 164",
      image: leetcode,
      link: "https://leetcode.com/u/komisan/",
    },
    {
      name: "Codeforces",
      rating: "1067 (Newbie)",
      details: "Active participant in Div. 2",
      image: codeforces,
      link: "https://codeforces.com/profile/Maxcillius",
    },
    {
      name: "Codechef",
      rating: "1418 (Max Rating)",
      details: "Top 2% in Starters 206 (Div. 4)",
      image: codechef,
      link: "https://www.codechef.com/users/komisan",
    },
  ];

  return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cpData.map((platform) => (
          <Link
            key={platform.name}
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-orange-500/20 hover:-translate-y-1"
          >
            <Image
              src={platform.image} 
              alt={platform.name} 
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{platform.name}</h3>
              <p className="text-xl font-medium text-orange-400 mb-3">{platform.rating}</p>
              <p className="text-gray-400">{platform.details}</p>
            </div>
          </Link>
        ))}
      </div>
  );
}