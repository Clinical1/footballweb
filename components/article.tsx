import './article.scss';

type proptypes ={
    classname:string;
    linkclass:string;
    link:string;
    image:string;
    league:string;
    title:string;
    person:string;
    date:string;
    location:string;
}

function Article(props:proptypes) {
    const {classname,linkclass,link,image,league,title,person,date,location} = props
    return (
        <a href={link} className={linkclass}>
            <img className={classname} src={image}/>
            <div className='imgtext'>
                <div className='imgleague'>
                    <p>{league}</p>
                </div>
                <h1 className='imgheader'>{title}</h1>
                <div className='imgbottomdiv'>
                    {/* @ts-ignore */}
                    <div className='imgbottom'><ion-icon name="person"></ion-icon>{person}</div>
                    {/* @ts-ignore */}
                    <div className='imgbottom'><ion-icon name="alarm-sharp"></ion-icon>{date}</div>
                    {/* @ts-ignore */}
                    <div className='imgbottom'><ion-icon name="location-sharp"></ion-icon>{location}</div>
                </div>  
            </div>
        </a>
  )
}

export default Article
