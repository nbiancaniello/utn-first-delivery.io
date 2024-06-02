# utn-first-delivery.io

El proyecto será un piloto para el Autoservicio Miguel Angel, un local de productos multirubro que ofrece al cliente elegir los productos por su cuenta y solicitar el envío a domicilio.

La página ofrecerá:

1. Los nuevos artículos disponibles en el comercio
2. Promociones ofrecidas
3. Búsqueda de productos ofrecidos por el local.
4. Sistema de carrito de compras
5. Sistema de CMR para ofrecer descuentos/promociones a clientes frecuentes
6. Notificación de estado de pedidos realizados en la página
7. Pago con tarjeta/Mercado Pago.

Dificultades presentadas:

1. Encontrar la combinación entre formato amigable en distintas plataformas (incluyendo cambiar la cantidad de cards para promociones cuando la resolución se reduce) y colores adecuados que no cansen a la vista, ya que los usuarios podrán pasar promedio de 10 minutos buscando productos, agregando al carrito de compras y registrando datos personales.
2. Utilizar submenus en lista desplegable funciona bien en pantallas de PC, pero una vez que el navbar pasa a menú hamburguesa.
Para esto, utilicé el código sugerido en el link https://mdbootstrap.com/docs/standard/extended/dropdown-multilevel/#
3. Para resolución de celulares, se genera el siguiente estilo para _grid.css

.row>*{
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-top: var(--bs-gutter-y);
}

Esto genera que el texto dentro de las cards se estire de manera vertical. Escribir mi código para eliminar los paddings calculados no está dando resultado.

4. El texto utilizado en el Carousel desaparece en dispositivos móviles (tags h5 y p)

Las mejoras pensadas a futuro:

1. Mantener el ancho de las cards en resoluciones para dispositivos móviles