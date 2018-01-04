import React from 'react';

class Binding extends React.Component{
    constructor(props){
        super(props);
        this.bindingClasses = [
            "binding",
            "binding-template-" + props.binding.id
        ];
        this.binding = props.binding;
        this.card_data = props.card_data;
        // console.log("This dot card data, sometimes comes out null", this.card_data)
    }
    bindingClasses = [];

    render(){

        if (this.binding.hasOwnProperty('column-index') && this.binding['column-index'] !== null){
            this.binding_text = this.card_data[this.binding['column-index']]
        }
        else if (this.binding['value']){
            this.binding_text = this.binding['value']
        }
        else{
            this.binding_text = ''
        }

        if (this.binding.type === 'text'){
            this.div_contents = this.binding_text;
        }
        else if (this.binding.type === 'image'){
            this.div_contents = <img className={this.binding['fill-style']} src={this.binding_text} alt={this.binding.name}/>;
        }

        return(
            <div className={this.bindingClasses.join(' ')}>
                {this.div_contents}
            </div>
        )
    }
}

export default Binding;