// Vista: genera y actualiza la interfaz. No contiene reglas de negocio.
const imageUrl = (url) => url;

function renderHeader() {
	return `
		<div class="announcement"><span class="announcement-dot"></span> ENVÍO DIRECTO DESDE LA FINCA EN QUILLABAMBA A TODO EL PERÚ <span class="announcement-separator">|</span> CALIDAD 84–88 PTS SCA</div>
		<header class="site-header">
			<a class="brand" href="#inicio" aria-label="Agrovicman, inicio"><span class="brand-mark">A<span>V</span></span><span class="brand-copy"><strong>AGROVICMAN</strong><small>CAFÉ DE ESPECIALIDAD · 1,820 MSN</small></span></a>
			<button class="menu-toggle" type="button" aria-label="Abrir menú" aria-expanded="false" data-action="menu">☰</button>
			<nav class="main-nav" aria-label="Navegación principal">
				<a href="#inicio">01 · Hero & Confianza</a><a href="#catalogo">02 · Catálogo & Drip Bags</a><a href="#origen">03 · Origen & B2B</a><a href="#resenas">04 · Reseñas & FAQ</a>
			</nav>
			<div class="header-actions"><div class="language-switch" aria-label="Idioma"><span>ES</span><span>EN</span></div><a class="button button-green header-whatsapp" href="https://wa.me/51984000000" target="_blank" rel="noreferrer">Pedir por<br>WhatsApp</a><a class="account-button" href="#contacto" aria-label="Ir a contacto">●</a></div>
		</header>`;
}

function renderFeature(feature) {
	return `<article class="feature-card"><span class="feature-icon" aria-hidden="true">${feature.icon}</span><p class="eyebrow">${feature.eyebrow}</p><h3>${feature.title}</h3><p>${feature.text}</p></article>`;
}

function renderProduct(product) {
	return `<article class="product-card">
		<div class="product-image"><img src="${imageUrl(product.image)}" alt="${product.alt}" loading="lazy"><span class="product-badge">${product.badge}</span><span class="product-origin">${product.tag}</span></div>
		<div class="product-details"><p class="product-meta"><span>⌖ ${product.tag}</span><span>${product.size}</span></p><h3>${product.name}</h3><p class="product-description">${product.description}</p><div class="flavor-tags">${product.notes.map((note) => `<span>${note}</span>`).join('')}</div>
			<div class="product-buy"><div>${product.oldPrice ? `<del>S/ ${product.oldPrice}</del>` : `<span class="price-label">${product.size.toUpperCase()}</span>`}<strong>S/ ${product.price}</strong></div><a class="button button-green button-small" href="https://wa.me/51984000000?text=${encodeURIComponent(`Hola, quisiera pedir ${product.name}`)}" target="_blank" rel="noreferrer" aria-label="Pedir ${product.name} por WhatsApp">▣ Pedir</a></div>
		</div>
	</article>`;
}

function renderStep(step) {
	return `<article class="step-card"><div class="step-top"><span>${step.number}</span><i aria-hidden="true">${step.icon}</i></div><img src="${imageUrl(step.image)}" alt="${step.alt}" loading="lazy"><h3>${step.title}</h3><p>${step.text}</p></article>`;
}

function renderTestimonial(testimonial) {
	return `<article class="review-card"><div class="review-top"><span class="stars" aria-label="5 de 5 estrellas">★★★★★</span><span class="review-label">${testimonial.label}</span></div><blockquote>“${testimonial.quote}”</blockquote><div class="review-author"><span class="avatar">${testimonial.initials}</span><span><strong>${testimonial.name} <b aria-label="Verificado">✹</b></strong><small>${testimonial.role}</small></span></div></article>`;
}

