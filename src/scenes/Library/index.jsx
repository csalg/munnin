import React from 'react';
import './styles.scss';
import texts from '../../_mockup_data/state/texts'
import TextInfoRowItem from './components/TextInfoRowItem'


class Library extends React.Component {

    state = {texts: texts}

    render () {
        return <div className="library-wrapper">
            <div className="texts">
                {/* {this.state.texts.map((item) => {return <TextItem props={item} />})} */}
                <table className="texts-list">
                    <thead>
                        <tr>
                            <th><abbr title="Title">Title</abbr></th>
                            <th><abbr title="Average familiarity">Avg. fam.</abbr></th>
                            <th><abbr title="Minimum familiarity">Min. fam.</abbr></th>
                            <th><abbr title="Last accessed">Last accessed</abbr></th>
                            <th><abbr title="Date added">Date added</abbr></th>
                            <th><abbr title="Number of cards">#cards</abbr></th>

                        </tr>
                    </thead>
                    <tbody>
                    {this.state.texts.map((item) => {return <TextInfoRowItem props={item} />})}
                    </tbody>
                </table>


            </div>
        </div>
    }
}

export default Library;