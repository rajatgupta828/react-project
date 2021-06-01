import react from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {

    console.log("In Chart Component...");
    console.log(props);

    const dataPointsValueArray = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValueArray);


    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint =>
                <ChartBar value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} key={dataPoint.label} />
            )}
        </div>
    )
};

export default Chart;