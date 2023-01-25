import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import { RecordItem, RecordResponse } from "../../types";
import { formDate } from "./helpers";
import "./styles.css";

const BASE_URL = "http://localhost:8080";

const Records = () => {
  const [records, setRecords] = useState<RecordResponse>();
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/records?linesPerPage=12&page=${activePage}`)
      .then((response) => setRecords(response.data));
  }, [activePage]);

  const handlePageChange = (index: number) => {
    setActivePage(index);
  }

  return (
    <div className="page-container">
      <table className="records-table" cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <th>INSTANTE</th>
            <th>NOME</th>
            <th>IDADE</th>
            <th>PLATAFORMA</th>
            <th>GÊNERO</th>
            <th>TÍTULO DO GAME</th>
          </tr>
        </thead>
        <tbody>
          {records?.content.map((record) => (
            <tr key={record.id}>
              <td>{formDate(record.moment)}</td>
              <td>{record.name}</td>
              <td>{record.age}</td>
              <td className="text-secondary">{record.gamePlatform}</td>
              <td>{record.genreName}</td>
              <td className="text-primary">{record.gameTitle}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        totalPages={records?.totalPages}
        goToPage={handlePageChange}
        activePage={activePage}
      />
    </div>
  );
};

export default Records;
