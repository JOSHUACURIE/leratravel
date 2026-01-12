import { createContext,useEffect,useState } from "react";


export type RevenueRecord={
date:string;
amount:number;
};

export type TimeRange="7D"|"30D"|"90D";

type RevenueContextType={
    revenueData:RevenueRecord[];
    timeRange:TimeRange;
    loading:boolean;
    error:string|null;
    changeTimeRange:(range:TimeRange)=>void;
}


export const RevenueContext=createContext<RevenueContextType | undefined>(undefined);


export const RevenueProvider: React.FC<{ children: React.ReactNode}>=({children})=>{
const[revenueData,setRevenueData]=useState<RevenueRecord[]>([]);
const[timeRange,setTimeRange]=useState<TimeRange>("30D");
const[loading,setLoading]=useState(true);
const[error,setError]=useState<string|null>(null);


useEffect(()=>{
    setLoading(true);
    const timer= setTimeout(()=>{

        try{
 const mockData: RevenueRecord[] = [  //am going to simulate real api call to the backend here later
          { date: "2024-01-01", amount: 12000 },
          { date: "2024-01-05", amount: 18000 },
          { date: "2024-01-10", amount: 9000 },
          { date: "2024-01-15", amount: 24000 },
          { date: "2024-01-20", amount: 30000 },
          { date: "2024-01-25", amount: 21000 },
        ];

    setRevenueData(mockData);
    setLoading(false);
}catch{
    setError("Failed to load the data");
    setLoading(false);
}

    },800);

return ()=>clearTimeout(timer);

},[timeRange]);

const changeTimeRange=(range:TimeRange)=>setTimeRange(range);


return(
    <RevenueContext.Provider
      value={{ revenueData, timeRange, loading, error, changeTimeRange }}
    >
{children}

    </RevenueContext.Provider>
)


}