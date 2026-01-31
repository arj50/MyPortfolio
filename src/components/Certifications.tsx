import { BadgeCheck } from "lucide-react";

const certifications = [
  {
    title: "CEH (Certified Ethical Hacker)",
    issuer: "EC-Council",
    year: "2026",
    icon: <BadgeCheck size={32} />,
  },
  {
    title: "CST (Certified Security Tester)",
    issuer: "TECHBYHEART",
    year: "2026",
   icon: <BadgeCheck size={32} />,
  },
  {
    title: "Advanced SOC Analyst (ASA)",
    issuer: "TECHBYHEART",
    year: "2026",
    icon: <BadgeCheck size={32} />,
  },
  {
    title: "Introduction to the Threat Landscape",
   issuer: "Fortinet - FCF",
    year: "2025",
    icon: <BadgeCheck size={32} />,
  },
  {
    title: "Hands-on Cybersecurity Training ",
    issuer: "TCS - Tata Strive Ion",
    year: "2024",
    icon: <BadgeCheck size={32} />,
  },
  {
    title: "Advent of Cyber",
    issuer: "TryHackMe",
    year: "2024",
    icon: <BadgeCheck size={32} />,
  },
  {
    title: "IAM & Cybersecurity for Beginners",
    issuer: "Tata STRIVE",
    year: "2025",
   icon: <BadgeCheck size={32} />,
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-24 bg-black text-white relative"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4 tracking-wide">
          Certifications
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          Industry-recognized certifications and hands-on training in ethical hacking, application security, threat analysis, IAM, and real-world cybersecurity operations from EC-Council, Fortinet, TCS, TryHackMe, and Microsoft-partnered programs.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="border border-green-500/30 rounded-2xl p-8 bg-gradient-to-b from-black to-gray-900 hover:border-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] transition duration-300"
            >
              {/* Icon */}
              <div className="text-green-400 mb-6 flex justify-center">
                {cert.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="text-gray-400 mb-1">
                {cert.issuer}
              </p>

              {/* Year */}
              <span className="text-sm text-green-400">
                {cert.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
