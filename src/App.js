import NavBar from './components/NavBar';
import FootBar from './components/FootBar';
import './App.css';
import 'firebase/firestore';
import 'firebase/auth';
import Chat from './components/Chat';
import {useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

function App() {
  const [user] = useAuthState(auth)
  return (
    <div>
      <NavBar />
      
      {user && <Chat/>}

      <FootBar />
    </div>
  );
}

export default App;
