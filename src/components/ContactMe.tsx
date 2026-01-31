import { Mail, Linkedin, Github } from "lucide-react";

const contacts = [
  {
    title: "Email",
    value: "arjunms065@gmail.com",
    link: "mailto:arjunms065@gmail.com",
    icon: <Mail size={32} />,
  },
  {
    title: "LinkedIn",
    value: "Arjun M S",
    link: "https://www.linkedin.com/in/arjun-ms-9983b1388/",
    icon: <Linkedin size={32} />,
  },
  {
    title: "GitHub",
    value: "Arjun M S",
    link: "https://github.com/arj50",
    icon: <Github size={32} />,
  },
];

const ContactMe = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4 tracking-wide">
          Contact Me
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          Open to internships, cybersecurity roles, collaborations,
          and learning opportunities.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {contacts.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-green-500/30 rounded-2xl p-8 bg-gradient-to-b from-black to-gray-900 hover:border-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] transition duration-300"
            >
              <div className="text-green-400 mb-6 flex justify-center group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm break-all">
                {item.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
