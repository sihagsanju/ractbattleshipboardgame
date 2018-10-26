import React,{Component} from 'react';
import "./style.css";
import update from 'immutability-helper';
//import { Container, Row, Col } from 'react-grid-system';    alert("ok")

var noOfTrials=0;
let canHit=true;
var exactHit=0;
let hit=0;

export default class GameBoard extends Component{

    constructor(props) {
        super(props)
        this.state = {
            noOfTrials:0,
            whoseTurn: 0,
            gameOver: false,
            winner: null,
        
        }
      }
      switchTurn() {
          this.setState({
            whoseTurn: this.getOtherPlayer()  
          })
      }
      getOtherPlayer() {
        return (this.state.whoseTurn === 0) ? 1 : 0;
      }
    renderSquare(row,col,counter){
         return(

 <div className="empty" onClick={()=>this.test(row,col,counter)} id={counter} ></div>
         );
     } 
     renderSquare1(row,col,counter1)
     {
         return(
   <div className="emptyone" onClick={()=>this.testone(row,col,counter1)} id={counter1} ></div>
         );
     }
    

   render()
   {
    let rows = [];
    let colms=[];
    let counter = 0;
    let cnt = 1;
    for (let row=0; row<5; row++) {
      let thisRow = [];
      let thisrow2 = [];
      for (let col=0; col<5; col++) {
          let square=this.renderSquare(row,col,counter);
          let square1=this.renderSquare1(row,col,cnt);
          counter += 2;
          cnt+=4;
        thisRow.push(square);
        thisrow2.push(square1);
      }
      rows.push(<div  className="game-row">{thisRow}</div>);
      colms.push(<div className="game-row">{thisrow2}</div>);
    }
       return(
           <div>
    {/* <div class="first">{rows}</div> */}
    <Content rows={rows} />
    {/* <content /> */}
    <Contentcol colms={colms} />
    {/* <div class="second">{colms}</div> */}
    <div class="text">
    {/* <h1>Player {this.state.whoseTurn}'s turn</h1> */}
    <h1></h1>
   
     {(!this.gameOver) ? <button onClick={()=>this.switchTurn()}>{ document.getElementsByTagName("h1").innerHTML="player"+this.state.whoseTurn+" Turn's"
}Next Player</button>  : ''}
     {this.gameOver ? <h1>Player {this.state.winner} wins!</h1> : ''}
     <button
      name="Reset"
      onClick={() => this.resize()}>Reset</button>
      </div>
     </div>
                );
         
   
}
resize()
{
  document.getElementsByTagName('body');
  window.location.reload();
}  
test(row,col,counter){
  
    if(this.state.whoseTurn===0){
        document.getElementsByTagName("h1").innerHTML="player"+this.state.whoseTurn+" Turn's";
        this.state.whoseTurn=1;

        // equal+=1;
        // if(equal===equal1){
       
    const shipPlaced=[[1,4],[2,4],[3,4]];
        if(this.state.noOfTrials<5){
            this.setState({noOfTrials:this.state.noOfTrials+1});
            let newHitPlace=[row,col];
            let isHit=false;
            console.log(noOfTrials)
            for(var i=0;i<3;i++){
            if(shipPlaced[i][0]===newHitPlace[0] && shipPlaced[i][1]==newHitPlace[1])
            {
                this.state.whoseTurn=0;
            isHit=true;
            exactHit+=1;
            }
            }
            if(this.state.noOfTrials<5){
                console.log("is true");
                canHit=true;
            }
            else{
                canHit=false;
                console.log(this.state.noOfTrials,canHit);
            }
            
            if(isHit){
              
                document.getElementById(counter).style.background='red';
                alert("hit")
                if(exactHit===shipPlaced.length){
                    this.setState({noOfTrials:6,
                        gameOver:true,
                        winner:this.state.whoseTurn
                    });
                       alert("you hit a ship");
                       let win=(this.state.whoseTurn === 0) ? 1 : 0;
                       alert("Player"+" "+this.state.whoseTurn+" "+"is Winner");
                }
                
            }
                else{
                    document.getElementById(counter).style.background='black';
                    alert("miss");
                    this.state.whoseTurn=1;
                }
        }
        else{
            alert("game Over");
        }
    }
    else{
        alert("not your turn");
    }
// }
//     else{
//         alert("its not your turn");
//     }
}
testone(row,col,counter1){

    if(this.state.whoseTurn===1){
       // document.getElementsByTagName("h1").innerHTML="player"+this.state.whoseTurn+" Turn's";
        this.state.whoseTurn=0;

       
       let ship=[[1,2],[2,3],[3,4]];
       let HitPlace=[row,col];
       let isHit=false;
       for(var i=0;i<3;i++){
       if(ship[i][0]===HitPlace[0] && ship[i][1]===HitPlace[1])
        {
            this.state.whoseTurn=1;
        isHit=true;
        hit+=1;
        }}
        if(isHit){
            document.getElementById(counter1).style.background='red';
            alert("hit")
            if(hit===ship.length){
                this.setState({
                    noOfTrials:6,
                    gameOver:true,
                    winner:this.state.whoseTurn
                });
                   alert("you hit a ship");
                //    let win=(this.state.whoseTurn===1)?0:1;
                   alert("Player "+" "+this.state.whoseTurn+" "+" is Winner");
            }
            
        }
            else{
                document.getElementById(counter1).style.background='black';
                alert("miss");
                this.state.whoseTurn=0;
                document.getElementsByTagName("h1").innerHTML="player"+this.state.whoseTurn+" Turn's";

            }
        }
        else{
            alert("it's not your turn");
        }
   // }
        // else{
        //     alert("it's not your turn");
        // }
    
}
}
    class Content extends Component{
        
        render()
        {console.log("xxx")
            return(
                <div>{this.props.rows}</div>
            );
        }
    }
    class Contentcol extends Component{
        render()
        {
            return(
                <div>{this.props.colms}</div>
            );
        }
    }


