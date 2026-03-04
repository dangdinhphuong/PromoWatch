import { useState } from "react";
import { CheckCircle2, AlertCircle, Edit2 } from "lucide-react";

interface InputSchemaReviewStepProps {
  inputSchema: any[];
  setInputSchema: (schema: any[]) => void;
}

const availableTypes = [
  { value: "Văn bản", label: "Văn bản", color: "gray" },
  { value: "Số", label: "Số", color: "purple" },
  { value: "Ngày tháng", label: "Ngày tháng", color: "blue" },
  { value: "Email", label: "Email", color: "cyan" },
  { value: "Số điện thoại", label: "Số điện thoại", color: "indigo" },
  { value: "Tiền tệ", label: "Tiền tệ", color: "emerald" },
  { value: "Boolean", label: "Boolean", color: "amber" }
];

const getTypeColor = (type: string) => {
  const typeConfig = availableTypes.find(t => t.value === type);
  const colorMap: Record<string, string> = {
    gray: "bg-gray-50 text-gray-700 border-gray-200",
    purple: "bg-purple-50 text-purple-700 border-purple-200",
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    cyan: "bg-cyan-50 text-cyan-700 border-cyan-200",
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-200",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
    amber: "bg-amber-50 text-amber-700 border-amber-200"
  };
  return colorMap[typeConfig?.color || "gray"];
};

const getConfidenceColor = (confidence: number) => {
  if (confidence >= 90) {
    return "bg-emerald-50 text-emerald-700 border-emerald-200";
  } else if (confidence >= 70) {
    return "bg-amber-50 text-amber-700 border-amber-200";
  } else {
    return "bg-gray-50 text-gray-700 border-gray-200";
  }
};

const getConfidenceLabel = (confidence: number) => {
  if (confidence >= 90) return "Cao";
  if (confidence >= 70) return "Trung bình";
  return "Thấp";
};

export function InputSchemaReviewStep({ inputSchema, setInputSchema }: InputSchemaReviewStepProps) {
  const [editingColumn, setEditingColumn] = useState<string | null>(null);

  const updateColumnType = (columnName: string, newType: string) => {
    setInputSchema(
      inputSchema.map(col =>
        col.name === columnName
          ? { ...col, detectedType: newType, confidence: 100, manualOverride: true }
          : col
      )
    );
    setEditingColumn(null);
  };

  // Calculate summary
  const totalColumns = inputSchema.length;
  const highConfidence = inputSchema.filter(c => c.confidence >= 90).length;
  const mediumConfidence = inputSchema.filter(c => c.confidence >= 70 && c.confidence < 90).length;
  const lowConfidence = inputSchema.filter(c => c.confidence < 70).length;

  // Type distribution
  const typeDistribution = inputSchema.reduce((acc, col) => {
    acc[col.detectedType] = (acc[col.detectedType] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="p-6 bg-gray-50">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Xem lại Cấu trúc Đầu vào Đã Phát hiện
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Xác nhận các cột đã phát hiện và kiểu dữ liệu của chúng trước khi tiếp tục
          </p>
        </div>

        {/* Detection Summary */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-blue-900 mb-3">
                Tổng kết Phát hiện
              </h4>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg px-3 py-2.5 border border-blue-100">
                  <p className="text-xs text-gray-600 mb-1">Tổng số Cột</p>
                  <p className="text-xl font-semibold text-gray-900">{totalColumns}</p>
                </div>
                <div className="bg-white rounded-lg px-3 py-2.5 border border-emerald-100">
                  <p className="text-xs text-gray-600 mb-1">Độ tin cậy Cao</p>
                  <p className="text-xl font-semibold text-emerald-900">{highConfidence}</p>
                </div>
                <div className="bg-white rounded-lg px-3 py-2.5 border border-amber-100">
                  <p className="text-xs text-gray-600 mb-1">Độ tin cậy TB</p>
                  <p className="text-xl font-semibold text-amber-900">{mediumConfidence}</p>
                </div>
                <div className="bg-white rounded-lg px-3 py-2.5 border border-gray-100">
                  <p className="text-xs text-gray-600 mb-1">Cần Xem lại</p>
                  <p className="text-xl font-semibold text-gray-900">{lowConfidence}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Type Distribution */}
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h4 className="text-sm font-semibold text-gray-900 mb-4">
            Phân bổ Loại Dữ liệu
          </h4>
          <div className="flex flex-wrap gap-3">
            {Object.entries(typeDistribution).map(([type, count]) => (
              <div
                key={type}
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border ${getTypeColor(type)}`}
              >
                <span className="text-sm font-medium">{type}</span>
                <span className="text-xs opacity-75">×{count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Columns Table */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="px-5 py-3 bg-gray-50 border-b border-gray-200">
            <h4 className="text-sm font-semibold text-gray-900">
              Các Cột Đã Phát hiện
            </h4>
          </div>
          
          <div className="divide-y divide-gray-100">
            {inputSchema.map((column, index) => (
              <div
                key={column.name}
                className="px-5 py-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  {/* Column Number */}
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-semibold text-gray-600">
                      {index + 1}
                    </span>
                  </div>

                  {/* Column Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h5 className="text-sm font-semibold text-gray-900">
                        {column.name}
                      </h5>
                      {column.manualOverride && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                          Đã chỉnh sửa
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      {/* Detected Type */}
                      {editingColumn === column.name ? (
                        <select
                          value={column.detectedType}
                          onChange={(e) => updateColumnType(column.name, e.target.value)}
                          onBlur={() => setEditingColumn(null)}
                          autoFocus
                          className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          {availableTypes.map(type => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium border ${getTypeColor(column.detectedType)}`}>
                          {column.detectedType}
                        </span>
                      )}

                      {/* Confidence */}
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium border ${getConfidenceColor(column.confidence)}`}>
                        {getConfidenceLabel(column.confidence)} ({column.confidence}%)
                      </span>

                      {/* Edit Button */}
                      {editingColumn !== column.name && (
                        <button
                          onClick={() => setEditingColumn(column.name)}
                          className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                          title="Chỉnh sửa loại"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    {/* Sample Values */}
                    <div className="mt-3">
                      <p className="text-xs font-medium text-gray-500 mb-1.5">
                        Giá trị mẫu:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {column.sampleValues.slice(0, 3).map((value: string, idx: number) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-gray-50 text-gray-700 border border-gray-200 font-mono"
                          >
                            {value}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Confidence Icon */}
                  <div className="flex-shrink-0">
                    {column.confidence >= 90 ? (
                      <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      </div>
                    ) : column.confidence >= 70 ? (
                      <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                        <AlertCircle className="w-4 h-4 text-amber-600" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                        <AlertCircle className="w-4 h-4 text-gray-600" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex gap-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-lg">💡</span>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-blue-900 mb-1">
                Mẹo Xem lại Schema
              </h4>
              <ul className="text-xs text-blue-800 space-y-1">
                <li>• Kiểm tra các cột có độ tin cậy thấp và điều chỉnh loại nếu cần</li>
                <li>• Nhấp vào icon chỉnh sửa để thay đổi loại dữ liệu phát hiện</li>
                <li>• Các cột có độ tin cậy cao (≥90%) thường chính xác</li>
                <li>• Schema này sẽ được dùng để gợi ý cấu trúc đầu ra ở bước tiếp theo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
