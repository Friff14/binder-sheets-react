import React from "react";
import Binding from './binding';
import flatten from '../utils/flatten';
// import ReactDOM from 'react-dom';


class Card extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.card_data = props.card_data;

        let conditionalBindings = flatten(props.template.flags.map(this.checkConditionalBindings));

        let allBindings = conditionalBindings.concat(
            props.template.bindings
        ).filter(n=>{
            return Boolean(n)
        });

        console.log("All bindings", allBindings);
        this.bindings = allBindings.map(this.add_bindings);

        this.classNames = [
            "card",
            "card-template-" + props.template.id
        ];
    }

    checkConditionalBindings = (flag) => {
        switch(flag.comparisonOperator){
            case '==':
                if (this.card_data[flag.columnIndex] === flag.expectedValue){
                    let returned_bindings = flag.bindings;
                    if (flag.hasOwnProperty("flags")){
                        returned_bindings = returned_bindings.concat(
                            flag.flags.map(this.checkConditionalBindings)
                        );
                    }
                    return returned_bindings;
                }
                break;
            default:
                console.log("Not a valid flag operator");
        }
    };

    bindings = [];

    add_bindings = (binding) => {
        // console.log("Index of binding", index, this);
        return (
            <Binding binding={binding} card_data={this.card_data} key={binding.id}/>
        )
    };


    render() {
        return (
            <div className="card-data-container">
                <div className={this.classNames.join(' ')}>
                    {this.bindings}
                </div>
            </div>
        )
    }
}


export default Card;