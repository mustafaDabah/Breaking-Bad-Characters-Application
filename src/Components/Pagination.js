import React from 'react';
import ReactPaginate from 'react-paginate';

function Pagination({pageCount , changePage }) {
   
    return (
        <div>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}    
             />
        </div>
    )
}

export default Pagination
