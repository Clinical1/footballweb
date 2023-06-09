import './table.scss';
import Row from '../components/row';

type proptypes ={
    results:any;
    
}


function Table(props:proptypes) {
    const {results} = props
    
    return (
        <div className='tableframe'>
            <div className='tableheader'>
                <div className='columns'>
                    <div className='numbers'></div>
                    <div className='teams'>Team</div>
                    <div className='played'>Played</div>
                    <div className='won'>Won</div>
                    <div className='draw'>Draw</div>
                    <div className='loss'>Loss</div>
                    <div className='gd'>GD</div>
                    <div className='points'>Points</div>
                </div>
            </div>
            {results.map((res)=>{
                
                    {Object.keys(res.team).map((te)=>{
                        return(             
                           <Row num="1" tea={te.name} pla='35' wo='35' dra='4' los='4' g='3' pon='345'/>   
                        )
                    })}
                
            })}
        </div>
  )
}

export default Table
