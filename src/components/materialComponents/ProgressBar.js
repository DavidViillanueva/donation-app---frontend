import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import getPercentage from '../../helpers/getPercentage';



const ProgressBar = ({ amount, actualAmount}) => {

    const useStyles = makeStyles({
        root: {
          width: '100%',
          height: '15px',
          'border-radius': '3px'
        },
        colorPrimary: {
          'background-color': '#00ffcf59'
        },  
        colorSecondary:{
          'background-color': '#4f5a99'
        }
      });

    const classes = useStyles();


    return (
            <LinearProgress 
              variant="determinate" 
              value={ getPercentage(amount,actualAmount) }
              classes={{
                root: classes.root,
                colorPrimary: classes.colorPrimary,
                colorSecondary: classes.colorSecondary
              }}
            />
    )
}

export default ProgressBar;
