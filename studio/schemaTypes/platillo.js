export default {
  name: 'platillo',
  type: 'document',
  title: 'Platillo',
  fields: [
    {
      name: 'titulo',
      type: 'string',
      title: 'Título del Platillo',
      validation: Rule => Rule.required().error('El título es obligatorio.')
    },
    {
      name: 'descripcion',
      type: 'text',
      title: 'Descripción',
      validation: Rule => Rule.required().error('La descripción es obligatoria.')
    },
    {
      name: 'fecha',
      type: 'date',
      title: 'Fecha de este Menú',
      description: 'Selecciona el día en que se debe mostrar este plato',
      validation: Rule => Rule.required().error('La fecha es obligatoria.')
    },
    {
      name: 'etiqueta',
      type: 'string',
      title: 'Etiqueta (Tipo de Comida)',
      options: {
        list: [
          { title: '☕ DESAYUNO', value: '☕ DESAYUNO' },
          { title: '🍏 SNACK MAÑANA', value: '🍏 SNACK MAÑANA' },
          { title: '🍗 ALMUERZO / COMIDA', value: '🍗 ALMUERZO / COMIDA' },
          { title: '🍓 MERIENDA', value: '🍓 MERIENDA' },
          { title: '🐟 CENA', value: '🐟 CENA' }
        ]
      },
      validation: Rule => Rule.required().error('La etiqueta es obligatoria.')
    },
    {
      name: 'color',
      type: 'string',
      title: 'Color de la Tarjeta',
      options: {
        list: [
          { title: '🟢 Verde (Saludable)', value: 'tarjeta-verde' },
          { title: '🟠 Naranja (Snacks / Energía)', value: 'tarjeta-naranja' },
          { title: '🟣 Morado (Especial / Comida)', value: 'tarjeta-morado' },
          { title: '🔵 Azul (Suave)', value: 'tarjeta-azul' },
          { title: '🔴 Rojo (Atención)', value: 'tarjeta-rojo' }
        ]
      },
      validation: Rule => Rule.required().error('El color es obligatorio.')
    },
    {
      name: 'calorias',
      type: 'number',
      title: 'Calorías (kcal)',
      validation: Rule => Rule.min(0)
    },
    {
      name: 'proteinas',
      type: 'number',
      title: 'Proteínas (g)',
      validation: Rule => Rule.min(0)
    },
    {
      name: 'carbohidratos',
      type: 'number',
      title: 'Carbohidratos (g)',
      validation: Rule => Rule.min(0)
    },
    {
      name: 'grasas',
      type: 'number',
      title: 'Grasas (g)',
      validation: Rule => Rule.min(0)
    },
    {
      name: 'ingredientes',
      type: 'array',
      title: 'Ingredientes',
      of: [{ type: 'string' }],
      description: 'Agrega los ingredientes uno a uno'
    }
  ]
};
