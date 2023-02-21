// console.log('hello world');
// import {Massage} from './constants'
// console.log(Massage);
import users from "./users.json";
// console.log(users.length);
//----------1-----------------
// const ans=users.sort((a, b) => {
//   return a.name >= b.name ? 1 : -1
// })
// console.log(ans);
//--------------
// users
//   .sort((user1, user2) => user1.name.localeCompare(user2.name))
//   .forEach(user >= console.log(user.id));
//----------2-----------------
// const ans = users.filter((user) => {
//  if ((user.address.geo.lat > '-37.1496' && user.address.geo.lat <'81.1496')
//  && (user.address.geo.lng>'-68.6102' &&user.address.geo.lng<'62.5342'))
//   return user;
// });
// console.log(ans)
//------------------
// const ans = users.filter(
//   (user) =>
//     user.address.geo.lat > "-37.1496" &&
//     user.address.geo.lat < "81.1496" &&
//     user.address.geo.lng > "-68.6102" &&
//     user.address.geo.lng < "62.5342"
// );
//  console.log(ans);
//----------3-----------------
//https://maps.google.com/?q=30.08138894625418,31.016763104704552
// const ans = users.map((user) => {
//   return ('https://maps.google.com/?q='+user.address.geo.lat+','+user.address.geo.lng);
// });
// //----------------
// const ans :string[]= users.map(user =>
//    `https://maps.google.com/?q=${user.address.geo.lat},${user.address.geo.lng}`
// );
//  console.log(ans)
//----------4-----------------
//---class person
abstract class person {
  public myname: string | undefined;
  protected phone: string | undefined;
  private _email: string;
  private _address: string;
  constructor(
    myname: string = "",
    phone: string = "",
    _email: string = "",
    _address: string = ""
  ) {
    this.myname = myname;
    this.phone = phone;
    this._email = this.getEmail();
    this._address = this.getAddress();
  }
  setEmail(email: string) {
    this._email = email;
  }
  getEmail(): string {
    return this._email;
  }
  setAddress(address: string) {
    this._address = address;
  }
  getAddress(): string {
    return this._address;
  }
  who() {
    console.log(`I’m person.....${this.myname}`);
  }
}
//---class Student
enum Status {
  freshman,
  sophomore,
  junior,
  senior,
}
class Student extends person {
  status: Status | undefined;
  constructor(status:Status) {
    super();
    this.status=Status.junior
  }
  who() {
    console.log(`I’m Student.....${this.myname}`);
  }
}
//---class Employee
class Employee extends person {
  salary: number | undefined;
  office: string | undefined;
  date: Date | undefined;
  constructor() {
    super();
  }
  who() {
    console.log(`I’m Employee.....${this.myname}`);
  }
}
//---class Faculty
class Faculty extends Employee {
  rank: string | undefined;
  officeHours: number | undefined;
  constructor() {
    super();
  }
  who() {
    console.log(`I’m Faculty.....${this.myname}`);
  }
}
//---class Staff
class Staff extends Employee {
  title: string | undefined;
  constructor() {
    super();
  }
  who() {
    console.log(`I’m Staff.....${this.myname}`);
  }
}
//---------------------------------------