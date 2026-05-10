import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary">
      <div className="text-center px-6">
        <span className="text-xs font-mono text-accent tracking-widest">
          404
        </span>
        <h1 className="text-display font-light tracking-tight mt-4 mb-4">
          Page not found
        </h1>
        <p className="text-text-secondary mb-8 max-w-sm mx-auto">
          你访问的页面不存在或已被移除。
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
        >
          <ArrowLeft size={16} />
          返回首页
        </Link>
      </div>
    </div>
  );
}
