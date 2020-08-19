// Libraries
import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

// Other
import "./WeekChart/index.css";

const DEMO_DATA = [
  {
    title: "Commits by day of the week",
    data: [
      {
        key: "2019",
        label: "2019",
        values: [0.613, 0.142, 0.888, 0.264, 0.624, 0.288, 0.842],
      },
      {
        key: "2020",
        label: "2020",
        values: [0.423, 0.25, 0.431, 0.429, 0.464, 0.599, 0.319],
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

const COLORS = ["#003049", "#d62828", "#f77f00", "#fcbf49", "#eae2b7"];

const getLineKeys = (d = []) => d.map((i) => i.key);
const generateLineDefaultState = (data) =>
  data.reduce((acc, i) => ({ ...acc, [i.key]: true }), {});

/* Component */
export const WeekChart = ({ data, xLabels }) => {
  const node = useRef(null);
  const [activeLines, setActiveLines] = useState(
    generateLineDefaultState(data)
  );

  console.log({ activeLines, data }, getLineKeys(data));

  const renderChart = () => {
    const margin = { top: 40, right: 20, bottom: 20, left: 40 };
    const width = node.current.clientWidth - margin.left - margin.right;
    const height = node.current.clientHeight - margin.top - margin.bottom;

    const chart = d3.select(node.current);

    // clean up
    chart.selectAll("*").remove();

    // Bind D3 data
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

    // render multiple lines
    const paths = chart
      .selectAll(".line")
      .data(data)
      .enter()
      .append("path")
      .attr("d", (d) => line(d.values))
      .attr("fill", "none")
      .attr("stroke", (_, i) => COLORS[i])
      .attr("stroke-width", 1.5)
      .attr("transform", `translate(${margin.left}, ${margin.top})`)
      .attr(
        "class",
        ({ key }) =>
          `week_chart--line week_chart--line-${
            activeLines[key] ? "enabled" : "disabled"
          }`
      );

    const toggles = chart
      .selectAll(".toggle")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d.label)
      .attr(
        "transform",
        (d, i) => `translate(${i * 70 + margin.left}, ${margin.top})`
      )
      .on("click", ({ key }) =>
        setActiveLines({ ...activeLines, [key]: !activeLines[key] })
      );
    // .text(d.key);
  };

  useEffect(() => {
    if (data && node.current) {
      renderChart();
      // setActiveLines(getLineKeys(data))
    }
  }, [data, node.current, activeLines]);

  return <svg className="d3-component" width={700} height={200} ref={node} />;
};

export const Analytics = () => {
  return (
    <div className="week_chart">
      Analytics
      <WeekChart data={DEMO_DATA[0].data} xLabels={DEMO_DATA[0].xLabels} />
    </div>
  );
};
