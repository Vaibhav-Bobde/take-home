import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
class Board extends Component{
    constructor(props){
        super(props);
        this.state = { n : 0 };
    }

    setBoard = () => {
        let num = parseInt(document.getElementById('num_rows').value);
        this.setState({n : num});
        let tblBodyEle = document.getElementById('tblBody');
        tblBodyEle.innerHTML = '';
        for(let r= 0; r < num; r++)
        {
            let rowEle = document.createElement('tr');
            for(let c=0; c < num; c++)
            {
                let colEle = document.createElement('td');
                colEle.style.cssText = "height:50px;width:50px"; 
                if(r % 2 == c%2){
                    colEle.style.cssText ="background-color: black";
                }
                rowEle.appendChild(colEle);
            }
            tblBodyEle.appendChild(rowEle);
        }     
    }
    render() {
        return (
        <div className="container text-center">
            <div className="form-group form-group-sm form-inline">
                <h6>Please enter number of rows and columns</h6>
                <input type="number" className="form-control mx-2 w-auto" id='num_rows' placeholder="Value for N"></input>
                <button className="btn btn-primary mx-2"  onClick={this.setBoard}>Set Board</button>
            </div>            
            <div className="container text-center">            
                <table style={{margin: "30px", border: "1px solid black" }}>
                    <tbody id='tblBody'>
                    </tbody>
                </table>
            </div>            
        </div>
        )
    }
}

export default Board