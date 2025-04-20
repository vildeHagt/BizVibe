import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { OrganisationData } from "../../interfaces/OrganisationData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const OrganisationEarningsChart = ({
  orgData,
}: {
  orgData: OrganisationData;
}) => {
  const year = orgData.regnskapsperiode.tilDato.split("-")[0];

  const { aarsresultat, ordinaertResultatFoerSkattekostnad, totalresultat } =
    orgData.resultatregnskapResultat ?? {};

  const chartData = {
    labels: ["Årsresultat", "Resultat før skatt", "Totalresultat"],
    datasets: [
      {
        label: `${year} (NOK)`,
        data: [
          aarsresultat ?? 0,
          ordinaertResultatFoerSkattekostnad ?? 0,
          totalresultat ?? 0,
        ],
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: `Resultatkomponenter for ${year} – Org: ${orgData.virksomhet.organisasjonsnummer}`,
        font: {
          size: 18,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const value = context.raw;
            return `${value.toLocaleString("no-NO", {
              style: "currency",
              currency: "NOK",
            })}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (tickValue: string | number) {
            const value =
              typeof tickValue === "number" ? tickValue : parseFloat(tickValue);
            return value.toLocaleString("no-NO", {
              style: "currency",
              currency: "NOK",
              maximumSignificantDigits: 3,
            });
          },
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default OrganisationEarningsChart;
