import { useNavigate, useLocation } from 'react-router-dom';

import './pagination.css'
interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

function Pagination ({ currentPage, totalPages } : Readonly<PaginationProps>){
    const navigate = useNavigate();
    const location = useLocation();
  
    const handlePageChange = (newPage: number) => {
      const searchParams = new URLSearchParams(location.search);
      searchParams.set('page', newPage.toString());
      navigate({ search: searchParams.toString() });
    };
  
    const handlePrevious = () => {
      if (currentPage > 1) {
        handlePageChange(currentPage - 1);
      }
    };
  
    const handleNext = () => {
      if (currentPage < totalPages) {
        handlePageChange(currentPage + 1);
      }
    };
  

  return (
    <div className="pagination">
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
