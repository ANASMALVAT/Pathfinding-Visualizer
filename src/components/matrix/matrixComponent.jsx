import React, { useEffect } from 'react';
import CellComponent from '../cell/cellComponent';


const MatrixComponent = () => {

    let matrix = [];
   
    for(let i = 0; i < 20; i++ ){
        for(let j = 0 ; j < 45 ; j ++){
            const dimensions = { i,j };
            matrix.push(dimensions);
        }
    }


    return (
        <div className='grid grid-cols-45  m-auto w-[97vw] h-[80vh] p-2'>
            {matrix.map((dimensions,index) => {
                return (
                    <CellComponent dimensions={dimensions}/>
                )
            })}
        </div>
    );
};

export default MatrixComponent;
