"use client";

interface SkeletonLoaderProps {
  className?: string;
  count?: number;
}

export function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-xl bg-white/5 border border-white/10 overflow-hidden animate-pulse ${className}`}>
      <div className="aspect-square bg-white/10" />
      <div className="p-4 space-y-2">
        <div className="h-4 bg-white/10 rounded w-3/4" />
        <div className="h-3 bg-white/10 rounded w-1/2" />
      </div>
    </div>
  );
}

export function SkeletonProjectCard({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-white/5 border border-white/10 rounded-lg overflow-hidden animate-pulse ${className}`}>
      <div className="relative h-48 w-full bg-white/10" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-white/10 rounded w-3/4" />
        <div className="h-3 bg-white/10 rounded w-1/2" />
        <div className="flex gap-2 mt-4">
          <div className="h-7 bg-white/10 rounded w-24" />
          <div className="h-7 bg-white/10 rounded w-20" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonText({ lines = 3, className = "" }: { lines?: number; className?: string }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`h-4 bg-white/10 rounded animate-pulse ${
            i === lines - 1 ? "w-3/4" : "w-full"
          }`}
        />
      ))}
    </div>
  );
}

export function SkeletonLoader({ className = "", count = 1 }: SkeletonLoaderProps) {
  return (
    <div className={className}>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

