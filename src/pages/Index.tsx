import { useState } from "react";
import Header from "@/components/Header";
import ImageUpload from "@/components/ImageUpload";
import ResultsDisplay from "@/components/ResultsDisplay";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import { Wheat } from "lucide-react";
import { AdvancedImage, placeholder } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

const api_key = "684852851754247";
const cloud_name = "dhjapmqga";
const api_secret = "5x7_Y5k1pjekQFG5mHQaVrnP414";
const Index = () => {
  // State to hold the image data and analysis results
  const [imageData, setImageData] = useState<string | null>(null);
  const [analysisResults, setAnalysisResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 5x7_Y5k1pjekQFG5mHQaVrnP414
  //phat
  // 684852851754247
  //cloud name dhjapmqga
  // Function to handle image file input change
  const handleImageUploaded = (data: string | ArrayBuffer | null) => {
    setImageData(data as string);
  };

  // Handle the image upload to Cloudinary
  const handleUploadToCloudinary = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "lzz18aot");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dhjapmqga/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Cloudinary upload failed");
      }
      const data = await response.json();
      const imageUrl = data.secure_url;
      console.log("Image uploaded to Cloudinary:", imageUrl);
      return imageUrl;
    } catch (uploadError) {
      setError("Error uploading image: " + uploadError.message);
      console.error(uploadError);
    }
  };

  // Handle upload and analysis
  const handleAnalyze = async () => {
    if (!imageData) return;

    const base64ImageData = imageData.split(",")[1]; // Extract the base64 part

    setLoading(true);
    setError(null);

    console.log("Starting image analysis... ", base64ImageData);
    try {
      // Upload the image to Cloudinary (you can use this function when an image is selected)
      const imageUrl = await handleUploadToCloudinary(
        new File([imageData], "image.jpg")
      ); // Replace with actual image file

      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image_url: imageUrl,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Image analysis results:", data);
      setAnalysisResults(data);
    } catch (uploadError: any) {
      setError("Error analyzing image: " + uploadError.message);
      console.error("Analysis error:", uploadError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-crop-pattern">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-16 px-4">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center p-2 bg-crop-primary/10 rounded-full mb-4">
                <Wheat className="h-5 w-5 text-crop-primary mr-2" />
                <span className="text-sm font-medium text-crop-primary">
                  Paddy & Crop Analysis
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-crop-primary leading-tight mb-6">
                Analyze Your Crop Health With Advanced AI
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Upload an image of your paddy or crop and our ML model will
                analyze its health, identify potential diseases, and provide
                actionable insights.
              </p>
            </div>
          </div>
        </section>

        {/* Upload & Results Section */}
        <section className="py-8 md:py-12 px-4">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <h2 className="text-xl md:text-2xl font-semibold mb-6 text-crop-primary">
                    Upload Your Crop Image
                  </h2>
                  <div className="flex-grow">
                    <ImageUpload
                      onImageUploaded={handleImageUploaded}
                      isAnalyzing={loading}
                    />
                    {error && (
                      <p className="mt-4 text-red-500 text-sm">{error}</p>
                    )}
                    <button
                      onClick={handleAnalyze}
                      disabled={loading || !imageData}
                      className="mt-4 px-6 py-3 bg-crop-primary text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors"
                    >
                      {loading ? "Analyzing..." : "Start Analyzing"}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col">
                  <h2 className="text-xl md:text-2xl font-semibold mb-6 text-crop-primary">
                    Analysis Results
                  </h2>
                  {imageData ? (
                    <ResultsDisplay
                      imageData={imageData}
                      analysisResults={analysisResults}
                      isLoading={loading}
                    />
                  ) : (
                    <div className="flex-grow flex items-center justify-center border-2 border-dashed border-border rounded-lg p-6">
                      <p className="text-muted-foreground text-center">
                        Upload an image to see the analysis results
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <FeaturesSection />

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-crop-primary to-crop-secondary text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Ready to Optimize Your Farming Practices?
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Start using our advanced crop analysis tools today and make
                data-driven decisions for your agricultural needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-6 py-3 bg-white text-crop-primary font-medium rounded-lg hover:bg-opacity-90 transition-colors">
                  Start Analyzing
                </button>
                <button className="px-6 py-3 bg-transparent border border-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
