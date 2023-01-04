import React from 'react'
import * as BsIcons from 'react-icons/bs'
import SecondMenu from '../../components/second-menu/SecondMenu'
import { FiXCircle } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import remove from './pics/remove.svg'
import copy from './pics/del.svg'
import CheeseTable from '../DragTable/CheeseBurgerTable/CheeseTable';

const CheeseBurger = () => {
    return (
        <div className='plate'>
            <div className='plate__sequence'>
                <span className='plate__sequence__element'>Рецепты</span>
                <span className='plate__sequence__separator'><BsIcons.BsChevronRight className='plate__sequence__separator' /></span>
                <span className='plate__sequence__element'>Бургеры</span>
                <span className='plate__sequence__separator'><BsIcons.BsChevronRight className='plate__sequence__separator' /></span>
                <span className='plate__sequence__element_active'>Чизбургер</span>
            </div>
            <h1 className='plate__header'>Чизбургер</h1>
            <SecondMenu />
            
            <div className='content'>
    
                <CheeseTable />
                
                
                <button className='content__new'>
                    <AiOutlinePlus className='content__edit__sign' />
                    Новый блок
                </button>
    
                <footer className='footer'>
                    <div className='footer__act'>
                        <button className='footer__btn'>
                            <FiXCircle />
                            Удалить
                        </button>
                        <button className='footer__btn'>
                            <img src={copy} alt="copy" />
                            Копировать
                        </button>
                        <button className='footer__btn'>
                            <img src={remove} alt='remove' />
                            Снять выделения
                        </button>
                    </div>
                    <div className='footer__result'>
                        <p className='footer__result__text'>
                            Выбранные ингредиенты:
                            <span className='footer__result__calc'> 2</span>
                        </p>
                        <span className='footer__separator'>|</span>
                        <p className='footer__result__text'>
                            Общий вес:
                            <span className='footer__result__calc'> 24</span>
                        </p>
                    </div>
                </footer>
            </div>
        </div>
      )
}

export default CheeseBurger
