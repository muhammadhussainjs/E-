import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MediaCard from '../../components/card/Card'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Usesavepost from '../../context/Context';


const Home = () => {
    const [data , setData] = useState([])
    const {save} = Usesavepost()
    console.log(save);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then((res)=>{
            console.log(res.data);
            data.push(res.data)
            setData(...data)
            
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])
  return (
    <>
    <Box className='text-center d-flex flex-wrap    gap-5 mt-5' sx={{ alignItems:'center', justifyContent:'space-evenly'}}>
    {data.length > 0 ? data.map((item , index)=>{
return <MediaCard   key={item.id} title={item.title.slice(0,20)} description={item.body.slice(0,20)} Id={item.id} />
    }):<Typography variant='h3'>Loading...</Typography>}
    </Box>
    </>
  )
}

export default Home