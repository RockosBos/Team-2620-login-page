import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import UserEntry from './Components/UserEntry';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
		<BrowserRouter>
			<Routes>
				<Route path="/adminauth" element={<AdminAuth />} />
			</Routes>
		</BrowserRouter>
      <Header />
      <UserEntry />
    </div>
  );
}

export default App;
