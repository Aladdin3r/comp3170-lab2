import './App.css'
import Artist from './components/Artist.jsx';
import Header from './components/Header.jsx';
import { ARTISTS } from './data.js';

function App() {

  const artistDetails = ARTISTS.map(artist => <Artist key={artist.name} artist={artist} />);

  return (
    <div>
      <main>
        <Header/>
        <div className='artistSection'>
          {artistDetails}
        </div>
      </main>
    </div>
  )
}

export default App
