import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { useSelector , useDispatch } from 'react-redux';
import triangle from "../../assets/triangle.svg";
import circle from "../../assets/circle.svg"
import "./styles/cellComponent.css"

const CellComponent = ({dimensions}) => {
    const startNode = useSelector((state) => state.startNodeSlice.startNode);
    const endNode = useSelector((state) => state.endNodeSlice.endNode);

    const [isStartNode, setStartNode] = useState(dimensions.i === startNode.row && dimensions.j === startNode.col);
    const [isEndNode, setEndNode] = useState(dimensions.i === endNode.row && dimensions.j === endNode.col);
    const [isWall,setWall] = useState(false);
    const [isUnvisited,setisUnvisited] = useState(false);
    const [isVisisted,setIsVisisted] = useState(false);

    const activateStart = () => {
        
    }

    return (
        <div className={`cell flex relative m-[0.5px]  bg-[#626EE3] items-center justify-center`}>
            {
                isStartNode && <img onClick={activateStart} className=' img rotate-90 h-2 scale-[2.5]' src={triangle}></img>
            }
            {
                isEndNode &&  <img className=' img rotate-90 h-2 scale-[2.5]' src={circle}></img>
            }
        </div>
    )

}

export default CellComponent;