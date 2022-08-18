const data = {
  labels: ["Laki-laki", "Perempuan"],
  datasets: [
    {
      label: "Data Kependudukan",
      data: [2031, 2152],
      backgroundColor: ["#253D5B", "#F83640"],
      hoverOffset: 4,
    },
  ],
};

const config = {
  type: "pie",
  data: data,
  options: {
    responsive: true,
    legend: {
      position: "bottom",
    },
    plugins: {
      legend: {
        labels: {
          color: "white",
          font: {
            size: 15
          }
        }
      },
      datalabels: {
        color: "#fff",
        anchor: "end",
        align: "start",
        offset: "-10",
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: "bold",
        },
      },
    },
  },
};

const myChart = new Chart(document.getElementById("myChart"), config);

const data2 = {
  labels: ["Prasejahtera", "Sejahtera", "Kaya", "Sedang", "Miskin"],
  datasets: [
    {
      label: "Data Kesejahteraan Sosial",
      data: [753, 627, 837, 1673, 293],
      backgroundColor: ["#253D5B", "#EC6B56", "#F83640", "#FFC154", "#47B39C"],
      hoverOffset: 4,
    },
  ],
};

const config2 = {
  type: "pie",
  data: data2,
  options: {
    responsive: true,
    legend: {
      position: "bottom",
    },
    plugins: {
      legend: {
        labels: {
          color: "white",
          font: {
            size: 15
          }
        }
      },
      datalabels: {
        color: "#fff",
        anchor: "end",
        align: "start",
        offset: "-10",
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: "bold",
        },
      },
    },
  },
};

const myChart2 = new Chart(document.getElementById("myChart2"), config2);

const data3 = {
    labels: ["SD", "SLTP", "SLTA", "Diploma/Sarjana", "Lainnya"],
    datasets: [
      {
        label: "Data Tingkat Pendidikan Penduduk",
        data: [1232, 483, 676, 11, 1781],
        backgroundColor: ["#253D5B", "#EC6B56", "#F83640", "#FFC154", "#47B39C"],
        hoverOffset: 4,
      },
    ],
  };
  
  const config3 = {
    type: "pie",
    data: data3,
    options: {
      responsive: true,
      legend: {
        position: "bottom",
      },
      plugins: {
        legend: {
          labels: {
            color: "white",
            font: {
              size: 15
            }
          }
        },
        datalabels: {
          color: "#fff",
          anchor: "end",
          align: "start",
          offset: "-10",
          borderWidth: 2,
          borderColor: "#fff",
          borderRadius: 25,
          backgroundColor: (context) => {
            return context.dataset.backgroundColor;
          },
          font: {
            weight: "bold",
          },
        },
      },
    },
  };
  
  const myChart3 = new Chart(document.getElementById("myChart3"), config3);
  

const data4 = {
    labels: ["Petani", "Peternak", "Pedagang", "PNS", "Lainnya"],
    datasets: [
      {
        label: "Data Mata Pencarian Penduduk",
        data: [2886, 293, 586, 376, 42],
        backgroundColor: ["#253D5B", "#EC6B56", "#F83640", "#FFC154", "#47B39C"],
        hoverOffset: 4,
      },
    ],
  };
  
  const config4 = {
    type: "pie",
    data: data4,
    options: {
      responsive: true,
      legend: {
        position: "bottom",
      },
      plugins: {
        legend: {
          labels: {
            color: "white",
            font: {
              size: 15
            }
          }
        },
        datalabels: {
          color: "#fff",
          anchor: "end",
          align: "start",
          offset: "-10",
          borderWidth: 2,
          borderColor: "#fff",
          borderRadius: 25,
          backgroundColor: (context) => {
            return context.dataset.backgroundColor;
          },
          font: {
            weight: "bold",
          },
        },
      },
    },
  };
  
  const myChart4 = new Chart(document.getElementById("myChart4"), config4);
  
  const data5 = {
    labels: ["Islam", "Kristen", "Hindu"],
    datasets: [
      {
        label: "Data Agama Penduduk",
        data: [4173, 6, 4],
        backgroundColor: ["#EC6B56", "#FFC154", "#47B39C"],
        hoverOffset: 4,
      },
    ],
  };
  
  const config5 = {
    type: "pie",
    data: data5,
    options: {
      responsive: true,
      legend: {
        position: "bottom",
      },
      plugins: {
        legend: {
          labels: {
            color: "white",
            font: {
              size: 15
            }
          }
        },
        datalabels: {
          color: "#fff",
          anchor: "end",
          align: "start",
          offset: "-10",
          borderWidth: 2,
          borderColor: "#fff",
          borderRadius: 25,
          backgroundColor: (context) => {
            return context.dataset.backgroundColor;
          },
          font: {
            weight: "bold",
          },
        },
      },
    },
  };
  
  const myChart5 = new Chart(document.getElementById("myChart5"), config5);
