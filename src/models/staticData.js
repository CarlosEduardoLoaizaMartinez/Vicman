// Modelo: datos inmutables del sitio y estado de navegación del catálogo.
export const siteData = {
	brand: 'AGROVICMAN',
	whatsapp: '51984000000',
	features: [
		{ icon: '⌖', eyebrow: 'ORIGEN DIRECTO', title: '1,820 m s. n. m.', text: 'Finca familiar ubicada en las laderas de Quillabamba, Cusco. Clima de ceja de selva que da matices únicos.' },
		{ icon: '◉', eyebrow: 'CALIDAD ARTESANAL', title: 'Tostado semanal', text: 'Tueste artesanal en pequeños lotes para mantener los aromas y la frescura de cada cosecha.' },
		{ icon: '♧', eyebrow: 'INOCUIDAD CERTIFICADA', title: 'Registro DIGESA', text: 'Producción bajo estándares de buenas prácticas agrícolas y manufactura.' },
		{ icon: '↗', eyebrow: 'DESPACHO NACIONAL', title: 'Envíos a todo el Perú', text: 'Entregas en 24–48 horas en Lima y principales capitales. Seguimiento en tiempo real.' }
	],
	categories: ['Todos', 'Café en grano', 'Drip Bags', 'Chocolate'],
	products: [
		{ id: 'sidra', category: 'Café en grano', tag: 'FINCA / 1,820 M', badge: 'LAVADO', name: 'Café Especial Sidra', description: 'Variedad exótica de origen ecuatoriano aclimatada en las alturas de Quillabamba.', notes: ['Floral', 'Durazno maduro', 'Miel de azahar'], size: '250 g', price: '38.00', oldPrice: '42.00', image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=850&q=85', alt: 'Granos de café recién tostados' },
		{ id: 'geisha', category: 'Café en grano', tag: 'SANTA ANA / 1,820 M', badge: 'MICROLOTE', name: 'Geisha & Borbón', description: 'Selección manual de granos selectos con secado anaeróbico en camas africanas.', notes: ['Jazmín', 'Bergamota', 'Pomelo dulce'], size: '250 g', price: '45.00', oldPrice: '', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=850&q=85', alt: 'Café de especialidad servido en una mesa' },
		{ id: 'drip', category: 'Drip Bags', tag: '10 DOSIS', badge: 'BESTSELLER', name: 'Drip Bags Filtrantes', description: '10 sobres herméticos individuales. Café de especialidad listo para preparar.', notes: ['Chocolate bitter', 'Caramelo', 'Cuerpo sedoso'], size: '10 sobres', price: '32.00', oldPrice: '', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=850&q=85', alt: 'Taza de café filtrado' },
		{ id: 'chuncho', category: 'Chocolate', tag: 'QUILLABAMBA', badge: 'CACAO NATIVO', name: 'Chocolate Chuncho', description: 'Cacao fino de aroma nativo de La Convención, templado lentamente.', notes: ['Frutos secos', 'Notas cítricas', '70% cacao'], size: '100 g', price: '18.00', oldPrice: '', image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=850&q=85', alt: 'Chocolate oscuro artesanal con granos de cacao' }
	],
	steps: [
		{ number: '01', icon: '✂', title: 'Abre el sobre', text: 'Corta o rasga cuidadosamente por la línea punteada del filtro ecológico para liberar los aromas recién molidos.', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=85', alt: 'Preparación manual de café filtrado' },
		{ number: '02', icon: '♨', title: 'Ancla a tu taza', text: 'Extiende las resistentes orejuelas de papel biodegradable y colócalas sobre el borde de tu taza preferida.', image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=900&q=85', alt: 'Filtro de café colocado sobre una taza' },
		{ number: '03', icon: '♢', title: 'Vierte agua a 92 °C', text: 'Agrega 150 ml de agua caliente en círculos suaves dejando infusionar, retira el saquito y disfruta una taza perfecta.', image: 'https://images.unsplash.com/photo-1517256673644-36ad11246d21?auto=format&fit=crop&w=900&q=85', alt: 'Vertido de agua caliente para preparar café' }
	],
	testimonials: [
		{ label: 'V60 Cupping', quote: 'El café Sidra de Agrovicman tiene una de las tazas más limpias que he calibrado en V60 este año. Su acidez mielica tipo durazno y notas a flores de azahar son extraordinarias.', name: 'Diego M.', role: 'Barista Head · Miraflores, Lima', initials: 'DM' },
		{ label: 'Drip Bags', quote: 'Los Drip Bags me salvaron en mi trekking hacia Salkantay y ahora son infaltables en mis viajes de trabajo. Abres el sobre y el olor te traslada directo a la selva de Cusco.', name: 'Clara V.', role: 'Viajera & Diseñadora · Cusco / Lima', initials: 'CV' },
		{ label: 'Corporativo B2B', quote: 'Compramos packs corporativos combinando café en grano y chocolates Chuncho para regalos de fin de año. La presentación artesanal y la calidad dejaron a nuestros clientes fascinados.', name: 'Estudio Jurídico M. & Asoc.', role: 'San Isidro, Lima', initials: 'EJ' }
	],
	faqs: [
		{ question: '¿Cómo realizan los envíos a provincias?', answer: 'Despachamos de lunes a sábado desde Quillabamba y Lima mediante Olva Courier y Shalom a agencia o domicilio. El tiempo estimado de entrega es de 24 a 48 horas con número de seguimiento en tiempo real vía WhatsApp.' },
		{ question: '¿En qué tipo de molienda puedo pedir mi café?', answer: 'Podemos enviártelo en grano entero recién tostado o molido a medida para Prensa Francesa, cafetera italiana / Moka, V60, Chemex o máquina de espresso. Indícanoslo al momento de escribirnos.' },
		{ question: '¿Cuáles son las formas de pago aceptadas?', answer: 'Aceptamos transferencias bancarias directas (BCP, BBVA, Interbank, Banco de la Nación), billeteras móviles Yape y Plin, además de links de pago seguros con tarjeta de crédito o débito Visa y Mastercard.' },
		{ question: '¿Emiten factura o boleta electrónica?', answer: 'Sí, somos una empresa formal registrada con RUC activo y Registro Sanitario DIGESA vigente. Emitimos comprobantes electrónicos válidos (Boleta de Venta o Factura con IGV desglosado para empresas y cafeterías).' }
	]
};

const state = { activeCategory: 'Todos', openFaq: -1 };

export function getState() {
	return { ...state };
}

export function setCategory(category) {
	state.activeCategory = category;
}

export function toggleFaq(index) {
	state.openFaq = state.openFaq === index ? -1 : index;
}

export function getVisibleProducts() {
	return state.activeCategory === 'Todos'
		? siteData.products
		: siteData.products.filter((product) => product.category === state.activeCategory);
}
