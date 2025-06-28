import React from 'react'
import { PieChart as RePieChart, Pie, ResponsiveContainer, Tooltip } from 'recharts';
import { useData } from './store';

const PieChart = () => {

    const { userData } = useData();

  return (
    <ResponsiveContainer height="100%" width="100%">
                <RePieChart width={100} height={100} data={userData}>
                    {/* <XAxis dataKey="name" stroke="#8884d8" />
                    {
                    windowWidth <=587? null : <YAxis />
                    }*/}
                    <Tooltip /> 
                  <Pie data={userData} dataKey="Mood" nameKey="week" cx="50%" cy="50%" outerRadius={140} fill="#036ffc" label  />  
                </RePieChart>
    </ResponsiveContainer>
  )
}

export default PieChart