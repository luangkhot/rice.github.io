Highcharts.chart('price-trend', {
  chart: {
    type: 'line',
    style: {
        fontFamily: 'Phetsarath_OT',
    }
  },
  title: {
    text: 'ລາຄາເຂົ້າພາຍໃນປີ 2020'
  },
  credits: {
      enabled: false,
  },
  // subtitle: {
  //   text: 'Source: WorldClimate.com'
  // },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  yAxis: {
    title: {
      text: 'ລາຄາເຂົ້າ / 1ກິໂລ'
    }
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true
      },
      enableMouseTracking: false
    }
  },
  series: [
    {
      color: '#94b406',
      name: 'ເຂົ້າຈ້າວ',
      data: [8700, 9600, 8800, 7800, 8000, 7800, 8000, 8800, 8000, 7800, 9000, 7000]
    },
    {
      color: '#3c240a',
      name: 'ເຂົ້າໜຽວ',
      data: [8000, 7600, 8800, 9700, 8000, 7800, 9200, 7300, 8000, 7800, 9000, 8000]
    },
    {
      color: '#aa4008',
      name: 'ເຂົ້າເປລືອກ',
      data: [8000, 7600, 8800, 9000, 8000, 7800, 8200, 9000, 8000, 9800, 8700, 8000]
    }
  ]
});