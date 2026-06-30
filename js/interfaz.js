/**
 * Dibuja las tarjetas de los platillos en la página web.
 * @param {Array} platillos Lista de platillos a mostrar.
 * @param {HTMLElement} contenedor Elemento HTML donde se insertarán las tarjetas.
 */
export function dibujarTarjetasMenu(platillos, contenedor) {
    contenedor.innerHTML = '';
    
    platillos.forEach(item => {
        const titulo = item.titulo || 'Sin título';
        const descripcion = item.descripcion || 'Sin descripción';
        const etiquetaTexto = item.etiqueta || '🍽️ PLATILLO';
        // Obtenemos la clase de color de Sanity (por defecto azul si no hay)
        const claseColor = item.color || 'tarjeta-azul';

        // HTML 100% libre de estilos en línea. Todo el diseño y colores se cargan desde el CSS.
        const tarjetaHTML = `
            <article class="tarjeta ${claseColor}">
                <span class="tarjeta-tag">${etiquetaTexto}</span>
                <h2 class="tarjeta-titulo">${titulo}</h2>
                <p class="tarjeta-descripcion">${descripcion}</p>
                <button class="tarjeta-btn">Ver detalles <span>➡</span></button>
            </article>
        `;
        contenedor.insertAdjacentHTML('beforeend', tarjetaHTML);
    });
}

/**
 * Muestra una etiqueta visual indicando si estamos conectados a Sanity o en modo Demo.
 * @param {boolean} esDemo Indica si el panel de Sanity está vacío.
 */
export function mostrarIndicadorEstado(esDemo) {
    const accionesHeader = document.querySelector('.header-actions');
    if (!accionesHeader) return;

    const etiquetaExistente = document.getElementById('sanity-badge');
    if (etiquetaExistente) etiquetaExistente.remove();

    const etiqueta = document.createElement('span');
    etiqueta.id = 'sanity-badge';
    etiqueta.style.padding = '6px 12px';
    etiqueta.style.borderRadius = '20px';
    etiqueta.style.fontSize = '0.75rem';
    etiqueta.style.fontWeight = '700';
    etiqueta.style.display = 'inline-flex';
    etiqueta.style.alignItems = 'center';
    etiqueta.style.gap = '6px';
    etiqueta.style.marginRight = '12px';
    etiqueta.style.fontFamily = 'inherit';
    
    if (esDemo === 'error') {
        etiqueta.style.backgroundColor = '#fee2e2'; // Rojo claro
        etiqueta.style.color = '#991b1b';           // Texto rojo oscuro
        etiqueta.style.border = '1px solid #fca5a5'; // Borde rojo
        etiqueta.innerHTML = '<span style="width: 8px; height: 8px; background-color: #991b1b; border-radius: 50%; display: inline-block;"></span> Error de conexión';
    } else if (esDemo) {
        etiqueta.style.backgroundColor = '#fef3c7'; // Amarillo claro
        etiqueta.style.color = '#d97706';           // Texto marrón/amarillo
        etiqueta.style.border = '1px solid #fcd34d'; // Borde amarillo
        etiqueta.innerHTML = '<span style="width: 8px; height: 8px; background-color: #d97706; border-radius: 50%; display: inline-block;"></span> Demo (Sanity vacío)';
    } else {
        etiqueta.style.backgroundColor = '#dcfce7'; // Verde claro
        etiqueta.style.color = '#15803d';           // Texto verde oscuro
        etiqueta.style.border = '1px solid #bbf7d0'; // Borde verde
        etiqueta.innerHTML = '<span style="width: 8px; height: 8px; background-color: #15803d; border-radius: 50%; display: inline-block;"></span> Conectado a Sanity';
    }

    accionesHeader.insertBefore(etiqueta, accionesHeader.firstChild);
}
