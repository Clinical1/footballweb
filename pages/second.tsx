import './second.scss';
import Article from '../components/article';
import img1 from '../images/img1.png'

const Second =()=>{
    return(
        <>
            <section className='second'>
                <div className='secondtop'>
                    <Article linkclass='a4' classname='img1' link='https://www.thesun.co.uk/sport/21717309/lionel-messi-saudi-arabia-transfer-psg-dad/' image={img1} league='La liga' title='Lionel Messi set to be offered eye-watering £194MILLION-A-YEAR' person='Dylan Terry' date='15 Mar 2023' location='Thes sun'/>
                    <Article linkclass='a4' classname='img1' link='https://www.thesun.co.uk/sport/21717309/lionel-messi-saudi-arabia-transfer-psg-dad/' image={img1} league='La liga' title='Lionel Messi set to be offered eye-watering £194MILLION-A-YEAR' person='Dylan Terry' date='15 Mar 2023' location='Thes sun'/>
                </div>
                <main className='secondmain'>
                    <Article linkclass='a4' classname='img1' link='https://www.thesun.co.uk/sport/21717309/lionel-messi-saudi-arabia-transfer-psg-dad/' image={img1} league='La liga' title='Lionel Messi set to be offered eye-watering £194MILLION-A-YEAR' person='Dylan Terry' date='15 Mar 2023' location='Thes sun'/>
                    <Article linkclass='a4' classname='img1' link='https://www.thesun.co.uk/sport/21717309/lionel-messi-saudi-arabia-transfer-psg-dad/' image={img1} league='La liga' title='Lionel Messi set to be offered eye-watering £194MILLION-A-YEAR' person='Dylan Terry' date='15 Mar 2023' location='Thes sun'/>
                    <Article linkclass='a4' classname='img1' link='https://www.thesun.co.uk/sport/21717309/lionel-messi-saudi-arabia-transfer-psg-dad/' image={img1} league='La liga' title='Lionel Messi set to be offered eye-watering £194MILLION-A-YEAR' person='Dylan Terry' date='15 Mar 2023' location='Thes sun'/>
                </main>
            </section>
        </>
    )
}
export default Second;