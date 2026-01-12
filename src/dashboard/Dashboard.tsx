import { RevenueProvider } from "./analytics/RevenueContext"
import { RevenueAnalytics } from "./analytics/RevenueAnalytics"

export const Dashboards=()=>{
    return(
        <RevenueProvider>
  <RevenueAnalytics />
</RevenueProvider>
    )

}