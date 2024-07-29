import "./App.css";
import Header from "./assets/components/Header";
import AddProject from "./assets/components/AddProject";
export default function App() {
    return (
        <>
            <Header />
            <div className="main-container">
                <AddProject />
            </div>
        </>
    );
}
