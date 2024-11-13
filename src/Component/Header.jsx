import {Title} from "./other/Title.jsx";
import {Button} from "./other/Button.jsx";
import {Input} from "./form/Input.jsx";

export function Header({price, editSolde, setEditSolde, handleChangeSolde}){
    return <div>
        <div className="flex mt-7 justify-between">
            <Title text='GESTIONNAIRE DE BUDGET' />
            <div className='flex gap-2 items-center'>
                <span className='font-bold italic'>{`SOLDE ACTUELLE : ${price}FCFA`}</span>
                <button
                    onClick={()=>setEditSolde(v=>!v)}
                    className='text-white font-bold bg-purple-600 rounded
                                    px-4 py-2 hover:bg-purple-700 transition-all
                                    '>
                    Modifier mon solde
                </button>
                <button
                    className='text-white font-bold bg-purple-600 rounded
                                    px-4 py-2 hover:bg-purple-700 transition-all
                                    '>
                    Nous contacter
                </button>
            </div>
        </div>
        {editSolde &&  <div className='flex w-1/2 mx-auto mt-5 gap-1'>
            <Input onChange={handleChangeSolde} placeholder="Veuillez saisir le montant de votre solde" value={price} name='solde' type="number"/>
            <button
                onClick={()=>setEditSolde(v=>!v)}
                className='text-white font-bold bg-purple-600 rounded
                                    px-4 py-2 hover:bg-purple-700 transition-all'>
                Modifier
            </button>
        </div>
        }
    </div>
}