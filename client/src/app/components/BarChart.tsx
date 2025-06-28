import React,{useState, useEffect} from 'react'
import { BarChart as ReBarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useData } from './store';


const BarChart = () => {

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
                <ReBarChart width={100} height={100} data={userData}>
                    <XAxis dataKey="week" stroke="#8884d8" />
                    {
                    windowWidth <=630? null : <YAxis />
                    }
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="Mood" fill="#036ffc" barSize={windowWidth <=630? 40 : 70} />
                </ReBarChart>
    </ResponsiveContainer>
  )
}

export default BarChart