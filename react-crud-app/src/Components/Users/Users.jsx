import ManageUser from "./ManageUser";
import Listing from "./Listing";

export default function Users(){
    return(
        <div>
            <div className="row justify-content-center pt-5">
             
                <ManageUser />
            </div>
            <div className="row justify-content-center pt-5">
                <Listing />
            </div>

        </div>
    )
}