const ID_PROYECTO = 'mferhu8i';
const DATASET = 'production';
const VERSION_API = 'v2021-10-21';

/**
 * Realiza la petición a la API de Sanity para obtener los platillos del menú.
 * @returns {Promise<Array>} Lista de platillos.
 */
export async function obtenerMenuSanity() {
    // Obtener la fecha de hoy en formato YYYY-MM-DD usando la hora local
    const hoy = new Date();
    const anio = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const dia = String(hoy.getDate()).padStart(2, '0');
    const fechaHoy = `${anio}-${mes}-${dia}`;

    // Filtramos para traer solo los platos programados para el día de hoy
    const consulta = `*[_type == "platillo" && fecha == "${fechaHoy}"] | order(_createdAt asc)`;
    const url = `https://${ID_PROYECTO}.api.sanity.io/${VERSION_API}/data/query/${DATASET}?query=${encodeURIComponent(consulta)}`;
    
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
        throw new Error('No se pudo establecer la conexión con Sanity');
    }
    
    const { result } = await respuesta.json();
    return result || [];
}
