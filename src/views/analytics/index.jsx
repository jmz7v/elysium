// Libraries
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";


const demo_data = [
  {
    title: "Commits by day of the week",
    data: [
      {
        key: '01-monday',
        label: 'Monday',
        values: [
          { key: '2019', value: 0.613 },
          { key: '2020', value: 0.423 },
          { key: 'all-time', value: 0.170 },
        ]
      },
      {
        key: '02-tuesday',
        label: 'Tuesday',
        values: [
          { key: '2019', value: 0.240 },
          { key: '2020', value: 0.225 },
          { key: 'all-time', value: 0.232 },
        ]
      },
      {
        key: '03-wednesday',
        label: 'Wednesday',
        values: [
          { key: '2019', value: 0.888 },
          { key: '2020', value: 0.431 },
          { key: 'all-time', value: 0.899 },
        ]
      },
      {
        key: '04-thursday',
        label: 'Thursday',
        values: [
          { key: '2019', value: 0.264 },
          { key: '2020', value: 0.429 },
          { key: 'all-time', value: 0.508 },
        ]
      },
      {
        key: '05-friday',
        label: 'Friday',
        values: [
          { key: '2019', value: 0.624 },
          { key: '2020', value: 0.464 },
          { key: 'all-time', value: 0.734 },
        ]
      },
      {
        key: '06-saturday',
        label: 'Saturday',
        values: [
          { key: '2019', value: 0.288 },
          { key: '2020', value: 0.599 },
          { key: 'all-time', value: 0.119 },
        ]
      },
      {
        key: '07-sunday',
        label: 'Sunday',
        values: [
          { key: '2019', value: 0.842 },
          { key: '2020', value: 0.319 },
          { key: 'all-time', value: 0.483 },
        ]
      },
    ]
  }
]

/* Component */
export const MyD3Component = (props) => {
    /* The useRef Hook creates a variable that "holds on" to a value across rendering
       passes. In this case it will hold our component's SVG DOM element. It's
       initialized null and React will assign it later (see the return statement) */
    const d3Container = useRef(null);

    /* The useEffect Hook is for running side effects outside of React,
       for instance inserting elements into the DOM using D3 */
    useEffect(
        () => {
            if (props.data && d3Container.current) {
                const svg = d3.select(d3Container.current);

                // Bind D3 data
                const update = svg
                    .append('g')
                    .selectAll('text')
                    .data(props.data);

                // Enter new D3 elements
                update.enter()
                    .append('text')
                    .attr('x', (d, i) => i * 25)
                    .attr('y', 40)
                    .style('font-size', 24)
                    .text((d) => d);

                // Update existing D3 elements
                update
                    .attr('x', (d, i) => i * 40)
                    .text((d) => d);

                // Remove old D3 elements
                update.exit()
                    .remove();
            }
        },

        /*
            useEffect has a dependency array (below). It's a list of dependency
            variables for this useEffect block. The block will run after mount
            and whenever any of these variables change. We still have to check
            if the variables are valid, but we do not have to compare old props
            to next props to decide whether to rerender.
        */
        [props.data, d3Container.current])

    return (
        <svg
            className="d3-component"
            width={400}
            height={200}
            ref={d3Container}
        />
    );
  }

export const Analytics = () => {
  return (
    <div>
      Analytics
            <MyD3Component data={[1,2,3]}/>
    </div>
  )
}
