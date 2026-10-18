import { cn } from '@/lib/utils'

type MarqueeProps = {
  children: React.ReactNode
  duration?: number
  reverse?: boolean
  className?: string
  label?: string
}

export function Marquee({ children, duration = 30, reverse, className, label }: MarqueeProps) {
  return (
    <div
      className={cn('group relative flex overflow-hidden', className)}
      role={label ? 'region' : undefined}
      aria-label={label}
    >
      <div
        className={cn(
          'flex w-max shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused]',
          reverse && '[animation-direction:reverse]',
        )}
        style={{ '--marquee-duration': `${duration}s` } as React.CSSProperties}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
