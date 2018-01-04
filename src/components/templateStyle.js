import React from 'react';

class TemplateStyle extends React.Component {
    render() {
        return (
            <style>
                {".card-template-" + this.props.template.id}
                {'{'}
                {"margin: 1px;"}
                {"float: left;"}
                {"box-sizing: border-box;"}
                {"-moz-box-sizing: border-box;"}
                {"-webkit-box-sizing: border-box;"}
                {"height: " + this.props.template.height + "px;"}
                {"width: " + this.props.template.width + "px;"}
                {'}'}
            </style>
        )

    }
}

export default TemplateStyle;