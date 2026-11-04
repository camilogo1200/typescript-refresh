import {TodoItem} from "./TodoItem";

export class TodoManager {

    private buckets = new Map<string, TodoItem[]>();

    public addTodo(bucketName: string, item: TodoItem) {
        if (!item) return;
        if (this.buckets.size < 1 || !this.buckets.has(bucketName)) {
            console.log("Creating " + bucketName);
            this.buckets.set(bucketName, [item]);
            return;
        }
        let items = this.buckets.get(bucketName)
        if (items) {
            items.push(item);
            this.buckets.set(bucketName, items);
        } else {
            this.buckets.set(bucketName, [item]);
        }
    }

    public removeTodo(bucketName: string, itemId: TodoItem) {
        Array.from(this.buckets.keys()).forEach((key) => {
            if (key == bucketName) {
                this.buckets.delete(key);
            }
        });
    }

    public getBuckets(): string[] {
        let keys = Array.from(this.buckets.keys())
        return keys
    }

    public createBucket(bucketName: string) {
        this.buckets.set(bucketName, []);
    }


}