import { useToast } from "../../hooks/use-toast"
import { X } from "lucide-react"

export function Toaster() {
  const { toasts, dismiss } = useToast()

  return (
    <div className="fixed top-4 right-4 z-50 w-full max-w-sm space-y-4">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-green-600 text-white p-4 rounded-lg shadow-lg flex items-center justify-between"
        >
          <div className="flex-1">
            {toast.title && (
              <div className="font-semibold mb-1">{toast.title}</div>
            )}
            {toast.description && (
              <div className="text-sm opacity-90">{toast.description}</div>
            )}
          </div>
          <button
            onClick={() => dismiss(toast.id)}
            className="ml-4 p-1 hover:bg-green-700 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  )
}