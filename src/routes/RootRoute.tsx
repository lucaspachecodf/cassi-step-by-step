import { Navigate, Route, Routes } from "react-router-dom";
import Accredited from "pages/Accredited";
import WantToBeAccredited from "pages/WantToBeAccredited";
import NewAccreditation from "pages/NewAccreditation";
import NotFound from "pages/NotFound";

const RootRoute = () => {
    return (
        <>            
            <Routes>
                <Route path="/" element={<Navigate replace to="new-accreditation" />} />

                <Route path="/accredited" element={
                    <Accredited />
                } />
                <Route path="/want-to-be-accredited" element={
                    <WantToBeAccredited />
                } />
                <Route path="/new-accreditation" element={
                    <NewAccreditation />
                } />
                <Route path="/:pageName" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default RootRoute