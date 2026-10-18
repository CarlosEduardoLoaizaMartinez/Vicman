import { Marquee } from '@/components/marquee'

const messages = [
  'Cultivado en el entorno del ACR Chuyapi Urusayhua',
  '+1,750 m.s.n.m. · La Convención, Cusco',
  'Pedidos armados directo a WhatsApp',
  'Precios visibles, sin "consultar"',
  'Tradición familiar desde 2013',
]

export function AnnouncementBar() {
  return (
    <div className="bg-primary py-2 text-sm text-primary-foreground">
      <Marquee duration={45} label="Anuncios">
        {messages.map((message) => (
          <span key={message} className="flex items-center gap-3 px-6 uppercase tracking-widest">
            {message}
            <a href="#catalogo" className="text-accent underline underline-offset-4">
              Ver catálogo
            </a>
            <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
          </span>
        ))}
      </Marquee>
    </div>
  )
}
