type RevenueChartProps= {
    revenueData:{date:string,amount:number}[];
}


export const RevenueChart: React.FC<RevenueChartProps>=({revenueData})=>{
    return(
        <div className="analytics-charts">
            <h4>Revenue Distribution</h4>

            <ul>
                {revenueData.map((item)=>(
                    <li key={item.date}>
                        <span>{item.date}</span>
                        <strong>KES {item.amount.toLocaleString()}</strong>
                    </li>
                ))}
            </ul>

        </div>
        
    )
}