// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("line");
var line = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["1965", "1970", "1975", "1980", "1985", "1990", "1995", "2000", "2005", "2010", "2015", "2020"],
        datasets: [{
            label: "Growth rate (%)",
            data: [2.005, 2.090, 1.865, 1.749, 1.749, 1.736, 1.510, 1.323, 1.247, 1.203, 1.168, 1.075]
        }]
    }
});