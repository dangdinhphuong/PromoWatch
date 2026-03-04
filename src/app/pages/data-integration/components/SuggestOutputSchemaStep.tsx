import { useState, useEffect } from "react";
import { Plus, Trash2, Sparkles, Check, X } from "lucide-react";

interface Field {
  id: string;
  name: string;
  label: string;
  type: string;
  required: boolean;
  defaultValue: string;
  order: number;
  confidence?: number;
  suggestedFrom?: string;
}

interface SuggestOutputSchemaStepProps {
  inputSchema: any[];
  outputFields: Field[];
  setOutputFields: (fields: Field[]) => void;
}

const fieldTypes = [
  "Văn bản",
  "Số",
  "Ngày tháng",
  "Email",
  "Số điện thoại",
  "URL",
  "Boolean",
  "Tiền tệ"
];

// Smart suggestion algorithm based on input column names
const suggestFieldName = (columnName: string): { name: string; label: string; confidence: number } => {
  const normalizedName = columnName.toLowerCase().trim();
  
  // Mapping rules
  const mappings: Record<string, { name: string; label: string; confidence: number }> = {
    "tên chương trình": { name: "program_name", label: "Tên Chương trình", confidence: 95 },
    "tên sản phẩm": { name: "product_name", label: "Tên Sản phẩm", confidence: 95 },
    "product name": { name: "product_name", label: "Tên Sản phẩm", confidence: 95 },
    "ngày bắt đầu": { name: "start_date", label: "Ngày Bắt đầu", confidence: 95 },
    "start date": { name: "start_date", label: "Ngày Bắt đầu", confidence: 95 },
    "ngày kết thúc": { name: "end_date", label: "Ngày Kết thúc", confidence: 95 },
    "end date": { name: "end_date", label: "Ngày Kết thúc", confidence: 95 },
    "giá": { name: "price", label: "Giá", confidence: 100 },
    "price": { name: "price", label: "Giá", confidence: 100 },
    "danh mục": { name: "category", label: "Danh mục", confidence: 95 },
    "category": { name: "category", label: "Danh mục", confidence: 95 },
    "tồn kho": { name: "stock", label: "Tồn kho", confidence: 95 },
    "stock": { name: "stock", label: "Tồn kho", confidence: 95 },
    "số điện thoại": { name: "phone_number", label: "Số Điện thoại", confidence: 95 },
    "phone": { name: "phone_number", label: "Số Điện thoại", confidence: 95 },
    "sđt": { name: "phone_number", label: "Số Điện thoại", confidence: 90 },
    "email": { name: "email", label: "Email", confidence: 100 },
    "địa chỉ": { name: "address", label: "Địa chỉ", confidence: 95 },
    "address": { name: "address", label: "Địa chỉ", confidence: 95 },
    "mô tả": { name: "description", label: "Mô tả", confidence: 90 },
    "description": { name: "description", label: "Mô tả", confidence: 90 },
    "ghi chú": { name: "notes", label: "Ghi chú", confidence: 85 },
    "notes": { name: "notes", label: "Ghi chú", confidence: 85 }
  };

  // Try exact match first
  if (mappings[normalizedName]) {
    return mappings[normalizedName];
  }

  // Try partial match
  for (const [key, value] of Object.entries(mappings)) {
    if (normalizedName.includes(key) || key.includes(normalizedName)) {
      return { ...value, confidence: value.confidence - 10 };
    }
  }

  // Fallback: generate snake_case from column name
  const snakeCaseName = normalizedName
    .replace(/\s+/g, "_")
    .replace(/[^a-z0-9_]/g, "")
    .toLowerCase();
  
  return {
    name: snakeCaseName || "field",
    label: columnName,
    confidence: 50
  };
};

const getConfidenceColor = (confidence: number) => {
  if (confidence >= 85) return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (confidence >= 70) return "bg-amber-50 text-amber-700 border-amber-200";
  return "bg-gray-50 text-gray-700 border-gray-200";
};

const getConfidenceLabel = (confidence: number) => {
  if (confidence >= 85) return "Cao";
  if (confidence >= 70) return "Trung bình";
  return "Thấp";
};

