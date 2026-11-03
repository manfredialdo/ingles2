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

    ARCHITECTURE -.-> WORKFLOW
    ```