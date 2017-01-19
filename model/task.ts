export class Task {
    _id?: string;
    name: string;
    description?: string;
    
    action?: (options: any) => void;
}