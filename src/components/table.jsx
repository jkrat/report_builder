import React, { useState } from 'react';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';

const Table = (props) => {
    const [pivotState, setPivotState] = useState(props)

    return (
        <div> 
            <PivotTableUI
                onChange={s => setPivotState(s)}
                {...pivotState}
            />
        </div>
    )
}

export default Table;