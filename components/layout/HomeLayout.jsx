import { handleTranslate } from "@/redux/translateSlice";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import ScrollTop from "./ScrollTop";

const HomeLayout = ({ children }) => {
    const dispatch = useDispatch();
    // const translateX = useSelector((state) => state.translate.translateX);
    // const translateY = useSelector((state) => state.translate.translateY);
    const handleMouseMove = (event) => {
        let tX = Math.floor((event.clientX / window.innerWidth) * 40);
        let tY = Math.floor((event.clientY / window.innerHeight) * 40);
        dispatch(handleTranslate({ tX, tY }));
    };
    return (
        <div onMouseMove={handleMouseMove}>
            <Navbar />
            <main>{children}</main>
            <ScrollTop />
        </div>
    );
};

export default HomeLayout;
