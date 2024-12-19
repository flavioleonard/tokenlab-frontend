import { Outlet } from "react-router-dom"
import { Wrapper } from "./index.styles.ts"
import { Header } from "../components/Header"

export const DashboardLayout = () => {
    return (
        <>
            <Header />
            <Wrapper>
                <Outlet />
            </Wrapper>
        </>
    )
}