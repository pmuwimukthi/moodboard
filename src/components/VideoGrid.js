export default function VideoGrid({ videos }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '15px',
      padding: '20px',
      minHeight: 'calc(100vh - 120px)', // Dynamic height
      alignItems: 'start'
    }}>
      {videos.map((videoFile, index) => (
        <video
          key={`${videoFile}-${index}`}
          autoPlay
          muted
          loop
          controls
          style={{
            width: '100%',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'scale(1.02)'
            }
          }}
        >
          <source 
            src={`/assets/videos/${videoFile}`} 
            type="video/mp4" 
          />
        </video>
      ))}
    </div>
  );
}
