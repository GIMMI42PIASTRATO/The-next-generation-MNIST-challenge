import Box from "./components/Box";
import style from "./style/App.module.css";

function App() {
    return (
        <div className={style.appContainer}>
            <div className={style.title}>
                The <span className={style.highlight}>next-generation</span>{" "}
                command line.
            </div>
            <Box />
        </div>
    );
}

export default App;
