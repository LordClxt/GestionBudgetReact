import {Input} from "./Input.jsx";
import {Title} from "../other/Title.jsx";

export function FormBudget({onSubmit, motif, price, handleChangeMotif, handleChangePrice}){
    return <form className='flex  flex-col gap-2' onSubmit={onSubmit}>
        <div className='flex flex-col gap-4'>
            <center>
                <Title text="Ajouter une depense" />
            </center>

            <Input
                placeholder="Veuillez saisir le motif de votre depense"
                name='motif'
                value={motif}
                onChange={handleChangeMotif}
                type='text'
            />
        </div>
        <div>
            <Input
                placeholder="Veuillez saisir le prix de votre depense"
                name='price'
                value={price}
                onChange={handleChangePrice}
                type='text'
            />
        </div>
        <button className='text-white font-bold bg-purple-600 rounded
                                    px-4 py-2 hover:bg-purple-700 transition-all'>
            AJOUTER
        </button>
    </form>
}