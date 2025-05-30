import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const teamMembers = [
    {
      name: "Thai Duong",
      role: "AI Engineer",
      handle: "@TDuong04",
      image: "duong.jpg",
      githubLink: "https://github.com/TDuong04",
    },
    {
      name: "Tri Duong",
      role: "AI Scientist",
      handle: "@tritobacco",
      image: "tri.jpg",
      githubLink: "https://github.com/TriDuong070803",
    },
    {
      name: "Tai Ngo",
      role: "AI Engineer",
      handle: "@taivanngo",
      image: "tai.jpg",
      githubLink: "https://github.com/TaiVanNgo",
    },
    {
      name: "Phat Huynh",
      role: "AI Engineer",
      handle: "@phatgg221",
      image: "phat.jpg",
      githubLink: "https://github.com/phatgg221",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="py-20 bg-gradient-to-br from-crop-primary to-crop-primary/80 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-xl font-medium mb-3 text-crop-secondary animate-fadeIn">
                Meet Our Team
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                THE LIEMS'
              </h1>
              <p className="text-lg opacity-90 mb-8 leading-relaxed">
                We're a passionate team of AI specialists dedicated to creating
                innovative solutions that make a difference in how people
                interact with technology.
              </p>
              <div className="flex justify-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-crop-secondary animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-white animate-pulse delay-100"></div>
                <div className="w-2 h-2 rounded-full bg-crop-secondary animate-pulse delay-200"></div>
              </div>
            </div>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col items-center transform transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="rounded-full bg-gradient-to-br from-crop-secondary to-crop-secondary/70 p-1.5 mb-5 shadow-lg group-hover:shadow-crop-secondary/30">
                    <div className="bg-white rounded-full overflow-hidden w-44 h-44 border-4 border-white">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-lg font-medium mb-3">{member.role}</p>

                  {/* Social Media Icons */}
                  <div className="flex space-x-3 items-center">
                    <span className="text-sm opacity-80">{member.handle}</span>
                    <div className="flex space-x-2">
                      <a
                        href="mailto:contact@theliems.com"
                        className="text-white hover:text-crop-secondary transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                      <a
                        href={member.githubLink}
                        className="text-white hover:text-crop-secondary transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-crop-primary">
              Get in Touch
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto">
              Have a question or want to collaborate with us? We'd love to hear
              from you! Drop us a message.
            </p>
            <a
              href="mailto:contact@theliems.com"
              className="inline-block px-8 py-4 bg-crop-primary text-white font-bold rounded-full hover:bg-crop-secondary transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
