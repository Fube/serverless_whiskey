import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Landing";
import Navigation from "./Navigation";
import Day from "./Day";
import TaskSubmission from "./TaskSubmission";
function App() {
    return (
        <div className="App">
            <Router>
                <Navigation />
                <div className="mt-5" />
                <Route
                    path="/day/:day"
                    render={({ match }) => (
                        <Day
                            day={new Date(
                                match?.params?.day ?? undefined
                            ).toISOString()}
                        />
                    )}
                />
                <Route exact path="/day">
                    <Day day={new Date().toISOString()} />
                </Route>
                <Route exact path="/task" component={TaskSubmission} />
                <Route exact path="/">
                    <Landing />
                </Route>
            </Router>
        </div>
    );
}

export default App;
