export class Player {
    name: string;
    point: number;
    result: string;
  
    constructor(name:string, point:number=0, result:string="") {
      this.name = name;
      this.point = point;
      this.result = result;
    }
}