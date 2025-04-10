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
  const chartData = {
    labels: [orgData.regnskapsperiode.tilDato.split("-")[0]], // Extracting year from tilDato
    datasets: [
      {
        label: "Yearly Earnings",
        data: [orgData.resultatregnskapResultat.aarsresultat], // Single data point
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `Yearly Earnings for ${orgData.virksomhet.organisasjonsnummer}`,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default OrganisationEarningsChart;
