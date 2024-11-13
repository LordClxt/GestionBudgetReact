import { useState } from 'react'
import {Title} from "./Component/other/Title.jsx";
import {Header} from "./Component/Header.jsx";
import {FormBudget} from "./Component/form/FormBudget.jsx";
import {DepensList} from "./Component/liste/DepensList.jsx";
import {DepenseReducer} from "./hooks/DepenseReducer.jsx";

function App() {
    const {editSolde, setEditSolde,input,items,solde,handleChangeSolde, handleMotif, handlePrice, handleSubmit, handleDelete} = DepenseReducer()
  return <div className="container mx-auto flex flex-col gap-9">
            <Header handleChangeSolde={handleChangeSolde} price={solde} editSolde={editSolde} setEditSolde={setEditSolde} />
            <FormBudget onSubmit={handleSubmit} motif={input.motif} price={input.price} handleChangeMotif={handleMotif} handleChangePrice={handlePrice} />
            <DepensList items={items} handleDelete={handleDelete}  />
        </div>
}

export default App
