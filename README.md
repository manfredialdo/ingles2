## https://ingles2.aldodev-tupad.workers.dev

```mermaid
flowchart TD
    subgraph DEPLOYMENT["🌐 Deployment & Live Links"]
        GH["<br/><h1>GitHub Repository</h1><br/><b>github.com/manfredialdo/ingles2</b><br/>"]
        CF["<br/><h1>Cloudflare Workers Live App</h1><br/><b>ingles2.aldodev-tupad.workers.dev</b><br/>"]
        UI_LINKS["<br/><h2>Interface Elements</h2><br/><i>(Reservation Buttons & Social Links)</i><br/>"]
        
        GH <--> UI_LINKS
        GH -->|Deployed to| CF
    end

    subgraph ARCHITECTURE["🏗️ Architecture & Stack"]
        HTML["<br/><h2>HTML5</h2><br/>Semantic Layout,<br/>Header, Nav & Dialog Modal<br/>"]
        CSS["<br/><h2>CSS3 Styling</h2><br/>Minimalist Dark Green Palette,<br/>Flex/Grid Layout & Hover Effects<br/>"]
        JSON["<br/><h2>services.json</h2><br/>Data Store<br/><i>(Title, Duration, Price, Image, Badge)</i><br/>"]
        TS["<br/><h2>TypeScript Core</h2><br/>Strict Typing, Async Fetch,<br/>Dynamic DOM & XSS Prevention<br/>"]
        
        HTML --- CSS
        HTML --- TS
        JSON -.->|Fetches Data| TS
    end

    subgraph WORKFLOW["⚡ TypeScript Execution & Rendering Lifecycle"]
        E1["<br/><h2>1. Document Event</h2><br/><code>DOMContentLoaded</code> listener triggers <code>cargarServicios()</code><br/>"]
        E2["<br/><h2>2. Asynchronous Fetch</h2><br/><code>obtenerServicios()</code> requests <code>services.json</code><br/>"]
        E3["<br/><h2>3. Type Safety & Validation</h2><br/>Check <code>response.ok</code> & verify array structure<br/><i>(Runtime & Compile-time safety)</i><br/>"]
        E4["<br/><h2>4. Array Iteration & Processing</h2><br/>Loop through array items with index track<br/>"]
        E5["<br/><h2>5. Dynamic Node Creation</h2><br/><code>crearTarjetaServicio()</code> builds elements with <code>document.createElement()</code><br/><i>(Prevents XSS Injection)</i><br/>"]
        E6["<br/><h2>6. Event Binding & DOM Injection</h2><br/>Attach modal handlers & append cards + dividers to <code>#services-container</code><br/>"]

        E1 --> E2
        E2 --> E3
        E3 -->|Valid Data| E4
        E4 --> E5
        E5 --> E6
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

    ESTILOS_CSS

    %% --- ESTILOS DE ALTO CONTRASTE CON FUENTE GRANDE Y ESPACIADO ESPACIOSO --- %%
    classDef grandeHead fill:#0f172a,stroke:#38bdf8,stroke-width:4px,color:#ffffff,font-size:18px,padding:15px;
    classDef grandeSeccion fill:#1e293b,stroke:#94a3b8,stroke-width:3px,color:#ffffff,font-size:16px,padding:12px;
    classDef grandeBoton fill:#854d0e,stroke:#facc15,stroke-width:4px,color:#fef08a,font-size:18px,padding:15px;
    classDef grandeServicio fill:#431407,stroke:#fb923c,stroke-width:3px,color:#ffedd5,font-size:16px,padding:12px;
    classDef grandeCSS fill:#064e3b,stroke:#34d399,stroke-width:3px,color:#ecfdf5,font-size:16px,padding:10px;

    class GH,CF grandeHead;
    class HTML,CSS,JSON,TS,E1,E2,E3,E4,E5,E6 grandeSeccion;
    class UI_LINKS grandeBoton;
    class CSS1,CSS2,CSS3,CSS4,CSS5,CSS6,CSS7,CSS8,CSS9,CSS10,CSS11 grandeCSS;
