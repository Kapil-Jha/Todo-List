import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ThemeOptions, CardActionArea } from '@mui/material';
import { Grid } from '@mui/material';
import { useLocation } from 'react-router-dom'


export const themeOptions = {
  palette: {
    type: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#000000',
      paper: '#78909c',
    },
  },
};


export default function ToDoCard(props) {
  // const {data} = props?.location?.state
  const location = useLocation()
  const { data } = location.state
  return (
    <Grid item xs={4}>
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
              {data.title}
              <br/>
          User ID : {data.id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Is completed : {data.completed}
        </Typography>
      </CardContent>
    </CardActionArea>
      </Card>
      </Grid>
  );
}
