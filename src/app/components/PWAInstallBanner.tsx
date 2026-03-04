import { useState } from 'react';
import { Download, X } from 'lucide-react';
import { usePWAInstall } from '@/app/hooks/usePWAInstall';

export function PWAInstallBanner() {
  const { isInstallable, promptInstall } = usePWAInstall();
  const [dismissed, setDismissed] = useState(false);

  if (!isInstallable || dismissed) return null;

  return (
    <div className="fixed bottom-[72px] left-0 right-0 z-40 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 shadow-lg lg:bottom-0">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 flex-1">
          <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-blue-600 font-bold text-sm">SSO</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm">Cài đặt ứng dụng</p>
            <p className="text-xs text-blue-100 truncate">Truy cập nhanh hơn, không cần trình duyệt</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              promptInstall();
              setDismissed(true);
            }}
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Cài đặt
          </button>
          <button
            onClick={() => setDismissed(true)}
            className="p-2 hover:bg-blue-800 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}