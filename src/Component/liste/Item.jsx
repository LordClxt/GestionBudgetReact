export function Item({item, handleDelete}){
    // const deleted = ;

    return <li className='py-2 bg-gray-100 px-3 rounded flex justify-between items-center'>
        <p className='font-semibold'>
            {item.motif} - {item.price}Fcfa
        </p>
        <button onClick={()=>handleDelete(item.motif, item.price)} className='
            text-white font-bold rounded bg-red-600 px-4 py-2 hover:bg-red-700
        '
        >
            Supprimer
        </button>
    </li>
}