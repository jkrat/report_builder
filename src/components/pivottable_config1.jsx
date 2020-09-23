import React from 'react';
import PivotTable from 'react-pivottable/PivotTable';
import 'react-pivottable/pivottable.css';
import TableRenderers from 'react-pivottable/TableRenderers';
import Plot from 'react-plotly.js';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';

const PlotlyRenderers = createPlotlyRenderers(Plot);

const pivotProps = {
    rows: ['id'],
    cols: ['month'],
    aggregatorName: 'Sum',
    vals: ['sales'],
    renderers: Object.assign({}, TableRenderers, PlotlyRenderers),
    rendererName: 'Grouped Column Chart',
    sorters: {},
    plotlyOptions: {width: 900, height: 500},
    plotlyConfig: {},
    tableOptions: {},

}

const Table = (props) => {
    return (
        <div>
            <PivotTable
                {...props} 
                {...pivotProps}
            />
        </div>
    );
}

export default Table; 
