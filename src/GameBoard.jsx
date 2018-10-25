import React,{Component} from 'react';
import "./style.css";
import update from 'immutability-helper';
//import { Container, Row, Col } from 'react-grid-system';    alert("ok")


//import battleship from "./battleshipBoard";
var noOfTrials=0;
let canHit=true;
var exactHit=0;
var player={
    player1:0,
    player2:1
}
const shipPlaced=[[1,4],[2,4],[3,4]];

// function test(row,col,counter){
//     if(noOfTrials<6){
//         noOfTrials+=1;
//         let newHitPlace=[row,col];
//         let isHit=false;
//         console.log(noOfTrials)
//         for(var i=0;i<3;i++){
//         if(shipPlaced[i][0]===newHitPlace[0] && shipPlaced[i][1]==newHitPlace[1])
//         {
//         isHit=true;
//         exactHit+=1;
//         }
//         }
//         if(noOfTrials<5){
//             console.log("is true");
//             canHit=true;
//         }
//         else{
//             canHit=false;
//             console.log(noOfTrials,canHit);
//         }
        
//         if(isHit){
          
//             document.getElementById(counter).style.background='red';
//             alert("hit")
//             if(exactHit===shipPlaced.length){
//                 this.setState
//                 noOfTrials=6;
//                    alert("you hit a ship");
//             }
            
//         }
//             else{
//                 document.getElementById(counter).style.background='black';
//                 alert("miss");
//             }
//     }
//     else{
//         alert("game Over");
//     }

// }

export default class GameBoard extends Component{

    constructor(props) {
        super(props)
        this.state = {
            noOfTrials:0
        }
        //this.addOne = this.addOne.bind(this)
      }

    renderSquare(row,col,counter){
         return(

 <div className="empty" onClick={()=>this.test(row,col,counter)} id={counter} ></div>
         );
     } 

   render()
   {
    let rows = [];
    let counter = 0;
    for (let row=0; row<5; row++) {
      let thisRow = [];
      for (let col=0; col<5; col++) {
          let square=this.renderSquare(row,col,counter);
          counter += 1;
        thisRow.push(square);
      }
      rows.push(<div className="game-row">{thisRow}</div>);
    }
       return(
           <div>
    <div>{rows}</div>
    <br></br>
    <div>{rows}</div></div>
                );
   
}


test(row,col,counter){
    if(this.state.noOfTrials<5){
        this.setState({noOfTrials:this.state.noOfTrials+1});
        console.log("hteehehehehe"+this.state.noOfTrials);
        let newHitPlace=[row,col];
        let isHit=false;
        console.log(noOfTrials)
        for(var i=0;i<3;i++){
        if(shipPlaced[i][0]===newHitPlace[0] && shipPlaced[i][1]==newHitPlace[1])
        {
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
                this.setState({noOfTrials:6});
                   alert("you hit a ship");
            }
            
        }
            else{
                document.getElementById(counter).style.background='black';
                alert("miss");
            }
    }
    else{
        alert("game Over");
    }

}
}

