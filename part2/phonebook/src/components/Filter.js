import React from 'react';
import ReactDOM from 'react-dom';

const Filter = (props) => {
    return (
    <form>
        <div>
          filter shown with: <input 
          onChange={props.onChangeHandler}
          />
        </div>
      </form>
    )
}


export default Filter