import React from 'react'
import {connect} from 'react-redux';
import {buyIceCream} from '../redux/indexTwo';
function IceCreamContainer(props) {
  return (
    <div>
       <h2>Number Of ice creams -{props.numOfIceCreams}</h2>
       <button onClick={props.buyIceCream}>Buy Ice Cream</button>
    </div>
  )
}

const mapStateToProps =state=>{
    return {
        numOfIceCreams:state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps= dispatch=>{
    return{
        buyIceCream:()=>dispatch(buyIceCream())
    } 
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer) 
