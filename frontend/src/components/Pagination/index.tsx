import "./styles.css";

type Props = {
  totalPages?: number;
  goToPage: Function;
  activePage: number;
};

const Pagination = ({ totalPages = 0, goToPage, activePage }: Props) => {
  const paginationItems = Array.from(Array(totalPages).keys());

  return (
    <div className="pagination-container">
      {paginationItems.map((page) => (
        <button
          className={`pagination-item ${
            activePage === page ? "active" : "inactive"
          }`}
          onClick={() => goToPage(page)}
          key={page}
        >
          {page + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
