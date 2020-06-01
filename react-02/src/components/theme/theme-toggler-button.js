import React from 'react';
import { ThemeContext } from './ThemeContext';


// UNDO

class ThemeTogglerButton extends React.Component {
    // static contextType = ThemeContext;
    render() {
        // console.log(this.context);

        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark, toggleTheme } = context;
                const theme = isLightTheme ? light : dark;

                return (
                    <div >
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <div className="q-divBorder" style={{ background: light.ui }}>
                                <div className="divBox" style={{ background: light.bg }}>
                                    Light
                            </div>
                            </div>
                            <div className="q-divBorder" style={{ background: dark.ui }}>
                                <div className="divBox" style={{ background: dark.bg }}>
                                    Dark
                            </div>
                            </div>
                        </div>
                        <div className="divBorder" style={{ background: theme.ui, color: theme.syntax }}>
                            <button className="divBox"
                                onClick={toggleTheme}
                                style={{ background: theme.bg }}>
                                Toggle Theme
                        </button>
                        </div>
                    </div>

                )
            }}
            </ThemeContext.Consumer>

        )

        //     <ThemeContext.Consumer>
        //     {({theme, toggleTheme}) => (
        //         <button
        //             onClick={toggleTheme}
        //             style={{backgroundColor: theme.background}}>
        //             Toggle Theme
        //         </button>
        //     )}
        // </ThemeContext.Consumer>

    }
}

export default ThemeTogglerButton;


// class ThemedButton extends React.Component {
//     render() {
//         let props = this.props;
//         let theme = this.context;
//         return (
//             <button
//                 {...props}
//                 style={{color: theme.color}}
//             />
//         );
//     }
// }
// ThemedButton.contextType = ThemeContext;

// export default ThemedButton;