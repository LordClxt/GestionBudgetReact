import {Title} from "../other/Title.jsx";
import {ListItem} from "./ListItem.jsx";

export function DepensList({items, handleDelete}){
    return <div className=' flex flex-col gap-4'>
        <center>
            <Title text='LISTE DES DEPENSES' />
        </center>

        <ListItem handleDelete={handleDelete} items={items} />
    </div>
}