# ingles2
para mostrar en la prueba de ingles 2

```mermaid
flowchart TD
    HTML["html (lang=es)"] --> HEAD["head"]
    HTML --> BODY["body"]

    %% Contenido de head
    HEAD --> META1["meta: charset & viewport"]
    HEAD --> TITLE["title: GEKKO | El Calafate"]
    HEAD --> META_SEO["meta: description, keywords, robots"]
    HEAD --> META_OG["meta: OpenGraph (social)"]
    HEAD --> LINKS["links: Favicon, Bootstrap, Fonts, FontAwesome, style.css"]
    HEAD --> STYLE["style: Variables y CSS personalizado"]

    %% Contenido de body
    BODY --> ASIDE["aside.social-float (WhatsApp, Instagram, Facebook)"]
    
    %% NAVBAR
    BODY --> NAV["nav.navbar"]
    NAV --> BRAND["a.navbar-brand (GEKKO)"]
    NAV --> TOGGLE["input & label (Menú responsivo)"]
    NAV --> MENU["ul.nav-menu"]
    MENU --> LI1["li: Inicio"]
    MENU --> LI2["li: Servicios"]
    MENU --> LI3["li: Preguntas"]
    MENU --> LI4["li: Botón RESERVAR"]

    %% HERO
    BODY --> HEADER["header#inicio (Hero Section)"]
    HEADER --> HERO_BG["div.hero-bg (Imagen + Overlay)"]
    HEADER --> HERO_CAPTION["div.hero-caption (Títulos)"]

    %% SECCIÓN SERVICIOS
    BODY --> SEV_SEC["section#servicios"]
    SEV_SEC --> SEV_HEAD["div.section-header"]
    
    %% Servicios individuales
    SEV_SEC --> ART1["article: Masajes a cuatro manos"]
    SEV_SEC --> ART2["article: Masaje cráneo facial"]
    SEV_SEC --> ART3["article: Descontracturante"]
    SEV_SEC --> ART4["article: Drenaje linfático"]
    SEV_SEC --> ART5["article: Dúo"]
    SEV_SEC --> ART6["article: Madera"]
    SEV_SEC --> ART7["article: 4x3"]
    SEV_SEC --> ART8["article: Piedras calientes"]

    %% SECCIÓN FAQ
    BODY --> FAQ_SEC["section#faq"]
    FAQ_SEC --> FAQ_CONT["div.faq-container"]
    FAQ_CONT --> ACCORDION["div.accordion-pure"]
    ACCORDION --> DETAILS1["details: ¿Cómo reservo mi turno?"]
    ACCORDION --> DETAILS2["details: ¿Dónde están ubicados?"]

    %% FOOTER Y MODAL
    BODY --> FOOTER["footer#contacto"]
    FOOTER --> FOOTER_CONT["div.container text-center"]
    
    BODY --> DIALOG["dialog#reservaModal"]
    DIALOG --> MODAL_CONT["div.modal-content-native"]

    %% Estilos opcionales
    classDef tag fill:#e1f5fe,stroke:#01579b,stroke-width:2px;
    class HTML,HEAD,BODY,NAV,HEADER,SEV_SEC,FAQ_SEC,FOOTER,DIALOG tag;
