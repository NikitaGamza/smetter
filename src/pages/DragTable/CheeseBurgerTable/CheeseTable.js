import React, {useState} from 'react'
import { MdDragIndicator } from "react-icons/md";
import { FiXCircle } from "react-icons/fi";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import tableData from "./cheeseData.json";
import {AiOutlinePlus} from "react-icons/ai"

const CheeseTable = () => {
    const [tableInfo, setTable] = useState(tableData.recipe);

    const handleDragEnd = (results) => {
        if (!results.destination) return
        let tempData = [...tableInfo.recipe.data]
        let [selectedRow] = tempData.splice(results.source.index, 1)
        tempData.splice(results.destination.index, 0, selectedRow)
        setTable(tempData)
    }

    return (
        <>
            {
            tableInfo?.map(function(recipe, index){
                return(
                <form>
                <div className='content__header'>
                    <h1 className='content__header__title'>{recipe.head}</h1>
                    <FiXCircle className='content__del' />
                </div>
                <div className='row__center'>
                    <button className='content__edit'> 
                        <AiOutlinePlus className='content__edit__sign' /> 
                        Ингредиент
                    </button>
                    <button className='content__edit'> 
                        <AiOutlinePlus className='content__edit__sign' /> 
                        Группа
                    </button>
                </div>
                <DragDropContext onDragEnd={(results) => handleDragEnd(results)}>
                    <table align='left'>
                    <thead align='left'>
                         <tr>
                             <th></th>
                             <th><input type="checkbox" id={`mainCheckbox${recipe.key}`} /></th>
                             <th>Название</th>
                             <th>Вес</th>
                             <th>Ккал</th>
                             <th>Примечание</th>
                             <th></th>
                         </tr>
                    </thead>
                    {recipe.data?.map(function(dataRec, index) {
                        return(
                    <Droppable droppableId={`tbody${dataRec.key}`}>
                    {
                    (provided) => (
                    <tbody ref={provided.innerRef} {...provided.droppableProps}>
                            <Draggable draggableId={`draggable-${dataRec.key}`} index={index} key={dataRec.key}>
                            {
                                (provided) => (
                                <>
                                <tr ref={provided.innerRef} {...provided.draggableProps}>
                                    <td {...provided.dragHandleProps}>
                                        <MdDragIndicator />
                                    </td>
                                    <td>
                                        <input type="checkbox" id={`${recipe.key}chilCheckbox${dataRec.key}`}/>
                                    </td>
                                    <td contenteditable="true">
                                        {dataRec.title}
                                    </td>
                                    <td>
                                        {dataRec.weight}
                                    </td>
                                    <td>
                                        {dataRec.kkal}
                                    </td>
                                    <td>
                                        {dataRec.note}
                                    </td>
                                    <td>
                                        <FiXCircle />
                                    </td>
                                </tr>
                                {dataRec.kit && dataRec.kit.map(dataKit => {
                                    return(
                                    <tr className='table__kit'>
                                        <td>
                                            {/* <MdDragIndicator /> */}
                                        </td>
                                        <td>
                                            <input type="checkbox"/>
                                        </td>
                                        <td contenteditable="true">
                                            {dataKit.title} 
                                        </td>
                                        <td>
                                            {dataKit.weight} 
                                        </td>
                                        <td>
                                            {dataKit.kkal} 
                                        </td>
                                        <td>
                                            {dataKit.note} 
                                        </td>
                                        <td>
                                            <FiXCircle />
                                        </td>
                                    </tr>
                                    )})}
                                </>
                                )
                            }
                            </Draggable>
                    </tbody>
                    )}
                    </Droppable>
                      )})}
                    </table>
                </DragDropContext>
                </form>
                )
            })
            }
        </>
        )
}

export default CheeseTable
