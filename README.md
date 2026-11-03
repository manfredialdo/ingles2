## https://ingles2.aldodev-tupad.workers.dev

```mermaid
flowchart TD

    subgraph DEPLOYMENT["🌐 Deployment & Live Links"]

        GH["GitHub Repository<br/><b>github.com/manfredialdo/ingles2</b>"]

        CF["Cloudflare Workers Live App<br/><b>ingles2.aldodev-tupad.workers.dev</b>"]

        UI_LINKS["Interface Elements<br/><i>(Reservation Buttons & Social Links)</i>"]

        

        GH <--> UI_LINKS

        GH -->|Deployed to| CF

    end



    subgraph ARCHITECTURE["🏗️ Architecture & Stack"]

        HTML["<b>HTML5</b><br/>Semantic Layout,<br/>Header, Nav & Dialog Modal"]

        CSS["<b>CSS3 Styling</b><br/>Minimalist Dark Green Palette,<br/>Flex/Grid Layout & Hover Effects"]

        JSON["<b>services.json</b><br/>Data Store<br/><i>(Title, Duration, Price, Image, Badge)</i>"]

        TS["<b>TypeScript Core</b><br/>Strict Typing, Async Fetch,<br/>Dynamic DOM & XSS Prevention"]

        

        HTML --- CSS

        HTML --- TS

        JSON -.->|Fetches Data| TS

    end



    subgraph WORKFLOW["⚡ TypeScript Execution & Rendering Lifecycle"]

        E1["<b>1. Document Event</b><br/><code>DOMContentLoaded</code> listener triggers <code>cargarServicios()</code>"]

        E2["<b>2. Asynchronous Fetch</b><br/><code>obtenerServicios()</code> requests <code>services.json</code>"]

        E3["<b>3. Type Safety & Validation</b><br/>Check <code>response.ok</code> & verify array structure<br/><i>(Runtime & Compile-time safety)</i>"]

        E4["<b>4. Array Iteration & Processing</b><br/>Loop through array items with index track"]

        E5["<b>5. Dynamic Node Creation</b><br/><code>crearTarjetaServicio()</code> builds elements with <code>document.createElement()</code><br/><i>(Prevents XSS Injection)</i>"]

        E6["<b>6. Event Binding & DOM Injection</b><br/>Attach modal handlers & append cards + dividers to <code>#services-container</code>"]



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
