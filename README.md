
# ingles2
para mostrar en la prueba de ingles 2

## URL     https://catalogo.gekkomassage.workers.dev/


```mermaid
flowchart LR
    HTML["html (lang=es)"] --> HEAD["head"]
    HTML --> BODY["body"]

    %% Contenido de head
    HEAD --> META["Metadatos SEO & OpenGraph"]
    HEAD --> LINKS["Estilos y Librerías (FontAwesome, Google Fonts)"]

    %% Contenido de body
    BODY --> ASIDE["Barra Social Flotante"]
    BODY --> NAV["Navbar (Menú de Navegación)"]
    BODY --> HERO["Hero / Carrusel Principal"]

    %% Sección Servicios agrupada
    BODY --> SERVICIOS["Sección Servicios (#servicios)"]
    subgraph ListaServicios [Catálogo de Terapias]
        direction TB
        S1["Masajes a cuatro manos ($80k)"]
        S2["Masaje cráneo facial ($40k)"]
        S3["Descontracturante ($40k)"]
        S4["Drenaje linfático ($40k)"]
        S5["Dúo ($80k)"]
        S6["Madera ($40k)"]
        S7["Promoción 4x3 ($120k)"]
    end
    SERVICIOS --> ListaServicios

    BODY --> FOOTER["Footer & Contacto"]
    BODY --> MODAL["Modal Nativo de Reservas (Calendly)"]

    %% Estilos de nodos principales
    classDef main fill:#e1f5fe,stroke:#01579b,stroke-width:2px;
    class HTML,HEAD,BODY,ASIDE,NAV,HERO,SERVICIOS,FOOTER,MODAL main;
