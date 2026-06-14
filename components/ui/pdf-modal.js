"use client";

export default function PdfModal({
  open,
  onClose,
  pdfUrl,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="relative w-full max-w-6xl h-[90vh] rounded-lg bg-white shadow-xl overflow-hidden">

        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-md bg-white px-3 py-2 text-sm font-medium shadow"
        >
          ✕
        </button>

        <iframe
          src={pdfUrl}
          title="PDF Viewer"
          className="h-full w-full"
        />
      </div>
    </div>
  );
}