import React from 'react';
import './styles.scss';
import cards from '../../../../_mockup_data/state/cards'
import Screenshot from '../../../../_mockup_data/img/1.png'
import familiarityToColor from '../../../../common/helpers/familiarityToColor'
var tokenizer = require('node-tokenizer');

class Study extends React.Component {

    state = cards[0]

    findFamiliarity = (token) => {
      for (let word of this.state.front.words) {
        if (word.word == token) return word.familiarity;
      }
      console.log( this.state.front.words)
      return 1;
    }
    
    underlineFamiliarityInWords = (token) => {
      let familiarity = this.findFamiliarity(token)
      if (familiarity == 1) return <span className="token">{token}</span>
  
      let familiarStyle = {
        borderBottom: `1px solid ${familiarityToColor(familiarity)}`
      }
      
      return <span className="token" style={familiarStyle}>{token}</span>
  
    }
    
  
    render () {
        
        let tokens = tokenize(this.state.front.text);

        return (
            <div className="reader-study">
                <div className="card-content">
                <div className="card-inner card-front">
                <div className="card-inner-content">

                    <img src={Screenshot} alt="" class="screenshot"/>
                    <div className="target-text">{tokens.map(this.underlineFamiliarityInWords)}</div>
                    
                </div>
                </div>
                <div className="card-inner card-back">
                <div className="card-inner-content">

                Reveal translation?


            <label class="card-answer-radio" for="rdo1">
            <input type="radio"></input>
            <span ></span>
            <span>Yes [,]</span>
            </label>

        <label class="card-answer-radio" for="rdo1">
            <input type="radio"></input>
            <span ></span>
            <span>No [.]</span>
        </label>
                </div>
                </div>
            </div>

            <div className="card-actions">
                <div className="card-actions-feedback">

                </div>
            </div>
        </div>
        );
    }
}

const tokenize = (text) => {
    tokenizer.debug = true;
    tokenizer.rule('newline', /^\n/);
    tokenizer.rule('word', /^[A-Za-zÀ-ÖØ-öø-ÿ]+/);
    tokenizer.rule('alphanumeric character', /^\w+/);
    tokenizer.rule('non-alphanumeric character', /^\W+/);
    return tokenizer.tokenize(text);
  }
  

export default Study;