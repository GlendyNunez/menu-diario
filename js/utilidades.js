/**
 * Formatea y muestra la fecha actual en español con la primera letra en mayúscula.
 */
export function actualizarFechaLocal() {
    const elementoFecha = document.querySelector('.header-subtitle');
    if (elementoFecha) {
        const opciones = { weekday: 'long', day: 'numeric', month: 'long' };
        const hoy = new Date();
        let textoFecha = hoy.toLocaleDateString('es-ES', opciones);
        textoFecha = textoFecha.charAt(0).toUpperCase() + textoFecha.slice(1);
        elementoFecha.textContent = textoFecha;
    }
}
