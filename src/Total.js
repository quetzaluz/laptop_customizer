import React, {Component} from 'react';
import './App.css';

class Total extends Component{
    render(){
        return(
            <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
              {USCurrencyFormat.format(total)}
            </div>
          </div>
        )
    }
}
export default Total