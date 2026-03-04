import { Upload, FileSpreadsheet, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";

interface UploadExcelStepProps {
  uploadedFile: File | null;
  setUploadedFile: (file: File | null) => void;
  selectedSheet: string;
  setSelectedSheet: (sheet: string) => void;
  headerRow: number;
  setHeaderRow: (row: number) => void;
  setInputSchema: (schema: any[]) => void;
}

const mockSheets = ["Sheet1", "Data", "Summary"];

// Dữ liệu thực tế từ file TinKhuyenMai_3-2-2026_14-38-55.xlsx
const mockPreviewData = [
  { 
    col1: "Product Name", 
    col2: "Price", 
    col3: "Category", 
    col4: "Stock" 
  },
  { 
    col1: "iPhone 14", 
    col2: "25,000,000", 
    col3: "Electronics", 
    col4: "50" 
  },
  { 
    col1: "Samsung TV", 
    col2: "15,500,000", 
    col3: "Electronics", 
    col4: "30" 
  },
  { 
    col1: "Nike Shoes", 
    col2: "2,500,000", 
    col3: "Fashion", 
    col4: "100" 
  },
  { 
    col1: "Laptop Dell", 
    col2: "20,000,000", 
    col3: "Electronics", 
    col4: "25" 
  },
];

// Auto-detect data types based on sample values
const detectDataType = (values: string[]): { type: string; confidence: number } => {
  const numericPattern = /^[\d,\.]+$/;
  const datePattern = /^\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[\d\s\-\(\)]+$/;
  
  let numericCount = 0;
  let dateCount = 0;
  let emailCount = 0;
  let phoneCount = 0;
  
  values.forEach(val => {
    if (numericPattern.test(val)) numericCount++;
    if (datePattern.test(val)) dateCount++;
    if (emailPattern.test(val)) emailCount++;
    if (phonePattern.test(val) && val.length >= 10) phoneCount++;
  });
  
  const total = values.length;
  const datePercent = (dateCount / total) * 100;
  const numericPercent = (numericCount / total) * 100;
  const emailPercent = (emailCount / total) * 100;
  const phonePercent = (phoneCount / total) * 100;
  
  if (datePercent >= 80) return { type: "Ngày tháng", confidence: Math.round(datePercent) };
  if (numericPercent >= 80) return { type: "Số", confidence: Math.round(numericPercent) };
  if (emailPercent >= 80) return { type: "Email", confidence: Math.round(emailPercent) };
  if (phonePercent >= 80) return { type: "Số điện thoại", confidence: Math.round(phonePercent) };
  
  return { type: "Văn bản", confidence: 95 };
};

const detectedColumns = ["Product Name", "Price", "Category", "Stock"];

export function UploadExcelStep({
  uploadedFile,
  setUploadedFile,
  selectedSheet,
  setSelectedSheet,
  headerRow,
  setHeaderRow,
  setInputSchema
}: UploadExcelStepProps) {
  // Auto-detect input schema when file is uploaded
  useEffect(() => {
    if (uploadedFile) {
      // Simulate schema detection from preview data
      const headers = mockPreviewData[0];
      const dataRows = mockPreviewData.slice(1);
      
      const schema = Object.keys(headers).map((colKey, index) => {
        const columnName = headers[colKey as keyof typeof headers];
        const values = dataRows.map(row => row[colKey as keyof typeof row]);
        const detection = detectDataType(values);
        
        return {
          name: columnName,
          detectedType: detection.type,
          confidence: detection.confidence,
          sampleValues: values.slice(0, 3)
        };
      });
      
      setInputSchema(schema);
    }
  }, [uploadedFile, setInputSchema]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setSelectedSheet("Sheet1");
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && (file.name.endsWith('.xlsx') || file.name.endsWith('.csv'))) {
      setUploadedFile(file);
      setSelectedSheet("Sheet1");
    }
  };

  // Simulate file upload with the specific filename
  const simulateFileUpload = () => {
    const mockFile = new File([""], "TinKhuyenMai_3-2-2026_14-38-55.xlsx", { 
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
    });
    Object.defineProperty(mockFile, 'size', { value: 3553540 }); // 3553.54 KB
    setUploadedFile(mockFile);
    setSelectedSheet("Sheet1");
  };

  return (
    <div className="p-6 space-y-6">
      {!uploadedFile ? (
        /* Upload Area */
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="max-w-2xl mx-auto"
        >
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
                Tải lên Mẫu Excel
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Kéo và thả tệp của bạn vào đây hoặc nhấp để duyệt
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg border border-blue-200">
                <FileSpreadsheet className="w-4 h-4" />
                Hỗ trợ: .xlsx, .xls, .csv
              </div>
            </div>
          </label>

          {/* Demo button to simulate upload */}
          <div className="mt-4 text-center">
            <button
              onClick={simulateFileUpload}
              className="text-sm text-blue-600 hover:text-blue-700 underline"
            >
              Hoặc sử dụng file demo: TinKhuyenMai_3-2-2026_14-38-55.xlsx
            </button>
          </div>
        </div>
      ) : (
        /* File Uploaded - Show Config */
        <div className="space-y-6">
          {/* File Info */}
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
                Thay đổi
              </button>
            </div>
          </div>

          {/* Sheet Selector & Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Chọn Sheet
              </label>
              <select
                value={selectedSheet}
                onChange={(e) => setSelectedSheet(e.target.value)}
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                {mockSheets.map((sheet) => (
                  <option key={sheet} value={sheet}>
                    {sheet}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hàng Tiêu đề
              </label>
              <input
                type="number"
                min="1"
                value={headerRow}
                onChange={(e) => setHeaderRow(parseInt(e.target.value))}
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Preview Table */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Xem trước Dữ liệu
            </h3>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">
                        Cột 1
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">
                        Cột 2
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">
                        Cột 3
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">
                        Cột 4
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {mockPreviewData.map((row, rowIdx) => (
                      <tr
                        key={rowIdx}
                        className={rowIdx === 0 ? "bg-blue-50" : "hover:bg-gray-50"}
                      >
                        <td
                          className={`px-4 py-3 text-sm ${
                            rowIdx === 0
                              ? "font-semibold text-blue-900"
                              : "text-gray-700"
                          }`}
                        >
                          {row.col1}
                        </td>
                        <td
                          className={`px-4 py-3 text-sm ${
                            rowIdx === 0
                              ? "font-semibold text-blue-900"
                              : "text-gray-700"
                          }`}
                        >
                          {row.col2}
                        </td>
                        <td
                          className={`px-4 py-3 text-sm ${
                            rowIdx === 0
                              ? "font-semibold text-blue-900"
                              : "text-gray-700"
                          }`}
                        >
                          {row.col3}
                        </td>
                        <td
                          className={`px-4 py-3 text-sm ${
                            rowIdx === 0
                              ? "font-semibold text-blue-900"
                              : "text-gray-700"
                          }`}
                        >
                          {row.col4}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Detected Columns */}
            <div className="mt-4">
              <p className="text-xs font-medium text-gray-600 mb-2">
                Các cột đã phát hiện:
              </p>
              <div className="flex flex-wrap gap-2">
                {detectedColumns.map((col, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200"
                  >
                    {col}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}