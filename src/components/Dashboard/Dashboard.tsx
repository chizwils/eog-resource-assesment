import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';
import {renderLineChart} from './Chart';




const useStyles = makeStyles({
    card: {
      margin: '5% 10%',
    },
    taskBar: {
      backgroundColor: 'silver',
    },
  });






//get 30 minute history of data from NOW
const thirthyMinutesAgo = new Date(Date.now() - 30 * 60000).getTime();

//******ABILITY TO SELECT METRICS
//query to get metrics names for selection
const getMetricsNames =
`
query{
    getMetrics
}
`

//build query from metric input using key metricName and after. 
//passing metric input and thirtyMinutesAgo a Values
const getMetricInputQuery = (metricInput: string[])=>{
    return metricInput.map(metric=>{
        return `{ metricName: ${metric}, after: ${thirthyMinutesAgo}}`
    });
}
//get data with seleted metric
const getData = (metricInputQuery : string[])=>{
    return `
    query{
        getMultipleMeasurements(input: [${metricInputQuery}]){
          metric,
          measurements{
            at,
            metric,
            value,
            unit
            
          }
        }
      }
    `
}
//fetch metrics 


//fetch data



export default () => {
    const classes = useStyles();
   
   
    
        return (
            <Card className={classes.card}>
                
                <h1>Im here</h1>
                {renderLineChart}
                {thirthyMinutesAgo}
            </Card>
        );
    }


