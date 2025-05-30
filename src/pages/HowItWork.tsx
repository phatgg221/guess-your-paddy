import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, FileImage, Cpu, LineChart, FileType, Bird } from "lucide-react";

const HowItWorksPage = () => {
  const steps = [
    {
      icon: FileImage,
      title: "Upload Your Image",
      description:
        "Take a clear photo of your rice paddy leaf and upload it to our platform. Ensure good lighting and focus for the best results.",
    },
    {
      icon: Cpu,
      title: "AI Analysis",
      description:
        "Our advanced deep learning models analyze the image to detect diseases, estimate plant age, and identify rice varieties with high accuracy.",
    },
    {
      icon: LineChart,
      title: "Get Insights",
      description:
        "Receive detailed analysis with actionable recommendations to improve crop health and optimize your farming practices.",
    },
    {
      icon: Check,
      title: "Take Action",
      description:
        "Follow the tailored recommendations to treat diseases, adjust care routines, and improve your crop yield.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-crop-primary to-crop-primary/80 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                How Guess Your Paddy Works
              </h1>
              <p className="text-lg opacity-90 mb-8">
                Our AI-powered platform uses state-of-the-art deep learning
                models to identify rice diseases, estimate plant age, and
                determine rice varieties from a single photo.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="relative p-6 border border-border/40 rounded-lg bg-background shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 flex items-center justify-center bg-crop-primary/10 rounded-full">
                        <step.icon className="h-8 w-8 text-crop-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-crop-primary text-center mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-center">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technology Explanation */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-crop-primary mb-12">
                Our Technology
              </h2>

              <div className="space-y-12">
                <div className="bg-background p-6 rounded-lg border border-border/40 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Bird className="h-6 w-6 text-crop-primary" />
                    <h3 className="text-xl font-semibold text-crop-primary">
                      Disease Classification
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Our disease classification model uses a fine-tuned Mini
                    VGG16 convolutional neural network trained on thousands of
                    paddy plant images. This model can detect 9+ common rice
                    diseases with high accuracy, even in early stages when
                    visual symptoms may be subtle.
                  </p>
                  <div className="mt-6 bg-crop-primary/5 p-4 rounded-md">
                    <p className="text-sm font-medium text-crop-primary">
                      Diseases we can detect:
                    </p>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-crop-secondary" />
                        <span>Bacterial Leaf Blight</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-crop-secondary" />
                        <span>Brown Spot</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-crop-secondary" />
                        <span>Blast</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-crop-secondary" />
                        <span>Tungro</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-crop-secondary" />
                        <span>Hispa</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-crop-secondary" />
                        <span>And more...</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground">
                    <strong>Model:</strong> Fine-tuned Mini VGG16
                    (vgg_best.keras)
                  </div>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border/40 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <LineChart className="h-6 w-6 text-crop-primary" />
                    <h3 className="text-xl font-semibold text-crop-primary">
                      Age Estimation
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Our age estimation system uses a ResNet50V2 architecture
                    fine-tuned for regression tasks. By analyzing visual
                    features such as leaf size, color intensity, and texture
                    patterns, our model can predict the age of rice plants in
                    days, helping farmers time their interventions and plan
                    harvests optimally.
                  </p>
                  <div className="mt-6 bg-crop-primary/5 p-4 rounded-md">
                    <p className="text-sm font-medium text-crop-primary">
                      Key benefits:
                    </p>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-crop-secondary mt-1" />
                        <span>
                          Accurately determine plant age within a few days of
                          actual growth stage
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-crop-secondary mt-1" />
                        <span>
                          Estimate planting date for better harvest planning
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-crop-secondary mt-1" />
                        <span>
                          Time fertilizer and pesticide applications to match
                          growth stage
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground">
                    <strong>Model:</strong> ResNet50V2
                    (resnet50v2_best_model.keras)
                  </div>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border/40 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <FileType className="h-6 w-6 text-crop-primary" />
                    <h3 className="text-xl font-semibold text-crop-primary">
                      Variety Identification
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Our variety identification system leverages the
                    EfficientNetB0 architecture, optimized for computational
                    efficiency while maintaining high accuracy. Different rice
                    varieties have subtle visual signatures that our model has
                    been trained to recognize from leaf characteristics.
                  </p>
                  <div className="mt-6 bg-crop-primary/5 p-4 rounded-md">
                    <p className="text-sm font-medium text-crop-primary">
                      Our model recognizes common varieties including:
                    </p>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-crop-secondary" />
                        <span>ADT45</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-crop-secondary" />
                        <span>KarnatakaPonni</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-crop-secondary" />
                        <span>Ponni</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-crop-secondary" />
                        <span>And many more...</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground">
                    <strong>Model:</strong> EfficientNetB0
                    (efficientnet_final.keras)
                  </div>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border/40 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Cpu className="h-6 w-6 text-crop-primary" />
                    <h3 className="text-xl font-semibold text-crop-primary">
                      Model Training & Development
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    We believe in transparency and collaboration. Our machine
                    learning models are developed using open methodologies, and
                    we've made our training code publicly available for
                    researchers and developers to learn from, reproduce our
                    results, or build upon our work.
                  </p>
                  <div className="mt-6 bg-crop-primary/5 p-4 rounded-md">
                    <p className="text-sm font-medium text-crop-primary">
                      Our model development pipeline includes:
                    </p>
                    <div className="mt-2 space-y-3">
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-crop-secondary mt-1" />
                        <span>
                          Data preprocessing with extensive augmentation
                          techniques to improve model robustness
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-crop-secondary mt-1" />
                        <span>
                          Transfer learning with state-of-the-art CNN
                          architectures (VGG, EfficientNet, ResNet)
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-crop-secondary mt-1" />
                        <span>
                          Rigorous cross-validation and hyperparameter tuning
                          for optimal performance
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-crop-secondary mt-1" />
                        <span>
                          Semi-supervised learning with additional datasets to
                          improve generalization
                        </span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <a
                        href="https://github.com/TaiVanNgo/guess-your-paddy-models"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-crop-primary text-white rounded-md hover:bg-crop-primary/90 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                        Explore our Model Training Repository
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border/40 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <FileImage className="h-6 w-6 text-crop-primary" />
                    <h3 className="text-xl font-semibold text-crop-primary">
                      Dataset & Training Process
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Our models are trained on a diverse collection of rice plant
                    images sourced from multiple datasets. The primary source is
                    the Paddy Doctor Kaggle Competition dataset, supplemented
                    with images from the Rice Disease Dataset (Mendeley), Rice
                    Disease Image Dataset (Kaggle), and HumayAI Rice Diseases
                    (Roboflow).
                  </p>
                  <div className="mt-6 bg-crop-primary/5 p-4 rounded-md space-y-4">
                    <div>
                      <p className="text-sm font-medium text-crop-primary mb-2">
                        Training Process:
                      </p>
                      <ol className="list-decimal pl-5 space-y-1 text-sm">
                        <li>
                          Exploratory data analysis to understand class
                          distribution
                        </li>
                        <li>
                          Data preprocessing & augmentation to increase dataset
                          diversity
                        </li>
                        <li>
                          Model architecture selection & hyperparameter tuning
                        </li>
                        <li>
                          Training with cross-validation to ensure
                          generalization
                        </li>
                        <li>Evaluation on held-out test sets</li>
                        <li>
                          Final model deployment in production environment
                        </li>
                      </ol>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-crop-primary mb-2">
                        Performance Metrics:
                      </p>
                      <ul className="space-y-1">
                        <li>
                          <strong>Disease Classification:</strong> {">"}90%
                          accuracy on test set
                        </li>
                        <li>
                          <strong>Variety Classification:</strong> {">"}85%
                          accuracy on test set
                        </li>
                        <li>
                          <strong>Age Estimation:</strong> Mean Absolute Error
                          &lt; 5 days
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-crop-secondary to-crop-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Ready to Try It Yourself?
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Experience the power of our AI models in action. Upload your
                paddy image and get instant analysis to improve your farming
                practices.
              </p>
              <a
                href="/"
                className="px-6 py-3 bg-white text-crop-primary font-medium rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Start Analyzing
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;
