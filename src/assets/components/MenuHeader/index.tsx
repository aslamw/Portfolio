import { Link } from "react-router-dom";

import { BoxMenu,Menu } from "./styles";

export const MenuHeader = ()=>{
    return(
        <BoxMenu>
            <Menu>
                <div className="Box BoxOne"></div>
                <div className="Box BoxTwo"></div>
                <div className="Box BoxTwo"></div>
            </Menu>
        </BoxMenu>
    )
    
}