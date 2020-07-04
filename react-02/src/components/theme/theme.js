import React, { useState, useEffect } from 'react';
import ThemeTogglerButton from './theme-toggler-button';
import About from './about';

function Theme() {
    return (
        <div>
            <div>
                <ThemeTogglerButton />
            </div>
            <div>
                <About/>
            </div>
        </div>

    )
}

export default Theme;