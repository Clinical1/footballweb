import './home.scss';
import Article from '../components/article';
import img from '../images/img.png'
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'

function Home() {
  return (
    <>
      <div className='imgdiv'>
      <Article linkclass='a1' classname='imgwide' link='https://www.liverpool.com/liverpool-fc-news/transfer-news/liverpool-transfer-news-barcelona-bellingham-26526025' image={img} league='Premier league' title='Liverpool transfer news as Jürgen Klopp handed Barcelona chance and new Jude Bellingham twist' person='David Comerford' date='21 Mar 2023' location='liverpool'/>
        <div className='sideimgs'>
            <Article linkclass='a' classname='img1' link='https://www.thesun.co.uk/sport/21717309/lionel-messi-saudi-arabia-transfer-psg-dad/' image={img1} league='Ligue 1' title='Lionel Messi set to be offered eye-watering £194MILLION-A-YEAR' person='Dylan Terry' date='15 Mar 2023' location='Thes sun'/>
            <Article linkclass='a' classname='img1' link='https://www.caughtoffside.com/2023/03/21/psg-make-man-city-star-their-number-one-target-of-the-summer-transfer-window/' image={img2} league='Premier league' title='PSG make Man City star their number one target of the summer transfer window' person='Darren Looney' date='21 Mar 2023' location='caughtoffside'/>
        </div>
      </div>
    
      <div className='breakingnews'>
        <a className='breakinglink' href='https://www.manchestereveningnews.co.uk/sport/football/transfer-news/manchester-united-transfer-news-mbappe-26307087'>Breaking news : Manchester United 'considering' Kylian Mbappe swoop</a>
      </div>
      <div className='imgdiv'>
        <img className='imgwide'/>
        <div className='sideimgs'>
          <img className='img2'/>
        </div>
      </div> 
    </>
  );
}

export default Home;