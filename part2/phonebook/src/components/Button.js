import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios'

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
export default Button