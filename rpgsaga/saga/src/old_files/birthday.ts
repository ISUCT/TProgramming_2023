export class Birthday {
    day: number;
    month: number;
    year: number;
    private dateBirth: Date;
    private now: Date;

    constructor(day: number, month: number, year: number) {
        this.dateBirth = new Date(year, month, day)
    }

    get age(): any {
        const now = new Date();
        const days = now.getDate() - this.dateBirth.getDate();
        const months = now.getMonth() - this.dateBirth.getMonth() + 1;
        const years = now.getFullYear() - this.dateBirth.getFullYear();
        if (this.dateBirth.getDate() == now.getDate() && this.dateBirth.getMonth() == now.getMonth() && this.dateBirth.getFullYear() == now.getFullYear()) {
            return "0 days, 0 months, 0 years";
        }
        if (months < 0 || years < 0) {
            return "Invalid date"
        }
        return `${days} days, ${months} months, ${years} years`;
    }
}