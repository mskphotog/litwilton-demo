/* =============================================
   LIT WILTON - Language Toggle (EN / ES)
   Baked-in Spanish translations, no external API
   ============================================= */

(function () {

    /* ---------- translation dictionary ----------
       Keys match the data-i18n attribute on HTML elements.
       Each key has an "en" and "es" value.
       -------------------------------------------- */
    var translations = {

        /* ---- Navbar ---- */
        "nav-home": { en: "Home", es: "Inicio" },
        "nav-events": { en: "Events", es: "Eventos" },
        "nav-about": { en: "About", es: "Nosotros" },
        "nav-contact": { en: "Contact", es: "Contacto" },

        /* ---- Index: Hero ---- */
        "hero-subtitle": { en: "2440 Wilton Drive \u2022 Wilton Manors", es: "2440 Wilton Drive \u2022 Wilton Manors" },
        "hero-title": { en: "LIT WILTON", es: "LIT WILTON" },
        "hero-desc": { en: "Your neighborhood bar. Cold drinks, warm vibes, and something going on every night of the week.", es: "Tu bar del barrio. Bebidas fr\u00edas, buena vibra y algo pasando cada noche de la semana." },
        "hero-btn-events": { en: "What\u2019s Happening", es: "Qu\u00e9 Est\u00e1 Pasando" },
        "hero-btn-find": { en: "Find Us", es: "Enc\u00faentranos" },

        /* ---- Index: Hours Strip ---- */
        "hours-label-mon": { en: "MON\u2013THU", es: "LUN\u2013JUE" },
        "hours-val-mon": { en: "4p\u20131a", es: "4p\u20131a" },
        "hours-label-fri": { en: "FRI", es: "VIE" },
        "hours-val-fri": { en: "4p\u20132a", es: "4p\u20132a" },
        "hours-label-sat": { en: "SAT", es: "S\u00c1B" },
        "hours-val-sat": { en: "1p\u20132a", es: "1p\u20132a" },
        "hours-label-sun": { en: "SUN", es: "DOM" },
        "hours-val-sun": { en: "11a\u20131a", es: "11a\u20131a" },

        /* ---- Index: This Week section ---- */
        "thisweek-label": { en: "Don\u2019t Miss", es: "No Te Lo Pierdas" },
        "thisweek-title": { en: "This Week at LIT", es: "Esta Semana en LIT" },
        "thisweek-btn": { en: "See Full Calendar", es: "Ver Calendario Completo" },

        "card-mon-day": { en: "Monday", es: "Lunes" },
        "card-mon-title": { en: "MMM Monday", es: "Lunes MMM" },
        "card-mon-desc": { en: "Start the week right with Monday night drink specials. $5 wells, $4 drafts, and good company.", es: "Empieza la semana con especiales de lunes por la noche. $5 tragos de la casa, $4 cervezas de barril y buena compa\u00f1\u00eda." },
        "card-mon-time": { en: " 4 PM \u2013 1 AM", es: " 4 PM \u2013 1 AM" },

        "card-tue-day": { en: "Tuesday", es: "Martes" },
        "card-tue-title": { en: "Poker Night", es: "Noche de P\u00f3ker" },
        "card-tue-desc": { en: "Free Texas Hold\u2019em tournament every Tuesday. Show your poker face, win prizes, and enjoy great drink deals.", es: "Torneo gratuito de Texas Hold\u2019em cada martes. Pon tu cara de p\u00f3ker, gana premios y disfruta de ofertas de bebidas." },
        "card-tue-time": { en: " 7 PM Start", es: " Inicia 7 PM" },

        "card-wed-day": { en: "Wednesday", es: "Mi\u00e9rcoles" },
        "card-wed-title": { en: "Wheels Up Wednesday", es: "Mi\u00e9rcoles Wheels Up" },
        "card-wed-desc": { en: "Midweek vibes with flight crew specials. Show your crew badge for exclusive deals.", es: "Vibras de mitad de semana con especiales para tripulaciones. Muestra tu credencial para ofertas exclusivas." },
        "card-wed-time": { en: " 4 PM \u2013 1 AM", es: " 4 PM \u2013 1 AM" },

        "card-thu-day": { en: "Thursday", es: "Jueves" },
        "card-thu-title": { en: "Drag Race Watch Party", es: "Fiesta de Drag Race" },
        "card-thu-desc": { en: "Catch every elimination, lip sync, and runway on the big screens. Themed cocktails and commentary all night.", es: "Mira cada eliminaci\u00f3n, lip sync y pasarela en las pantallas grandes. C\u00f3cteles tem\u00e1ticos y comentarios toda la noche." },
        "card-thu-time": { en: " 8 PM Showtime", es: " 8 PM Hora del Show" },

        "card-frisun-day": { en: "Friday & Saturday", es: "Viernes y S\u00e1bado" },
        "card-frisun-title": { en: "Late Night at LIT", es: "Noche en LIT" },
        "card-frisun-desc": { en: "DJs, dancing, and the best energy on the Drive. The weekend doesn\u2019t start until you get LIT.", es: "DJs, baile y la mejor energ\u00eda del Drive. El fin de semana no empieza hasta que te pongas LIT." },
        "card-frisun-time": { en: " Until 2 AM", es: " Hasta las 2 AM" },

        "card-sun-day": { en: "Sunday", es: "Domingo" },
        "card-sun-title": { en: "Liquid Brunch & Bingo", es: "Brunch L\u00edquido y Bingo" },
        "card-sun-desc": { en: "Brunch cocktails starting at 11a, then Bingo with prizes and laughs. The best way to end the weekend.", es: "C\u00f3cteles de brunch desde las 11a, luego Bingo con premios y risas. La mejor forma de terminar el fin de semana." },
        "card-sun-time": { en: " 11 AM \u2013 1 AM", es: " 11 AM \u2013 1 AM" },

        /* ---- Index: Special Events ---- */
        "special-label": { en: "Coming Up", es: "Pr\u00f3ximamente" },
        "special-title": { en: "Special Events", es: "Eventos Especiales" },

        "yappy-badge": { en: "Pet Friendly", es: "Mascotas Bienvenidas" },
        "yappy-title": { en: "Yappy Hour", es: "Yappy Hour" },
        "yappy-desc": { en: "Bring your pup to the patio. Dog-friendly happy hour with treats for them and deals for you. Because your best friend deserves a night out too.", es: "Trae a tu perro al patio. Happy hour amigable con mascotas, con premios para ellos y ofertas para ti. Porque tu mejor amigo tambi\u00e9n merece una salida." },
        "yappy-meta": { en: "Select Saturdays \u2022 Check our calendar", es: "S\u00e1bados selectos \u2022 Consulta nuestro calendario" },

        "bear-badge": { en: "Annual Event", es: "Evento Anual" },
        "bear-title": { en: "Tropical Bear Week", es: "Semana Tropical Bear" },
        "bear-desc": { en: "LIT\u2019s annual bear week celebration. Special guests, themed nights, and the warmest welcome on the Drive. A week of fur, fun, and festivities.", es: "La celebraci\u00f3n anual de bear week de LIT. Invitados especiales, noches tem\u00e1ticas y la bienvenida m\u00e1s c\u00e1lida del Drive. Una semana de diversi\u00f3n y festividades." },
        "bear-meta": { en: "Annual \u2022 Check dates", es: "Anual \u2022 Consulta fechas" },

        /* ---- Index: About teaser ---- */
        "aboutteaser-label": { en: "About LIT", es: "Sobre LIT" },
        "aboutteaser-title": { en: "More Than a Bar", es: "M\u00e1s Que Un Bar" },
        "aboutteaser-p1": { en: "LIT is where the neighborhood comes together. Whether you\u2019re catching a game, singing along to bingo, or just grabbing a cold one on the patio after work, there\u2019s always a seat and a smile waiting for you.", es: "LIT es donde el vecindario se re\u00fane. Ya sea que est\u00e9s viendo un juego, cantando en el bingo o simplemente tomando una cerveza fr\u00eda en el patio despu\u00e9s del trabajo, siempre hay un asiento y una sonrisa esperando por ti." },
        "aboutteaser-p2": { en: "Right in the heart of Wilton Drive, we\u2019re proud to be part of the fabric of Wilton Manors.", es: "En el coraz\u00f3n de Wilton Drive, estamos orgullosos de ser parte de la comunidad de Wilton Manors." },
        "aboutteaser-btn": { en: "Our Story", es: "Nuestra Historia" },

        /* ---- PWA Banner ---- */
        "pwa-title": { en: "Add LIT to your Home Screen", es: "A\u00f1ade LIT a tu pantalla de inicio" },
        "pwa-desc": { en: "Get quick access and event notifications", es: "Acceso r\u00e1pido y notificaciones de eventos" },
        "pwa-install": { en: "Install", es: "Instalar" },
        "pwa-dismiss": { en: "Not Now", es: "Ahora No" },

        /* ---- Footer (shared across all pages) ---- */
        "footer-desc": { en: "Your neighborhood bar on Wilton Drive. Cold drinks, warm vibes, and something going on every night of the week.", es: "Tu bar del barrio en Wilton Drive. Bebidas fr\u00edas, buena vibra y algo pasando cada noche de la semana." },
        "footer-location-heading": { en: "Location", es: "Ubicaci\u00f3n" },
        "footer-directions": { en: "Get Directions \u2192", es: "C\u00f3mo Llegar \u2192" },
        "footer-hours-heading": { en: "Hours", es: "Horario" },
        "footer-hours-mon": { en: "Mon \u2013 Thu", es: "Lun \u2013 Jue" },
        "footer-hours-fri": { en: "Friday", es: "Viernes" },
        "footer-hours-sat": { en: "Saturday", es: "S\u00e1bado" },
        "footer-hours-sun": { en: "Sunday", es: "Domingo" },
        "footer-rights": { en: "\u00a9 2026 LIT Wilton. All rights reserved.", es: "\u00a9 2026 LIT Wilton. Todos los derechos reservados." },

        /* ---- Events Page ---- */
        "events-header-label": { en: "Something Every Night", es: "Algo Cada Noche" },
        "events-header-title": { en: "Events", es: "Eventos" },
        "events-weekly-title": { en: "Weekly Lineup", es: "Programaci\u00f3n Semanal" },
        "events-weekly-sub": { en: "Every week at LIT. Specials and times may vary for holidays.", es: "Cada semana en LIT. Los especiales y horarios pueden variar en d\u00edas festivos." },

        "cal-mon": { en: "Monday", es: "Lunes" },
        "cal-mon-mmm": { en: "MMM Monday", es: "Lunes MMM" },
        "cal-mon-mmm-desc": { en: "$5 wells, $4 drafts", es: "$5 tragos de la casa, $4 cervezas de barril" },
        "cal-mon-games": { en: "Games on the TVs", es: "Juegos en las TVs" },
        "cal-mon-games-desc": { en: "All sports, all screens", es: "Todos los deportes, todas las pantallas" },

        "cal-tue": { en: "Tuesday", es: "Martes" },
        "cal-tue-poker": { en: "Poker Night", es: "Noche de P\u00f3ker" },
        "cal-tue-poker-desc": { en: "Free Texas Hold\u2019em tournament", es: "Torneo gratuito de Texas Hold\u2019em" },
        "cal-tue-taco": { en: "Taco Tuesday Specials", es: "Especiales de Martes de Tacos" },
        "cal-tue-taco-desc": { en: "Drink deals all evening", es: "Ofertas de bebidas toda la noche" },

        "cal-wed": { en: "Wednesday", es: "Mi\u00e9rcoles" },
        "cal-wed-wheels": { en: "Wheels Up Wednesday", es: "Mi\u00e9rcoles Wheels Up" },
        "cal-wed-wheels-desc": { en: "Flight crew badge = special deals", es: "Credencial de tripulaci\u00f3n = ofertas especiales" },

        "cal-thu": { en: "Thursday", es: "Jueves" },
        "cal-thu-drag": { en: "Drag Race Watch Party", es: "Fiesta de Drag Race" },
        "cal-thu-drag-desc": { en: "Big screens, themed drinks", es: "Pantallas grandes, bebidas tem\u00e1ticas" },
        "cal-thu-drag-time": { en: "8 PM (in season)", es: "8 PM (en temporada)" },
        "cal-thu-thirsty": { en: "Thirsty Thursday", es: "Jueves Sediento" },
        "cal-thu-thirsty-desc": { en: "Drink specials all night", es: "Especiales de bebidas toda la noche" },

        "cal-fri": { en: "Friday", es: "Viernes" },
        "cal-fri-happy": { en: "Happy Hour", es: "Happy Hour" },
        "cal-fri-happy-desc": { en: "Kick off the weekend early", es: "Empieza el fin de semana temprano" },
        "cal-fri-late": { en: "Late Night at LIT", es: "Noche en LIT" },
        "cal-fri-late-desc": { en: "DJs and dancing until 2 AM", es: "DJs y baile hasta las 2 AM" },

        "cal-sat": { en: "Saturday", es: "S\u00e1bado" },
        "cal-sat-day": { en: "Day Drinking on the Drive", es: "Tragos de D\u00eda en el Drive" },
        "cal-sat-day-desc": { en: "Doors open at 1 PM", es: "Abrimos a la 1 PM" },
        "cal-sat-night": { en: "Saturday Night LIT", es: "S\u00e1bado de Noche LIT" },
        "cal-sat-night-desc": { en: "The main event. DJs until close.", es: "El evento principal. DJs hasta el cierre." },

        "cal-sun": { en: "Sunday", es: "Domingo" },
        "cal-sun-brunch": { en: "Liquid Brunch", es: "Brunch L\u00edquido" },
        "cal-sun-brunch-desc": { en: "Brunch cocktails, mimosas, Bloody Marys", es: "C\u00f3cteles de brunch, mimosas, Bloody Marys" },
        "cal-sun-bingo": { en: "Bingo!", es: "\u00a1Bingo!" },
        "cal-sun-bingo-desc": { en: "Prizes, laughs, and good times", es: "Premios, risas y buenos momentos" },
        "cal-sun-bball": { en: "Basketball on the Big Screens", es: "Basketball en las Pantallas Grandes" },
        "cal-sun-bball-desc": { en: "Every game, every screen", es: "Cada juego, cada pantalla" },

        "cal-every": { en: "Every Day", es: "Todos los D\u00edas" },
        "cal-every-games": { en: "All the Games", es: "Todos los Juegos" },
        "cal-every-games-desc": { en: "NFL, NBA, MLB, NHL, College, Soccer", es: "NFL, NBA, MLB, NHL, College, F\u00fatbol" },
        "cal-every-patio": { en: "Pet-Friendly Patio", es: "Patio para Mascotas" },
        "cal-every-patio-desc": { en: "Your four-legged friend is always welcome", es: "Tu amigo de cuatro patas siempre es bienvenido" },

        "events-upcoming-label": { en: "Mark Your Calendar", es: "Marca Tu Calendario" },
        "events-upcoming-title": { en: "Upcoming Specials", es: "Pr\u00f3ximos Especiales" },

        "upcoming-yappy-title": { en: "Yappy Hour", es: "Yappy Hour" },
        "upcoming-yappy-desc": { en: "Bring the pups! Dog-friendly patio happy hour with treats and drink specials. 3 PM \u2013 7 PM", es: "\u00a1Trae a los perritos! Happy hour en el patio con premios y especiales de bebidas. 3 PM \u2013 7 PM" },
        "upcoming-cinco-title": { en: "Coronita Cinco de Mayo Weekend", es: "Fin de Semana Coronita Cinco de Mayo" },
        "upcoming-cinco-desc": { en: "The fiesta starts early. Corona and Coronita specials, Mexican-inspired cocktails, and a whole lot of fun.", es: "La fiesta empieza temprano. Especiales de Corona y Coronita, c\u00f3cteles inspirados en M\u00e9xico y mucha diversi\u00f3n." },
        "upcoming-pride-title": { en: "Wilton Manors Stonewall Pride", es: "Wilton Manors Stonewall Pride" },
        "upcoming-pride-desc": { en: "LIT is your home base for Pride weekend. Extended hours, special programming, and all the love.", es: "LIT es tu base para el fin de semana de Pride. Horario extendido, programaci\u00f3n especial y todo el amor." },
        "upcoming-bear-title": { en: "Tropical Bear Week", es: "Semana Tropical Bear" },
        "upcoming-bear-desc": { en: "A full week of special events, themed nights, and the warmest welcome on the Drive. Dates coming soon.", es: "Una semana completa de eventos especiales, noches tem\u00e1ticas y la bienvenida m\u00e1s c\u00e1lida del Drive. Fechas pr\u00f3ximamente." },

        "events-cta-title": { en: "Never Miss a Thing", es: "No Te Pierdas Nada" },
        "events-cta-desc": { en: "Install the LIT app on your phone to get notified about events, specials, and last-minute happenings.", es: "Instala la app de LIT en tu tel\u00e9fono para recibir notificaciones de eventos, especiales y novedades de \u00faltimo momento." },
        "events-cta-btn": { en: "Add LIT to Home Screen", es: "A\u00f1ade LIT a tu Pantalla" },

        /* ---- About Page ---- */
        "about-header-label": { en: "Who We Are", es: "Qui\u00e9nes Somos" },
        "about-header-title": { en: "About LIT", es: "Sobre LIT" },

        "about-p1": { en: "LIT isn\u2019t trying to be everything to everyone. It\u2019s a <span class=\"text-navy\">neighborhood bar</span> in the truest sense. A place where you can walk in any night of the week and feel at home. Where the bartender knows your order, your dog is welcome on the patio, and there\u2019s always something happening without the pretense.", es: "LIT no intenta ser todo para todos. Es un <span class=\"text-navy\">bar de barrio</span> en el sentido m\u00e1s aut\u00e9ntico. Un lugar donde puedes entrar cualquier noche y sentirte en casa. Donde el bartender conoce tu pedido, tu perro es bienvenido en el patio y siempre hay algo pasando sin pretensiones." },
        "about-p2": { en: "Sitting right in the heart of <span class=\"text-navy\">Wilton Drive</span>, LIT is part of the daily rhythm of Wilton Manors. Whether it\u2019s poker on Tuesday, Drag Race on Thursday, bingo on Sunday, or just a cold drink after a long day, this is where the neighborhood comes together.", es: "Ubicado en el coraz\u00f3n de <span class=\"text-navy\">Wilton Drive</span>, LIT es parte del ritmo diario de Wilton Manors. Ya sea p\u00f3ker los martes, Drag Race los jueves, bingo los domingos o simplemente una bebida fr\u00eda despu\u00e9s de un largo d\u00eda, aqu\u00ed es donde el vecindario se re\u00fane." },
        "about-p3": { en: "We\u2019re a <span class=\"text-pink\">sports bar</span>, a <span class=\"text-navy\">hangout</span>, a <span class=\"text-orange\">weekend party</span>, and a <span class=\"text-pink\">Sunday brunch spot</span>. We\u2019re whatever you need us to be, whenever you need it.", es: "Somos un <span class=\"text-pink\">bar de deportes</span>, un <span class=\"text-navy\">lugar para pasar el rato</span>, una <span class=\"text-orange\">fiesta de fin de semana</span> y un <span class=\"text-pink\">lugar de brunch dominical</span>. Somos lo que necesites, cuando lo necesites." },

        "about-what-title": { en: "What Makes LIT, LIT", es: "Lo Que Hace a LIT, LIT" },

        "about-drinks-title": { en: "Strong Drinks, Fair Prices", es: "Tragos Fuertes, Precios Justos" },
        "about-drinks-desc": { en: "No $22 craft cocktails here. Just honest pours and daily specials that won\u2019t drain your wallet.", es: "Nada de c\u00f3cteles artesanales de $22. Solo tragos honestos y especiales diarios que no vaciar\u00e1n tu billetera." },
        "about-screens-title": { en: "Every Game, Every Screen", es: "Cada Juego, Cada Pantalla" },
        "about-screens-desc": { en: "NFL, NBA, MLB, NHL, college, soccer. If there\u2019s a game on, we\u2019ve got it on the big screens.", es: "NFL, NBA, MLB, NHL, college, f\u00fatbol. Si hay un juego, lo tenemos en las pantallas grandes." },
        "about-patio-title": { en: "Dog-Friendly Patio", es: "Patio para Mascotas" },
        "about-patio-desc": { en: "Bring your best friend. Our patio is always open to well-behaved pups (and their humans).", es: "Trae a tu mejor amigo. Nuestro patio siempre est\u00e1 abierto para perritos bien portados (y sus humanos)." },
        "about-games-title": { en: "Games and More Games", es: "Juegos y M\u00e1s Juegos" },
        "about-games-desc": { en: "Poker, bingo, trivia. We believe a bar is better when there\u2019s something to play.", es: "P\u00f3ker, bingo, trivia. Creemos que un bar es mejor cuando hay algo que jugar." },
        "about-energy-title": { en: "Weekend Energy", es: "Energ\u00eda de Fin de Semana" },
        "about-energy-desc": { en: "Friday and Saturday nights bring DJs, dancing, and the kind of energy that keeps you out past your bedtime.", es: "Los viernes y s\u00e1bados por la noche traen DJs, baile y el tipo de energ\u00eda que te mantiene despierto." },
        "about-everyone-title": { en: "For Everyone", es: "Para Todos" },
        "about-everyone-desc": { en: "All are welcome at LIT. Always have been, always will be. Come as you are.", es: "Todos son bienvenidos en LIT. Siempre lo han sido, siempre lo ser\u00e1n. Ven como eres." },

        "about-cta-title": { en: "Come Get LIT", es: "Ven a LIT" },
        "about-cta-desc": { en: "We\u2019re at 2440 Wilton Drive, right in the heart of it all.", es: "Estamos en 2440 Wilton Drive, justo en el coraz\u00f3n de todo." },
        "about-btn-events": { en: "See What\u2019s On", es: "Ver Eventos" },
        "about-btn-contact": { en: "Get in Touch", es: "Cont\u00e1ctanos" },

        /* ---- Contact Page ---- */
        "contact-header-label": { en: "Come See Us", es: "Ven a Vernos" },
        "contact-header-title": { en: "Contact", es: "Contacto" },
        "contact-find-title": { en: "Find Us", es: "Enc\u00faentranos" },
        "contact-address-label": { en: "Address", es: "Direcci\u00f3n" },
        "contact-maps-link": { en: "Open in Google Maps \u2192", es: "Abrir en Google Maps \u2192" },
        "contact-hours-label": { en: "Hours", es: "Horario" },
        "contact-email-label": { en: "Email", es: "Correo" },
        "contact-follow-label": { en: "Follow Us", es: "S\u00edguenos" },
        "contact-msg-title": { en: "Send a Message", es: "Env\u00eda un Mensaje" },
        "contact-msg-desc": { en: "Got a question, want to book a private event, or just want to say hey? Drop us a line.", es: "\u00bfTienes una pregunta, quieres reservar un evento privado o simplemente saludar? Escr\u00edbenos." },
        "contact-name-label": { en: "Name", es: "Nombre" },
        "contact-name-placeholder": { en: "Your name", es: "Tu nombre" },
        "contact-email-field-label": { en: "Email", es: "Correo" },
        "contact-email-placeholder": { en: "you@email.com", es: "tu@correo.com" },
        "contact-subject-label": { en: "Subject", es: "Asunto" },
        "contact-subject-default": { en: "Select a topic", es: "Selecciona un tema" },
        "contact-subject-general": { en: "General Inquiry", es: "Consulta General" },
        "contact-subject-events": { en: "Private Events", es: "Eventos Privados" },
        "contact-subject-feedback": { en: "Feedback", es: "Comentarios" },
        "contact-subject-other": { en: "Other", es: "Otro" },
        "contact-message-label": { en: "Message", es: "Mensaje" },
        "contact-message-placeholder": { en: "What\u2019s on your mind?", es: "\u00bfQu\u00e9 tienes en mente?" },
        "contact-send-btn": { en: "Send Message", es: "Enviar Mensaje" },

        /* ---- Contact: Hours in details ---- */
        "contact-hours-mon": { en: "Mon \u2013 Thu", es: "Lun \u2013 Jue" },
        "contact-hours-fri": { en: "Friday", es: "Viernes" },
        "contact-hours-sat": { en: "Saturday", es: "S\u00e1bado" },
        "contact-hours-sun": { en: "Sunday", es: "Domingo" }
    };

    /* ---------- current language ---------- */
    var currentLang = sessionStorage.getItem("litLang") || "en";

    /* ---------- apply translations ---------- */
    function applyLang(lang) {
        currentLang = lang;
        sessionStorage.setItem("litLang", lang);

        /* Update the html lang attribute */
        document.documentElement.lang = lang;

        /* Update toggle button text */
        var toggleBtn = document.getElementById("lang-toggle");
        if (toggleBtn) {
            toggleBtn.textContent = lang === "en" ? "ES" : "EN";
            toggleBtn.setAttribute("aria-label", lang === "en" ? "Cambiar a espa\u00f1ol" : "Switch to English");
        }

        /* Swap all tagged elements */
        var elements = document.querySelectorAll("[data-i18n]");
        for (var i = 0; i < elements.length; i++) {
            var el = elements[i];
            var key = el.getAttribute("data-i18n");
            var entry = translations[key];
            if (!entry) continue;

            var text = entry[lang] || entry["en"];

            /* Handle different element types */
            if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                /* For placeholder text */
                if (el.hasAttribute("placeholder")) {
                    el.placeholder = text;
                }
            } else if (el.tagName === "OPTION") {
                el.textContent = text;
            } else {
                /* For normal elements, use innerHTML to preserve <span> tags */
                el.innerHTML = text;
            }
        }
    }

    /* ---------- toggle handler ---------- */
    function toggleLang() {
        applyLang(currentLang === "en" ? "es" : "en");
    }

    /* ---------- initialize on DOM ready ---------- */
    document.addEventListener("DOMContentLoaded", function () {
        /* Attach click handler to toggle button */
        var toggleBtn = document.getElementById("lang-toggle");
        if (toggleBtn) {
            toggleBtn.addEventListener("click", toggleLang);
        }
        /* Also attach to mobile toggle if present */
        var mobileToggle = document.getElementById("lang-toggle-mobile");
        if (mobileToggle) {
            mobileToggle.addEventListener("click", toggleLang);
        }

        /* Apply saved language preference */
        applyLang(currentLang);
    });

})();
