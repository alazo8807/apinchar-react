import React, {useState, useRef, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 500,
    margin: '0 auto',
    borderRadius: 10,
    marginBottom:5,
    fontWeight: 'bold'
  },
  actions: {
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});



const Timer = (props) => {
  const [mins, setMins] = useState("25");
  const [secs, setSecs] = useState("00");
  const [stopTime, setStopTime] = useState(new Date().getTime() + 25 * 60000)
  
  useEffect(() => {
    const timer = setInterval(() => {
      const time = {};
      const difference = stopTime - new Date().getTime();
      time['minutes'] =  Math.floor((difference / 1000 / 60) % 60);
      time['seconds'] = Math.floor((difference / 1000) % 60);

      setMins(time.minutes);
      setSecs(time.seconds);
    }, 1000);
  });

  const calculateTimeLeft = () => {
    let year = new Date().getTime();
    let difference = (new Date().getTime() + 25 * 60000) - new Date().getTime();
    let timeLeft = {};
  
    if (difference > 0) {
      timeLeft = {
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
  
    return timeLeft;
  }

  const handleStartClick = () => {
  }
  
  const handleStopClick = () => {
  }

  const handleResetClick = () => {
    // clearTimeout(timer);
    setMins(25);
    setSecs("00");
  }

  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent className={classes.content}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h2" component="h1">
          {mins} : {secs}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button size="small" onClick={handleStartClick}>Start</Button>
        <Button size="small" onClick={handleStopClick}>Stop</Button>
        <Button size="small" onClick={handleResetClick}>Reset</Button>
      </CardActions>
    </Card>
  );
}

export default Timer;