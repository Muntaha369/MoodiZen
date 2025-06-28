import React,{useState, useEffect} from 'react'
import { LineChart as ReLineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useData } from './store';

const LineChart = () => {

  const [windowWidth, setWindowWidth] = useState(0);
  const { userData } = useData();
  

    useEffect(() => {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  return (
    <ResponsiveContainer height="100%" width="100%">
                <ReLineChart width={100} height={100} data={userData}>
                    <XAxis dataKey="week" stroke="#8884d8" />
                    {
                    windowWidth <=615? null : <YAxis />
                    }
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="Mood" fill="#036ffc"  />
                </ReLineChart>
    </ResponsiveContainer>
  )
}

export default LineChart