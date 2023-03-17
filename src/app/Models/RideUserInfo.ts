export class RideUserInfo{
    ridername:string="abc";
    Source!:string;
    Destination!:string;
    constructor(args: any = {}){
        this.Source=args.source;
        this.Destination=args.destination;
    }
}