function renderFaq(faq, index, state) {
	const expanded = state.openFaq === index;
	return `<article class="faq-item ${expanded ? 'is-open' : ''}"><h3><button type="button" class="faq-question" data-action="faq" data-index="${index}" aria-expanded="${expanded}" aria-controls="faq-answer-${index}"><span class="faq-icon" aria-hidden="true">${['↗', '◷', '▣', '▤'][index]}</span><span>${faq.question}</span><span class="faq-chevron" aria-hidden="true">⌄</span></button></h3><div class="faq-answer" id="faq-answer-${index}" ${expanded ? '' : 'hidden'}><p>${faq.answer}</p></div></article>`;
}

export function renderApp(data, state, visibleProducts) {
	const app = document.querySelector('#app');
	app.innerHTML = `${renderHeader()}
		<main id="main-content">
			<section class="hero section-wrap" id="inicio">
				<div class="hero-copy"><p class="eyebrow eyebrow-pill"><span></span> COSECHA SCA 2024–2025 · EDICIÓN LIMITADA</p><p class="hero-kicker">VALLE DE LA CONVENCIÓN · CUSCO</p><h1>Café Especial Sidra:<br><em>El secreto mejor guardado</em><br>de Quillabamba.</h1><p class="hero-description">Cultivado a 1,820 m s. n. m. Cosechado y seleccionado con cuidado por la familia Agrovicman en el Valle de La Convención. Taza limpia, notas frutales vivas y una aromática intensidad de selva alta que se queda directo en tu taza.</p><div class="hero-highlights"><span>⌖ Puntaje SCA: 86.5 Pts</span><span>◉ 100% Directo de Finca</span><span>♧ Lote Único</span></div><div class="hero-actions"><a class="button button-green" href="https://wa.me/51984000000?text=Hola%2C%20quiero%20pedir%20caf%C3%A9%20Agrovicman" target="_blank" rel="noreferrer">◉ Pedir por WhatsApp / Ver Precios</a><a class="button button-light" href="#catalogo">Explorar café <span>↓</span></a></div><p class="micro-note"><span>●</span> Respuesta inmediata · Yape, Plin o transferencia</p></div>
				<div class="hero-visual"><div class="hero-photo"><img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=90" alt="Preparación artesanal de café en una finca" fetchpriority="high"><div class="hero-photo-overlay"></div><span class="photo-label">☼ LOTE DE ALTURA</span><div class="coffee-pack"><span class="pack-logo">AGROVICMAN</span><strong>SIDRA</strong><small>CAFÉ DE ESPECIALIDAD<br>QUILLABAMBA · CUSCO</small><i>86.5 PTS</i></div><div class="cup-detail">SCA<br><b>86.5</b></div></div><div class="origin-chip"><span>✿</span><span><b>VARIEDAD SIDRA</b><small>Origen Genético<br>Puro</small></span></div></div>
			</section>
			<section class="trust-section"><div class="section-wrap"><div class="section-heading trust-heading"><div><p class="eyebrow">GARANTÍA DE ORIGEN & FRESCURA</p><h2>¿Por qué el café de Agrovicman sabe diferente?</h2></div><p>Controlamos cada detalle desde la siembra bajo sombra natural hasta el despacho del café seleccionado a mano.</p></div><div class="feature-grid">${data.features.map(renderFeature).join('')}</div></div></section>
			<section class="catalog-section section-wrap" id="catalogo"><div class="section-heading catalog-heading"><div><p class="eyebrow"><span></span> COSECHAS & DERIVADOS DE ORIGEN</p><h2>Nuestros Cafés de Especialidad</h2><p>Disfruta la pureza de cada variedad cultivada con devoción por doña Hilda. Selecciona tu presentación preferida y solicítala inmediatamente por WhatsApp.</p></div><div class="season-note"><span>◉</span><div><small>COSECHA ACTIVA 2024–2025</small><strong>Lotes Limitados · Tueste Semanal</strong></div></div></div><div class="catalog-toolbar"><div class="category-tabs" role="group" aria-label="Filtrar productos">${data.categories.map((category) => `<button type="button" class="category-tab ${state.activeCategory === category ? 'is-active' : ''}" data-action="category" data-category="${category}" aria-pressed="${state.activeCategory === category}">${category === 'Drip Bags' ? 'Drip Bags (Innovación)' : category}</button>`).join('')}</div><span class="catalog-count">${visibleProducts.length} productos de finca</span></div><div class="product-grid" id="product-grid">${visibleProducts.map(renderProduct).join('')}</div><aside class="bottle-banner"><img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=450&q=85" alt="Bebida artesanal de café y cacao" loading="lazy"><div><span class="banner-tag">DESTILADO ANCESTRAL · SANTA ANA, CUSCO</span><h3>Licor Artesanal de Café & Cacao Chuncho</h3><p>Macerado lento en destilado puro de caña de azúcar de Santa Ana con granos selectos de altura y pasta pura de cacao nativo.</p></div><strong class="banner-price">S/ 35.00<small>BOTELLA 500ML</small></strong><a class="button button-green" href="https://wa.me/51984000000?text=Hola%2C%20quiero%20informaci%C3%B3n%20del%20licor%20artesanal" target="_blank" rel="noreferrer">Solicitar botella</a></aside></section>
			<section class="origin-section" id="origen"><div class="section-wrap origin-grid"><div class="origin-visual"><img src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=1200&q=90" alt="Paisaje montañoso de la región cafetalera" loading="lazy"><div class="origin-caption"><span>✿</span><div><small>TRADICIÓN & LINAJE CAFETALERO</small><strong>Sra. Hilda & Familia Agrovicman</strong><p>Fundadores y productores en Santa Ana, Quillabamba, Cusco.</p></div></div><span class="harvest-chip"><i></i> COSECHA ACTIVA 2025</span></div><div class="origin-copy"><p class="eyebrow"><span></span> STORYTELLING & ORIGEN <b>—</b> TERRITORIO ANDINO-AMAZÓNICO</p><span class="origin-tag">⌖ VALLE DE LA CONVENCIÓN · CUSCO</span><h2>Tradición viva en las alturas de Quillabamba.</h2><p>En las laderas escarpadas de Santa Ana, a 1,820 metros sobre el nivel del mar, los vientos andinos se encuentran con la exuberancia de la Amazonía cusqueña. Allí, la Sra. Hilda y su familia han perfeccionado durante generaciones el arte de cultivar café bajo sombra forestal nativa.</p><p>Cada fruto del lote Sidra madura lentamente bajo un microclima único, absorbiendo azúcares y notas florales complejas. Tras la cosecha manual selectiva, el café es fermentado en agua manantial andino y secado al sol en camas africanas elevadas para preservar su pureza cristalina.</p><div class="origin-stats"><div><span>⌖</span><strong>1,820m</strong><small>Altitud extrema</small></div><div><span>◉</span><strong>0%</strong><small>Químicos tóxicos</small></div><div><span>♧</span><strong>100%</strong><small>Cosechado a mano</small></div></div><div class="coupon-callout"><span>▣</span><p><strong>¿Nos conociste en feria o evento?</strong><small>Usa el cupón <b>FERIA10</b> al pedir por WhatsApp y obtén 10% OFF en tu primer pedido.</small></p><a class="button button-rust" href="https://wa.me/51984000000?text=Hola%2C%20tengo%20el%20cup%C3%B3n%20FERIA10" target="_blank" rel="noreferrer">Aplicar descuento →</a></div></div></div></section>
			<section class="wholesale-section"><div class="section-wrap"><div class="wholesale-heading"><p class="eyebrow">04 · CANAL MAYORISTA & CAFETERÍAS <span>—</span> B2B ROASTERS & HORECA</p><h2>¿Cafetería de especialidad, hotel boutique o regalos corporativos?</h2><p>Suministramos café verde en sacos herméticos GrainPro y café tostado por kilo con perfiles calibrados para tu equipo de espresso o barra de filtrados.</p></div><div class="wholesale-grid"><article><span>♡</span><h3>Precios de Productor Directo</h3><p>Eliminamos intermediarios. Trato transparente directo con la familia productora Agrovicman con precios por volumen altamente competitivos.</p><small>TRAZABILIDAD 100% DE FINCA　↗</small></article><article><span>☷</span><h3>Curvas de Tueste Calibradas</h3><p>Personalizamos el perfil de tueste (espresso balanceado, filtro vibrante, omni-roast) adaptado al molino y flujo de tu cafetería.</p><small>PERFILES SCA CERTIFICADOS　↓</small></article><article><span>▣</span><h3>Muestras Gratuitas para Negocios</h3><p>Enviamos kits de catación con ficha técnica SCA oficial a barras y tostadores autorizados en cualquier ciudad del Perú.</p><small>DESPACHO RÁPIDO A NIVEL NACIONAL　➜</small></article></div><div class="wholesale-cta"><span>▦</span><div><strong>Impulsa tu carta de cafés de origen cusqueño</strong><small>Atención especializada para barras en Lima, Cusco, Arequipa y Trujillo.</small></div><a class="button button-rust" href="https://wa.me/51984000000?text=Hola%2C%20quiero%20informaci%C3%B3n%20mayorista" target="_blank" rel="noreferrer">▣ Solicitar Cotización B2B / Muestras Gratuitas</a></div></div></section>
			<section class="drip-section section-wrap" id="drip-bags"><div class="section-heading centered-heading"><p class="eyebrow">TECNOLOGÍA JAPONESA · TUESTE DE QUILLABAMBA</p><h2>Drip Bags: Café de Especialidad donde sea<br>en 3 simples pasos</h2><p>Olvídate de prensas francesas o molinos pesados. Diseñamos filtros japoneses individuales biodegradables con nitrógeno activo que preservan la frescura del tueste recién hecho en Quillabamba.</p></div><div class="steps-grid">${data.steps.map(renderStep).join('')}</div><div class="drip-perks"><span>◴ <b>Listo en 90 segundos</b><small>Extracción limpia sin esperas</small></span><span>♧ <b>Filtro 100% biodegradable</b><small>Compostable y amigable</small></span><span>♧ <b>Camping, oficina & viajes</b><small>Llévalo en tu mochila a todos lados</small></span></div><blockquote class="drip-quote"><span>“</span><div><p>“Llevé la caja de Drip Bags al trek del Valle Sagrado y a la oficina. Nunca antes había tomado un café con notas a jazmín tan fresco sin cargar una cafetera.”</p><small>— Carlos M., Sommelier de Café en Lima</small></div><a class="button button-rust" href="https://wa.me/51984000000?text=Hola%2C%20quiero%20pedir%20un%20pack%20de%20Drip%20Bags" target="_blank" rel="noreferrer">▣ Pedir Pack Degustación Drip Bags (S/ 32.00)</a></blockquote></section>
			<section class="reviews-section section-wrap" id="resenas"><div class="section-heading reviews-heading"><div><p class="eyebrow eyebrow-pill"><span></span> OPINIONES VERIFICADAS</p><h2>Voces que celebran nuestro origen</h2><p>De barras de especialidad limeñas a paladares exigentes en todo el país.</p></div><div class="rating-summary"><span class="stars">★★★★★</span><b>4.98 / 5.0</b> en más de 420 despachos</div></div><div class="reviews-grid">${data.testimonials.map(renderTestimonial).join('')}</div><div class="trust-strip"><span>♧ Tueste semanal garantizado</span><span>♧ Envíos seguros a nivel nacional</span><span>♙ Trazabilidad Finca Pava</span></div></section>
			<section class="faq-section" id="faq"><div class="section-wrap"><div class="section-heading centered-heading"><p class="eyebrow eyebrow-pill"><span></span> PREGUNTAS FRECUENTES</p><h2>Resolvemos tus dudas</h2><p>Todo lo que necesitas saber sobre nuestros procesos de tueste, despachos y atención personalizada.</p></div><div class="faq-grid">${data.faqs.map((faq, index) => renderFaq(faq, index, state)).join('')}</div></div></section>
			<section class="closing-section section-wrap"><div class="closing-card"><span class="closing-icon">▦</span><span class="closing-watermark" aria-hidden="true">♥</span><h2>Lleva la selva viva de Quillabamba a tu mesa<br>o tu oficina.</h2><p>Escríbenos directamente a la finca. Te asesoramos con la variedad y el punto de molienda perfecto para tu cafetera.</p><a class="button button-green" href="https://wa.me/51984000000?text=Hola%2C%20quiero%20asesor%C3%ADa%20para%20elegir%20mi%20caf%C3%A9" target="_blank" rel="noreferrer">◉ Escribir a la Familia Agrovicman</a><div class="closing-perks"><span>Atención 7 días de la semana</span><span>Garantía de frescura de tostado</span><span>Envío a todo el territorio peruano</span></div></div></section>
		</main>
		<footer class="site-footer" id="contacto"><div class="section-wrap"><div class="footer-grid"><div><a class="footer-brand" href="#inicio">AGROVICMAN <small>CUSCO</small></a><p>Café de especialidad de altura cultivado de manera sostenible a 1,820 msnm en el Valle de Quillabamba, La Convención. Tueste fresco y trazabilidad directa.</p><small>♧ Registro Sanitario DIGESA: Q4501223N / NAEGRA</small></div><div><h3>Sedes & Contacto</h3><p><b>Finca:</b> Sector Payayoc s/n, Quillabamba, Cusco<br><b>Despacho Lima:</b> Miraflores, Lima - Perú<br><b>Atención WhatsApp:</b> <a href="https://wa.me/51984000000">+51 984 000 000</a><br><b>Email:</b> contacto@agrovicman.pe</p></div><div><h3>Explorar Finca</h3><a href="#catalogo">Lotes Micro lote Sidra & Geisha</a><a href="#drip-bags">Drip Bags Portátiles</a><a href="#catalogo">Venta Mayorista Cafeterías & B2B</a><a href="#origen">Perfil de Tueste & Fichas SCA</a></div><div><h3>Pagos Seguros Perú</h3><p>Aceptamos transferencias inmediatas nacionales y pasarelas seguras.</p><div class="payment-pills"><span>YAPE</span><span>PLIN</span><span>BCP</span><span>BBVA</span><span>VISA</span></div></div></div><div class="footer-bottom"><span>© 2025 Agrovicman Specialty Coffee S.A.C. Todos los derechos reservados.</span><div><a href="#contacto">Términos del Servicio</a><a href="#contacto">Políticas de Envío</a><a href="#contacto">Libro de Reclamaciones</a></div></div></div></footer>`;
}

