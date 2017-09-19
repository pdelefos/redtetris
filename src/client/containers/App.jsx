import React from 'react';
import HelloWorld from '../components/HelloWorld';
import LyingHasToStop from '../components/LyingHasToStop';

const App = () => {
    return (
    <div>
        {/* <LyingHasToStop /> */}
        {/* <p>(ca sera la musique de fond du lobby)</p> */}
        <HelloWorld name="World, these are props" />
    </div>
    )
}

export default App;