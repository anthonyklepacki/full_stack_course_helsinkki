import React from 'react';
import ReactDOM from 'react-dom';

const Filter = (props) => {

    return (
        <form>
            <div>
                    find countries: <input 
                    onChange={props.onChangeHandler}

                />
            </div>
        </form>
    )
}

export default Filter