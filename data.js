document.addEventListener('DOMContentLoaded', () => {
    // Populate People Counting Data
    document.getElementById('polygon-a-count').innerHTML = '<div class="count">13</div><div class="label">Polygon A</div>';
    document.getElementById('polygon-b-count').innerHTML = '<div class="count">16</div><div class="label">Polygon B</div>';

    // Create Pie Chart for People Counting
    const ctx = document.getElementById('people-counting-chart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Polygon A', 'Polygon B'],
            datasets: [{
                data: [13, 16],
                backgroundColor: ['#36A2EB', '#0093BA'],
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    enabled: true,
                },
                datalabels: {
                    color: '#fff',
                    font: {
                        weight: 'bold'
                    },
                    formatter: (value, ctx) => {
                        let sum = 0;
                        let dataArr = ctx.chart.data.datasets[0].data;
                        dataArr.map(data => {
                            sum += data;
                        });
                        let percentage = (value*100 / sum).toFixed(2)+"%";
                        return percentage;
                    }
                }
            }
        }
    });
});
