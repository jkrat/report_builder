import React, { useState } from 'react';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import TableRenderers from 'react-pivottable/TableRenderers';
import Plot from 'react-plotly.js';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';

const PlotlyRenderers = createPlotlyRenderers(Plot);

const Table = (props) => {
    const [pivotState, setPivotState] = useState(props)

    return (
        <div> 
            <PivotTableUI
                onChange={s => setPivotState(s)}
                renderers={Object.assign({}, TableRenderers, PlotlyRenderers)}
                {...pivotState}
            />
        </div>
    )
}

export default Table;