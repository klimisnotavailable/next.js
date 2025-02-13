import StatisticsItem from "../StatisticsItem/StatisticsItem";
import data from "./data";

const StatisticsList = () => {
    return (
        <ul className={`flex gap-5`}>
            {data.map((item,idx)=>{
                return <StatisticsItem key={idx} idx={idx} data={item.data} position={item.position}/>
            })}
        </ul>
    )
};

export default StatisticsList;