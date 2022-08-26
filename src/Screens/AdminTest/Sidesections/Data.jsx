import React from 'react';
import Styles from './Sidesection.module.css';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, } from 'recharts';

const Data = () => {
  const data01 = [
    { name: 'Saree', value: 40 },
    { name: 'Jewellery', value: 30 },
    { name: 'Women Apparel', value: 30 },
    { name: 'Painting', value: 20 },
    { name: 'Stone Work', value: 27 },
    { name: 'Artwork', value: 18 },
  ];

  return (
    <>


      <div className={Styles.databody}>
          <h2>Sales Product Wise </h2>
        <PieChart className={Styles.overflow} width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data01}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#00bcd4"
            label
          />

          <Tooltip />
        </PieChart>

      </div>
      <div className={Styles.boxdata}>
          <h3>Total Amount of Product available</h3>
          <h2>600</h2>
          <h3>Total Amount of Product available</h3>
          <h2>600</h2>
          <h3>Total Amount of Product available</h3>
          <h2>600</h2>
          <h3>Total Amount of Product available</h3>
          <h2>600</h2>
          <h3>Total Amount of Product available</h3>
          <h2>600</h2>
      </div>


    </>
  )
}

export default Data