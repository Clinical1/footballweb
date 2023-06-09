import './home.scss';
import Table from '../components/table';
import Smalltable from '../components/smalltable';

type proptypes ={
  results:any;
}

function Home(props:proptypes) {
  const {results} = props

  return (
    <div className='home'>
      <Table results={results}/>
      <div className='secondhalf'>
        <Smalltable/>
        <Smalltable/>
      </div>
    </div>    
  );
}

export default Home;