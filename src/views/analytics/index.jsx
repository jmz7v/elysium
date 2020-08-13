// Libraries
import React from "react";
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

export const Analytics = () => {
  return (
    <div>
      Analytics
    </div>
  )
}
