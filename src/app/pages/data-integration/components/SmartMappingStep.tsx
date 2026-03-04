import { useState, useEffect } from "react";
import { Plus, X, Settings, Zap, AlertTriangle, CheckCircle2, Info, ArrowRight } from "lucide-react";

interface SmartMappingStepProps {
  outputFields: any[];
  mappings: any;
  setMappings: (mappings: any) => void;
}

// Mock detected input columns from Excel
const detectedInputColumns = [
  { 
    name: "Tên chương trình", 
    detectedType: "Văn bản",
    sampleValues: ["iPhone 14 Pro Max", "Samsung Galaxy S24", "Nike Air Max"]
  },
  { 
    name: "Ngày bắt đầu", 
    detectedType: "Ngày tháng",
    sampleValues: ["11/02/2024", "15/02/2024", "01/03/2024"]
  },
  { 
    name: "Giá", 
    detectedType: "Số",
    sampleValues: ["25,000,000", "15,500,000", "2,500,000"]
  },
  { 
    name: "SĐT", 
    detectedType: "Số điện thoại",
    sampleValues: ["0901234567", "0987654321", "0912345678"]
  },
  { 
    name: "Danh mục", 
    detectedType: "Văn bản",
    sampleValues: ["Điện tử", "Thời trang", "Điện tử"]
  },
  { 
    name: "Tồn kho", 
    detectedType: "Số",
    sampleValues: ["50", "30", "100"]
  }
];

// Smart matching algorithm
const getSmartMatch = (outputField: any) => {
  const matchMap: Record<string, { column: string; confidence: number }> = {
    "product_name": { column: "Tên chương trình", confidence: 85 },
    "ten_san_pham": { column: "Tên chương trình", confidence: 92 },
    "start_date": { column: "Ngày bắt đầu", confidence: 92 },
    "ngay_bat_dau": { column: "Ngày bắt đầu", confidence: 95 },
    "price": { column: "Giá", confidence: 95 },
    "gia": { column: "Giá", confidence: 100 },
    "phone": { column: "SĐT", confidence: 88 },
    "so_dien_thoai": { column: "SĐT", confidence: 92 },
    "category": { column: "Danh mục", confidence: 100 },
    "danh_muc": { column: "Danh mục", confidence: 100 },
    "stock": { column: "Tồn kho", confidence: 100 },
    "ton_kho": { column: "Tồn kho", confidence: 100 }
  };

  return matchMap[outputField.name] || null;
};

const getConfidenceStyle = (confidence: number) => {
  if (confidence >= 80) {
    return {
      badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
      label: "Khớp Cao",
      icon: "text-emerald-600"
    };
  } else if (confidence >= 50) {
    return {
      badge: "bg-amber-50 text-amber-700 border-amber-200",
      label: "Có thể Khớp",
      icon: "text-amber-600"
    };
  } else {
    return {
      badge: "bg-gray-50 text-gray-700 border-gray-200",
      label: "Cần Xem lại",
      icon: "text-gray-600"
    };
  }
};

const getTypeStyle = (type: string) => {
  const styles: Record<string, string> = {
    "Ngày tháng": "bg-blue-50 text-blue-700 border-blue-200",
    "Số": "bg-purple-50 text-purple-700 border-purple-200",
    "Số điện thoại": "bg-indigo-50 text-indigo-700 border-indigo-200",
    "Văn bản": "bg-gray-50 text-gray-700 border-gray-200",
    "Tiền tệ": "bg-emerald-50 text-emerald-700 border-emerald-200",
    "Email": "bg-cyan-50 text-cyan-700 border-cyan-200",
    "Date": "bg-blue-50 text-blue-700 border-blue-200",
    "Number": "bg-purple-50 text-purple-700 border-purple-200",
    "Phone": "bg-indigo-50 text-indigo-700 border-indigo-200",
    "Text": "bg-gray-50 text-gray-700 border-gray-200",
    "Currency": "bg-emerald-50 text-emerald-700 border-emerald-200"
  };
  return styles[type] || styles["Văn bản"];
};

const ruleTypes = [
  { id: "trim", name: "Xóa Khoảng trắng Thừa", icon: "✂️" },
  { id: "uppercase", name: "Chữ Hoa", icon: "🔠" },
  { id: "lowercase", name: "Chữ Thường", icon: "🔡" },
  { id: "remove_spaces", name: "Xóa Khoảng cách Dư", icon: "⎵" },
  { id: "date_parse", name: "Chuyển đổi Ngày tháng", icon: "📅" },
  { id: "number_format", name: "Định dạng Số", icon: "🔢" },
  { id: "phone_format", name: "Định dạng SĐT", icon: "📱" },
  { id: "replace", name: "Thay thế Văn bản", icon: "🔄" },
  { id: "default_value", name: "Giá trị Mặc định", icon: "⚙️" },
  { id: "concat", name: "Nối Chuỗi", icon: "➕" }
];

