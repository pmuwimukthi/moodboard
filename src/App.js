import { useState, useEffect } from 'react';
import SidePanel from './components/SidePanel';
import MoodBoard from './components/MoodBoard';

function App() {
  const [moodboards, setMoodboards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);

  useEffect(() => {
    fetch('/moodboards.json')
      .then(response => response.json())
      .then(data => setMoodboards(data.moodboards));
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      minHeight: '100vh',
      backgroundColor: '#1a1a1a',
      color: '#ffffff'
    }}>
      <SidePanel 
        moodboards={moodboards}
        onSelect={setSelectedBoard}
      />
      
      {selectedBoard && (
        <MoodBoard board={selectedBoard} />
      )}
    </div>
  );
}

export default App;
