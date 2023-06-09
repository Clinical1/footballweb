import './smalltable.scss';
import Smallrow from '../components/smallrow';

function Smalltable() {
    return (
        <div className='smalltableframe'>
            <div className='tableheader'>
                <div className='smallcolumns'>
                    <div className='numbers'></div>
                    <div className='teams'>Name</div>
                    <div className='played'>Goals</div>
                    <div className='won'>Assits</div>
                    <div className='draw'>Played</div>
                    <div className='loss'>Mins played</div>
                </div>
            </div>
            <Smallrow num="1" tea='man utd' pla='35' wo='35' dra='4' los='4' />
            <Smallrow num="2" tea='man utd' pla='35' wo='35' dra='4' los='4' />
            <Smallrow num="3" tea='man utd' pla='35' wo='35' dra='4' los='4' />
            <Smallrow num="4" tea='man utd' pla='35' wo='35' dra='4' los='4' />
            <Smallrow num="5" tea='man utd' pla='35' wo='35' dra='4' los='4' />
            <Smallrow num="6" tea='man utd' pla='35' wo='35' dra='4' los='4' />
            <Smallrow num="7" tea='man utd' pla='35' wo='35' dra='4' los='4' />
            <Smallrow num="8" tea='man utd' pla='35' wo='35' dra='4' los='4' />
            <Smallrow num="9" tea='man utd' pla='35' wo='35' dra='4' los='4' />
        </div>
    )
}

export default Smalltable