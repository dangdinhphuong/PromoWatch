import { useState } from "react";
import { Plus, Edit2, Trash2, FileText, Search, Download, Upload } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { ViolationPage } from "./index";

interface CategoriesPageProps {
  onBack: () => void;
  onNavigate: (page: ViolationPage) => void;
}

interface ViolationCategory {
  id: string;
  name: string;
  description: string;
  count: number;
  severity: "critical" | "high" | "medium" | "low";
  color: string;
}

const initialCategories: ViolationCategory[] = [
  {
    id: "fake-goods",
    name: "Hàng giả, hàng nhái",
    description: "Sản phẩm vi phạm quyền sở hữu trí tuệ, hàng không rõ nguồn gốc",
    count: 312,
    severity: "high",
    color: "red",
  },
  {
    id: "unfair-competition",
    name: "Cạnh tranh không lành mạnh",
    description: "Phá giá, bán phá giá, cản trở đối thủ cạnh tranh",
    count: 189,
    severity: "medium",
    color: "orange",
  },
  {
    id: "false-advertising",
    name: "Quảng cáo sai sự thật",
    description: "Thông tin sản phẩm không đúng, phóng đại công dụng",
    count: 156,
    severity: "medium",
    color: "yellow",
  },
  {
    id: "fraud-data",
    name: "Lừa đảo & dữ liệu",
    description: "Thu thập thông tin cá nhân trái phép, lừa đảo khách hàng",
    count: 78,
    severity: "high",
    color: "purple",
  },
  {
    id: "banned-goods",
    name: "Hàng cấm lưu hành",
    description: "Vũ khí, chất cấm, thuốc không phép",
    count: 45,
    severity: "critical",
    color: "red",
  },
  {
    id: "tax-evasion",
    name: "Trốn thuế & hoá đơn",
    description: "Không xuất hóa đơn, khai man thuế",
    count: 124,
    severity: "high",
    color: "orange",
  },
  {
    id: "consumer-rights",
    name: "Vi phạm quyền người tiêu dùng",
    description: "Không bảo hành, không đổi trả, hợp đồng không rõ ràng",
    count: 203,
    severity: "medium",
    color: "blue",
  },
  {
    id: "underage-content",
    name: "Nội dung không phù hợp",
    description: "Nội dung khiêu dâm, bạo lực, kích động",
    count: 67,
    severity: "high",
    color: "red",
  },
];

