import { useState } from "react";
import { X, Check } from "lucide-react";
import { UploadExcelStep } from "./UploadExcelStep";
import { InputSchemaReviewStep } from "./InputSchemaReviewStep";
import { SuggestOutputSchemaStep } from "./SuggestOutputSchemaStep";
import { SmartMappingStep } from "./SmartMappingStep";

interface CreateVersionModalProps {
  config: any;
  isOpen: boolean;
  onClose: () => void;
}

const steps = [
  { id: 1, name: "Tải lên Mẫu Excel", key: "upload" },
  { id: 2, name: "Xem lại Cấu trúc Đầu vào", key: "input-review" },
  { id: 3, name: "Gợi ý Cấu trúc Đầu ra", key: "output-suggest" },
  { id: 4, name: "Ánh xạ Thông minh & Quy tắc", key: "mapping" }
];

export function CreateVersionModal({ config, isOpen, onClose }: CreateVersionModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  
  // Step 1: Upload Excel
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [selectedSheet, setSelectedSheet] = useState("Sheet1");
  const [headerRow, setHeaderRow] = useState(1);
  
  // Step 2: Input Schema (detected from Excel)
  const [inputSchema, setInputSchema] = useState<any[]>([]);
  
  // Step 3: Output Schema (suggested based on input)
  const [outputFields, setOutputFields] = useState<any[]>([]);
  
  // Step 4: Mappings
  const [mappings, setMappings] = useState<any>({});

  if (!isOpen) return null;

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return uploadedFile !== null;
      case 2:
        return inputSchema.length > 0;
      case 3:
        return outputFields.length > 0;
      case 4:
        // Check all required fields are mapped
        const requiredFields = outputFields.filter(f => f.required);
        return requiredFields.every(f => mappings[f.id]?.sourceColumn);
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSave = () => {
    console.log("Saving normalization config:", {
      file: uploadedFile?.name,
      inputSchema,
      outputFields,
      mappings
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm">
      <div className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              {config ? `Phiên bản Mới: ${config.name}` : "Tạo Cấu hình Chuẩn hóa Mới"}
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Làm theo các bước để thiết lập quy trình chuẩn hóa dữ liệu Excel
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="px-6 py-6 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div className="flex items-center w-full">
                    {/* Step Circle */}
                    <div className="relative flex items-center justify-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${
                          currentStep > step.id
                            ? "bg-emerald-500 text-white"
                            : currentStep === step.id
                            ? "bg-blue-600 text-white ring-4 ring-blue-100"
                            : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        {currentStep > step.id ? (
                          <Check className="w-5 h-5" />
                        ) : (
                          step.id
                        )}
                      </div>
                    </div>
                    
                    {/* Connecting Line */}
                    {index < steps.length - 1 && (
                      <div className="flex-1 h-0.5 mx-3">
                        <div
                          className={`h-full transition-all ${
                            currentStep > step.id
                              ? "bg-emerald-500"
                              : "bg-gray-200"
                          }`}
                        />
                      </div>
                    )}
                  </div>
                  
                  {/* Step Label */}
                  <p
                    className={`text-xs font-medium mt-2 text-center ${
                      currentStep === step.id
                        ? "text-blue-600"
                        : currentStep > step.id
                        ? "text-emerald-600"
                        : "text-gray-500"
                    }`}
                  >
                    {step.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="flex-1 overflow-y-auto">
          {currentStep === 1 && (
            <UploadExcelStep
              uploadedFile={uploadedFile}
              setUploadedFile={setUploadedFile}
              selectedSheet={selectedSheet}
              setSelectedSheet={setSelectedSheet}
              headerRow={headerRow}
              setHeaderRow={setHeaderRow}
              setInputSchema={setInputSchema}
            />
          )}
          
          {currentStep === 2 && (
            <InputSchemaReviewStep
              inputSchema={inputSchema}
              setInputSchema={setInputSchema}
            />
          )}
          
          {currentStep === 3 && (
            <SuggestOutputSchemaStep
              inputSchema={inputSchema}
              outputFields={outputFields}
              setOutputFields={setOutputFields}
            />
          )}
          
          {currentStep === 4 && (
            <SmartMappingStep
              inputSchema={inputSchema}
              outputFields={outputFields}
              mappings={mappings}
              setMappings={setMappings}
            />
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="font-medium">Bước {currentStep} / {steps.length}</span>
          </div>
          
          <div className="flex items-center gap-3">
            {currentStep > 1 && (
              <button
                onClick={handleBack}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all"
              >
                Quay lại
              </button>
            )}
            
            {currentStep < 4 ? (
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className={`px-5 py-2 text-sm font-medium text-white rounded-xl transition-all ${
                  canProceed()
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-sm"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                Tiếp theo
              </button>
            ) : (
              <button
                onClick={handleSave}
                disabled={!canProceed()}
                className={`px-5 py-2 text-sm font-medium text-white rounded-xl transition-all ${
                  canProceed()
                    ? "bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 shadow-sm"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                Lưu Cấu hình
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}