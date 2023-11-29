import HomeLayout from "@/components/layout/HomeLayout";
import { store } from "@/redux/store";
import "@/styles/animation.css";
import "@/styles/globals.css";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <HomeLayout>
                <Component {...pageProps} />
            </HomeLayout>
        </Provider>
    );
}
