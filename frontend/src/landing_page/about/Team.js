import React, { useState } from 'react';

const teamMembers = [
  {
    name: 'Nikhil Kamath',
    title: 'Co-founder & CFO',
    image: 'media/nikhil.jpg',
    bio: 'Nikhil Kamath is the co-founder of Zerodha. He manages finance and business strategy.',
  },
  {
    name: 'Dr. Kailash Nadh',
    title: 'CTO',
    image: 'media/kailash.jpg',
    bio: 'Dr. Kailash Nadh is the CTO of Zerodha and leads all tech initiatives across the platform.',
  },
  {
    name: 'Venu Madhav',
    title: 'COO',
    image: 'media/venu.jpg',
    bio: 'Venu Madhav oversees operations and customer experience at Zerodha.',
  },
];

function Team() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleBio = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="team-container">
      {teamMembers.map((member, index) => (
        <div className="team-card" key={index}>
          <img src={member.image} alt={member.name} className="profile-img" />
          <h3>{member.name}</h3>
          <p className="title">{member.title}</p>
          <p className="bio-toggle" onClick={() => toggleBio(index)}>
            Bio <span>{activeIndex === index ? '▲' : '▼'}</span>
          </p>
          {activeIndex === index && (
            <p className="bio-text">{member.bio}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Team;
