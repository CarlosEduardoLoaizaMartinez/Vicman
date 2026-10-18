import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/51984603363?text=%C2%A1Hola%20AgroVicman!%20Quisiera%20informaci%C3%B3n."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-5 right-5 z-30 flex items-center gap-2 rounded-full border-2 border-primary-foreground bg-primary p-3.5 text-primary-foreground transition-all duration-300 hover:pr-5"
      style={{ boxShadow: '3px 3px 0 0 var(--accent)' }}
    >
      <MessageCircle className="size-6" strokeWidth={1.75} />
      <span className="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:max-w-40">
        ¿Te ayudamos?
      </span>
    </a>
  )
}
