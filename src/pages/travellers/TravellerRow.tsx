
import { useState } from "react"
export const TravellerRow=()=>{
const [isModal,isModalOpen]=useState(false);

    return(
        <div className="traveller-row">
            <button>Edit</button>
            <button>Delete</button>
            <button>Update Status</button>
        </div>
    )
}