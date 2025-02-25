export default function SidePanel({ moodboards, onSelect }) {
  return (
    <div style={{
      width: '250px',
      height: '100vh',
      padding: '20px',
      borderRight: '2px solid #2d4059',
      backgroundColor: '#0a0a0a',
      overflowY: 'auto',
      position: 'sticky',
      top: 0
    }}>
      <h3 style={{ 
        color: '#4a90e2', 
        marginBottom: '25px',
        fontSize: '1.3rem'
      }}>
        Mood Boards
      </h3>
      <ul style={{ 
        listStyle: 'none', 
        padding: 0,
        margin: 0
      }}>
        {moodboards.map((board, index) => (
          <li key={index}
            style={{
              padding: '12px',
              cursor: 'pointer',
              margin: '8px 0',
              borderRadius: '6px',
              backgroundColor: '#1a1a1a',
              transition: 'all 0.3s ease',
              ':hover': {
                backgroundColor: '#2d4059',
                transform: 'translateX(5px)'
              }
            }}
            onClick={() => onSelect(board)}
          >
            {board.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
