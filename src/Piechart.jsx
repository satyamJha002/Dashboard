import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function Piechart() {
  const data = {
    labels: ["Yes", "No"],
    datasets: [
      {
        label: "Poll",
        data: [100, 60],
        backgroundColor: ["gray", "purple"],
        borderColor: ["White", "purple"],
      },
    ],
  };

  const options = {};
  return (
    <div className="App">
      <p style={{ fontWeight: "bold", fontSize: "20px" }}>
        Customers <br />
        <span style={{ fontSize: "12px" }}>Customers that by products</span>
      </p>
      <div style={{ width: "100%" }}>
        <Doughnut data={data} options={options}></Doughnut>
      </div>
    </div>
  );
}

export default Piechart;
