import { useState } from "react";
import { Plus, X, Settings } from "lucide-react";

interface MappingRulesStepProps {
  outputFields: any[];
  mappings: any;
  setMappings: (mappings: any) => void;
}

const availableColumns = [
  "Product Name",
  "Price",
  "Category",
  "Stock",
  "Description"
];

const ruleTypes = [
  { id: "trim", name: "Trim Whitespace", icon: "✂️" },
  { id: "uppercase", name: "Uppercase", icon: "🔠" },
  { id: "lowercase", name: "Lowercase", icon: "🔡" },
  { id: "remove_spaces", name: "Remove Extra Spaces", icon: "⎵" },
  { id: "date_parse", name: "Parse Date", icon: "📅" },
  { id: "number_format", name: "Format Number", icon: "🔢" },
  { id: "phone_format", name: "Format Phone", icon: "📱" },
  { id: "replace", name: "Replace Text", icon: "🔄" },
  { id: "default_value", name: "Default Value", icon: "⚙️" },
  { id: "concat", name: "Concatenate", icon: "➕" }
];

export function MappingRulesStep({ outputFields, mappings, setMappings }: MappingRulesStepProps) {
  const [selectedField, setSelectedField] = useState<string | null>(
    outputFields[0]?.id || null
  );
  const [showRuleModal, setShowRuleModal] = useState(false);

  const addMapping = (fieldId: string, column: string) => {
    setMappings({
      ...mappings,
      [fieldId]: {
        ...mappings[fieldId],
        sourceColumn: column,
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

  const currentField = outputFields.find(f => f.id === selectedField);
  const currentMapping = mappings[selectedField || ""] || {};

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Mapping & Rule Pipeline
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT: Output Fields List */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900">
                  Output Fields
                </h4>
              </div>
              <div className="divide-y divide-gray-100">
                {outputFields.map((field) => {
                  const isSelected = selectedField === field.id;
                  const hasMapping = mappings[field.id]?.sourceColumn;

                  return (
                    <button
                      key={field.id}
                      onClick={() => setSelectedField(field.id)}
                      className={`w-full px-4 py-3 text-left transition-all ${
                        isSelected
                          ? "bg-blue-50 border-l-4 border-blue-600"
                          : "hover:bg-gray-50 border-l-4 border-transparent"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-medium truncate ${
                            isSelected ? "text-blue-900" : "text-gray-900"
                          }`}>
                            {field.label || field.name}
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5">
                            {field.type}
                            {field.required && (
                              <span className="ml-1 text-red-500">*</span>
                            )}
                          </p>
                        </div>
                        {hasMapping && (
                          <div className="ml-2 w-2 h-2 bg-emerald-500 rounded-full"></div>
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
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Source Column
                  </label>
                  <select
                    value={currentMapping.sourceColumn || ""}
                    onChange={(e) => addMapping(currentField.id, e.target.value)}
                    className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select column...</option>
                    {availableColumns.map((col) => (
                      <option key={col} value={col}>
                        {col}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Rule Pipeline */}
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-semibold text-gray-900">
                      Transformation Rules
                    </label>
                    <button
                      onClick={() => setShowRuleModal(true)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Add Rule
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
                      <p className="text-xs text-gray-500">No rules applied</p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white border border-gray-200 rounded-xl p-12 text-center">
                <p className="text-sm text-gray-500">
                  Select a field to configure mapping
                </p>
              </div>
            )}
          </div>

          {/* RIGHT: Preview */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900">
                  Live Preview
                </h4>
              </div>
              <div className="p-4 space-y-4">
                {currentMapping.sourceColumn ? (
                  <>
                    {/* Before */}
                    <div>
                      <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2 block">
                        Before
                      </label>
                      <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                        <p className="text-sm text-gray-900 font-mono">
                          "  iPhone 14 Pro  "
                        </p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center">
                      <div className="w-8 h-8 bg-blue-50 border-2 border-blue-200 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-lg">→</span>
                      </div>
                    </div>

                    {/* After */}
                    <div>
                      <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2 block">
                        After
                      </label>
                      <div className="px-3 py-2 bg-emerald-50 border border-emerald-200 rounded-lg">
                        <p className="text-sm text-emerald-900 font-mono">
                          "iPhone 14 Pro"
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-xs text-gray-500">
                      Select a source column to see preview
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
                Add Transformation Rule
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
