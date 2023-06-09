import './smallrow.scss';

type proptypes ={
    num:string;
    tea:string;
    pla:string;
    wo:string;
    dra:string;
    los:string;
    
}

function SmallRow(props:proptypes) {
    const {num,tea,pla,wo,dra,los} = props
    
    return (
            <div className='row'>
                <div className='smallcolumns'>
                    <div className='numbers'>{num}</div>
                    <div className='teams'>{tea}</div>
                    <div className='played'>{pla}</div>
                    <div className='won'>{wo}</div>
                    <div className='draw'>{dra}</div>
                    <div className='loss'>{los}</div>
                    
                </div>
            </div>
       )
    }

export default SmallRow