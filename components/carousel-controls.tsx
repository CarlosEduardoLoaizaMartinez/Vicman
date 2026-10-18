'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'

export function scrollTrack(track: HTMLElement | null, direction: 1 | -1) {
  if (!track) return
  track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: 'smooth' })
}

export function CarouselControls({
  onPrev,
  onNext,
  label,
}: {
  onPrev: () => void
  onNext: () => void
  label: string
}) {
  return (
    <div className="flex gap-3">
      <button type="button" onClick={onPrev} className="btn-round" aria-label={`${label}: anterior`}>
        <ArrowLeft className="size-5" strokeWidth={1.5} />
      </button>
      <button type="button" onClick={onNext} className="btn-round" aria-label={`${label}: siguiente`}>
        <ArrowRight className="size-5" strokeWidth={1.5} />
      </button>
    </div>
  )
}
