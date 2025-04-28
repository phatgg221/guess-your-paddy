
import React from 'react';
import { Leaf, Rice, Wheat } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface ResultsDisplayProps {
  imageData: string | null;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ imageData }) => {
  // This is a placeholder for the actual ML model results
  // You would replace this with the actual API call and results
  
  const mockResults = [
    { name: 'Healthy Paddy', probability: 85, icon: Rice },
    { name: 'Bacterial Leaf Blight', probability: 10, icon: Leaf },
    { name: 'Rice Blast', probability: 5, icon: Wheat },
  ];
  
  if (!imageData) return null;
  
  return (
    <div className="mt-8 w-full max-w-md mx-auto">
      <Card className="border-border bg-card/50 backdrop-blur-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-semibold text-crop-primary">Analysis Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockResults.map((result) => (
              <div key={result.name} className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <result.icon className="h-5 w-5 text-crop-secondary" />
                    <span className="font-medium">{result.name}</span>
                  </div>
                  <span className="text-sm font-semibold">{result.probability}%</span>
                </div>
                <Progress value={result.probability} className="h-2" />
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-3 bg-muted/50 rounded-md text-sm">
            <p className="font-medium text-crop-primary">Recommendation:</p>
            <p className="mt-1 text-muted-foreground">
              The analyzed crop appears to be healthy. Continue with regular watering and 
              fertilization schedule. Monitor for any signs of disease in the coming weeks.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultsDisplay;
