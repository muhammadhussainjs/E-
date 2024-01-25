
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MediaCard from '../../components/card/Card'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';



const Singleproduct = () => {
  const params = useParams()
  console.log(params);
  const [data , setData] = useState(null)

  useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res)=>{
          console.log(res.data);
          setData(res.data)
         
          
      })
      .catch((err)=>{
          console.log(err);
      })
  }, [])
  return (
    <>
    {data ? <MediaCard title={data.body}/> : <Typography variant='h5'>Loading...</Typography>}
</>
  )
}

export default Singleproduct