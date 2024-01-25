import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Save } from '@mui/icons-material';

const MediaCard = ({title , description , Id }) => {
  const navigate = useNavigate()

const Save = (event)=>{
  event.stopPropagation()
}

  const Add = ()=>{

    navigate(`product/${Id}`)

  }
  return (
    
    <Box className=' gap-6 ' sx={{alignItems:'center'}}>
    <Card  sx={{ maxWidth: 345 , cursor:'pointer'}} onClick={Add} >
      <CardMedia sx={{width:'200px', height:"200px"}}
    

    
    image='https://i.imgur.com/Y54Bt8J.jpeg'

  />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={Save} size="small">SavePost</Button>
      </CardActions>
    </Card>
    </Box>
    
  );
}
export default MediaCard