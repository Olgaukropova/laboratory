import './Main.css';
import license from '../images/2023-10-20_19-41-17.png';
import license2 from '../images/2023-10-20_19-41-50.png';
import license3 from '../images/2023-10-20_19-42-10.png';
// import { YMaps, Map} from '@pbe/react-yandex-maps';

function Main() {
  return (
    <>
      <section className="heading">
        <h2 className='heading__name'>ООО "Электросетьстрой"</h2>
        <h1 className='heading__title'>Электроизмерительная лаборатория</h1>
        <h2 className='heading__subtitle'>Измерения и испытания в элетроустановках</h2>
        <h3 className="heading__text">Работаем по г.Рязани и Рязанской области</h3>
        <div className="heading__info">
          <div className='heading__info_name'>
            <p >Технический отдел: Ильин Андрей Игоревич</p>
          </div>
          <p className="">8 910 643 96 78</p>
        </div>
      </section>

      <section className="photo">
        <img src="" alt="" />
        <img src="" alt="" />
      </section>

      <section className='services'>
        <div className='services__element services__elemen-diagnostics'>
          <h2>Диагностика электрооборудования</h2>
          <p>Передвижная электроизмерительная лаборатория с
            переносным комплектом приборов (ЭТЛ) выполняет широкий спектр
            работ по испытаниям и измерениям в электроустановках, наладке и
            диагностике различного электрооборудования.</p>
        </div>
        <div className='services__element services__elemen-problem'>
          <h2>Определение неисправностей</h2>
          <p>В процессе испытаний и измерений, специалисты ЭТЛ
            выявляют пригодность электрооборудования и кабельных систем к
            дальнейшей эксплуатации, определяют неисправности в
            электроустановках и предупреждают о возможных последствиях.
          </p>
        </div>
        <div className='services__element services__elemen-report'>
          <h2>Составление отчёта</h2>
          <p>По результатам измерений и испытаний,
            специалистами ЭТЛ составляются соответствующие протоколы.
            Документы формируются в технический отчёт, в котором отражается
            техническое состояние и соответствие нормативным актам
            электрооборудования и кабельных систем проверенных
            электроустановок. Отчёт выдаётся заказчику для предъявления по
            требованию.</p>
        </div>
      </section>

      <section className='trials'>
        <h2>Наша электроизмерительная лаборатория
          проводит следующие виды испытаний и измерений:</h2>
        <ol className='trials__list'>
          <li> Проверка соответсвия смонтированной электроустановки требованиям нормативной и проектной документации (визуальный осмотр электроустановок).</li>
          <li> Измерение сопротивления заземляющих устройств.</li>
          <li>Измерение сопротивления цепи между заземлителями и заземляемыми элементами.</li>
          <li>Измерение сопротивления изоляции обесточенных электрических цепей.</li>
          <li>Измерение сопротивления петли "Фаза-нуль".</li>
          <li>Измерение парметров УЗО.</li>
          <li>Проверка срабатывания автоматических выключателей до 1000В.</li>
          <li>Проверка на работоспрособность устройств автоматического включения резервного питания (АВР).</li>
          <li>Испытания силовых трансформаторов напряжением до 10кВ, мощностью до 2500кВА.</li>
          <li>Испытнаия измерительных трансформаторов напряжением до 10кВ.</li>
          <li>Испытание повышенным напряжением электрооборудования напряжением до 10кВ.</li>
          <li>Испытание кабельных линий напряжением до 10кВ.</li>
          <li>Испытание разрядников напряжением до 10кВ.</li>
          <li>Испытание силовых конденсаторов.</li>
          <li>Испытание изоляторов, линейной арматуры и других элементов линий электропередачи  и подстанций, напряжение до 110кВт.</li>
          <li>Оценка качества трансформаторного масла.</li>
        </ol>
      </section>

      <section className='documents'>
        <p>Технический отчёт по испытаниям электрических сетей и заземляющих устройств включает в себя следующие документы:</p>
        <ul className='documents__list'>
          <li className='documents__list-element'>
            <p className='documents__list-element-number'>1</p>
            <p>Копию подтверждения регистрации электроизмерительной лаборатории.</p>
          </li>
          <li className='documents__list-element'>
            <p className='documents__list-element-number'>2</p>
            <p>Пояснительную записку к протоколам испытаний и измерений.</p>
          </li>
          <li className='documents__list-element'>
            <p className='documents__list-element-number'>3</p>
            <p>Акт визуального осмотра электроустановки на соответствие нормам и правилам.</p>
          </li>
          <li className='documents__list-element'>
            <p className='documents__list-element-number'>4</p>
            <p>Протоколы проведённых испытаний и измерений.</p>
          </li>
          <li className='documents__list-element'>
            <p className='documents__list-element-number'>5</p>
            <p>Заключение.</p>
          </li>
        </ul>
        <div className='documents__images'>
          <img src={license} alt="лицензия" className='documents__image' />
          <img src={license2} alt="лицензия" className='documents__image' />
          <img src={license3} alt="лицензия" className='documents__image' />
        </div>
      </section>



      <section className='address'>
        <h2 className='address__'>ЭЛЕКТРОСЕТЬСТРОЙ</h2>
        <h3>г.Рязань, ул. Прижелезнодорожная, 6А</h3>
        const App = ()  (
        {/* <YMaps>
    <div>My awesome application with maps!</div>
    <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
  </YMaps> */}
        {/* <YMaps>
          <Map width={'100%'} height={800} defaultState={{
            center: [53.21, 38.17],
            zoom: 3,
            controls: ['zoomControl', 'fullscreenControl']
          }}
          />
        
      </YMaps> */}
      );


    </section >
    </>
  );
}

export default Main;
