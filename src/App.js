import { BrowserRouter } from 'react-router-dom';

// import MainComponent from './components/1-Default-Props/MainComponent';
// import UserList from './components/2-UserSearchList/User-List';
// import GoggleSuggestions from './components/3-Google-Search_suggestion/GoogleSuggestion';

// import Feedback from './components/4-Feedback/Feedback';
// import ProjectsList from './components/5-MyProjectsList/Projects-List';
// import Gallery from './components/6-GalleyApp/Gallery-List';

// import ContactApp from './components/7-Contacts-app/ContactApp';
// import CommentsApp from './components/8-CommentsApp/CommentsApp';
// import Appointments from './components/9-AppointmentsApp/Appointments';

import RoutingApp from './components/10-ReactRouting/Appp/apppp';
import WithRouterApp from './components/11-withRouter/AppComponent/Appp';

import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <RoutingApp/>
        </BrowserRouter>

        <BrowserRouter>
          <WithRouterApp/>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
