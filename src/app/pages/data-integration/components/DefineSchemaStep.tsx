import { useState, useEffect } from "react";
import { Plus, Trash2, GripVertical } from "lucide-react";

interface Field {
  id: string;
  name: string;
  label: string;
  type: string;
  required: boolean;
  defaultValue: string;
  order: number;
}

interface DefineSchemaStepProps {
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

export function DefineSchemaStep({ outputFields, setOutputFields }: DefineSchemaStepProps) {
  const addField = () => {
    const newField: Field = {
      id: `field-${Date.now()}`,
      name: "",
      label: "",
      type: "Văn bản",
      required: false,
      defaultValue: "",
      order: outputFields.length + 1
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

  // Initialize with some default fields if empty
  useEffect(() => {
    if (outputFields.length === 0) {
      setOutputFields([
        {
          id: "field-1",
          name: "product_name",
          label: "Tên Sản phẩm",
          type: "Văn bản",
          required: true,
          defaultValue: "",
          order: 1
        },
        {
          id: "field-2",
          name: "price",
          label: "Giá",
          type: "Tiền tệ",
          required: true,
          defaultValue: "0",
          order: 2
        },
        {
          id: "field-3",
          name: "category",
          label: "Danh mục",
          type: "Văn bản",
          required: false,
          defaultValue: "",
          order: 3
        },
        {
          id: "field-4",
          name: "stock",
          label: "Tồn kho",
          type: "Số",
          required: false,
          defaultValue: "0",
          order: 4
        }
      ]);
    }
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Định nghĩa Cấu trúc Đầu ra
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Cấu hình cấu trúc dữ liệu đầu ra đã chuẩn hóa
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

        {/* Fields Table */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-12 gap-4 px-4 py-3 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-600 uppercase tracking-wider">
            <div className="col-span-1"></div>
            <div className="col-span-2">Tên Trường</div>
            <div className="col-span-2">Nhãn</div>
            <div className="col-span-2">Kiểu</div>
            <div className="col-span-1 text-center">Bắt buộc</div>
            <div className="col-span-2">Giá trị Mặc định</div>
            <div className="col-span-1 text-center">Thứ tự</div>
            <div className="col-span-1 text-center">Thao tác</div>
          </div>

          {/* Fields */}
          <div className="divide-y divide-gray-100">
            {outputFields.length === 0 ? (
              <div className="px-4 py-12 text-center">
                <p className="text-sm text-gray-500 mb-4">Chưa định nghĩa trường nào</p>
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
                  className="grid grid-cols-12 gap-4 px-4 py-3 hover:bg-gray-50 transition-colors"
                >
                  {/* Drag Handle */}
                  <div className="col-span-1 flex items-center">
                    <GripVertical className="w-4 h-4 text-gray-400 cursor-grab" />
                  </div>

                  {/* Field Name */}
                  <div className="col-span-2">
                    <input
                      type="text"
                      value={field.name}
                      onChange={(e) => updateField(field.id, "name", e.target.value)}
                      placeholder="field_name"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Label */}
                  <div className="col-span-2">
                    <input
                      type="text"
                      value={field.label}
                      onChange={(e) => updateField(field.id, "label", e.target.value)}
                      placeholder="Field Label"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Type */}
                  <div className="col-span-2">
                    <select
                      value={field.type}
                      onChange={(e) => updateField(field.id, "type", e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      {fieldTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Required */}
                  <div className="col-span-1 flex items-center justify-center">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={field.required}
                        onChange={(e) => updateField(field.id, "required", e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  {/* Default Value */}
                  <div className="col-span-2">
                    <input
                      type="text"
                      value={field.defaultValue}
                      onChange={(e) => updateField(field.id, "defaultValue", e.target.value)}
                      placeholder="Default"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Order */}
                  <div className="col-span-1 flex items-center justify-center">
                    <input
                      type="number"
                      value={field.order}
                      onChange={(e) => updateField(field.id, "order", parseInt(e.target.value))}
                      className="w-12 px-2 py-2 text-sm text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Actions */}
                  <div className="col-span-1 flex items-center justify-center">
                    <button
                      onClick={() => removeField(field.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
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
                Mẹo Cấu hình Schema
              </h4>
              <ul className="text-xs text-blue-800 space-y-1">
                <li>• Tên trường nên sử dụng snake_case (vd: product_name)</li>
                <li>• Đánh dấu các trường quan trọng là bắt buộc để đảm bảo chất lượng dữ liệu</li>
                <li>• Đặt kiểu dữ liệu phù hợp để tự động xác thực</li>
                <li>• Sử dụng giá trị mặc định cho các trường tùy chọn để tránh ô trống</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}