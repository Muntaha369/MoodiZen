import React,{useState, useEffect} from 'react'
import { LineChart as ReLineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
  {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 300, pv: 2400, amt: 2400},
  {name: 'Page C', uv: 200, pv: 2400, amt: 2400},
  {name: 'Page D', uv: 100, pv: 2400, amt: 2400},
  {name: 'Page E', uv: 500, pv: 2400, amt: 2400}
];
const LineChart = () => {

  const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  return (
    <ResponsiveContainer height="100%" width="100%">
                <ReLineChart width={100} height={100} data={data}>
                    <XAxis dataKey="name" stroke="#8884d8" />
                    {
                    windowWidth <=587? null : <YAxis />
                    }
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Line dataKey="uv" fill="#036ffc"  />
                </ReLineChart>
    </ResponsiveContainer>
  )
}

export default LineChart