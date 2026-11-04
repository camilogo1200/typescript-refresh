import {TodoItem, Status} from "./TodoItem";
import {uuidv7} from 'uuidv7';

console.clear()
console.log("Todo List");

let uuid: string = uuidv7();
let item = new TodoItem(uuid, "description 1", Status.Open);
console.log(item);
