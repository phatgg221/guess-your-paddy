import React from "react";
import { Leaf, Clock, Plane } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface AnalysisResults {
  disease_classification?: {
    class: string;
    class_index: number;
    confidence: number;
    description: string;
  };
  age_regression?: {
    predicted_age_days: number;
    estimated_planting_date: string;
  };
  variety_classification?: {
    variety: string;
    variety_index: number;
    confidence: number;
    description: string;
  };
  image_url?: string;
}

interface ResultsDisplayProps {
  imageData: string | null;
  analysisResults: AnalysisResults | null;
  isLoading: boolean;
  isVarietyLoading?: boolean;
  isDiseaseAgeLoading?: boolean;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({
  imageData,
  analysisResults,
  isLoading,
  isVarietyLoading = false,
  isDiseaseAgeLoading = false,
}) => {
  if (!imageData) return null;

  if (isLoading) {
    return (
      <div className="mt-8 w-full max-w-md mx-auto">
        <Card className="border-border bg-card/50 backdrop-blur-sm">
          <CardContent className="pt-6 text-center">
            <div className="animate-pulse flex flex-col items-center space-y-4">
              <div className="h-4 bg-muted rounded w-3/4"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
              <div className="h-4 bg-muted rounded w-5/6"></div>
            </div>
            <p className="mt-4 text-muted-foreground">
              Analyzing your crop image...
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!analysisResults) {
    return (
      <div className="mt-8 w-full max-w-md mx-auto">
        <Card className="border-border bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-semibold text-crop-primary">
              Analysis Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground py-6">
              Upload an image and click "Start Analyzing" to see results
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const { disease_classification, age_regression, variety_classification } =
    analysisResults;

  return (
    <div className="mt-8 w-full max-w-md mx-auto">
      <Card className="border-border bg-card/50 backdrop-blur-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-semibold text-crop-primary">
            Analysis Results
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Disease Classification */}
            {disease_classification && (
              <div className="space-y-2">
                <h3 className="font-medium text-crop-primary flex items-center gap-2">
                  <Leaf className="h-4 w-4" />
                  Health Status
                </h3>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-medium capitalize">
                        {disease_classification.class}
                      </span>
                    </div>
                    <span className="text-sm font-semibold">
                      {Math.round(disease_classification.confidence * 100)}%
                    </span>
                  </div>
                  <Progress
                    value={Math.round(disease_classification.confidence * 100)}
                    className="h-2"
                  />
                </div>
              </div>
            )}

            {/* Variety Classification */}
            {variety_classification && (
              <div className="space-y-2">
                <h3 className="font-medium text-crop-primary flex items-center gap-2">
                  <Plane className="h-4 w-4" />
                  Rice Variety
                </h3>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">
                        {variety_classification.variety}
                      </span>
                    </div>
                    <span className="text-sm font-semibold">
                      {Math.round(variety_classification.confidence * 100)}%
                    </span>
                  </div>
                  <Progress
                    value={Math.round(variety_classification.confidence * 100)}
                    className="h-2"
                  />
                </div>
              </div>
            )}

            {/* Age Regression */}
            {age_regression && (
              <div className="space-y-2">
                <h3 className="font-medium text-crop-primary flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Plant Age
                </h3>
                <div className="p-2 bg-muted/30 rounded text-sm">
                  <p>
                    <span className="font-medium">Estimated Age:</span>{" "}
                    {Math.round(age_regression.predicted_age_days)} days
                  </p>
                  <p>
                    <span className="font-medium">Planting Date:</span>{" "}
                    {age_regression.estimated_planting_date}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 p-3 bg-muted/50 rounded-md text-sm">
            <p className="font-medium text-crop-primary">Recommendation:</p>
            <p className="mt-1 text-muted-foreground">
              {disease_classification?.class === "normal"
                ? "The analyzed crop appears to be healthy. Continue with regular watering and fertilization schedule. Monitor for any signs of disease in the coming weeks."
                : disease_classification
                ? `The analyzed crop shows signs of ${
                    disease_classification.class
                  }. ${
                    disease_classification.description ||
                    "Consider taking appropriate treatment measures."
                  }`
                : "Analysis in progress. Please wait for complete results."}
            </p>
            {variety_classification && (
              <p className="mt-2 text-muted-foreground">
                <span className="font-medium">Variety Info:</span>{" "}
                {variety_classification.description}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultsDisplay;
