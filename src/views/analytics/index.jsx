// Libraries
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

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
  },
];

/* Component */
export const WeekChart = ({ data }) => {
  const node = useRef(null);

  const renderChart = () => {
    const margin = { top: 40, right: 50, bottom: 20, left: 20 };
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

    // generate bottom axis
    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);

    const xAxis = d3
      .axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((d) => data[d].label);
    chart
      .append("g")
      .call(xAxis)
      .attr("transform", `translate(${margin.left}, ${height + margin.top})`);

    // domain from 0 to 1 because these charts are percent based
    const yScale = d3.scaleLinear().domain([0, 1]).range([0, height]);

    // Remove old D3 elements
    // update.exit().remove();

    // one line
    const line = () =>
      d3
        .line()
        .x((d, i) => xScale(i))
        .y((d) => yScale(d.values[0].value));

    chart
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line())
      .attr("transform", `translate(${margin.left}, ${margin.top})`);
  };

  useEffect(() => {
    if (data && node.current) {
      renderChart();
    }
  }, [data, node.current]);

  return <svg className="d3-component" width={700} height={200} ref={node} />;
};

export const Analytics = () => {
  return (
    <div>
      Analytics
      <WeekChart data={DEMO_DATA[0].data} />
    </div>
  );
};
