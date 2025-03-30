import React from "react";

const achievements = [
  {
    title: "Medical Milestones",
    description: "Track major healthcare accomplishments, including successful surgeries, breakthrough treatments, and improvements in patient care."
  },
  {
    title: "Patient Success Stories",
    description: "Showcase real-life impact through patient testimonials and case studies highlighting exceptional recovery journeys."
  },
  {
    title: "Awards & Recognitions",
    description: "Highlight industry honors, certifications, and accolades received by the hospital and medical professionals."
  },
  {
    title: "Research & Innovations",
    description: "Display breakthroughs in medical technology, clinical research, and advanced healthcare solutions."
  },
  {
    title: "Community Outreach",
    description: "Demonstrate impact on public health through awareness programs, free medical camps, and community health initiatives."
  }
];

const AchievementCard = ({ title, description }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white dark:bg-gray-800">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mt-2">{description}</p>
    </div>
  );
};

const Achievements = () => {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
