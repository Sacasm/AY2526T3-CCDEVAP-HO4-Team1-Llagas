document.addEventListener("DOMContentLoaded", () => {
  const colorBlue   = '#1875f0';
  const colorGreen  = '#108a48';
  const colorYellow = '#f2b81d';
  const colorRed    = '#d9383a';
  const colorTextMuted  = '#6c757d';
  const colorGridBorder = '#e9ecef';
  
  const canvasListings = document.getElementById('listingsBarChart');
  if (canvasListings) {
    new Chart(canvasListings, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Active Listings',
          data: [120, 195, 150, 220, 180, 260],
          backgroundColor: colorBlue,
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: { color: colorTextMuted, font: { family: 'Segoe UI' } }
          }
        },
        scales: {
          x: { grid: { color: colorGridBorder }, ticks: { color: colorTextMuted } },
          y: { grid: { color: colorGridBorder }, ticks: { color: colorTextMuted } }
        }
      }
    });
  }

  const canvasReports = document.getElementById('reportsLineChart');
  if (canvasReports) {
    new Chart(canvasReports, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Submitted Reports',
          data: [14, 22, 9, 18, 12, 25],
          borderColor: colorGreen,
          backgroundColor: 'rgba(16, 138, 72, 0.12)',
          fill: true,
          borderWidth: 3,
          tension: 0.4,
          pointBackgroundColor: colorGreen,
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: { color: colorTextMuted, font: { family: 'Segoe UI' } }
          }
        },
        scales: {
          x: { grid: { color: colorGridBorder }, ticks: { color: colorTextMuted } },
          y: { grid: { color: colorGridBorder }, ticks: { color: colorTextMuted } }
        }
      }
    });
  }

  const canvasCategories = document.getElementById('categoriesHorizontalChart');
  if (canvasCategories) {
    new Chart(canvasCategories, {
      type: 'doughnut',
      data: {
        labels: ['Books', 'Uniforms', 'Electronics', 'Supplies'],
        datasets: [{
          label: 'Total Views',
          data: [450, 310, 280, 140],
          backgroundColor: [colorBlue, colorGreen, colorYellow, colorRed],
          borderWidth: 2,
          borderColor: '#ffffff'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              boxWidth: 12,
              color: colorTextMuted,
              font: { family: 'Segoe UI', size: 12 }
            }
          }
        },
        cutout: '65%'
      }
    });
  }
});