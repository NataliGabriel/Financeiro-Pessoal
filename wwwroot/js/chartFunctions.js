window.renderChart = async function () {
    // Obter os dados do gráfico - substitua essa lógica com seus próprios dados
    var data = google.visualization.arrayToDataTable([
        ['Categoria', 'Valor'],
        ['Categoria A', 20],
        ['Categoria B', 30],
        ['Categoria C', 50],
    ]);

    // Configurações do gráfico
    var options = {
        title: 'Meu Gráfico',
        pieHole: 0.4,
    };

    // Renderizar o gráfico
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