export function SmartMappingStep({ outputFields, mappings, setMappings }: SmartMappingStepProps) {
  const [enableAutoMatch, setEnableAutoMatch] = useState(true);
  const [selectedField, setSelectedField] = useState<string | null>(outputFields[0]?.id || null);
  const [showRuleModal, setShowRuleModal] = useState(false);
  const [hoveredInputColumn, setHoveredInputColumn] = useState<string | null>(null);
  const [hoveredOutputField, setHoveredOutputField] = useState<string | null>(null);

  // Auto-apply smart matches on mount
  useEffect(() => {
    if (enableAutoMatch && Object.keys(mappings).length === 0) {
      const autoMappings: any = {};
      outputFields.forEach(field => {
        const match = getSmartMatch(field);
        if (match) {
          autoMappings[field.id] = {
            sourceColumn: match.column,
            confidence: match.confidence,
            rules: []
          };
        }
      });
      setMappings(autoMappings);
    }
  }, [enableAutoMatch, outputFields, setMappings]);

  const updateMapping = (fieldId: string, column: string) => {
    setMappings({
      ...mappings,
      [fieldId]: {
        ...mappings[fieldId],
        sourceColumn: column,
        confidence: 100,
        rules: mappings[fieldId]?.rules || []
      }
    });
  };

  const addRule = (fieldId: string, rule: any) => {
    const currentMapping = mappings[fieldId] || { rules: [] };
    setMappings({
      ...mappings,
      [fieldId]: {
        ...currentMapping,
        rules: [...currentMapping.rules, rule]
      }
    });
    setShowRuleModal(false);
  };

  const removeRule = (fieldId: string, ruleIndex: number) => {
    const currentMapping = mappings[fieldId];
    if (currentMapping) {
      setMappings({
        ...mappings,
        [fieldId]: {
          ...currentMapping,
          rules: currentMapping.rules.filter((_: any, i: number) => i !== ruleIndex)
        }
      });
    }
  };

  const removeMapping = (fieldId: string) => {
    const newMappings = { ...mappings };
    delete newMappings[fieldId];
    setMappings(newMappings);
  };

  // Calculate statistics
  const totalFields = outputFields.length;
  const autoMatchedFields = Object.values(mappings).filter((m: any) => m.sourceColumn).length;
  const manualRequired = totalFields - autoMatchedFields;
  const dateColumns = detectedInputColumns.filter(c => c.detectedType === "Ngày tháng").length;
  const numberColumns = detectedInputColumns.filter(c => c.detectedType === "Số").length;

  const currentField = outputFields.find(f => f.id === selectedField);
  const currentMapping = mappings[selectedField || ""] || {};
  const inputColumn = detectedInputColumns.find(c => c.name === currentMapping.sourceColumn);

  // Check for type mismatch warnings
  const hasTypeMismatch = currentField && inputColumn && 
    currentField.type !== inputColumn.detectedType &&
    !(currentField.type === "Tiền tệ" && inputColumn.detectedType === "Số") &&
    !(currentField.type === "Currency" && inputColumn.detectedType === "Số");

  return (
    <div className="p-6 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header with Auto-Match Toggle */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Ánh xạ Thông minh & Quy tắc
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Gợi ý mapping cột tự động với trí tuệ nhân tạo
            </p>
          </div>
          <label className="flex items-center gap-3 px-4 py-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all cursor-pointer">
            <input
              type="checkbox"
              checked={enableAutoMatch}
              onChange={(e) => setEnableAutoMatch(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-900">Tự động Khớp Thông minh</span>
            </div>
          </label>
        </div>

        {/* Smart Detection Summary Panel */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-blue-900 mb-3">
                Tổng kết Phát hiện Thông minh
              </h4>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg px-3 py-2 border border-blue-100">
                  <p className="text-xs text-gray-600 mb-1">Tự động Khớp</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {autoMatchedFields}/{totalFields} trường
                  </p>
                </div>
                <div className="bg-white rounded-lg px-3 py-2 border border-amber-100">
                  <p className="text-xs text-gray-600 mb-1">Cần Thủ công</p>
                  <p className="text-lg font-semibold text-amber-900">
                    {manualRequired} trường
                  </p>
                </div>
                <div className="bg-white rounded-lg px-3 py-2 border border-purple-100">
                  <p className="text-xs text-gray-600 mb-1">Cột Ngày tháng</p>
                  <p className="text-lg font-semibold text-purple-900">
                    {dateColumns} phát hiện
                  </p>
                </div>
                <div className="bg-white rounded-lg px-3 py-2 border border-indigo-100">
                  <p className="text-xs text-gray-600 mb-1">Cột Số</p>
                  <p className="text-lg font-semibold text-indigo-900">
                    {numberColumns} phát hiện
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Input Columns Preview with Type Detection */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="px-5 py-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
            <h4 className="text-sm font-semibold text-gray-900">
              Các Cột Đầu vào Phát hiện
            </h4>
            <span className="text-xs text-gray-600">
              {detectedInputColumns.length} cột tìm thấy
            </span>
          </div>
          <div className="p-4 overflow-x-auto">
            <div className="flex gap-3">
              {detectedInputColumns.map((col) => (
                <div
                  key={col.name}
                  onMouseEnter={() => setHoveredInputColumn(col.name)}
                  onMouseLeave={() => setHoveredInputColumn(null)}
                  className={`flex-shrink-0 w-48 p-3 border-2 rounded-xl transition-all cursor-pointer ${
                    hoveredInputColumn === col.name || currentMapping.sourceColumn === col.name
                      ? "border-blue-400 bg-blue-50 shadow-md"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-900 truncate">
                      {col.name}
                    </span>
                  </div>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium border ${getTypeStyle(col.detectedType)}`}>
                    {col.detectedType}
                  </span>
                  <div className="mt-2 text-xs text-gray-500 space-y-0.5">
                    {col.sampleValues.slice(0, 2).map((val, idx) => (
                      <div key={idx} className="truncate">{val}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3-Column Mapping Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT: Output Fields List */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden sticky top-6">
              <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900">
                  Trường Đầu ra
                </h4>
              </div>
              <div className="divide-y divide-gray-100 max-h-[600px] overflow-y-auto">
                {outputFields.map((field) => {
                  const isSelected = selectedField === field.id;
                  const mapping = mappings[field.id];
                  const hasMapping = mapping?.sourceColumn;
                  const confidence = mapping?.confidence || 0;
                  const confStyle = getConfidenceStyle(confidence);

                  return (
                    <button
                      key={field.id}
                      onClick={() => setSelectedField(field.id)}
                      onMouseEnter={() => setHoveredOutputField(field.id)}
                      onMouseLeave={() => setHoveredOutputField(null)}
                      className={`w-full px-4 py-3 text-left transition-all ${
                        isSelected
                          ? "bg-blue-50 border-l-4 border-blue-600"
                          : "hover:bg-gray-50 border-l-4 border-transparent"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <p className={`text-sm font-medium truncate ${
                              isSelected ? "text-blue-900" : "text-gray-900"
                            }`}>
                              {field.label || field.name}
                            </p>
                            {field.required && (
                              <span className="text-red-500 text-sm">*</span>
                            )}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium border ${getTypeStyle(field.type)}`}>
                              {field.type}
                            </span>
                          </div>
                          {hasMapping && (
                            <div className="mt-2">
                              <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium border ${confStyle.badge}`}>
                                {confStyle.label} {confidence}%
                              </span>
                            </div>
                          )}
                        </div>
                        {hasMapping ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        ) : field.required ? (
                          <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                        ) : (
                          <div className="w-2 h-2 bg-gray-300 rounded-full flex-shrink-0"></div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CENTER: Mapping & Rules */}
          <div className="lg:col-span-1">
            {currentField ? (
              <div className="space-y-4">
                {/* Source Column Selection */}
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-semibold text-gray-900">
                      Ánh xạ Cột Nguồn
                    </label>
                    {currentMapping.sourceColumn && (
                      <button
                        onClick={() => removeMapping(currentField.id)}
                        className="text-xs text-red-600 hover:text-red-700 font-medium"
                      >
                        Xóa
                      </button>
                    )}
                  </div>
                  
                  <select
                    value={currentMapping.sourceColumn || ""}
                    onChange={(e) => updateMapping(currentField.id, e.target.value)}
                    className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Chọn cột đầu vào...</option>
                    {detectedInputColumns.map((col) => (
                      <option key={col.name} value={col.name}>
                        {col.name} [{col.detectedType}]
                      </option>
                    ))}
                  </select>

                  {/* Confidence Badge */}
                  {currentMapping.sourceColumn && currentMapping.confidence && (
                    <div className="mt-3 flex items-center gap-2">
                      <div className={`flex-1 flex items-center gap-2 px-3 py-2 rounded-lg border ${getConfidenceStyle(currentMapping.confidence).badge}`}>
                        <Zap className={`w-4 h-4 ${getConfidenceStyle(currentMapping.confidence).icon}`} />
                        <span className="text-sm font-medium">
                          {getConfidenceStyle(currentMapping.confidence).label} ({currentMapping.confidence}%)
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Type Mismatch Warning */}
                  {hasTypeMismatch && (
                    <div className="mt-3 flex items-start gap-2 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                      <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-amber-900">
                          Phát hiện không khớp kiểu dữ liệu
                        </p>
                        <p className="text-xs text-amber-800 mt-1">
                          Đầu ra yêu cầu {currentField.type}, nhưng đầu vào là {inputColumn?.detectedType}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Rule Pipeline */}
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-semibold text-gray-900">
                      Quy tắc Chuyển đổi
                    </label>
                    <button
                      onClick={() => setShowRuleModal(true)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Thêm Quy tắc
                    </button>
                  </div>

                  {currentMapping.rules?.length > 0 ? (
                    <div className="space-y-2">
                      {currentMapping.rules.map((rule: any, index: number) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg group hover:border-blue-300 transition-all"
                        >
                          <span className="text-sm">{rule.icon}</span>
                          <span className="flex-1 text-sm font-medium text-gray-900">
                            {rule.name}
                          </span>
                          <button
                            onClick={() => removeRule(currentField.id, index)}
                            className="p-1 text-gray-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-all"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-6">
                      <Settings className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                      <p className="text-xs text-gray-500">Chưa áp dụng quy tắc nào</p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white border border-gray-200 rounded-xl p-12 text-center">
                <Info className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-sm text-gray-500">
                  Chọn trường đầu ra để cấu hình ánh xạ
                </p>
              </div>
            )}
          </div>

          {/* RIGHT: Live Preview */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden sticky top-6">
              <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900">
                  Xem trước Dữ liệu Trực tiếp
                </h4>
              </div>
              <div className="p-4 space-y-4">
                {currentMapping.sourceColumn && inputColumn ? (
                  <>
                    {/* Before */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Dữ liệu Đầu vào
                        </label>
                        <span className={`text-xs px-2 py-0.5 rounded-md border ${getTypeStyle(inputColumn.detectedType)}`}>
                          {inputColumn.detectedType}
                        </span>
                      </div>
                      <div className="space-y-2">
                        {inputColumn.sampleValues.map((val, idx) => (
                          <div key={idx} className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                            <p className="text-sm text-gray-900 font-mono">{val}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center justify-center">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-full">
                        <ArrowRight className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-medium text-blue-700">
                          {currentMapping.rules?.length || 0} quy tắc
                        </span>
                      </div>
                    </div>

                    {/* After */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Dữ liệu Đầu ra
                        </label>
                        <span className={`text-xs px-2 py-0.5 rounded-md border ${getTypeStyle(currentField?.type || "Văn bản")}`}>
                          {currentField?.type}
                        </span>
                      </div>
                      <div className="space-y-2">
                        {inputColumn.sampleValues.map((val, idx) => (
                          <div key={idx} className="px-3 py-2 bg-emerald-50 border border-emerald-200 rounded-lg">
                            <p className="text-sm text-emerald-900 font-mono">
                              {val.trim()}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <ArrowRight className="w-8 h-8 text-gray-300" />
                    </div>
                    <p className="text-sm font-medium text-gray-900 mb-1">
                      Chưa Chọn Ánh xạ
                    </p>
                    <p className="text-xs text-gray-500">
                      Chọn cột nguồn để xem trước
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Rule Modal */}
      {showRuleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm"
            onClick={() => setShowRuleModal(false)}
          />
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Thêm Quy tắc Chuyển đổi
              </h3>
              <button
                onClick={() => setShowRuleModal(false)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 grid grid-cols-2 gap-3 max-h-[500px] overflow-y-auto">
              {ruleTypes.map((rule) => (
                <button
                  key={rule.id}
                  onClick={() =>
                    addRule(selectedField!, { id: rule.id, name: rule.name, icon: rule.icon })
                  }
                  className="flex items-center gap-3 px-4 py-3 text-left border border-gray-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all group"
                >
                  <span className="text-2xl">{rule.icon}</span>
                  <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                    {rule.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}