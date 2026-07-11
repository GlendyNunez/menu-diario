import { actualizarFechaLocal } from './utilidades.js';
import { obtenerMenuSanity } from './conexion.js';
import { dibujarTarjetasMenu, mostrarIndicadorEstado } from './interfaz.js';

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Mostrar la fecha actual del día
    actualizarFechaLocal();

    // 2. Cargar y mostrar los platos de Sanity
    const contenedor = document.querySelector('.tarjetas-container');
    if (!contenedor) return;

    const htmlRespaldo = contenedor.innerHTML;

    try {
        const platillos = await obtenerMenuSanity();

        if (platillos.length === 0) {
            console.log('Sanity: Base de datos vacía. Cargando platos de demostración.');
            mostrarIndicadorEstado(true);
            return;
        }

        // Dibujar los platos en pantalla
        dibujarTarjetasMenu(platillos, contenedor);
        mostrarIndicadorEstado(false);

    } catch (error) {
        console.error('Error al conectar con el servidor:', error);
        mostrarIndicadorEstado('error'); // Mostrar estado de error
        // Si hay error de red, mantener el menú de ejemplo
        contenedor.innerHTML = htmlRespaldo;
    }
});
