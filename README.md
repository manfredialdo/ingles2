## https://ingles2.aldodev-tupad.workers.dev

```mermaid
flowchart LR
    classDef default fill:#1e293b,stroke:#94a3b8,stroke-width:2px,color:#ffffff,font-size:15px;
    classDef grandeHead fill:#0f172a,stroke:#38bdf8,stroke-width:3px,color:#ffffff,font-size:16px;
    classDef grandeBoton fill:#854d0e,stroke:#facc15,stroke-width:3px,color:#fef08a,font-size:15px;
    classDef grandeCSS fill:#064e3b,stroke:#34d399,stroke-width:2px,color:#ecfdf5,font-size:14px;

    subgraph DEPLOYMENT["🌐 1. Deployment & Live Links"]
        GH["<b>GitHub Repository</b><br/>github.com/manfredialdo/ingles2"]
        CF["<b>Cloudflare Workers Live App</b><br/>ingles2.aldodev-tupad.workers.dev"]
        UI_LINKS["<b>Interface Elements</b><br/><i>Reservation Buttons & Social Links</i>"]
        
        GH <--> UI_LINKS
        GH -->|Deployed to| CF
    end

    subgraph ARCHITECTURE["🏗️ 2. Architecture & Stack"]
        HTML["<b>HTML5 Semantic Layout</b><br/>Header, Nav & Dialog Modal"]
        CSS["<b>CSS3 Styling</b><br/>Dark Green Palette & Flex/Grid"]
        JSON["<b>services.json</b><br/>Data Store (Title, Price, Image)"]
        TS["<b>TypeScript Core</b><br/>Strict Typing & XSS Prevention"]
        
        HTML --- CSS
        HTML --- TS
        JSON -.->|Fetches Data| TS
    end

    subgraph WORKFLOW["⚡ 3. TypeScript Execution & Rendering Lifecycle"]
        E1["<b>1. Document Event</b><br/><code>DOMContentLoaded</code> triggers <code>cargarServicios()</code>"]
        E2["<b>2. Asynchronous Fetch</b><br/><code>obtenerServicios()</code> requests <code>services.json</code>"]
        E3["<b>3. Type Safety & Validation</b><br/>Check <code>response.ok</code> & array structure"]
        E4["<b>4. Array Iteration</b><br/>Loop through items with index tracking"]
        E5["<b>5. Dynamic Node Creation</b><br/><code>crearTarjetaServicio()</code> via <code>createElement()</code>"]
        E6["<b>6. DOM Injection</b><br/>Append cards & dividers to <code>#services-container</code>"]

        E1 --> E2
        E2 --> E3
        E3 -->|Valid Data| E4
        E4 --> E5
        E5 --> E6
    end

    subgraph ESTILOS_CSS ["4. MAPA DE ESTILOS CSS (style.css)"]
        direction TB
        CSS1["<b>1. :root & Variables</b><br/>Colores y fuentes base"]
        CSS2["<b>2. Reset & Bases</b><br/>Scroll suave y márgenes"]
        CSS3["<b>3. Barra Social</b><br/>Botones flotantes"]
        CSS4["<b>4. Navbar</b><br/>Menú adaptativo"]
        CSS5["<b>5. Hero</b><br/>Portada y títulos"]
        CSS6["<b>6. Servicios</b><br/>Tarjetas y precios"]
        CSS7["<b>7. Modal Native</b><br/>Ventana difuminada"]
        CSS8["<b>8. Animaciones</b><br/>Efecto pulse"]
        CSS9["<b>9. Responsive</b><br/>Celulares y tablets"]
        CSS10["<b>10. FAQ</b><br/>Acordeón desplegable"]
        CSS11["<b>11. Footer</b><br/>Pie de página"]
    end

    %% --- CONEXIONES GENERALES DEL FLUJO HORIZONTAL --- %%
    DEPLOYMENT ==> ARCHITECTURE
    ARCHITECTURE ==> WORKFLOW
    WORKFLOW ==> ESTILOS_CSS

    %% --- APLICACIÓN DE CLASES --- %%
    class GH,CF grandeHead;
    class UI_LINKS grandeBoton;
    class CSS1,CSS2,CSS3,CSS4,CSS5,CSS6,CSS7,CSS8,CSS9,CSS10,CSS11 grandeCSS;
