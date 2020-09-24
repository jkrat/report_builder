import React, { useState } from 'react';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import TableRenderers from 'react-pivottable/TableRenderers';
import Plot from 'react-plotly.js';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';

const PlotlyRenderers = createPlotlyRenderers(Plot);

const defaultpivotConfig = {
    renderers: Object.assign({}, TableRenderers, PlotlyRenderers),
}

const ReportEdit = (props) => {
    const { data, title, config, updateReportConfig } = props;
    const [pivotState, setPivotState] = useState(config)

    const handleChange = (config) => {
        setPivotState(config)
        updateReportConfig(config);
    };

    return (
        <div style={{display: 'flex', justifyContent: 'center'}} >
            <div>{title}</div> 
            <PivotTableUI
                onChange={s => handleChange(s)}
                data={data}
                {...pivotState}
                {...defaultpivotConfig} 
            />
        </div>
    )
}

export default ReportEdit;