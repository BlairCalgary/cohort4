import React from 'react';
import { LinkedList } from './index';
import Jdenticon from 'react-jdenticon';
import { ThemeContext } from '../theme/ThemeContext';

function Cards(props) {
    // initialize
    const cardsDiv = [];
    var activeClass = '';
    var cardKey;
    var temp = new LinkedList();
    temp.head = props.list.head;
    temp.tail = props.list.tail;
    temp.length = props.list.length;
    temp.active = props.list.active;
    temp.total = props.list.total;

    if (props.list.head) {
        var currentCard = temp.head;
        if (currentCard === temp.active) { activeClass = "activeCard" };


        cardKey = currentCard.key.substr(currentCard.key.length - 5);
        console.log(cardKey);
        cardsDiv.push(
            <div key={cardKey} className={"nodeCard " + activeClass}>
                <Jdenticon size="80" value={cardKey} /> {/*value={currentCard.name+currentCard.str}*/}
                {currentCard.name}<br />
                {currentCard.str}
            </div>
        );
        activeClass = '';
        var lastCard = currentCard;
        for (var x = 1; x < temp.length; x++) {
            currentCard = lastCard.next
            if (currentCard === temp.active) { activeClass = "activeCard" };
            cardKey = currentCard.key.substr(currentCard.key.length - 5);
            console.log(cardKey);

            cardsDiv.push(
                <div key={cardKey} className={"nodeCard " + activeClass}>
                    <Jdenticon size="80" value={cardKey} />
                    {currentCard.name}<br />
                    {currentCard.str}
                </div>
            );
            lastCard = currentCard;
            activeClass = '';
        }
    }

    if (props.list.length > 0) {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;

                return (
                    <div style={{ fontSize: "medium" }} >
                        # of Cards: {props.list.length}{' | '}
                    Total Strength: {props.list.total}<br></br>

                        <div className="cardContainer" style={{background: theme.bg}}>
                            {cardsDiv}
                        </div>
                    </div>
                )
            }}
            </ThemeContext.Consumer>

        )

    } else {
        return (
            <div>

            </div>
        )
    }
}
export { Cards };