const React = require("react");
const $ = require("jquery");

/* eslint no-unused-vars: 0 */
const App = React.createClass({
    render() {
        return (
            <div>

                <h1>Hello {this.state.name}</h1>
            </div>
        );
    },

    getInitialState() {
        return {name: "World"};
    },

    componentDidMount() {
        $.ajax({
            url: 'hello',
            data: {name: 'React'}
        }).done(json => {
            this.setState({name: json.name});
        });
    }
});



React.render(
    <App/>,
    document.getElementById('app')
);