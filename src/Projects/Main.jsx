import React, { useState } from 'react';
import { buttons } from './../Content/data';
import Counter from './counter/Counter';
import TodoCreate from './todo/TodoCreate';
import Cart from './shopping/Cart';
import Note from './note/Note';
import Weather from './weather/Weather';
import FormValidation from './form/FormValidation';

const Main = () => {
    const [active, setActive] = useState(1);

    const handleClick = (value) => {
        setActive(value);
    };

    const renderContent = () => {
        switch (active) {
            case 1:
                return <Counter />;
            case 2:
                return <TodoCreate />;
            case 3:
                return <Cart />;
            case 4:
                return <Note />;
            case 5:
                return <Weather />;
            case 6:
                return <FormValidation />;
            case 7:
                return <Counter />;
            default:
                return <Counter />;
        }
    };

    const activeButtonName = buttons.find(btn => btn.value === active)?.name;

    return (
        <div className='main'>
            <div className="container">
                <div className="top">
                    <h2>{activeButtonName}</h2>
                    {buttons.map((btn, idx) => (
                        <button key={idx} className={active === btn.value ? 'active' : ''} onClick={() => handleClick(btn.value)}>
                            {btn.name}
                        </button>
                    ))}
                </div>
                <div className="content">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default Main;
