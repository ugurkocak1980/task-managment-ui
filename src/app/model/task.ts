export enum Priority {
    LOW,
    NORMAL,
    URGENT
}



export class Task {
    id: number=0;
    name: string = '';
    done: boolean = false;
    priority: Priority = Priority.NORMAL;
    created: string = ''

}

