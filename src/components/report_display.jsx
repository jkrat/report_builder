import React from 'react';
import PivotTable from 'react-pivottable/PivotTable';
import 'react-pivottable/pivottable.css';
import TableRenderers from 'react-pivottable/TableRenderers';
import Plot from 'react-plotly.js';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';
// import createPlotlyRenderers from '../utilities/custom_renderer';

const PlotlyRenderers = createPlotlyRenderers(Plot);

const defaultpivotConfig = {
    renderers: Object.assign({}, TableRenderers, PlotlyRenderers),
}

const ReportDisplay = (props) => {
    const { data, title, config } = props;

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div>
                <div>{title}</div>
                <PivotTable
                    data={data}
                    {...config}
                    {...defaultpivotConfig}  
                />
            </div>
        </div>
    );
}

export default ReportDisplay; 
