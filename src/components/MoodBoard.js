import { useState } from 'react';
import VideoGrid from './VideoGrid';
import Pagination from './Pagination';

const VIDEOS_PER_PAGE = 40;

export default function MoodBoard({ board }) {
  const [currentPage, setCurrentPage] = useState(1);
  const allVideos = board.groups.flatMap(group => 
    group.videos.map(v => v.file)
  );
  
  const totalPages = Math.ceil(allVideos.length / VIDEOS_PER_PAGE);
  const startIndex = (currentPage - 1) * VIDEOS_PER_PAGE;
  const currentVideos = allVideos.slice(startIndex, startIndex + VIDEOS_PER_PAGE);

  return (
    <div style={{ 
      flex: 1,
      padding: '25px',
      backgroundColor: '#1a1a1a',
      overflowY: 'auto'
    }}>
      <h2 style={{ 
        color: '#4a90e2',
        margin: '0 0 30px 0',
        fontSize: '2rem',
        textAlign: 'center'
      }}>
        {board.name}
      </h2>
      
      <VideoGrid videos={currentVideos} />
      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
