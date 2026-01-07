import './RevenueSnapshot.css'
type RevenueSnapshotProps= {
totalRevenue:number,
averageRevenue:number
}

export const RevenueSnapshot: React.FC<RevenueSnapshotProps>=({totalRevenue,averageRevenue})=>{

    return(
        <div className="analytics-snapshot">


            <div className="snapshot-card">
                <h4>Total Revenue</h4>
                <p>KES {totalRevenue.toLocaleString()}</p>
                
            </div>

            <div className="snapshot-card">
                <h4>Average Revenue</h4>
                <p>KES {averageRevenue.toLocaleString()}</p>

               </div>

        </div>
    )

}