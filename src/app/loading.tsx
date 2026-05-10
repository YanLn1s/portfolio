export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 rounded-full border-2 border-accent border-t-transparent animate-spin" />
        <span className="text-sm text-text-secondary font-mono">加载中...</span>
      </div>
    </div>
  );
}
