import './Main.css'
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
            <p >Технический отдел: ФИО</p>
          </div>
          <p className="">8 900 000 00 00</p>
        </div>
        <a className='heading__link' href="">Контактная информация</a>
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
          <li>Измерение сопротивления петли "Ффза-нуль".</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </section>
    </>
  );
}

export default Main;
