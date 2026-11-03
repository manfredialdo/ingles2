// ============================================
// GEKKO - Catálogo Digital | Strict TypeScript
// ============================================

interface Service {
    id: number;
    image: string;
    alt: string;
    badge: string;
    duration: string;
    title: string;
    description: string;
    price: string;
    reverse: boolean;
}

/**
 * Obtiene los servicios de forma asíncrona validando la respuesta del JSON.
 */
async function obtenerServicios(): Promise<Service[]> {
    // en un futuro cambiar "services.json" por una URL Raw de GitHub
    const response = await fetch("services.json");

    if (!response.ok) {
        throw new Error(`Error en la petición HTTP: ${response.statusText}`);
    }

    const data: unknown = await response.json();

    // Verificación estricta de tipos en tiempo de ejecución
    if (!Array.isArray(data)) {
        throw new Error("El formato del JSON no es un arreglo válido.");
    }

    return data as Service[];
}

/**
 * Crea una tarjeta de servicio usando nodos del DOM.
 */
function crearTarjetaServicio(service: Service, modal: HTMLDialogElement | null): HTMLElement {
    const article = document.createElement("article");
    article.className = service.reverse ? "service-card reverse" : "service-card";

    // Contenedor de la imagen
    const imgWrapper = document.createElement("div");
    imgWrapper.className = "service-img-wrapper";

    const img = document.createElement("img");
    img.src = service.image;
    img.alt = service.alt;
    img.className = "service-img";

    const badge = document.createElement("span");
    badge.className = "badge-tag";
    badge.textContent = service.badge;

    imgWrapper.appendChild(img);
    imgWrapper.appendChild(badge);

    // Contenedor de información
    const serviceInfo = document.createElement("div");
    serviceInfo.className = "service-info";

    const duration = document.createElement("div");
    duration.className = "duration";
    
    const clockIcon = document.createElement("i");
    clockIcon.className = "far fa-clock";
    
    duration.appendChild(clockIcon);
    duration.appendChild(document.createTextNode(` ${service.duration}`));

    const title = document.createElement("h3");
    title.className = "service-title";
    title.textContent = service.title;

    // sin descripcion
    const desc = document.createElement("p");
    desc.className = "service-desc";
    desc.textContent = service.description;

    const priceRow = document.createElement("div");
    priceRow.className = "price-row";

    const price = document.createElement("span");
    price.className = "price";
    price.textContent = service.price;

    const line = document.createElement("div");
    line.className = "line";

    priceRow.appendChild(price);
    priceRow.appendChild(line);

    const btn = document.createElement("button");
    btn.className = "btn-outline-detalle";
    btn.textContent = "Reservar Experiencia";
    btn.addEventListener("click", () => {
        modal?.showModal();
    });

    serviceInfo.appendChild(duration);
    serviceInfo.appendChild(title);
    serviceInfo.appendChild(desc);   // comentar para sacar descripcion
    serviceInfo.appendChild(priceRow);
    serviceInfo.appendChild(btn);

    article.appendChild(imgWrapper);
    article.appendChild(serviceInfo);

    return article;
}

// ============================================
// SELECTORES Y GESTIÓN DE EVENTOS DEL DOM
// ============================================

const container = document.querySelector<HTMLDivElement>("#services-container");
const loading = document.querySelector<HTMLDivElement>("#loading");
const modal = document.querySelector<HTMLDialogElement>("#reservaModal");
const btnReservarNav = document.querySelector<HTMLButtonElement>("#btn-reservar-nav");
const modalCloseBtn = document.querySelector<HTMLButtonElement>("#modal-close-btn");

// Control de apertura y cierre del modal de forma segura
btnReservarNav?.addEventListener("click", () => {
    modal?.showModal();
});

modalCloseBtn?.addEventListener("click", () => {
    modal?.close();
});

/**
 * Controla el ciclo de carga, manejo de errores y renderizado en pantalla.
 */
async function cargarServicios(): Promise<void> {
    if (!container || !loading) return;

    try {
        loading.style.display = "block";
        container.replaceChildren();

        const services = await obtenerServicios();

        loading.style.display = "none";

        services.forEach((service, index) => {
            const cardElement = crearTarjetaServicio(service, modal);
            container.appendChild(cardElement);

            // Agregar divisor si no es el último elemento
            if (index < services.length - 1) {
                const divider = document.createElement("div");
                divider.className = "divider-line";
                container.appendChild(divider);
            }
        });

    } catch (error: unknown) {
        loading.style.display = "none";
        
        const errorMsg = document.createElement("p");
        errorMsg.style.color = "red";
        errorMsg.style.textAlign = "center";
        errorMsg.textContent = "Error al cargar los servicios del catálogo.";
        container.replaceChildren(errorMsg);

        if (error instanceof Error) {
            console.error("Fallo controlado:", error.message);
        } else {
            console.error("Fallo desconocido:", error);
        }
    }
}

// Inicialización segura al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
    void cargarServicios();
});