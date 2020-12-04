// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['la-ou', null],
    ['la-ph', null],
    ['la-bl', 700],
    ['la-kh', 600],
    ['la-at', null],
    ['la-bk', null],
    ['la-xe', null],
    ['la-lm', null],
    ['la-xa', 300],
    ['la-ch', null],
    ['la-sl', null],
    ['la-sv', null],
    ['la-vt', 900],
    ['la-vi', 100],
    ['la-xi', null],
    ['la-ho', null],
    ['la-lp', null]
];

// Create the chart
Highcharts.mapChart('produce-map', {
    chart: {
        map: 'countries/la/la-all',
    },
    mapNavigation: {
        enabled: false,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },
    title:{
        text:''
    },
    credits: {
        enabled: false,
    },
    legend: {
        enabled: false,
    },
    colorAxis: {
        min: 0
    },
    exporting: {
        enabled: false
    },
    series: [{
        data: data,
        name: 'ຍອດຂາຍ (ກີບ)',
        nullColor: '#f5f5f5',
        color: 'red',
        colorByPoint: true,
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            color: '#333',
            enabled: true,
            style: {
                fontWeight: 'normal',
            },
            format: '{point.name}'
        }
    }]
});
