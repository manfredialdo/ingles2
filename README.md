## https://xdemo.pythonanywhere.com     TS + HTML + CSS 

## https://ingles2.aldodev-tupad.workers.dev    HTML + CSS

```mermaid
flowchart TD
    classDef default fill:#1e293b,stroke:#94a3b8,stroke-width:2px,color:#ffffff,font-size:15px;
    classDef grandeHead fill:#0f172a,stroke:#38bdf8,stroke-width:3px,color:#ffffff,font-size:16px;
    classDef grandeBoton fill:#854d0e,stroke:#facc15,stroke-width:3px,color:#fef08a,font-size:15px;
    classDef grandeCSS fill:#064e3b,stroke:#34d399,stroke-width:2px,color:#ecfdf5,font-size:14px;

    subgraph DEPLOYMENT["🌐 1. Deployment & Live Links"]
        direction LR
        GH["<b>GitHub Repository</b><br/>github.com/manfredialdo/ingles2"]
        CF["<b>Cloudflare Workers Live App</b><br/>ingles2.aldodev-tupad.workers.dev"]
        UI_LINKS["<b>Interface Elements</b><br/><i>Reservation & Social Links</i>"]
        
        GH <--> UI_LINKS
        GH -->|Deployed to| CF
    end

    subgraph ARCHITECTURE["🏗️ 2. Architecture & Stack"]
        direction LR
        HTML["<b>HTML5 Semantic Layout</b><br/>Header, Nav & Dialog Modal"]
        CSS["<b>CSS3 Styling</b><br/>Dark Green Palette & Flex/Grid"]
        JSON["<b>services.json</b><br/>Data Store (Title, Price, Image)"]
        TS["<b>TypeScript Core</b><br/>Strict Typing & XSS Prevention"]
        
        HTML --- CSS
        HTML --- TS
        JSON -.->|Fetches Data| TS
    end

    subgraph WORKFLOW["⚡ 3. TypeScript Execution & Rendering Lifecycle"]
        direction LR
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
        direction LR
        CSS1["<b>1. :root & Variables</b>"]
        CSS2["<b>2. Reset & Bases</b>"]
        CSS3["<b>3. Barra Social</b>"]
        CSS4["<b>4. Navbar</b>"]
        CSS5["<b>5. Hero</b>"]
        CSS6["<b>6. Servicios</b>"]
        CSS7["<b>7. Modal Native</b>"]
        CSS8["<b>8. Animaciones</b>"]
        CSS9["<b>9. Responsive</b>"]
        CSS10["<b>10. FAQ</b>"]
        CSS11["<b>11. Footer</b>"]
    end

    %% --- CONEXIONES EN BLOQUE LIMPIO --- %%
    DEPLOYMENT ==> ARCHITECTURE
    ARCHITECTURE ==> WORKFLOW
    WORKFLOW ==> ESTILOS_CSS

    %% --- APLICACIÓN DE CLASES --- %%
    class GH,CF grandeHead;
    class UI_LINKS grandeBoton;
    class CSS1,CSS2,CSS3,CSS4,CSS5,CSS6,CSS7,CSS8,CSS9,CSS10,CSS11 grandeCSS;
