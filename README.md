# ingles2
para mostrar en la prueba de ingles 2

## URL     https://catalogo.gekkomassage.workers.dev/

---

## 🎨 Vista Previa Visual del Proyecto

```mermaid
flowchart TB

    subgraph MAPA_SITIO ["1. ESTRUCTURA Y FLUJO GENERAL DEL SITIO"]
        direction TB
        HTML["<b>HTML Document</b> (lang=es)"] --> HEAD["<b>HEAD</b>"]
        HTML --> BODY["<b>BODY</b>"]

        subgraph HEAD_DETAILS ["Metadatos & Assets"]
            direction TB
            META["Metadatos SEO & OG"]
            FONTS["Google Fonts & FontAwesome"]
            CSS_REF["style.css (Estilos Unificados)"]
        end
        HEAD --> HEAD_DETAILS

        BODY --> ASIDE["Barra Social Flotante (.social-float)"]
        BODY --> NAV["Navbar Responsive (.navbar)"]
        BODY --> HERO["Hero Section (#inicio)"]
        BODY --> SERVICIOS["Sección Servicios (#servicios)"]
        BODY --> FAQ["Acordeón FAQ (#faq)"]
        BODY --> FOOTER["Footer & Redes (#contacto)"]
        BODY --> MODAL["Modal Nativo HTML5 (#reservaModal)"]

        subgraph ListaServicios ["Catálogo de Terapias"]
            direction TB
            S1["Masajes a 4 Manos - $80.000 | 60 MIN"]
            S2["Cráneo Facial - $40.000 | 60 MIN"]
            S3["Descontracturante - $40.000 | 60 MIN"]
            S4["Drenaje Linfático - $40.000 | 60 MIN"]
            S5["Dúo (2 Personas) - $80.000 | 60 MIN"]
            S6["Maderoterapia - $40.000 | 60 MIN"]
            S7["Combo 4x3 - $120.000 | 240 MIN"]
            S8["Piedras Calientes - $15.000 | 20 MIN"]
        end
        SERVICIOS --> ListaServicios

        NAV -- "Click RESERVAR" --> MODAL
        ListaServicios -- "Click Reservar Experiencia" --> MODAL
        MODAL -- "Redirige a" --> CALENDLY["<b>Calendly Agenda Oficial</b>"]
    end

    MAPA_SITIO --> MAPA_CSS

    subgraph MAPA_CSS ["2. MAPA CONCEPTUAL DEL CSS CONSOLIDADO"]
        direction TB
        CSS["GEKKO BIENESTAR - CSS CONSOLIDADO"]
        CSS --> Root["1. :root (Variables Globales)<br>Define colores, fuentes y tonos base"]
        CSS --> Reset["2. Reset y Bases<br>Limpia márgenes, padding y suaviza el scroll"]
        CSS --> Social["3. Barra Social Flotante<br>Botones fijos de redes a la derecha"]
        CSS --> Navbar["4. Navbar & Menú Responsive<br>Barra superior fija, logo y menú hamburguesa sin JS"]
        CSS --> Hero["5. Sección Hero<br>Imagen de portada principal con degradado y título"]
        CSS --> Servicios["6. Sección Servicios<br>Tarjetas editoriales con efectos hover y precios"]
        CSS --> Modal["7. Modal Nativo &lt;dialog&gt;<br>Ventana flotante de reservas con fondo difuminado"]
        CSS --> Animaciones["8. Animaciones<br>Efectos de pulso (naturePulse) para botones"]
        CSS --> Responsive["9. Media Queries (Responsive)<br>Adapta las tarjetas, menús y redes para celulares y tablets"]
        CSS --> FAQ["10. Sección FAQ<br>Acordeón desplegable de preguntas frecuentes"]
        CSS --> Footer["11. Footer<br>Pie de página con enlaces sociales y copyright"]
    end

    classDef default fill:#ffffff,stroke:#333333,stroke-width:2px,color:#111111;
    classDef root fill:#e2e8f0,stroke:#0f172a,stroke-width:3px,color:#0f172a;
    classDef mainNode fill:#f1f5f9,stroke:#1e293b,stroke-width:2px,color:#0f172a;
    classDef serviceCard fill:#fff7ed,stroke:#ea580c,stroke-width:2px,color:#7c2d12;
    classDef actionNode fill:#fde047,stroke:#ca8a04,stroke-width:3px,color:#713f12;

    class HTML,HEAD,BODY root;
    class ASIDE,NAV,HERO,SERVICIOS,FAQ,FOOTER,MODAL mainNode;
    class S1,S2,S3,S4,S5,S6,S7,S8 serviceCard;
    class CALENDLY actionNode;

    style CSS fill:#1e352f,stroke:#b49682,stroke-width:2px,color:#fff
    style Root fill:#162622,stroke:#b49682,color:#fff
    style Reset fill:#162622,stroke:#b49682,color:#fff
    style Social fill:#162622,stroke:#b49682,color:#fff
    style Navbar fill:#162622,stroke:#b49682,color:#fff
    style Hero fill:#162622,stroke:#b49682,color:#fff
    style Servicios fill:#162622,stroke:#b49682,color:#fff
    style Modal fill:#162622,stroke:#b49682,color:#fff
    style Animaciones fill:#162622,stroke:#b49682,color:#fff
    style Responsive fill:#162622,stroke:#b49682,color:#fff
    style FAQ fill:#162622,stroke:#b49682,color:#fff
    style Footer fill:#162622,stroke:#b49682,color:#fff