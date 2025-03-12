$(document).ready(function () {
    // Datos de ejemplo: [ [dia, total], [dia, total], ... ]





});

let backgroundColor = [
    '#36A2EB30', // Color azul con transparencia
    '#FF638430', // Color rojo con transparencia
    '#4BC0C030', // Color turquesa con transparencia
    '#FF9F4030', // Color naranja con transparencia
    '#9966FF30', // Color morado con transparencia
    '#FF573330', // Rojo coral
    '#33FF5730', // Verde lima
    '#3357FF30', // Azul brillante
    '#FF33A130', // Rosa fuerte
    '#33FFF530', // Verde menta
    '#F5FF3330', // Amarillo brillante
    '#FF338030', // Magenta
    '#33FFC630', // Naranja claro
    '#C633FF30', // Morado brillante
    '#33FF8C30', // Verde esmeralda
    '#8C33FF30', // Violeta
    '#FFC63330', // Naranja dorado
    '#33E4FF30', // Azul cielo
    '#E433FF30', // Púrpura
    '#33FF3330', // Verde brillante
    '#FF333330', // Rojo oscuro
    '#33A1FF30', // Azul claro
    '#A133FF30', // Lila
    '#FFA13330', // Naranja oscuro
    '#33FFA130', // Verde agua
    '#FF33FF30', // Fucsia
    '#33FF5730', // Verde lima (repetido para completar)
    '#5733FF30', // Azul violeta
    '#FF573330', // Rojo coral (repetido para completar)
    '#33FF8C30', // Verde esmeralda (repetido para completar)
    '#8CFF3330', // Lima oscuro
    '#FF8C3330', // Naranja quemado
    '#338CFF30', // Azul marino
    '#FF338C30', // Rosa oscuro
    '#8C33FF30', // Violeta (repetido para completar)
];

let borderColor = [
    '#36A2EB', // Borde azul
    '#FF6384', // Borde rojo
    '#4BC0C0', // Borde turquesa
    '#FF9F40', // Borde naranja
    '#9966FF', // Borde morado
    '#FF5733', // Rojo coral
    '#33FF57', // Verde lima
    '#3357FF', // Azul brillante
    '#FF33A1', // Rosa fuerte
    '#33FFF5', // Verde menta
    '#F5FF33', // Amarillo brillante
    '#FF3380', // Magenta
    '#33FFC6', // Naranja claro
    '#C633FF', // Morado brillante
    '#33FF8C', // Verde esmeralda
    '#8C33FF', // Violeta
    '#FFC633', // Naranja dorado
    '#33E4FF', // Azul cielo
    '#E433FF', // Púrpura
    '#33FF33', // Verde brillante
    '#FF3333', // Rojo oscuro
    '#33A1FF', // Azul claro
    '#A133FF', // Lila
    '#FFA133', // Naranja oscuro
    '#33FFA1', // Verde agua
    '#FF33FF', // Fucsia
    '#33FF57', // Verde lima (repetido para completar)
    '#5733FF', // Azul violeta
    '#FF5733', // Rojo coral (repetido para completar)
    '#33FF8C', // Verde esmeralda (repetido para completar)
    '#8CFF33', // Lima oscuro
    '#FF8C33', // Naranja quemado
    '#338CFF', // Azul marino
    '#FF338C', // Rosa oscuro
    '#8C33FF', // Violeta (repetido para completar)
]


function salesMonth(ventasDiarias) {
    // Extraer los días y los totales de ventas
    const dias = ventasDiarias.map((item) => item[0]);
    const totales = ventasDiarias.map((item) => item[1]);

    // Configuración del gráfico
    const ctx = document.getElementById('chart-1').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line', // Tipo de gráfico
        data: {
            labels: dias, // Eje X: Días del mes
            datasets: [{
                label: 'Ventas diarias', // Leyenda del gráfico
                data: totales, // Eje Y: Totales de ventas
                borderColor: '#20c997', // Color de la línea
                borderWidth: 2, // Grosor de la línea
                fill: true, // Rellenar el área debajo de la línea
            }]
        },
        options: {
            responsive: true, // Hacer el gráfico responsivo
            plugins: {
                legend: {
                    display: true, // Mostrar la leyenda
                    position: 'top', // Posición de la leyenda
                },
                tooltip: {
                    enabled: true, // Habilitar tooltips al pasar el mouse
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Días del mes', // Título del eje X
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Total de ventas', // Título del eje Y
                    },
                    beginAtZero: true // Empezar el eje Y desde 0
                }
            }
        }
    });
}



function docByType(data) {
    // Extraer los días (eje X)
    const dias = data.boletas.map((item) => item[0]);

    // Configuración del gráfico
    const ctx = document.getElementById('chart-documentos').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line', // Tipo de gráfico
        data: {
            labels: dias, // Eje X: Días
            datasets: [
                {
                    label: 'Boletas', // Leyenda para boletas
                    data: data.boletas.map((item) => item[1]), // Datos de boletas
                    borderColor: '#36A2EB', // Color de la línea
                    borderWidth: 2,
                    fill: true,
                },
                {
                    label: 'Facturas', // Leyenda para facturas
                    data: data.facturas.map((item) => item[1]), // Datos de facturas
                    borderColor: '#FF6384', // Color de la línea
                    borderWidth: 2,
                    fill: true,
                },
                {
                    label: 'Notas de crédito', // Leyenda para notas de crédito
                    data: data.notasCredito.map((item) => item[1]), // Datos de notas de crédito
                    borderColor: '#4BC0C0', // Color de la línea
                    borderWidth: 2,
                    fill: true,
                },
            ],
        },
        options: {
            responsive: true, // Gráfico responsivo
            plugins: {
                legend: {
                    display: true, // Mostrar leyenda
                    position: 'top',
                },
                tooltip: {
                    enabled: true, // Habilitar tooltips
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Días del mes', // Título del eje X
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Cantidad de documentos', // Título del eje Y
                    },
                    beginAtZero: true, // Empezar el eje Y desde 0
                }
            }
        }
    });

}

function byCategory(data) {
    const categorias = data.map((item) => item[0]);
    const cantidades = data.map((item) => item[1]);

    // Configuración del gráfico
    const ctx = document.getElementById('chart-categories').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar', // Tipo de gráfico (barras)
        data: {
            labels: categorias, // Eje X: Categorías
            datasets: [{
                label: 'Cantidad de productos', // Leyenda del gráfico
                data: cantidades, // Eje Y: Cantidades
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                borderWidth: 2, // Grosor del borde
                borderRadius: 10, // Bordes redondeados
            }]
        },
        options: {
            responsive: true, // Gráfico responsivo
            plugins: {
                legend: {
                    display: true, // Mostrar leyenda
                    position: 'top',
                },
                tooltip: {
                    enabled: true, // Habilitar tooltips
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Categorías', // Título del eje X
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Cantidad de productos', // Título del eje Y
                    },
                    beginAtZero: true, // Empezar el eje Y desde 0
                }
            }
        }
    });

}