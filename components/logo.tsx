import { Leaf } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('flex flex-col items-center leading-none', className)}>
      <span className="flex items-center gap-1 font-heading text-3xl font-semibold uppercase tracking-tight md:text-4xl">
        Vicman
        <Leaf className="size-5 -translate-y-2 rotate-12 text-accent md:size-6" strokeWidth={2} aria-hidden="true" />
      </span>
      <span className="mt-1 text-[11px] uppercase tracking-[0.35em]">AgroVicman · Cusco</span>
    </span>
  )
}
