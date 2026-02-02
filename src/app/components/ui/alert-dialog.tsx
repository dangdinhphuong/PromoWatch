import * as React from "react";
import { Button } from "@/app/components/ui/button";

interface AlertDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
}

export function AlertDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = "OK",
  cancelText = "Hủy",
}: AlertDialogProps) {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Dialog */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6 animate-in fade-in zoom-in duration-200">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">
            {title}
          </h2>
          <p className="text-sm text-gray-600">
            {description}
          </p>
          
          <div className="flex justify-end gap-3 pt-4">
            <Button
              variant="outline"
              onClick={onClose}
              className="px-6"
            >
              {cancelText}
            </Button>
            <Button
              onClick={handleConfirm}
              className="px-6 bg-blue-600 hover:bg-blue-700"
            >
              {confirmText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
