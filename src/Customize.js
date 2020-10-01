import React, {Component} from 'react';
import './App.css';
import slugify from 'slugify';

class Customize extends Component{
    render() {
          const options = this.props.features[this.props.selected].map(item => {
            const itemHash = slugify(JSON.stringify(item.name));
            return (
              <div key={itemHash} className="feature__item">
                <input
                  type="radio"f
                  id={itemHash}
                  className="feature__option"
                  name={slugify(item.name)}
                  checked={item.name === this.props.features[this.props.selected].name}
                  onChange={e => this.props.updateFeature(this.props.feature, item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                  {item.name} ({this.props.currencyFormat.format(item.cost)})
                </label>
              </div>
            );
          });
    
          return (
            <fieldset className="feature">
              <legend className="feature__name">
                <h3>{this.props.feature.name}</h3>
              </legend>
              {options}
            </fieldset>
          );
        }
}
    
        
    
       
    
         
        
    


export default Customize