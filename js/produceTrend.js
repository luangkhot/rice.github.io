Highcharts.chart('produce-trend', {
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
      data: [8700, 9600, 8800, 7800, 8000, 7800, 10200, 4800, 8000, 7800, 10000, 15000]
    },
    {
      color: '#3c240a',
      name: 'ເຂົ້າໜຽວ',
      data: [8000, 7600, 5800, 9700, 16000, 5800, 10200, 6300, 8000, 7800, 10000, 15000]
    },
    {
      color: '#aa4008',
      name: 'ເຂົ້າເປລືອກ',
      data: [8000, 7600, 5800, 9000, 10000, 7800, 10200, 1300, 8000, 9800, 10000, 15000]
    }
  ]
});