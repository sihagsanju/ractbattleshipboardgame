import React, { Component } from 'react';
import "./style.css";

var exactHit = 0;
let hit = 0;
export default class GameBoard extends Component {

    constructor(props) {
        super(props)
        this.state = {

            whoseTurn: null,
            gameOver: false,
            winner: null,
            value: "",
            value1: ""
        }
    }
    switchTurn() {
        this.setState({
            whoseTurn: this.getOtherPlayer()
        })
    }
    getOtherPlayer() {
        return (this.state.whoseTurn === this.state.value) ? this.state.value1 : this.state.value;
    }
    renderSquareboard1(row, col, counter) {
        return (

            <div className="empty" onClick={() => this.firstplayer(row, col, counter)} id={counter} ></div>
        );
    }
    renderSquareboard2(row, col, counter1) {
        return (
            <div className="emptyone" onClick={() => this.secondplayer(row, col, counter1)} id={counter1} ></div>
        );
    }
    handleChangename1(event) {
        this.setState({
            value: event.target.value,
            whoseTurn: this.state.value
        });

    }
    handleChangename2(event) {
        this.setState({
            value1: event.target.value,

        });
    }
    render() {
        let rows = [];
        let colms = [];
        let counter = 0;
        let cnt = 1;
        for (let row = 0; row < 5; row++) {
            let thisRow = [];
            let thisrow2 = [];
            for (let col = 0; col < 5; col++) {
                let square = this.renderSquareboard1(row, col, counter);
                let square1 = this.renderSquareboard2(row, col, cnt);
                counter += 2;
                cnt += 4;
                thisRow.push(square);
                thisrow2.push(square1);
            }
            rows.push(<div className="game-row">{thisRow}</div>);
            colms.push(<div className="game-row">{thisrow2}</div>);
        }
        return (
            <div>
                <div className="first">
                
                    <input type="text" id="player1" onChange={this.handleChangename1.bind(this)} placeholder="enter player name"></input>
                    <Content className="first" rows={rows} />
                </div>
                {/* <content /> */}
                <br></br>
                <div className="second">
                  
                    <input type="text" id="player2" onChange={this.handleChangename2.bind(this)} placeholder="enter player name"></input>
                    <Contentcol colms={colms} />
                </div>
                {/* <div class="second">{colms}</div> */}
                <div className="text">
                    <h1>Player {this.state.whoseTurn}'s turn</h1>
                    {(!this.gameOver) ? <button onClick={() => this.switchTurn()}>Start / Next Player</button> : ''}
                    {this.gameOver ? <h1>Player {this.state.winner} wins!</h1> : ''}
                    <button
                        name="Reset"
                        onClick={() => this.reset()}>Reset</button>
                </div>
            </div>
        );
    }
    reset() {
        document.getElementsByTagName('body');
        window.location.reload();
    }
    firstplayer(row, col, counter) {

        if (this.state.whoseTurn === this.state.value && (!this.state.gameOver)) {
            this.setState({ whoseTurn: this.state.value1 });
            const shipPlaced = [[1, 4], [2, 4], [3, 4]];
            let newHitPlace = [row, col];
            let isHit = false;
            for (var i = 0; i < 3; i++) {
                if (shipPlaced[i][0] === newHitPlace[0] && shipPlaced[i][1] === newHitPlace[1]) {
                    this.setState({ whoseTurn: this.state.value });
                    isHit = true;
                    exactHit += 1;
                }
            }


            if (isHit) {

                document.getElementById(counter).style.background = 'red';
                alert("hit")
                if (exactHit === shipPlaced.length) {
                    this.setState({
                        noOfTrials: 6,
                        gameOver: true,
                        winner: this.state.whoseTurn
                    });
                    alert("you hit a ship");
                    alert("Player  " + this.state.whoseTurn + " is Winner");


                }

            }
            else {
                document.getElementById(counter).style.background = 'black';
                alert("miss");
                this.setState({ whoseTurn: this.state.value1 });
            }
        }
        else {
            if (this.state.gameOver) {
                alert("game Over");
            }
            else {
                alert("not your turn");
            }
        }
    }

    secondplayer(row, col, counter1) {

        if (this.state.whoseTurn === this.state.value1 && (!this.state.gameOver)) {
            this.setState({ whoseTurn: this.state.value });
            let ship = [[2, 2], [2, 3], [2, 4]];
            let HitPlace = [row, col];
            let isHit = false;
            for (var i = 0; i < 3; i++) {
                if (ship[i][0] === HitPlace[0] && ship[i][1] === HitPlace[1]) {
                    this.setState({ whoseTurn: this.state.value1 });
                    isHit = true;
                    hit += 1;
                }
            }
            if (isHit) {
                document.getElementById(counter1).style.background = 'red';
                alert("hit")
                if (hit === ship.length) {
                    this.setState({
                        noOfTrials: 6,
                        gameOver: true,
                        winner: this.state.whoseTurn
                    });
                    alert("you hit a ship");
                    alert("Player  " + this.state.whoseTurn + "  is Winner");
                    if (this.state.gameOver) { alert("game over"); this.resize(); }
                }

            }
            else {
                document.getElementById(counter1).style.background = 'black';
                alert("miss");
                this.setState({ whoseTurn: this.state.value });
                document.getElementsByTagName("h1").innerHTML = "player" + this.state.whoseTurn + " Turn's";

            }
        }
        else {
            if (this.state.gameOver) {
                alert("Game Over");
                this.reset();
            }
            else {
                alert("it's not your turn");
            }
        }
    }
}
class Content extends Component {

    render() {
        console.log("xxx")
        return (
            <div>{this.props.rows}</div>
        );
    }
}
class Contentcol extends Component {

    render() {
        return (
            <div>{this.props.colms}</div>
        );
    }
}


