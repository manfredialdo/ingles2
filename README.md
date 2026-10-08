
# ingles2
para mostrar en la prueba de ingles 2

## URL     https://catalogo.gekkomassage.workers.dev/


```mermaid
flowchart LR
    HTML["html (lang=es)"] --> HEAD["head"]
    HTML --> BODY["body"]

    %% Contenido de Head
    subgraph HEAD_DETAILS ["Configuración & Metadatos"]
        direction TB
        META["Metadatos SEO & OpenGraph<br><i>(OG, Keywords, Robots)</i>"]
        FONTS["Fuentes & Iconos<br><i>(Montserrat, Playfair, FontAwesome)</i>"]
        CSS["Hoja de Estilos<br><i>(static/css/style.css)</i>"]
    end
    HEAD --> HEAD_DETAILS

    %% Elementos de Body
    BODY --> ASIDE["Barra Social Flotante<br><code>.social-float</code>"]
    BODY --> NAV["Navbar con Checkbox Hack<br><code>.navbar</code>"]
    BODY --> HERO["Hero Section<br><code>#inicio .hero-gekko</code>"]
    BODY --> SERVICIOS["Sección Servicios<br><code>#servicios</code>"]
    BODY --> FAQ["Sección FAQ<br><code>#faq .accordion-pure</code>"]
    BODY --> FOOTER["Footer<br><code>#contacto .footer</code>"]
    BODY --> MODAL["Modal Nativo HTML5<br><code>#reservaModal</code>"]

    %% Detalle de Servicios
    subgraph ListaServicios ["Catálogo de Servicios & Precios"]
        direction TB
        S1["4 Manos - $80.000<br><i>60 MIN</i>"]
        S2["Cráneo Facial - $40.000<br><i>60 MIN</i>"]
        S3["Descontracturante - $40.000<br><i>60 MIN</i>"]
        S4["Drenaje Linfático - $40.000<br><i>60 MIN</i>"]
        S5["Dúo - $80.000<br><i>60 MIN</i>"]
        S6["Maderoterapia - $40.000<br><i>60 MIN</i>"]
        S7["Combo 4x3 - $120.000<br><i>240 MIN</i>"]
        S8["Piedras Calientes - $15.000<br><i>20 MIN</i>"]
    end
    SERVICIOS --> ListaServicios

    %% Interacciones
    NAV -- "Click Reserva" --> MODAL
    ListaServicios -- "Botón Reservar" --> MODAL
    MODAL -- "Redirección" --> CALENDLY["Calendly (Agenda Oficial)"]

    %% Estilos Mermaid personalizados con los colores de GEKKO
    classDef root fill:#162622,stroke:#b49682,stroke-width:2px,color:#ffffff;
    classDef main fill:#1e352f,stroke:#b49682,stroke-width:2px,color:#ffffff;
    classDef card fill:#253e37,stroke:#b49682,stroke-width:1px,color:#ffffff;
    classDef action fill:#b49682,stroke:#162622,stroke-width:2px,color:#ffffff;

    class HTML,HEAD,BODY root;
    class ASIDE,NAV,HERO,SERVICIOS,FAQ,FOOTER,MODAL main;
    class S1,S2,S3,S4,S5,S6,S7,S8 card;
    class CALENDLY action;
