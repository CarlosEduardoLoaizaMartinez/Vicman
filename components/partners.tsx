import { Mail, MapPin, MessageCircle, Sprout } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const contacts = [
  {
    icon: MapPin,
    title: 'Oficina Cusco',
    lines: ['Calle Killa con Calle Inti', 'San Jerónimo, Cusco, Perú'],
  },
  {
    icon: Sprout,
    title: 'Origen productivo',
    lines: ['Quillabamba, La Convención', 'Cusco, Perú'],
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp directo',
    lines: ['+51 984 603 363', '+51 961 184 496'],
    href: 'https://wa.me/51984603363',
  },
  {
    icon: Mail,
    title: 'Correo',
    lines: ['agrovicman@gmail.com'],
    href: 'mailto:agrovicman@gmail.com',
  },
]

export function Partners() {
  return (
    <section id="contacto" className="scroll-mt-24 py-20 md:py-28" aria-labelledby="contacto-title">
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        <Reveal className="flex flex-col items-center gap-3 text-center">
          <h2 id="contacto-title" className="text-5xl md:text-7xl">
            Dónde estamos
          </h2>
          <p className="text-xl text-muted-foreground">Del valle de La Convención a tu mesa.</p>
        </Reveal>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map(({ icon: Icon, title, lines, href }, i) => {
            const content = (
              <>
                <span className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:-rotate-12">
                  <Icon className="size-6" strokeWidth={1.5} />
                </span>
                <h3 className="text-2xl">{title}</h3>
                <p className="flex flex-col text-lg leading-relaxed">
                  {lines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </p>
              </>
            )
            const className =
              'group flex h-full flex-col gap-4 rounded-3xl border-[1.5px] border-foreground p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_var(--accent)]'
            return (
              <li key={title}>
                <Reveal delay={i * 100} className="h-full">
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
                      {content}
                    </a>
                  ) : (
                    <div className={className}>{content}</div>
                  )}
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