export function renderProducts(products) {
	const grid = document.querySelector('#product-grid');
	if (grid) grid.innerHTML = products.map(renderProduct).join('');
}

export function updateCategoryTabs(activeCategory) {
	document.querySelectorAll('[data-action="category"]').forEach((button) => {
		const active = button.dataset.category === activeCategory;
		button.classList.toggle('is-active', active);
		button.setAttribute('aria-pressed', String(active));
	});
}

export function updateProductCount(count) {
	const counter = document.querySelector('.catalog-count');
	if (counter) counter.textContent = `${count} productos de finca`;
}

export function updateFaq(index, isOpen) {
	const button = document.querySelector(`[data-action="faq"][data-index="${index}"]`);
	const answer = document.querySelector(`#faq-answer-${index}`);
	if (!button || !answer) return;
	button.setAttribute('aria-expanded', String(isOpen));
	answer.hidden = !isOpen;
	button.closest('.faq-item')?.classList.toggle('is-open', isOpen);
}

export function toggleMobileMenu(isOpen) {
	document.querySelector('.main-nav')?.classList.toggle('is-open', isOpen);
	const button = document.querySelector('[data-action="menu"]');
	if (button) {
		button.setAttribute('aria-expanded', String(isOpen));
		button.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
		button.textContent = isOpen ? '×' : '☰';
	}
}
