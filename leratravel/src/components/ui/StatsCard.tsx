import './StatsCard.css'

type StartsProps={
    text:string;
    values: number;
}

export const StartsCard: React.FC<StartsProps>=({text,values})=>{
    return(
        <div className="stats-card">
    <h1>{text}</h1>
    <h2>{values}</h2>

        </div>
    )
}