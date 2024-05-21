abstract class Device {
    abstract get name(): string;
    abstract set name(name : string);
    abstract toString(): string;
}

export class Calculating_machine extends Device {
    _name : string;
    _device_energy_consumption : number;
    constructor(deviceName: string, device_energy_consumption : number) {
        super()
        if (device_energy_consumption > 0) {
            this._device_energy_consumption = device_energy_consumption;
        } else {
            throw new Error(`Значение device_energy_consumption не может быть отрицательным`);
        }
        this._name = deviceName;
    }
    print_name(): void {
        console.log(`Имя: ${this._name}`);
    }
    toString(): string {
        return `Calculating_machine - Name: ${this._name}, Energy consumption: ${this._device_energy_consumption}`;
      }
    public get name(): string {
        return this._name
    }
    public set name(input : string){
        this._name = input;
    }
}
export class HDD extends Calculating_machine {
    private _memory : number;
    data_transfer_time_sec : number;
    constructor(deviceName : string, memory : number, data_transfer_time_sec : number, device_energy_consumption : number) {
        super(deviceName, device_energy_consumption);
        if (memory > 0) {
            this._memory = memory;
        } else {
            throw new Error(`Значение memory не может быть отрицательным`);
        }
        if (data_transfer_time_sec > 0) {
            this.data_transfer_time_sec = data_transfer_time_sec;
        } else {
            throw new Error(`Значение data_transfer_time_sec не может быть отрицательным`);
        }
    }
    print_memory() : void {
        console.log(`Объём памяти: ${this._memory}`)
    }
    public get memory() {
        return this._memory
    }
    public set memory(input : number) {
        if (input > 0) {
            this._memory = input;
        } else {
            this._memory = 0;
            throw new Error(`Значение memory не может быть отрицательным`);
        }
    }
    toString(): string {
        return `HDD - Name: ${this._name}, Memory: ${this._memory}, Data transfer time per second: ${this.data_transfer_time_sec}, Energy consumption: ${this._device_energy_consumption}`;
      }
}
export function massive7(calcul : Calculating_machine, hdd : HDD) {
    let superClassArray: Device[] = [];
    superClassArray.push(calcul, hdd)
    let outputArray = []
    for (let i = 0; i < superClassArray.length; i++) {
        outputArray.push(superClassArray[i].toString())
    }
    return outputArray
}
