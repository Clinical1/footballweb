import './third.scss';
import Table from '../components/table';
import Smalltable from '../components/smalltable';

type proptypes ={
  teamname:string;
}

const Four =(props:proptypes)=>{
  const {teamname} = props
    return(
        <div className='home'>
            <Table teamname={teamname}/>
          <div className='secondhalf'>
            <Smalltable/>
            <Smalltable/>
          </div>
        </div> 
    )
}
export default Four;