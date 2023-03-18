export class RideUserInfo{
    ridername!:string;
    source!:string;
    destination!:string;
    constructor(args: any = {}){
        this.ridername=args.name;
        this.source=args.source;
        this.destination=args.destination;
    }
}