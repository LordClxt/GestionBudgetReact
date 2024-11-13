import {Item} from "./Item.jsx";

export function ListItem({items, handleDelete}){
    return <ul className='flex flex-col gap-2'>
        {items.map(item=><Item handleDelete={handleDelete} key={item.motif} item={item} />)}
    </ul>
}