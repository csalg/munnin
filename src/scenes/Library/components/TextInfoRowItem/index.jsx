import React from 'react';
import './styles.scss';
import familiarityToColor from '../../../../common/helpers/familiarityToColor'

const TextInfoRowItem = (props) => {
    let {name, last_accessed, date_added, number_of_cards, familiarity_avg, familiarity_min} = props.props
    let familiarity_avg_pc = Math.round(familiarity_avg*100)
    let familiarity_min_pc = Math.round(familiarity_min*100)
    return (
        <tr>
            <td>{name}</td>
            <td><ProgressBar percentage={familiarity_avg_pc} />{familiarity_avg_pc}%</td>
            <td><ProgressBar percentage={familiarity_min_pc} />{familiarity_min_pc}%</td>
            <td>{timestampToDate(last_accessed)}</td>
            <td>{timestampToDate(date_added)}</td>
            <td>{number_of_cards}</td>
        </tr>
    )
}

const ProgressBar = ({percentage}) => {
    let style = {
        backgroundColor: familiarityToColor(Math.round(percentage)/100),
        width: `${percentage}%`
    }
    return(
        <div className="progress-bar">
            <div className="progress-bar-inner" style={style}></div>
        </div>
    )
}

const timestampToDate = (timestamp) => {
    var date = new Date(timestamp * 1000);
    return `${date.getFullYear()}\\${date.getMonth()}\\${date.getDay()} ${date.getHours()}:${date.getMinutes()}`
}

export default TextInfoRowItem;