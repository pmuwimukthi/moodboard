export default function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        marginTop: '20px'
      }}>
        <button
          onClick={() => onPageChange(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          style={paginationButtonStyle}
        >
          Previous
        </button>
        
        <span style={{ 
          color: '#4a90e2',
          padding: '8px 16px'
        }}>
          Page {currentPage} of {totalPages}
        </span>
  
        <button
          onClick={() => onPageChange(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          style={paginationButtonStyle}
        >
          Next
        </button>
      </div>
    );
  }
  
  const paginationButtonStyle = {
    backgroundColor: '#2d4059',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    ':hover:not(:disabled)': {
      backgroundColor: '#4a90e2'
    },
    ':disabled': {
      opacity: 0.5,
      cursor: 'not-allowed'
    }
  };
  