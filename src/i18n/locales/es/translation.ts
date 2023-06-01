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
		"Soy un apasionado de la tecnología y la programación. Tengo experiencia en el desarrollo de sistemas embebidos, que actúan como puente entre el software y el hardware, así como en el desarrollo web utilizando el ecosistema de JavaScript.",
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
	<0>
	Soy un joven colombiano graduado en Ingeniería Electrónica de la Universidad
	del Magdalena y apasionado por el desarrollo de software.	Actualmente, estoy
	cursando un tecnólogo en el área de Análisis y Desarrollo de Software en el
	Servicio Nacional de Aprendizaje, SENA.
	</0>
	<1>
	Mi primer acercamiento a la programación y al desarrollo de software
	ocurrió durante mi primer semestre de pregrado, donde tuve la
	oportunidad de familiarizarme con el lenguaje de programación C y el
	microcontrolador Arduino. Aunque fue un inicio desafiante, descubrí
	una pasión genuina por estas áreas.
	</1>
	<2>
	A lo largo de los últimos años, he invertido innumerables horas en
	estudiar y practicar diversos lenguajes de programación, frameworks y
	tecnologías web. Esta dedicación me ha permitido adquirir
	conocimientos sólidos en desarrollo web y sistemas embebidos.
	</2>
	<3>
	Si estás en busca de un profesional comprometido, autodidacta y
	entusiasta que pueda aportar una perspectiva única y habilidades
	técnicas sólidas a tu equipo, ¡me encantaría tener la oportunidad de
	discutir cómo puedo contribuir a tu proyecto!
	</3>`,
	"about.skills.title": "Habilidades",
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
	...FOOTER,
};
