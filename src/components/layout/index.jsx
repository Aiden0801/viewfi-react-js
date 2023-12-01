import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
    const location = useLocation();
    const publicRoute = ["/dashboard"];
    return (
        <div className="bg-[url('./assets/img/campaign_container.png')] bg-cover w-full h-screen flex items-center flex-col-reverse">
            {publicRoute.includes(location.pathname) ? (
                <Outlet />
            ) : (
                <div className=" w-screen h-screen fixed top-0 left-0 bg-transparent backdrop-blur-sm">
                    <div
                        className="m-auto -translate-y-1/2 overflow-hidden sm:w-[340px] w-full sm:h-fit h-screen bg-white sm:rounded-[25px] rounded-none p-6 pb-0 flex flex-col sm:justify-normal justify-between gap-4"
                        style={{ marginTop: "50vh" }}
                    >
                        <Outlet />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Layout;
