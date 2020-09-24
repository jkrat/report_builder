import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import ReportEdit from '../components/report_edit';
import ReportDisplay from '../components/report_display';

export const ReportWrapper = (props) => {
    const { data, report } = props;
    const [reportTitle, setReportTitle] = useState(report.title);
    const [reportConfig, setReportConfig] = useState(report.pivotConfig);
    const [unsavedConfigChanges, setUnsavedConfigChanges] = useState(report.pivotConfig);
    const [editMode, setEditMode] = useState(false);

    const handleClick = () => {
        if (editMode) {
            setReportConfig(unsavedConfigChanges)
        }
        setEditMode(!editMode);
    }

    const buttonText = editMode ? 'save' : 'edit'

    const handelConfigUpdate = (newConfig) => {
        setUnsavedConfigChanges(newConfig)
    }

    return (
        <Grid 
            item 
            xs={12}
            alignContent={'center'}
        >
            {editMode 
                ? (
                    <ReportEdit 
                        data={data}
                        title={reportTitle}
                        config={reportConfig}
                        updateReportConfig={handelConfigUpdate}
                    />) 
                : (
                    <ReportDisplay 
                        data={data}
                        title={reportTitle}
                        config={reportConfig}
                    />)}
            <Button 
                variant="contained" 
                onClick={handleClick}
                >
                    {buttonText}
                </Button>
        </Grid>
    );
}