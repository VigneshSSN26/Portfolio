import React from 'react';

// --- SVG Icons ---
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const LinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-link ml-2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path></svg>
);

// --- Portfolio Data ---
const portfolioData = {
  name: "Vignesh M",
  email: "vignesh2210685@ssn.edu.in",
  linkedin: "https://www.linkedin.com/", // Replace with your actual Linkedin URL
  github: "https://github.com/", // Replace with your actual Github URL
  profileImage: "/WhatsApp Image 2025-06-24 at 14.50.05_5729595b.jpg", // Assumes your image is in public/images/profile.jpg
  introduction: "B.Tech Information Technology student at SSN College of Engineering with a passion for Machine Learning, particularly in Reinforcement Learning and Graph Neural Networks. Proven ability to build end-to-end systems that tackle complex problems like real-time threat detection and fraud analysis.",
  projects: [
    {
      title: "Ash League Auction",
      description: "An online platform for real-time team bidding. Offers a seamless experience with live auctions, team details, and fair competition, ensuring secure and transparent transactions.",
      technologies: ["ReactJS", "Firebase", "Node.js", "Real-time DB"],
      link: "#"
    },
    {
        title: "HawkEye - Hosteller Detection System",
        description: "A real-time detection system with admin-protected operations. Features UI-based image uploads, automatic database syncing with Firebase, and a roadmap for future enhancements.",
        technologies: ["Python", "Firebase Auth", "ReactJS", "Computer Vision"],
        link: "#"
    },
    {
      title: "Real-Time DDoS Detection & Mitigation",
      description: "Developed a real-time system using Adaptive Random Forests to classify dynamic attack traffic. Integrated a Q-Learning agent to learn and execute optimal mitigation strategies.",
      technologies: ["Python", "Reinforcement Learning", "Q-Learning", "ReactJS"],
      link: "#"
    },
    {
      title: "Fraud Ring Detection using GNNs",
      description: "Engineered a fraud analytics system by modeling credit card transactions as a graph in Neo4j and training a GNN to identify complex fraud patterns and hidden fraud rings.",
      technologies: ["Python", "TensorFlow", "GNNs", "Neo4j", "ReactJS"],
      link: "#"
    },
    {
      title: "Automatic Stock Price Prediction",
      description: "Implemented a stock price prediction system using LSTM-based deep learning to model time-dependent patterns in market data, achieving approximately 70% accuracy.",
      technologies: ["Python", "LSTM", "Neural Networks", "React.JS"],
      link: "#"
    }
  ],
  skills: {
    languages: ["Python", "Java", "JavaScript"],
    machineLearning: ["PyTorch", "TensorFlow", "Scikit-learn", "LSTM", "GNNs", "Reinforcement Learning"],
    webFrameworks: ["Flask", "Django", "React.js", "Node.js"],
    databasesTools: ["MongoDB", "Firebase", "Neo4j", "Git"]
  }
};

// --- Reusable Components ---
const SocialLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transform hover:scale-110 transition-all duration-300">
    {children}
  </a>
);
const SkillTag = ({ skill }) => (
  <span className="bg-gray-700/50 text-indigo-300 text-sm font-medium px-4 py-2 rounded-full border border-gray-600/50 transition-colors duration-300 hover:bg-gray-700">
    {skill}
  </span>
);
const ProjectCard = ({ project }) => (
  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-indigo-500/20 hover:border-indigo-800/50">
    <div className="p-6 flex flex-col h-full">
      <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
      <p className="text-gray-400 mb-4 text-base flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-5">
        {project.technologies.map(tech => <SkillTag key={tech} skill={tech} />)}
      </div>
       <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center text-indigo-400 font-semibold hover:text-indigo-300 transition-colors duration-300 group">
        View Project 
        <LinkIcon />
      </a>
    </div>
  </div>
);

// --- Main App Component ---
export default function App() {
  return (
    <div className="bg-gray-900 text-gray-200 font-sans leading-normal tracking-wider">
      <header className="sticky top-0 z-50 bg-gray-900/70 backdrop-blur-lg border-b border-gray-800/50 shadow-md">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            {portfolioData.name}
          </div>
          <div className="hidden md:flex space-x-2">
            <a href="#about" className="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 text-gray-300 hover:bg-gray-700 hover:text-white">About</a>
            <a href="#projects" className="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
            <a href="#skills" className="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 text-gray-300 hover:bg-gray-700 hover:text-white">Skills</a>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-6 py-12 md:py-20">
        <section id="about" className="min-h-screen flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                <div className="md:col-span-2">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500">
                        Vignesh M
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-indigo-300 mb-6">
                        ML Engineer & Full-Stack Developer
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl">
                        {portfolioData.introduction}
                    </p>
                    <div className="flex items-center space-x-6">
                        <SocialLink href={`mailto:${portfolioData.email}`}><MailIcon /></SocialLink>
                        <SocialLink href={portfolioData.linkedin}><LinkedinIcon /></SocialLink>
                        <SocialLink href={portfolioData.github}><GithubIcon /></SocialLink>
                        <a href="#projects" className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-lg transform hover:scale-105">
                            View My Work
                        </a>
                    </div>
                </div>
                <div className="flex justify-center md:justify-end">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full p-1.5 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                        <img 
                            src={portfolioData.profileImage} 
                            alt="Vignesh M" 
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                </div>
            </div>
        </section>
        <section id="projects" className="py-20">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map(p => <ProjectCard key={p.title} project={p} />)}
          </div>
        </section>
        <section id="skills" className="py-20">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Technical Skills
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-indigo-400 mb-6 text-center">Languages</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {portfolioData.skills.languages.map(s => <SkillTag key={s} skill={s} />)}
              </div>
            </div>
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-indigo-400 mb-6 text-center">Machine Learning</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {portfolioData.skills.machineLearning.map(s => <SkillTag key={s} skill={s} />)}
              </div>
            </div>
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-indigo-400 mb-6 text-center">Web Frameworks</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {portfolioData.skills.webFrameworks.map(s => <SkillTag key={s} skill={s} />)}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-indigo-400 mb-6 text-center">Databases & Tools</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {portfolioData.skills.databasesTools.map(s => <SkillTag key={s} skill={s} />)}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900/50 border-t border-gray-800/50 py-6">
        <div className="container mx-auto px-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
