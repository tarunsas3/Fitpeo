import { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";
import HC_variablePie from "highcharts/modules/variable-pie";

HighchartsMore(Highcharts);
HC_variablePie(Highcharts);

export const CustomersCard = () => {
  useEffect(() => {
    Highcharts.setOptions({
      credits: {
        enabled: false,
      },
    });

    Highcharts.chart("container", {
      chart: {
        type: "variablepie",
      },
      title: {
        text: "",
      },
      plotOptions: {
        variablepie: {
          dataLabels: {
            enabled: false, // Set dataLabels to false to hide data labels
          },
        },
      },
      series: [
        {
          type: "variablepie",
          minPointSize: 10,
          innerSize: "20%",
          zMin: 0,
          borderRadius: 5,
          data: [
            {
              y: 505992,
              z: 92,
            },
            {
              y: 551695,
              z: 119,
            },
            {
              y: 357114,
              z: 235,
            },
          ],
          colors: ["#4caefe", "#3dc3e8", "#2dd9db"],
        },
      ],
    });
  }, []);

  return (
    <div>
      <div id="container" style={{ width: "100%", height: "200px" }}></div>
      <HighchartsReact highcharts={Highcharts} />
    </div>
  );
};