export function SuggestOutputSchemaStep({ inputSchema, outputFields, setOutputFields }: SuggestOutputSchemaStepProps) {
  const [showSuggestions, setShowSuggestions] = useState(true);

  // Auto-suggest output fields based on input schema
  useEffect(() => {
    if (outputFields.length === 0 && inputSchema.length > 0) {
      const suggestedFields: Field[] = inputSchema.map((col, index) => {
        const suggestion = suggestFieldName(col.name);
        return {
          id: `field-${index + 1}`,
          name: suggestion.name,
          label: suggestion.label,
          type: col.detectedType,
          required: false,
          defaultValue: "",
          order: index + 1,
          confidence: suggestion.confidence,
          suggestedFrom: col.name
        };
      });
      setOutputFields(suggestedFields);
    }
  }, [inputSchema]);

  const addField = () => {
    const newField: Field = {
      id: `field-${Date.now()}`,
      name: "",
      label: "",
      type: "Văn bản",
      required: false,
      defaultValue: "",
      order: outputFields.length + 1,
      confidence: 100
    };
    setOutputFields([...outputFields, newField]);
  };

  const removeField = (id: string) => {
    setOutputFields(outputFields.filter(f => f.id !== id));
  };

  const updateField = (id: string, key: keyof Field, value: any) => {
    setOutputFields(
      outputFields.map(f => f.id === id ? { ...f, [key]: value } : f)
    );
  };

  const acceptSuggestion = (id: string) => {
    setOutputFields(
      outputFields.map(f => f.id === id ? { ...f, confidence: 100 } : f)
    );
  };

  const rejectSuggestion = (id: string) => {
    removeField(id);
  };

  // Calculate statistics
  const totalFields = outputFields.length;
  const highConfidence = outputFields.filter(f => (f.confidence || 0) >= 85).length;
  const mediumConfidence = outputFields.filter(f => (f.confidence || 0) >= 70 && (f.confidence || 0) < 85).length;
  const lowConfidence = outputFields.filter(f => (f.confidence || 0) < 70).length;

  return (
    <div className="p-6 bg-gray-50">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Gợi ý Cấu trúc Đầu ra
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Hệ thống gợi ý cấu trúc đầu ra dựa trên cột đầu vào đã phát hiện
            </p>
          </div>
          <button
            onClick={addField}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-sm"
          >
            <Plus className="w-4 h-4" />
            Thêm Trường
          </button>
        </div>

        {/* AI Suggestion Summary */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-purple-600" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-purple-900 mb-3">
                Gợi ý Thông minh AI
              </h4>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg px-3 py-2.5 border border-purple-100">
                  <p className="text-xs text-gray-600 mb-1">Tổng Gợi ý</p>
                  <p className="text-xl font-semibold text-gray-900">{totalFields}</p>
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

        {/* Fields Table */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-12 gap-4 px-4 py-3 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-600 uppercase tracking-wider">
            <div className="col-span-2">Tên Trường</div>
            <div className="col-span-2">Nhãn</div>
            <div className="col-span-2">Kiểu</div>
            <div className="col-span-2">Gợi ý từ</div>
            <div className="col-span-2">Độ tin cậy</div>
            <div className="col-span-1 text-center">Bắt buộc</div>
            <div className="col-span-1 text-center">Thao tác</div>
          </div>

          {/* Fields */}
          <div className="divide-y divide-gray-100">
            {outputFields.length === 0 ? (
              <div className="px-4 py-12 text-center">
                <p className="text-sm text-gray-500 mb-4">Chưa có gợi ý nào</p>
                <button
                  onClick={addField}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all"
                >
                  <Plus className="w-4 h-4" />
                  Thêm Trường Đầu tiên
                </button>
              </div>
            ) : (
              outputFields.map((field) => (
                <div
                  key={field.id}
                  className={`grid grid-cols-12 gap-4 px-4 py-3 hover:bg-gray-50 transition-colors ${
                    (field.confidence || 0) < 70 ? "bg-amber-50/30" : ""
                  }`}
                >
                  {/* Field Name */}
                  <div className="col-span-2">
                    <input
                      type="text"
                      value={field.name}
                      onChange={(e) => updateField(field.id, "name", e.target.value)}
                      placeholder="field_name"
                      className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                    />
                  </div>

                  {/* Label */}
                  <div className="col-span-2">
                    <input
                      type="text"
                      value={field.label}
                      onChange={(e) => updateField(field.id, "label", e.target.value)}
                      placeholder="Nhãn hiển thị"
                      className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Type */}
                  <div className="col-span-2">
                    <select
                      value={field.type}
                      onChange={(e) => updateField(field.id, "type", e.target.value)}
                      className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {fieldTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Suggested From */}
                  <div className="col-span-2">
                    {field.suggestedFrom ? (
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-purple-500 flex-shrink-0" />
                        <span className="text-xs text-gray-600 truncate">
                          {field.suggestedFrom}
                        </span>
                      </div>
                    ) : (
                      <span className="text-xs text-gray-400">Thủ công</span>
                    )}
                  </div>

                  {/* Confidence */}
                  <div className="col-span-2">
                    {field.confidence !== undefined && (
                      <span className={`inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium border ${getConfidenceColor(field.confidence)}`}>
                        {getConfidenceLabel(field.confidence)} ({field.confidence}%)
                      </span>
                    )}
                  </div>

                  {/* Required */}
                  <div className="col-span-1 flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked={field.required}
                      onChange={(e) => updateField(field.id, "required", e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Actions */}
                  <div className="col-span-1 flex items-center justify-center gap-1">
                    {field.suggestedFrom && (field.confidence || 0) < 85 && (
                      <>
                        <button
                          onClick={() => acceptSuggestion(field.id)}
                          className="p-1 text-emerald-600 hover:bg-emerald-50 rounded transition-all"
                          title="Chấp nhận"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => rejectSuggestion(field.id)}
                          className="p-1 text-red-600 hover:bg-red-50 rounded transition-all"
                          title="Từ chối"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </>
                    )}
                    {(!field.suggestedFrom || (field.confidence || 0) >= 85) && (
                      <button
                        onClick={() => removeField(field.id)}
                        className="p-1 text-red-600 hover:bg-red-50 rounded transition-all"
                        title="Xóa"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
          <div className="flex gap-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-purple-600" />
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-purple-900 mb-1">
                Cách hoạt động của Gợi ý AI
              </h4>
              <ul className="text-xs text-purple-800 space-y-1">
                <li>• Hệ thống phân tích tên cột đầu vào và gợi ý tên trường chuẩn hóa</li>
                <li>• Độ tin cậy cao (≥85%) nghĩa là gợi ý rất chính xác</li>
                <li>• Bạn có thể chấp nhận, chỉnh sửa hoặc từ chối bất kỳ gợi ý nào</li>
                <li>• Kiểu dữ liệu được kế thừa từ cột đầu vào đã phát hiện</li>
                <li>• Thêm trường mới nếu cần các cột tính toán hoặc bổ sung</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
