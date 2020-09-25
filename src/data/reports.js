export const reports = [
    {
        title: 'First created',
        dateRane: '',
        order: '0',
        pivotConfig: {
            "rows": [
            "Payer Gender"
            ],
            "cols": [
                "Party Size"
            ],
            "aggregatorName": "Sum",
            "vals": [
                "Tip",
            ],
            "rendererName": "Grouped Column Chart",
            // "sorters": {
            //     "Meal": "ƒ () {}",
            //     "Day of Week": "ƒ () {}"
            // },
            "plotlyOptions": {
                "width": 900,
                "height": 500
            },
            "plotlyConfig": {},
            // "tableOptions": {
            //     "clickCallback": "ƒ clickCallback() {}"
            // },
        },
    },
    {
        title: 'Second created',
        dateRane: '',
        order: '1',
        pivotConfig: {
            "rows": [
            "Payer Gender"
            ],
            "cols": [
                "Party Size"
            ],
            "aggregatorName": "Sum over Sum",
            "vals": [
                "Tip",
                "Total Bill"
            ],
            "rendererName": "Table Heatmap",
            // "sorters": {},
            "plotlyOptions": {
                "width": 900,
                "height": 500
            },
            "plotlyConfig": {},
            // "tableOptions": {},
        },
    },
    {
        title: 'Third created',
        dateRane: '',
        order: '2',
        pivotConfig: {},
    },
];