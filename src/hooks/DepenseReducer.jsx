import {useReducer, useState} from "react";
const initialState = {
    input:{
        motif:"",
        price:""
    },
    items:[{
        motif:"Achat de creme epilatoire",
        price:2000
    }]
}
function reducer(state, action){
    if(action.type === "CHANGE_MOTIF"){
        return {
            ...state,
            input: {
               ...state.input,
                motif:action.payload.value
            }
        }
    }
    if(action.type === "CHANGE_PRICE"){
        return {
            ...state,
            input: {
               ...state.input,
                price:action.payload.value
            }
        }
    }
    if(action.type === "ADD_ITEM"){
        return {
            ...state,
            items: [action.payload, ...state.items],
            input:{
                motif:"",
                price:""
            }
        }
    }
    if(action.type === "DELETE_ITEM"){
        return {
            ...state,
            items: state.items.filter(item=>item.motif !== action.payload)
        }
    }

}
export function DepenseReducer(){
    const [editSolde, setEditSolde] = useState(false)
    const [solde, setSolde] = useState(5000)
    const [state, dispatch] = useReducer(reducer, initialState)
    return {
        editSolde:editSolde,
        setEditSolde:setEditSolde,
        handleChangeSolde:(e)=>setSolde(e.target.value),
        input:state.input,
        solde:solde,
        items:state.items,
        handleMotif:(e)=>dispatch({type:"CHANGE_MOTIF", payload:{value:e.target.value}}),
        handlePrice:(e)=>dispatch({type:"CHANGE_PRICE", payload:{value:e.target.value}}),
        handleSubmit:(e)=>{
            e.preventDefault()
            if(!state.input.motif || !state.input.price){return false}
            setSolde(v=>v-parseInt(state.input.price))
            const newItem = {
                motif:state.input.motif,
                price:state.input.price
            }
            dispatch({type:"ADD_ITEM", payload:newItem})
        },
        handleDelete:(motifCopy, priceCopy)=>{
            setSolde(v=>v+parseInt(priceCopy))
            console.log(priceCopy)
            dispatch({type:"DELETE_ITEM", payload:motifCopy} )
        }
    }
}