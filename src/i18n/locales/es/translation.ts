const HEAD = {
	"site.title": "Portafolio",
	"site.description": "Sitio personal de Eudes Serpa",
};

const SKIP_LINK = {
	"skip.title": "Saltar al contenido",
};

const NAVIGATION = {
	"nav.home": "Inicio",
	"nav.about": "Sobre mí",
	"nav.projects": "Proyectos",
	"nav.contact": "Contáctame",
};

const LANGUAGE_PICKER = {
	"lang.picker": "Seleccionar lenguaje",
};

const HERO = {
	"hero.introduction": "¡Hola!, soy",
	"hero.professions.ing": "Ingeniero electrónico",
	"hero.professions.dev": "Desarrollador web",
	"hero.description":
		"Especializado en el desarrollo web y de sistemas embebidos, enfocado en brindar una experiencia de usuario fluida y de calidad",
	"hero.cta.contact": "Contáctame",
	"hero.cta.see-cv": "Ver CV",
	"hero.process.title": "Mi proceso de aprendizaje",
	"hero.process.study": "Estudiar",
	"hero.process.practice": "Pracicar",
	"hero.process.build": "Construir",
};

const ABOUT = {
	"about.title": "Sobre mí",

	"about.whoiam.title": "¿Quién soy?",
	"about.whoiam.description": `
	Joven colombiano graduado en Ingeniería Electrónica de la Universidad
	del Magdalena y apasionado por el desarrollo de software.	Actualmente,
	cursando un tecnólogo en el área de Análisis y Desarrollo de Software en el
	Servicio Nacional de Aprendizaje, SENA.
	---
	Mi primer acercamiento a la programación y al desarrollo de software
	ocurrió durante mi primer semestre de pregrado, donde tuve la
	oportunidad de familiarizarme con el lenguaje de programación C y el
	microcontrolador Arduino. Aunque fue un inicio desafiante, descubrí
	una pasión genuina por estas áreas.
	---
	A lo largo de los últimos años, he invertido innumerables horas en
	estudiar y practicar diversos lenguajes de programación, frameworks y
	tecnologías web. Esta dedicación me ha permitido adquirir
	conocimientos sólidos en desarrollo de software.
	---
	Si estás en busca de un profesional comprometido, autodidacta y
	entusiasta que pueda aportar una perspectiva única y habilidades
	técnicas sólidas a tu equipo, ¡me encantaría tener la oportunidad de
	discutir cómo puedo contribuir a tu proyecto!
	`,

	"about.skills.title": "Habilidades",

	"about.service.title": "¿Qué puedo hacer?",
	"about.service.web.title": "Web",
	"about.service.web.text":
		"Desarrollo de sitios y aplicaciones web personalizados y adaptables con una experiencia de usuario fluida y un gran énfasis en la accesibilidad y rendimiento.",
	"about.service.desktop.title": "Escritorio",
	"about.service.desktop.text":
		"Creación de aplicaciones de escritorio potentes, multiplataforma y fáciles de usar, adaptadas a las necesidades empresariales específicas.",
	"about.service.design.title": "Diseño web",
	"about.service.design.text":
		"Creación de interfaces de usuario visualmente atractivas y centradas en el usuario, empleando técnicas y principios de diseño modernos para crear experiencias digitales intuitivas y atractivas.",
	"about.service.embedded.title": "Sistemas embebidos",
	"about.service.embedded.text":
		"Diseño y desarrollo de sistemas embebidos especializados para crear soluciones eficientes y robustas.",
	"about.service.db.title": "Bases de datos",
	"about.service.db.text":
		"Gestión y administración eficiente y segura de bases de datos relacionales y no relacionales.",

	"about.education.title": "Educación",
	"about.education.unimag": "Universidad del Magdalena",
	"about.education.unab": "Universidad Autónoma de Bucaramanga",
	"about.education.sena": "Servicio Nacional de Aprendizaje",
	"about.education.unimag.career": "Ingeniería electrónica",
	"about.education.unab.career": "Desarrollo web",
	"about.education.sena.career": "Análisis y desarrollo de software",
	"about.education.platzi.career": "Desarrollo web, diseño e inglés",
	"about.education.type.professional": "Profesional",
	"about.education.type.technical": "Técnica",
	"about.education.type.technological": "Tecnológica",
	"about.education.type.self-taught": "Autodidacta",
	"about.education.degree.technician": "Técnico",
	"about.education.degree.technologist": "Tecnólogo",
	"about.education.degree.engineer": "Ingeniero",
	"about.education.degree.no": "Sin titulación",

	"about.certifications.title": "Certificaciones",
	"about.certifications.see-all-link": "Ver todas en LinkedIn",
	"about.certifications.btn.see-more": "Ver más",
	"about.certifications.btn.see-less": "Ver menos",
};

const CERTIFICATIONS = {
	"certifications.platzi.db-career": "Carrera de bases de datos",

	"certifications.unab.final":
		"Técnico de programación con énfasis en aplicaciones web",
	"certifications.unab.ciclo4": "Desarrollo de aplicaciones web",
	"certifications.unab.ciclo3": "Desarrollo de software",
	"certifications.unab.ciclo2": "Programación básica",
};

const FOOTER = {
	"footer.credits.text": "Diseñado y desarrollado con",
	"footer.credits.aux": "amor",
	"footer.credits.by": "por",
};

const I11N = {
	"i11n.theme.dark.label": "Cambiar a modo oscuro",
	"i11n.theme.light.label": "Cambiar a modo claro",

	"i11n.menu.expanded.label": "Cerrar menú",
	"i11n.menu.no.expanded.label": "Abrir menú",

	"i11n.logo.label": "Ir al inicio",

	"i11n.hero.btn-slide.label.start": "Iniciar presentación automática",
	"i11n.hero.btn-slide.label.pause": "Detener presentación automática",

	"i11n.social.btn.label": "Ir a la cuenta de <social-media>",
};

export const esTranslations = {
	...HEAD,
	...NAVIGATION,
	...LANGUAGE_PICKER,
	...SKIP_LINK,
	...I11N,
	...HERO,
	...ABOUT,
	...CERTIFICATIONS,
	...FOOTER,
};
