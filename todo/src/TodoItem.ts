export class TodoItem {
    public id: string = "";
    public description: string = "";
    public status: Status = Status.Open;

    constructor(id: string, description: string, status: Status = Status.Open) {
        this.id = id;
        this.description = description;
        this.status = status;
    }

    /*toString(): void {
        console.log(`id :${this.id} - ${this.status}\t description: ${this.description}`);
    }
    */
}

export enum Status {
    Open = 1,
    Close = 2,
    InProgress = 3,
    Hold = 4
}