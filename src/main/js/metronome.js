const React = require('react');
const Howl = require('howler');
var Metronome = React.createClass({
    getInitialState: function() {
        return {
            tempo: 128
        };
    },

    handleChange: function(e){
        var initTempo = this.state.tempo;
        this.setState({
            tempo: Number(e.target.value)
        });
        if(typeof this.state.tempo !== 'number'){
            this.setState({
               tempo: initTempo
            });
            return alert('Only enter numbers!');
        }

    },

    handleDecrement: function(){
        this.setState({
            tempo: this.state.tempo - 1
        });
    },

    handleIncrement: function(){
      this.setState({
          tempo: this.state.tempo + 1
      });
    },

    render: function(){
       return (
           <div>
               <button type="button" onClick={this.handleDecrement}> - </button>
               <input type="number" value={this.state.tempo} onChange={this.handleChange}/>
               <button type="button" onClick={this.handleIncrement}> + </button>
               <hr/>
               <ButtonContainer tempo={this.state.tempo}/>
           </div>
       );
    }

});

var ButtonContainer = React.createClass({
    handleStartClick: function(){
        var interval =  Math.floor(60 / this.props.tempo * 1000);
        setInterval(function() {
            //play
        }, interval);
    },

    render: function(){
        return (
            <div>
                <button type="button" onClick={this.handleStartClick}>Start</button>
                <button type="button" onClick={this.handleStopClick}>Stop</button>
            </div>
        );
    }
});

React.render(<Metronome />, document.getElementById('gnome'));


