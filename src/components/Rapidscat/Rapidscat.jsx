import React from "react";
import teamImg from "../../assets/satelite1.jpg";

const Rapidscat = () => {
  const teamMembers = [
    {
      name: "Abhishek Sharma",
      role: "Team Lead",
      description: "Leads the team, ensures milestones are met,integrates frontend and backend development.",
      img: teamImg,
    },
    {
      name: "Ayush Singh",
      role: "Full Stack Developer",
      description: "Designs and develops user-friendly interfaces for seamless user experiences.",
      img: teamImg,
    },
    {
      name: "Sonali Panigrahi",
      role: "Frontend Developer",
      description: "Designs and developed interactive user interfaces, ensuring an engaging and responsive user experience",
      img: teamImg,
    },

  ];
  return (
    <>
      <section className="bg-primary text-white pb-12">
      <div className="container">
        <h1 className="uppercase text-center text-5xl mb-8" data-aos="fade-up">
          Our Team
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-secondary p-6 rounded-lg shadow-lg text-center space-y-4 border-t-4 border-sky-800"
              data-aos="zoom-in"
              data-aos-delay={`${300 + index * 100}`}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover"
              />
              <h2 className="text-2xl font-bold">{member.name}</h2>
              <h3 className="text-xl text-sky-400">{member.role}</h3>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Rapidscat;
