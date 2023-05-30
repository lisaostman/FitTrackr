// FitTrackr JavaScript code

// Function to retrieve fitness data and update the chart
function updateChart() {
    fetch('https://my.api.mockaroo.com/fitnesstracker.json?key=YOURKEYHERE')
      .then(response => response.json())
      .then(data => {
        const labels = [data.date];
        const values = [data.steps];
  
        // Use Chart.js to generate the chart
        const ctx = document.getElementById('fitnessChart').getContext('2d');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'Steps',
              data: values,
              backgroundColor: 'rgba(54, 162, 235, 0.5)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      })
      .catch(error => {
        console.error('Error fetching fitness data:', error);
      });
  }
  

// Call the updateChart function when the page loads
window.addEventListener('DOMContentLoaded', updateChart);
