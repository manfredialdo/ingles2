# ingles2
para mostrar en la prueba de ingles 2

## URL     https://catalogo.gekkomassage.workers.dev/

## url   https://ingles2.aldodev-tupad.workers.dev/

---

## 🎨 Vista Previa Visual del Proyecto (Gekko Bienestar)

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '18px', 'fontFamily': 'sans-serif'}}}%%
flowchart TB

    subgraph ESTRUCTURA ["1. ESTRUCTURA Y NAVEGACIÓN DEL SITIO"]
        direction TB
        
        HEAD["<b>HTML HEAD</b><br>SEO • Fonts • CSS"]
        
        subgraph SECCIONES ["Secciones Principales de la Página"]
            direction TB
            ASIDE["<b>1. BARRA SOCIAL</b><br>Redes flotantes"]
            NAV["<b>2. NAVBAR</b><br>Menú principal"]
            HERO["<b>3. INICIO (HERO)</b><br>Portada principal"]
            SERVICIOS["<b>4. SERVICIOS</b><br>Catálogo de terapias"]
            FAQ["<b>5. PREGUNTAS (FAQ)</b><br>Acordeón de dudas"]
            FOOTER["<b>6. FOOTER</b><br>Pie de página"]
        end

        MODAL["<b>MODAL DE RESERVAS</b><br>Ventana flotante HTML5"]
        CALENDLY["<b>CALENDLY OFICIAL</b><br>Agenda de citas"]

        HEAD --> SECCIONES
        NAV -- "Click 'RESERVAR'" --> MODAL
        SERVICIOS -- "Click 'Reservar Experiencia'" --> MODAL
        MODAL -- "Redirige" --> CALENDLY
    end

    subgraph CATALAGOS ["2. CATÁLOGO DE 8 TERAPIAS"]
        direction TB
        S1["<b>Masajes a 4 Manos</b> | 60 min | $80.000"]
        S2["<b>Cráneo Facial</b> | 60 min | $40.000"]
        S3["<b>Descontracturante</b> | 60 min | $40.000"]
        S4["<b>Drenaje Linfático</b> | 60 min | $40.000"]
        S5["<b>Dúo (2 Personas)</b> | 60 min | $80.000"]
        S6["<b>Maderoterapia</b> | 60 min | $40.000"]
        S7["<b>Combo 4x3</b> | 240 min | $120.000"]
        S8["<b>Piedras Calientes</b> | 20 min | $15.000"]
    end

    subgraph ESTILOS_CSS ["3. MAPA DE ESTILOS CSS (style.css)"]
        direction TB
        CSS1["<b>1. :root & Variables</b> — Colores y fuentes base"]
        CSS2["<b>2. Reset & Bases</b> — Scroll suave y márgenes"]
        CSS3["<b>3. Barra Social</b> — Botones flotantes"]
        CSS4["<b>4. Navbar</b> — Menú adaptativo sin JS"]
        CSS5["<b>5. Hero</b> — Portada y títulos"]
        CSS6["<b>6. Servicios</b> — Tarjetas y precios"]
        CSS7["<b>7. Modal Native</b> — Ventana difuminada"]
        CSS8["<b>8. Animaciones</b> — Efecto pulse"]
        CSS9["<b>9. Responsive</b> — Adaptación a celulares"]
        CSS10["<b>10. FAQ</b> — Acordeón desplegable"]
        CSS11["<b>11. Footer</b> — Pie de página"]
    end

    ESTRUCTURA --> CATALAGOS
    CATALAGOS --> ESTILOS_CSS

    %% --- ESTILOS DE ALTO CONTRASTE Y LECTURA FÁCIL --- %%
    classDef grandeHead fill:#0f172a,stroke:#38bdf8,stroke-width:3px,color:#ffffff;
    classDef grandeSeccion fill:#1e293b,stroke:#94a3b8,stroke-width:2px,color:#ffffff;
    classDef grandeBoton fill:#854d0e,stroke:#facc15,stroke-width:3px,color:#fef08a;
    classDef grandeServicio fill:#431407,stroke:#fb923c,stroke-width:2px,color:#ffedd5;
    classDef grandeCSS fill:#064e3b,stroke:#34d399,stroke-width:2px,color:#ecfdf5;

    class HEAD grandeHead;
    class ASIDE,NAV,HERO,SERVICIOS,FAQ,FOOTER grandeSeccion;
    class MODAL,CALENDLY grandeBoton;
    class S1,S2,S3,S4,S5,S6,S7,S8 grandeServicio;
    class CSS1,CSS2,CSS3,CSS4,CSS5,CSS6,CSS7,CSS8,CSS9,CSS10,CSS11 grandeCSS;
