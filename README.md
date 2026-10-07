
# ingles2
para mostrar en la prueba de ingles 2

```mermaid
flowchart LR
    HTML["html (lang=es)"] --> HEAD["head"]
    HTML --> BODY["body"]

    %% Contenido de head
    HEAD --> H_META["Metadatos (SEO & OpenGraph)"]
    HEAD --> H_LINKS["Recursos & Estilos CSS"]

    %% Contenido de body
    BODY --> ASIDE["Barra Social Flotante"]
    BODY --> NAV["Navbar & Menú"]
    BODY --> HEADER["Hero Section (Inicio)"]
    
    %% Sección Servicios Agrupada
    BODY --> SEV_SEC["Sección Servicios"]
    subgraph Servicios [Lista de Masajes y Terapias]
        direction TB
        S1["Masajes a cuatro manos"]
        S2["Masaje cráneo facial"]
        S3["Descontracturante"]
        S4["Drenaje linfático"]
        S5["Dúo & Madera"]
        S6["4x3 & Piedras calientes"]
    end
    SEV_SEC --> Servicios

    BODY --> FAQ_SEC["Sección FAQ (Preguntas)"]
    BODY --> FOOTER["Footer & Contacto"]
    BODY --> DIALOG["Modal de Reservas"]

    %% Estilos limpios
    classDef main fill:#e1f5fe,stroke:#01579b,stroke-width:2px;
    class HTML,HEAD,BODY,NAV,HEADER,SEV_SEC,FAQ_SEC,FOOTER,DIALOG main;
