# Test Frontend

### Para inicializar el proyecto:

### `npm i`

### Client:
### `npm start`

### Server:
### `node index.js`

El servidor se ejecuta en: [http://localhost:8000](http://localhost:8000)

### :page_with_curl: NOTAS


Para mostrar las breadcrumb de categorías en la vista de detalle del producto, se utiliza éste endpoint: [api.mercadolibre.com/categories/$CATEGORY_ID](api.mercadolibre.com/categories/$CATEGORY_ID), que no estaba detallado en la letra del ejercicio, dado que /item/:d únicamente devuelve el ID de la categoría.

Por otro lado, las categorías del listado se extraen del objecto 'available_filters' y se ordenan de forma ascendente según la cantidad de resultados, existiendo casos en los cuales no hay filtros por categoría en dicho objeto y el componente no se muestra.
Esto lo utilicé como último recurso, ya que fue la única información que encontré sobre categories en el endpoint de /search?q=:query.
