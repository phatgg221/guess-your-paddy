
import React from 'react';
import { Leaf, Sprout, Wheat } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Wheat,
      title: 'Crop Health Analysis',
      description: 'Quickly identify the health status of your paddy crops using advanced image recognition.'
    },
    {
      icon: Leaf,
      title: 'Disease Detection',
      description: 'Early detection of common paddy diseases including blast, blight, and other pathogens.'
    },
    {
      icon: Sprout,
      title: 'Growth Monitoring',
      description: 'Track the growth stages of your crops and receive tailored recommendations.'
    }
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-crop-primary mb-12">
          How CropScan Helps Your Farming
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-lg bg-background border border-border/40 shadow-sm transition-all hover:shadow-md hover:border-crop-secondary/40"
            >
              <div className="p-3 rounded-full bg-crop-primary/10 mb-4">
                <feature.icon className="h-8 w-8 text-crop-primary" />
              </div>
              <h3 className="text-xl font-medium text-crop-primary mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
