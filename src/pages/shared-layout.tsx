import {Outlet} from "react-router-dom";
import {NavMenu} from "../components/nav/nav-menu";
import {StyledNav} from "./main/main-style";


export const SharedLayout = () => (
    <StyledNav>
        <NavMenu/>
        <Outlet/>
    </StyledNav>
)