export function CategoriesPage({ onBack, onNavigate }: CategoriesPageProps) {
  const [categories, setCategories] = useState<ViolationCategory[]>(initialCategories);
  const [searchTerm, setSearchTerm] = useState("");
  const [severityFilter, setSeverityFilter] = useState<string>("all");
  
  // Dialog states
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  
  // Form state
  const [selectedCategory, setSelectedCategory] = useState<ViolationCategory | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    severity: "medium" as const,
    color: "blue",
  });

  const getSeverityBadge = (severity: string) => {
    const badges: Record<string, { label: string; className: string }> = {
      critical: { label: "Nghiêm trọng", className: "bg-red-600 text-white" },
      high: { label: "Cao", className: "bg-red-100 text-red-700" },
      medium: { label: "Trung bình", className: "bg-orange-100 text-orange-700" },
      low: { label: "Thấp", className: "bg-blue-100 text-blue-700" },
    };
    return badges[severity] || badges.medium;
  };

  const getColorClass = (color: string) => {
    const colors: Record<string, string> = {
      red: "border-red-600",
      orange: "border-orange-600",
      yellow: "border-yellow-600",
      purple: "border-purple-600",
      blue: "border-blue-600",
    };
    return colors[color] || "border-gray-600";
  };

  // Filter categories
  const filteredCategories = categories.filter((cat) => {
    const matchesSearch = cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cat.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeverity = severityFilter === "all" || cat.severity === severityFilter;
    return matchesSearch && matchesSeverity;
  });

  // Add category
  const handleAdd = () => {
    const newCategory: ViolationCategory = {
      id: `cat-${Date.now()}`,
      name: formData.name,
      description: formData.description,
      count: 0,
      severity: formData.severity,
      color: formData.color,
    };
    setCategories([...categories, newCategory]);
    setIsAddOpen(false);
    resetForm();
  };

  // Edit category
  const handleEdit = () => {
    if (!selectedCategory) return;
    setCategories(categories.map(cat => 
      cat.id === selectedCategory.id 
        ? { ...cat, ...formData }
        : cat
    ));
    setIsEditOpen(false);
    resetForm();
  };

  // Delete category
  const handleDelete = () => {
    if (!selectedCategory) return;
    setCategories(categories.filter(cat => cat.id !== selectedCategory.id));
    setIsDeleteOpen(false);
    setSelectedCategory(null);
  };

  // Open edit dialog
  const openEdit = (category: ViolationCategory) => {
    setSelectedCategory(category);
    setFormData({
      name: category.name,
      description: category.description,
      severity: category.severity,
      color: category.color,
    });
    setIsEditOpen(true);
  };

  // Open delete dialog
  const openDelete = (category: ViolationCategory) => {
    setSelectedCategory(category);
    setIsDeleteOpen(true);
  };

  // Open detail dialog
  const openDetail = (category: ViolationCategory) => {
    setSelectedCategory(category);
    setIsDetailOpen(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      severity: "medium",
      color: "blue",
    });
    setSelectedCategory(null);
  };

  // Export data
  const handleExport = () => {
    const dataStr = JSON.stringify(categories, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `violation-categories-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Danh mục vi phạm</h2>
            <p className="text-sm text-gray-600">Tiêu chuẩn hóa danh mục hành vi vi phạm TMĐT</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="gap-2" onClick={handleExport}>
              <Download className="h-4 w-4" />
              Export
            </Button>
            <Button variant="outline" className="gap-2">
              <Upload className="h-4 w-4" />
              Import
            </Button>
            <Button className="gap-2 bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setIsAddOpen(true)}>
              <Plus className="h-4 w-4" />
              Thêm danh mục
            </Button>
          </div>
        </div>

        {/* Filter Panel */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Tìm kiếm danh mục..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon={<Search className="h-4 w-4" />}
              />
            </div>
            <Select value={severityFilter} onValueChange={setSeverityFilter}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Mức độ nghiêm trọng" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="critical">Nghiêm trọng</SelectItem>
                <SelectItem value="high">Cao</SelectItem>
                <SelectItem value="medium">Trung bình</SelectItem>
                <SelectItem value="low">Thấp</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Statistics Summary */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <p className="text-xs text-gray-600 mb-2 uppercase tracking-wide">Tổng danh mục</p>
            <p className="text-3xl font-bold text-gray-900">{filteredCategories.length}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <p className="text-xs text-gray-600 mb-2 uppercase tracking-wide">Tổng vi phạm</p>
            <p className="text-3xl font-bold text-red-600">
              {filteredCategories.reduce((acc, cat) => acc + cat.count, 0)}
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <p className="text-xs text-gray-600 mb-2 uppercase tracking-wide">Nghiêm trọng</p>
            <p className="text-3xl font-bold text-red-600">
              {filteredCategories.filter(c => c.severity === "critical" || c.severity === "high").length}
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <p className="text-xs text-gray-600 mb-2 uppercase tracking-wide">Cập nhật</p>
            <p className="text-sm font-semibold text-gray-900 mt-3">Hôm nay</p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 gap-6">
          {filteredCategories.map((category) => {
            const badge = getSeverityBadge(category.severity);
            return (
              <div
                key={category.id}
                className={`bg-white border-l-4 ${getColorClass(category.color)} border-r border-t border-b border-gray-200 rounded-r p-6 hover:shadow-md transition-all`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                      <span className={`inline-flex px-2.5 py-0.5 text-xs font-medium rounded ${badge.className}`}>
                        {badge.label}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-gray-900">{category.count}</span>
                    <span className="text-sm text-gray-600">vi phạm</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => openDetail(category)}>
                      <FileText className="h-4 w-4 text-gray-600" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => openEdit(category)}>
                      <Edit2 className="h-4 w-4 text-gray-600" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => openDelete(category)}>
                      <Trash2 className="h-4 w-4 text-red-600" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No results */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
            <p className="text-gray-500">Không tìm thấy danh mục nào</p>
          </div>
        )}
      </div>

      {/* Add Dialog */}
      <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Thêm danh mục vi phạm</DialogTitle>
            <DialogDescription>Tạo danh mục mới để phân loại hành vi vi phạm</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Tên danh mục *</label>
              <Input
                placeholder="VD: Hàng giả, hàng nhái"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Mô tả</label>
              <textarea
                className="w-full min-h-[100px] px-3 py-2 border border-gray-300 rounded-md text-sm"
                placeholder="Mô tả chi tiết về danh mục vi phạm này..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Mức độ nghiêm trọng</label>
                <Select value={formData.severity} onValueChange={(value: any) => setFormData({ ...formData, severity: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Thấp</SelectItem>
                    <SelectItem value="medium">Trung bình</SelectItem>
                    <SelectItem value="high">Cao</SelectItem>
                    <SelectItem value="critical">Nghiêm trọng</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Màu đánh dấu</label>
                <Select value={formData.color} onValueChange={(value) => setFormData({ ...formData, color: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="red">Đỏ</SelectItem>
                    <SelectItem value="orange">Cam</SelectItem>
                    <SelectItem value="yellow">Vàng</SelectItem>
                    <SelectItem value="blue">Xanh dương</SelectItem>
                    <SelectItem value="purple">Tím</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddOpen(false)}>Hủy</Button>
            <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleAdd} disabled={!formData.name}>
              Thêm danh mục
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Chỉnh sửa danh mục</DialogTitle>
            <DialogDescription>Cập nhật thông tin danh mục vi phạm</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Tên danh mục *</label>
              <Input
                placeholder="VD: Hàng giả, hàng nhái"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Mô tả</label>
              <textarea
                className="w-full min-h-[100px] px-3 py-2 border border-gray-300 rounded-md text-sm"
                placeholder="Mô tả chi tiết về danh mục vi phạm này..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Mức độ nghiêm trọng</label>
                <Select value={formData.severity} onValueChange={(value: any) => setFormData({ ...formData, severity: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Thấp</SelectItem>
                    <SelectItem value="medium">Trung bình</SelectItem>
                    <SelectItem value="high">Cao</SelectItem>
                    <SelectItem value="critical">Nghiêm trọng</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Màu đánh dấu</label>
                <Select value={formData.color} onValueChange={(value) => setFormData({ ...formData, color: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="red">Đỏ</SelectItem>
                    <SelectItem value="orange">Cam</SelectItem>
                    <SelectItem value="yellow">Vàng</SelectItem>
                    <SelectItem value="blue">Xanh dương</SelectItem>
                    <SelectItem value="purple">Tím</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditOpen(false)}>Hủy</Button>
            <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleEdit} disabled={!formData.name}>
              Lưu thay đổi
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Xác nhận xóa</DialogTitle>
            <DialogDescription>
              Bạn có chắc chắn muốn xóa danh mục "<strong>{selectedCategory?.name}</strong>" không? 
              Hành động này không thể hoàn tác.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteOpen(false)}>Hủy</Button>
            <Button className="bg-red-600 hover:bg-red-700" onClick={handleDelete}>
              Xóa danh mục
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Detail Dialog */}
      <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Chi tiết danh mục</DialogTitle>
            <DialogDescription>Thông tin đầy đủ về danh mục vi phạm</DialogDescription>
          </DialogHeader>
          {selectedCategory && (
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Tên danh mục</label>
                  <p className="text-gray-900 font-semibold">{selectedCategory.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Số lượng vi phạm</label>
                  <p className="text-2xl font-bold text-red-600">{selectedCategory.count}</p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Mô tả</label>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <p className="text-sm text-gray-900">{selectedCategory.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Mức độ nghiêm trọng</label>
                  <span className={`inline-block mt-1 px-3 py-1 text-xs font-medium rounded ${getSeverityBadge(selectedCategory.severity).className}`}>
                    {getSeverityBadge(selectedCategory.severity).label}
                  </span>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Màu đánh dấu</label>
                  <div className="flex items-center gap-2 mt-1">
                    <div className={`w-6 h-6 rounded border-2 ${getColorClass(selectedCategory.color)}`}></div>
                    <span className="text-sm text-gray-600 capitalize">{selectedCategory.color}</span>
                  </div>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Thống kê vi phạm gần đây</label>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>• 7 ngày qua: <strong className="text-gray-900">+23 vi phạm</strong></p>
                    <p>• 30 ngày qua: <strong className="text-gray-900">+89 vi phạm</strong></p>
                    <p>• Xu hướng: <strong className="text-red-600">Tăng 15%</strong></p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDetailOpen(false)}>Đóng</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
