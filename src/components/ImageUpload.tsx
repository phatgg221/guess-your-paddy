import React, { useState, useCallback } from "react";
import { Upload, X, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

interface ImageUploadProps {
  onImageUploaded: (imageData: string | ArrayBuffer | null) => void;
  onAnalyzeClick?: (imageData: string) => void;
  isAnalyzing?: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onImageUploaded,
  onAnalyzeClick,
  isAnalyzing = false,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const processFile = useCallback(
    (file: File) => {
      // Check if the file is an image
      if (!file.type.match("image.*")) {
        toast.error("Please upload an image file");
        return;
      }

      // Check if the file size is less than 5MB
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image size should be less than 5MB");
        return;
      }

      setFileName(file.name);
      setIsLoading(true);

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (result) {
          setImage(result as string);
          onImageUploaded(result);
        }
        setIsLoading(false);
      };
      reader.readAsDataURL(file);
    },
    [onImageUploaded]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        processFile(e.dataTransfer.files[0]);
      }
    },
    [processFile]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        processFile(e.target.files[0]);
      }
    },
    [processFile]
  );

  const removeImage = useCallback(() => {
    setImage(null);
    setFileName(null);
    onImageUploaded(null);
  }, [onImageUploaded]);

  const handleAnalyzeClick = useCallback(() => {
    console.log("first");
    // if (image && onAnalyzeClick) {
    onAnalyzeClick(image);
    // }
  }, [image, onAnalyzeClick]);

  return (
    <div className="w-full max-w-md mx-auto">
      {!image ? (
        <div
          className={`drop-area ${
            isDragging ? "drop-area-active" : "drop-area-inactive"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center">
            <Upload className="h-10 w-10 text-muted-foreground mb-2" />
            <p className="text-lg font-medium">Drag & Drop your image here</p>
            <p className="text-sm text-muted-foreground mt-1">or</p>
            <div className="mt-4">
              <Button
                onClick={() => document.getElementById("fileInput")?.click()}
                className="bg-crop-primary hover:bg-crop-secondary"
              >
                Browse Files
              </Button>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileInput}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Supported formats: JPG, PNG, GIF (max 5MB)
            </p>
          </div>
        </div>
      ) : (
        <div className="relative">
          <div className="rounded-lg overflow-hidden border border-border">
            <img
              src={image}
              alt="Uploaded crop image"
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-2 right-2">
              <Button variant="destructive" size="icon" onClick={removeImage}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            {fileName && (
              <div className="p-2 bg-muted/80 text-sm">
                {fileName}
                <Check className="inline-block ml-1 h-4 w-4 text-green-500" />
              </div>
            )}
          </div>
          <Button
            onClick={handleAnalyzeClick}
            className="w-full mt-4 bg-crop-primary hover:bg-crop-secondary"
            disabled={isLoading || isAnalyzing}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : isAnalyzing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              "Analyze Image"
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
