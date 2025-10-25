import HorizontalLine from '../HorizontalLine/HorizontalLine'
import s from './NewsSlider.module.css'


const NewsSlider = (params) => {
  const data = [
    {
      date: 'Октябрь // 2022',
      img: 'src/assets/main/news/Rectangle 5.png',
      name: 'Marianna Korzhimanova',
      text: 'Latest Magazine'
    },
    {
      date: 'Сентябрь // 2022',
      img: 'src/assets/main/news/Rectangle 1997.png',
      name: 'Nastya Koteneva',
      text: 'Latest Magazine'
    },
    {
      date: 'Август // 2022',
      img: 'src/assets/main/news/Rectangle 1998.png',
      name: 'Tanya Reutt',
      text: 'Latest Magazine'
    },
    {
      date: 'Август // 2022',
      img: 'src/assets/main/news/Rectangle 2006.png',
      name: 'Nastya Koteneva',
      text: 'Latest Magazine'
    },
  ]

  return (
    <div className={s.NewsSlider}>
      <HorizontalLine/>
          
      <div className={s.NewsSlider__container}>
        {data.map((item, index) => (
          <div key={index} className={s.NewsSlider__card}>
            <p className={s.card__date}>{item.date}</p>
            <img className={s.card__img} src={item.img} alt="img" />
            <h3 className={s.card__name}>{item.name}</h3>
            <p className={s.card__text}>{item.text}</p>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default NewsSlider