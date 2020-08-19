// Libraries
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

// Other
import "./WeekChart/index.css";

const DEMO_DATA = [
  {
    title: "Commits by day of the week",
    data: [
      {
        key: "01-monday",
        label: "Monday",
        values: [
          { key: "2019", value: 0.613 },
          { key: "2020", value: 0.423 },
          { key: "all-time", value: 0.17 },
        ],
      },
      {
        key: "02-tuesday",
        label: "Tuesday",
        values: [
          { key: "2019", value: 0.24 },
          { key: "2020", value: 0.225 },
          { key: "all-time", value: 0.232 },
        ],
      },
      {
        key: "03-wednesday",
        label: "Wednesday",
        values: [
          { key: "2019", value: 0.888 },
          { key: "2020", value: 0.431 },
          { key: "all-time", value: 0.899 },
        ],
      },
      {
        key: "04-thursday",
        label: "Thursday",
        values: [
          { key: "2019", value: 0.264 },
          { key: "2020", value: 0.429 },
          { key: "all-time", value: 0.508 },
        ],
      },
      {
        key: "05-friday",
        label: "Friday",
        values: [
          { key: "2019", value: 0.624 },
          { key: "2020", value: 0.464 },
          { key: "all-time", value: 0.734 },
        ],
      },
      {
        key: "06-saturday",
        label: "Saturday",
        values: [
          { key: "2019", value: 0.288 },
          { key: "2020", value: 0.599 },
          { key: "all-time", value: 0.119 },
        ],
      },
      {
        key: "07-sunday",
        label: "Sunday",
        values: [
          { key: "2019", value: 0.842 },
          { key: "2020", value: 0.319 },
          { key: "all-time", value: 0.483 },
        ],
      },
    ],
    data2: [
      {
        key: "2019",
        label: "2019",
        values: [0.613, 0.242, 0.888, 0.264, 0.624, 0.288, 0.842],
      },
      {
        key: "2020",
        label: "2020",
        values: [0.423, 0.225, 0.431, 0.429, 0.464, 0.599, 0.319],
      },
      {
        key: "all-time",
        label: "All Time",
        values: [0.17, 0.232, 0.899, 0.508, 0.734, 0.119, 0.483],
      },
    ],
    xLabels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
];

/* Component */
export const WeekChart = ({ data2, xLabels }) => {
  const node = useRef(null);

  const renderChart = () => {
    const margin = { top: 40, right: 20, bottom: 20, left: 40 };
    const width = node.current.clientWidth - margin.left - margin.right;
    const height = node.current.clientHeight - margin.top - margin.bottom;

    const chart = d3.select(node.current);

    // const chart = d3.select(".chart")
    //     .attr("width", 840)
    //     .attr("height", 500)
    //   .append("g")
    //     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Bind D3 data
    // const update = chart.append("g").selectAll("text").data(data);

    const xElementCount = xLabels.length;
    const yElementCount = 5;

    const xScale = d3
      .scaleLinear()
      .domain([0, xElementCount - 1])
      .range([0, width]);

    // domain from 0 to 1 because these charts are percent based
    // inverted range is intentional (chart is upside down otherwise)
    const yScale = d3.scaleLinear().domain([0, 1]).range([height, 0]);

    // generate bottom axis
    const xAxis = d3
      .axisBottom(xScale)
      .ticks(xLabels.length)
      .tickFormat((d) => xLabels[d]);

    chart
      .append("g")
      .call(xAxis)
      .attr("transform", `translate(${margin.left}, ${height + margin.top})`);

    const yAxis = d3.axisLeft(yScale).ticks(yElementCount);

    chart
      .append("g")
      .call(yAxis)
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const yGrid = d3
      .axisRight(yScale)
      .ticks(yElementCount)
      .tickSize(width)
      .tickFormat(() => "");
    const xGrid = d3
      .axisTop(xScale)
      .ticks(xElementCount)
      .tickSize(height)
      .tickFormat(() => "");

    chart
      .append("g")
      .call(yGrid)
      .attr("transform", `translate(${margin.left}, ${margin.top})`)
      .attr("class", "week_chart--grid week_chart--grid-y");

    chart
      .append("g")
      .call(xGrid)
      .attr("transform", `translate(${margin.left}, ${height + margin.top})`)
      .attr("class", "week_chart--grid week_chart--grid-x");

    // one line
    const line = d3
      .line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d));

    var paths = chart
      .selectAll(".line")
      .data(data2)
      .enter()
      .append("path")
      .attr("d", function (d) {
        console.log({ d });
        return line(d.values);
      })
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("transform", `translate(${margin.left}, ${margin.top})`);
  };

  useEffect(() => {
    if (data2 && node.current) {
      renderChart();
    }
  }, [data2, node.current]);

  return <svg className="d3-component" width={700} height={200} ref={node} />;
};

export const Analytics = () => {
  return (
    <div className="week_chart">
      Analytics
      <WeekChart
        data={DEMO_DATA[0].data}
        data2={DEMO_DATA[0].data2}
        xLabels={DEMO_DATA[0].xLabels}
      />
    </div>
  );
};
