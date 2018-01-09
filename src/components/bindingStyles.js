import React from 'react';

class BindingStyles extends React.Component {
    constructor(props) {
        super(props);
        this.styles = props.bindings.map(BindingStyles.createBindingStyle);
    }

    styles = [];

    static createBindingStyle(binding) {
        if (binding.type === 'flag') {
            return;
        }
        let declarations = {
            "left": binding.x + "px",
            "top": binding.y + "px",
            "width": binding.width + "px",
            "height": binding.height + "px",
            "text-align": binding.align,
            "font-weight": binding.hasOwnProperty("font-weight") ? binding['font-weight'] : "normal",
            "color": binding.hasOwnProperty("color") ? binding['color'] : '#000000',
            "-webkit-text-stroke": binding.hasOwnProperty("stroke") ? binding['stroke'] : "0"
        };
        if (binding.type === 'text') {
            declarations = Object.assign(
                declarations,
                {
                    "font-family": binding.font,
                    "font-size": binding['font-size']
                }
            )
        }
        else if (binding.type === 'image'){
            declarations = Object.assign(
                declarations,
                {
                    "z-index": -1
                }
            )
        }
        return BindingStyles.convertDeclarationsToCssRuleset(declarations, binding.id);
    }

    static convertDeclarationsToCssRuleset(declarations, binding_id) {
        console.log(Object.entries(declarations));
        let compiled_declarations = Object.entries(declarations).map(entry => {
            return entry[0] + ': ' + entry[1] + ';\n';
        });
        console.log("Compiled declarations", compiled_declarations);
        return (
            <style key={binding_id}>

                {'.binding-template-' + binding_id } {'{'}
                {compiled_declarations}
            {'}'}
            </style>
        )
    }

    render() {
        return (
            <div>
                {this.styles}
            </div>
        )
    }
}

export default BindingStyles;
