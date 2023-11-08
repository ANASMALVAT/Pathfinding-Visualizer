import React from 'react';
import MatrixComponent from '../matrix/matrixComponent';
import HeaderComponent from '../header/headerComponent';
const MainComponent = () => {

    return(
        <div className=' flex flex-col w-screen h-screen'>
            <HeaderComponent />
            <MatrixComponent />
        </div>
    )

}

export default MainComponent;