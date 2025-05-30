import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Leaf, BookOpen, Globe } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-crop-primary to-crop-primary/80 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Guess Your Paddy
              </h1>
              <p className="text-lg opacity-90 mb-8">
                Bringing advanced AI technology to rice farmers for better crop
                management and higher yields.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-crop-primary mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground">
                  At Guess Your Paddy, we're committed to revolutionizing rice
                  farming through accessible AI technology. Our mission is to
                  empower farmers with tools that were once only available to
                  large agricultural corporations, helping them make data-driven
                  decisions to improve crop health, reduce losses, and increase
                  productivity.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-muted/30 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-crop-primary/10 rounded-full">
                      <Leaf className="h-6 w-6 text-crop-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-crop-primary">
                      Sustainable Agriculture
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    We believe early disease detection and proper crop
                    management lead to reduced pesticide use and more
                    sustainable farming practices. Our technology helps farmers
                    implement targeted interventions instead of broad chemical
                    applications.
                  </p>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-crop-primary/10 rounded-full">
                      <BookOpen className="h-6 w-6 text-crop-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-crop-primary">
                      Education & Empowerment
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    Beyond just identification, we're committed to educating
                    farmers about best practices for each rice variety and
                    disease treatment. Knowledge sharing is key to agricultural
                    advancement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="aspect-square bg-crop-primary/10 rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src="/team.jpeg"
                      alt="Team Photo"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                          "https://placehold.co/400x400/e6f7ff/1e9087?text=Team+Photo";
                      }}
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h2 className="text-3xl font-bold text-crop-primary mb-6">
                    Our Story
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Guess Your Paddy began as a research project at RMIT
                    University, where a team of computer science and
                    agricultural science students came together to solve
                    real-world farming challenges using machine learning.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    After witnessing the struggles of rice farmers in
                    identifying diseases early and optimizing crop care, we
                    developed an accessible AI solution that could work with
                    just a smartphone camera. What started as academic research
                    has evolved into a practical tool that's helping farmers
                    across Southeast Asia.
                  </p>
                  <p className="text-muted-foreground">
                    Today, our team continues to refine our models, expand our
                    database of rice varieties and diseases, and make our
                    technology more accessible to farmers in developing regions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Impact */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-crop-primary mb-12 text-center">
                Our Impact
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-background rounded-lg border border-border/40 shadow-sm">
                  <div className="text-4xl font-bold text-crop-secondary mb-2">
                    3
                  </div>
                  <p className="text-muted-foreground">
                    Advanced ML Models Developed
                  </p>
                </div>
                <div className="text-center p-6 bg-background rounded-lg border border-border/40 shadow-sm">
                  <div className="text-4xl font-bold text-crop-secondary mb-2">
                    10+
                  </div>
                  <p className="text-muted-foreground">
                    Rice Varieties Identified
                  </p>
                </div>
                <div className="text-center p-6 bg-background rounded-lg border border-border/40 shadow-sm">
                  <div className="text-4xl font-bold text-crop-secondary mb-2">
                    90%
                  </div>
                  <p className="text-muted-foreground">
                    Average Disease Detection Accuracy
                  </p>
                </div>
              </div>

              <div className="mt-12 bg-background p-6 rounded-lg border border-border/40 shadow-sm">
                <h3 className="text-xl font-semibold text-crop-primary mb-4">
                  Project Recognition
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our research project has been recognized within RMIT
                  University for its innovative application of machine learning
                  to solve agricultural challenges. We aim to continue
                  developing this technology and potentially deploy it to assist
                  farmers in Southeast Asia.
                </p>
                <p className="text-muted-foreground">
                  Through our work, we've demonstrated the potential for
                  accessible AI tools to make a significant impact on
                  sustainable farming practices and food security in developing
                  regions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-crop-secondary to-crop-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Join Us in Transforming Agriculture
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Whether you're a farmer looking to improve your crop yields, a
                researcher interested in agricultural AI, or a developer who
                wants to contribute to our open-source projects, we'd love to
                hear from you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/"
                  className="px-6 py-3 bg-white text-crop-primary font-medium rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Try Our Platform
                </a>
                <a
                  href="/contact"
                  className="px-6 py-3 bg-transparent border border-white font-medium rounded-lg hover:bg-white/10 transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
