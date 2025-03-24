// class User {
//     email: string;
//     name: string;
//     private readonly city: string = "Jaipur";
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }


// const sanjeev = new User("a@c.com", "sam")
// // sanjeev.city = "New Delhi";
// // sanjeev.city;


// class User {
//     private _courseCount = 1;
//     constructor(public email: string, public name: string){}

//     get getAppleEmailId(): string {
//         return `apple${this.email}`;
//     }

//     get courseCount(): number {
//         return this._courseCount;
//     }

//     set courseCount(courseNum) {
//         if(courseNum <= 1) {
//             throw new Error("Course count should be more than 1")
//         }
//         this._courseCount = courseNum;
//     }
// }

class User {

    protected _courseCount = 1;
    
    constructor(public email: string, public name: string) {
    }

    private deleteToken(): void {
        console.log('token deleted');
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number{
        return this._courseCount;
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends User {
    isFamily: boolean = true;

    changeCourseCount() {
        this._courseCount = 4;
    }
}


const sanjeev = new User("a@c.com", "sanjeev");