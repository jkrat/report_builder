import React, { useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { data } from '../data/data';
import { reports } from '../data/reports';
import { ReportWrapper } from './report_wrapper';

export const ReportsPage = () => {
    const classes = useStyles();
    const [reportList, setReportList] = useState(reports);

    return (
        <div className={classes.root}>
            <Grid container spacing={9}>
                {reportList.map(report => (
                    <Grid 
                        item 
                        xs={12}
                    >
                        <ReportWrapper 
                            report={report}
                            data={data}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
};

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
});