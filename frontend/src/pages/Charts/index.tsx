import Filters from '../../components/Filters';
import './styles.css';

const Charts = () => {
    return (
        <div className='page-container'>
            <Filters  link='/records' linkText='VER TABELA'/>
            <div className='chart-container'>
                <div className='top-related'>
                    <h1 className='top-related-title'>
                        Jogos mais votados
                    </h1>
                    <div className='games-container'>
                        <h1>chart1</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Charts;
