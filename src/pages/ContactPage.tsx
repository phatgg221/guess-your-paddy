import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const ContactPage = () => {
  const teamMembers = [
    {
      name: "Thai Duong",
      role: "Data Analysis",
      handle: "@thaiduongembed",
      image: "duong.jpg" 
    },
    {
      name: "Tri Duong",
      role: "AI Scientist",
      handle: "@tritobacco",
      image: "tri.jpg"
    },
    {
      name: "Tai Ngo",
      role: "AI Engineer",
      handle: "@taingo.056",
      image: "tai.jpg"
    },
    {
      name: "Phat Huynh",
      role: "AI Engineer",
      handle: "@lolnoob123",
      image: "phat.jpg" 
    }
  ];

  return (
    <div>
        <Header />
        <div className="py-16 bg-crop-primary text-white">
        
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-xl font-medium mb-2">We are</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">THE LIEMS'</h1>
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="rounded-full bg-crop-secondary mb-4 p-1">
                <div className="bg-white rounded-full overflow-hidden w-40 h-40">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-lg mb-2">{member.role}</p>
              <p className="text-sm opacity-80">{member.handle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </div>
    
  );
};

export default ContactPage;