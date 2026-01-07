import './StatsCard.css'

type StatsProps = {
    text: string;
    values: number | string; 
}

export const StartsCard: React.FC<StatsProps> = ({ text, values }) => {
    return (
        <div className="stats-card">
            <p className="stats-label">{text}</p>
            <h2 className="stats-value">{values.toLocaleString()}</h2>
        </div>
    )
}