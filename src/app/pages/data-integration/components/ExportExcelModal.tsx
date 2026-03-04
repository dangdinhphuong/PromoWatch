import { useState } from "react";
import { X, Upload, Download, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface ExportExcelModalProps {
  config: any;
  isOpen: boolean;
  onClose: () => void;
}

const mockVersions = [
  {
    id: "v2.1",
    version: "v2.1",
    description: "Latest stable version with phone formatting",
    fieldsCount: 8,
    rulesCount: 12,
    createdAt: "2024-02-10"
  },
  {
    id: "v2.0",
    version: "v2.0",
    description: "Added currency normalization",
    fieldsCount: 7,
    rulesCount: 10,
    createdAt: "2024-02-05"
  },
  {
    id: "v1.3",
    version: "v1.3",
    description: "Basic normalization rules",
    fieldsCount: 6,
    rulesCount: 8,
    createdAt: "2024-01-28"
  }
];

export function ExportExcelModal({ config, isOpen, onClose }: ExportExcelModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedVersion, setSelectedVersion] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingComplete, setProcessingComplete] = useState(false);
  const [stats, setStats] = useState({
    totalRows: 0,
    validRows: 0,
    errorRows: 0,
    successRate: 0
  });

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleProcess = () => {
    setIsProcessing(true);
    setCurrentStep(3);

    // Simulate processing
    setTimeout(() => {
      setStats({
        totalRows: 1543,
        validRows: 1521,
        errorRows: 22,
        successRate: 98.6
      });
      setIsProcessing(false);
      setProcessingComplete(true);
    }, 2500);
  };

  const canProceed = () => {
    if (currentStep === 1) return selectedVersion !== null;
    if (currentStep === 2) return uploadedFile !== null;
    return false;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="absolute inset-0 overflow-hidden">
        <div className="flex min-h-full items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl transform transition-all">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Export Excel - {config.name}
                </h2>
                <p className="text-sm text-gray-600 mt-0.5">
                  Step {currentStep} of 3
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center gap-2">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex-1">
                    <div className={`h-2 rounded-full transition-all duration-300 ${
                      step <= currentStep
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600"
                        : "bg-gray-200"
                    }`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 max-h-[600px] overflow-y-auto">
              {/* Step 1: Select Version */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Select Normalization Version
                    </h3>
                    <p className="text-sm text-gray-600">
                      Choose which version configuration to use for this export
                    </p>
                  </div>

                  <div className="space-y-3">
                    {mockVersions.map((version) => {
                      const isSelected = selectedVersion === version.id;

                      return (
                        <button
                          key={version.id}
                          onClick={() => setSelectedVersion(version.id)}
                          className={`w-full p-4 text-left border-2 rounded-xl transition-all ${
                            isSelected
                              ? "border-blue-500 bg-blue-50 shadow-md shadow-blue-500/20"
                              : "border-gray-200 hover:border-blue-300 hover:bg-blue-50/50"
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold bg-blue-600 text-white">
                                  {version.version}
                                </span>
                                {version.id === config.activeVersion && (
                                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                                    Active
                                  </span>
                                )}
                              </div>
                              <p className="text-sm font-medium text-gray-900 mb-2">
                                {version.description}
                              </p>
                              <div className="flex items-center gap-4 text-xs text-gray-600">
                                <span>{version.fieldsCount} fields</span>
                                <span>•</span>
                                <span>{version.rulesCount} rules</span>
                                <span>•</span>
                                <span>Created {version.createdAt}</span>
                              </div>
                            </div>
                            {isSelected && (
                              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Upload File */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Upload Excel File
                    </h3>
                    <p className="text-sm text-gray-600">
                      Upload a new Excel file to normalize and export
                    </p>
                  </div>

                  {/* Important Notice */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <div className="flex gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold text-amber-900 mb-1">
                          Important Notice
                        </h4>
                        <p className="text-xs text-amber-800">
                          Export requires uploading a new Excel file to ensure data accuracy and prevent processing outdated information.
                        </p>
                      </div>
                    </div>
                  </div>

                  {!uploadedFile ? (
                    <label className="block">
                      <input
                        type="file"
                        accept=".xlsx,.xls,.csv"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-blue-400 hover:bg-blue-50/30 transition-all cursor-pointer group">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                          <Upload className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Upload Excel File
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Drag and drop your file here, or click to browse
                        </p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg border border-blue-200">
                          Supported: .xlsx, .xls, .csv
                        </div>
                      </div>
                    </label>
                  ) : (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-emerald-900">
                            {uploadedFile.name}
                          </p>
                          <p className="text-xs text-emerald-700 mt-0.5">
                            {(uploadedFile.size / 1024).toFixed(2)} KB
                          </p>
                        </div>
                        <button
                          onClick={() => setUploadedFile(null)}
                          className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
                        >
                          Change
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Step 3: Processing / Results */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  {isProcessing ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Processing Your Data
                      </h3>
                      <p className="text-sm text-gray-600">
                        Applying normalization rules and validating data...
                      </p>
                    </div>
                  ) : processingComplete ? (
                    <>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Normalization Complete!
                        </h3>
                        <p className="text-sm text-gray-600">
                          Your data has been successfully processed
                        </p>
                      </div>

                      {/* Stats Cards */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                          <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-2">
                            Total Rows
                          </p>
                          <p className="text-2xl font-semibold text-gray-900">
                            {stats.totalRows.toLocaleString()}
                          </p>
                        </div>

                        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                          <p className="text-xs font-medium text-emerald-700 uppercase tracking-wider mb-2">
                            Valid Rows
                          </p>
                          <p className="text-2xl font-semibold text-emerald-900">
                            {stats.validRows.toLocaleString()}
                          </p>
                        </div>

                        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                          <p className="text-xs font-medium text-red-700 uppercase tracking-wider mb-2">
                            Error Rows
                          </p>
                          <p className="text-2xl font-semibold text-red-900">
                            {stats.errorRows.toLocaleString()}
                          </p>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                          <p className="text-xs font-medium text-blue-700 uppercase tracking-wider mb-2">
                            Success Rate
                          </p>
                          <p className="text-2xl font-semibold text-blue-900">
                            {stats.successRate}%
                          </p>
                        </div>
                      </div>

                      {/* Download Buttons */}
                      <div className="space-y-3">
                        <button className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl hover:from-emerald-700 hover:to-green-700 transition-all shadow-sm hover:shadow-md">
                          <Download className="w-4 h-4" />
                          Download Clean File ({stats.validRows.toLocaleString()} rows)
                        </button>

                        {stats.errorRows > 0 && (
                          <button className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-red-700 bg-red-50 border border-red-200 rounded-xl hover:bg-red-100 transition-all">
                            <Download className="w-4 h-4" />
                            Download Error File ({stats.errorRows.toLocaleString()} rows)
                          </button>
                        )}
                      </div>
                    </>
                  ) : null}
                </div>
              )}
            </div>

            {/* Footer */}
            {currentStep < 3 && (
              <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 bg-gray-50">
                <button
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  Back
                </button>

                <button
                  onClick={() => {
                    if (currentStep === 2) {
                      handleProcess();
                    } else {
                      setCurrentStep(currentStep + 1);
                    }
                  }}
                  disabled={!canProceed()}
                  className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {currentStep === 2 ? "Process & Export" : "Next"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}