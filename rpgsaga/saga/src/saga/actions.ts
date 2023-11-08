
export abstract class Action{
    name: string

    constructor(name:string){
        this.name = name;
    }
}

export class Attack extends Action{
    constructor(){
        super("default attack")
    }
}

export class AbilityAttack extends Action{
    constructor(name: string){
        super(name)
    }
}

export class Ability extends Action{
    constructor(name: string){
        super(name)
    }
}

export class State extends Action{
    constructor(name: string){
        super(name)
    }
}

