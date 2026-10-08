
# ingles2
para mostrar en la prueba de ingles 2

## URL     https://catalogo.gekkomassage.workers.dev/


```mermaid
flowchart LR
    HTML["<b>HTML Document</b><br>(lang=es)"] --> HEAD["<b>HEAD</b>"]
    HTML --> BODY["<b>BODY</b>"]

    %% Contenido de Head
    subgraph HEAD_DETAILS ["Metadatos & Assets"]
        direction TB
        META["Metadatos SEO & OG"]
        FONTS["Google Fonts & FontAwesome"]
        CSS["style.css (Estilos Unificados)"]
    end
    HEAD --> HEAD_DETAILS

    %% Elementos Principales de Body
    BODY --> ASIDE["Barra Social Flotante<br><code>.social-float</code>"]
    BODY --> NAV["Navbar Responsive<br><code>.navbar</code>"]
    BODY --> HERO["Hero Section<br><code>#inicio</code>"]
    BODY --> SERVICIOS["Sección Servicios<br><code>#servicios</code>"]
    BODY --> FAQ["Acordeón FAQ<br><code>#faq</code>"]
    BODY --> FOOTER["Footer & Redes<br><code>#contacto</code>"]
    BODY --> MODAL["Modal Nativo HTML5<br><code>#reservaModal</code>"]

    %% Subgraph de Servicios
    subgraph ListaServicios ["Catálogo de Terapias"]
        direction TB
        S1["Masajes a 4 Manos<br><b>$80.000</b> | 60 MIN"]
        S2["Cráneo Facial<br><b>$40.000</b> | 60 MIN"]
        S3["Descontracturante<br><b>$40.000</b> | 60 MIN"]
        S4["Drenaje Linfático<br><b>$40.000</b> | 60 MIN"]
        S5["Dúo (2 Personas)<br><b>$80.000</b> | 60 MIN"]
        S6["Maderoterapia<br><b>$40.000</b> | 60 MIN"]
        S7["Combo 4x3<br><b>$120.000</b> | 240 MIN"]
        S8["Piedras Calientes<br><b>$15.000</b> | 20 MIN"]
    end
    SERVICIOS --> ListaServicios

    %% Interacciones de Reserva
    NAV -- "Click 'RESERVAR'" --> MODAL
    ListaServicios -- "Click 'Reservar Experiencia'" --> MODAL
    MODAL -- "Redirige a" --> CALENDLY["<b>Calendly Agenda Oficial</b>"]

    %% Estilos de Alto Contraste
    classDef default fill:#ffffff,stroke:#333333,stroke-width:2px,color:#111111;
    classDef root fill:#e2e8f0,stroke:#0f172a,stroke-width:3px,color:#0f172a;
    classDef mainNode fill:#f1f5f9,stroke:#1e293b,stroke-width:2px,color:#0f172a;
    classDef serviceCard fill:#fff7ed,stroke:#ea580c,stroke-width:2px,color:#7c2d12;
    classDef actionNode fill:#fde047,stroke:#ca8a04,stroke-width:3px,color:#713f12;

    class HTML,HEAD,BODY root;
    class ASIDE,NAV,HERO,SERVICIOS,FAQ,FOOTER,MODAL mainNode;
    class S1,S2,S3,S4,S5,S6,S7,S8 serviceCard;
    class CALENDLY actionNode;
