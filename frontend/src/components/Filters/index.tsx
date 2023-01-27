import { Link } from "react-router-dom";
import "./styles.css";

type Props = {
    link: string;
    linkText: string;
}

const Filters = ({ link, linkText }: Props) => {
  return (
    <div className="filters-container records-actions">
      <Link to={link} />
      <button className="action-filters">{linkText}</button>
    </div>
  );
};

export default Filters;
