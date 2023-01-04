import React, {useState, useEffect} from 'react'
import './stick.scss'

const SecondMenu = () => {
  const [stickyClass, setStickyClass] = useState('relative');

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 200 ? setStickyClass('stick') : setStickyClass('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
    }, []
  );

    const navigation = [
        {key: '1', title: 'Рецепты', link: '/recipes'}, 
        {key: '2', title: 'Время приготовления', link: '/time'},
        {key: '3', title: 'Подача', link: '/supply'},
    ]
  return (
    <div className={`menu__down ${stickyClass}`}>
        {
            navigation.map(function(item){
                return(
                    <a className="menu__down__link" href={item.link} key={item.key}>{item.title}</a>
                )
            }
            )
        }
    </div>
  )
}

export default SecondMenu
