function renderChart() {
    const ctx = document.getElementById(`myChart`);
    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Hitpoints', 'Attack', 'Defense', 'SP-Attack', 'SP-Defense', 'Speed'],
            datasets: [{
                data: stats,
                label: 'Stats',
                borderWidth: 1,
                backgroundColor: '#365fac',
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        autoSkip: false,
                        maxRotation: 0,
                        padding: 4
                    }
                }
            }
        }
    });
}