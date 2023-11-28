export class Computer {
    private _name : string;
    energy_consumption : number;
    constructor(deviceName: string, device_energy_consumption : number) {
        this._name = deviceName;
        this.energy_consumption = device_energy_consumption;
    }
    print_name(): void {
        console.log(`Имя: ${this._name}`);
    }
    public get name(){
        return this._name
    }
    public set name(input : string){
        this._name = input;
    }
}
export class HDD extends Computer {
    private _memory : number;
    data_transfer_time_sec : number;
    constructor(deviceName : string, memory : number, data_transfer_time_sec : number, device_energy_consumption : number) {
        super(deviceName, device_energy_consumption);
        this._memory = memory;
        this.data_transfer_time_sec = data_transfer_time_sec;
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
            console.log("Ошибка при вводе памяти!")
        }
    }
}
let pc = new HDD("Toshiba", 1024, 512, 400);
console.log(pc.memory)