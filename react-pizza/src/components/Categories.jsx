import React, {useState} from 'react'

export default function Categories() {
  const [activeIndex, setActiveIndex] = useState(0)

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые' ]

  const onClickCategory = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className="categories">
      <ul>
        {
          categories.map((value, idx) => (
            <li key={idx} onClick={() => onClickCategory(idx)} className={activeIndex===idx ? 'active' : ''}>
              {value}
            </li>  
          ) 
          )
        }
      </ul>
    </div>
  );
}