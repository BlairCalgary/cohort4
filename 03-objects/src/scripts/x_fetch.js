export class Data {
    constructor(data) {
        this.users = data
    }
    getFirstName() {
        return this.users[0].name;
    }
    getAllFirstNames(data) {
        return ["Maricica","Nishant","Nicuță","Barbara","Stanca","Bella",
        "Fabian","Славчо","Upendra","Dumitra"];
    }
}
