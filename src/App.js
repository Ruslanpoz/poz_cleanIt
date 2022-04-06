import PageHeader from './PageHeader'
import RegularlyCleaning from './RegularlyCleaning'
import PageInfo from'./PageInfo'
import DeepCleaning from "./DeepCleaning";
import OfficeCleaning from "./OfficeCleaning";
import WindowsCleaning from "./WindowsCleaning";

function App() {
    return (
        <div className="App">
            <PageHeader/>
            {/*<RegularlyCleaning/>*/}
            {/*<DeepCleaning/>*/}
            {/*<OfficeCleaning/>*/}
            <WindowsCleaning/>
            <PageInfo/>
        </div>
    );
}

export default App;
