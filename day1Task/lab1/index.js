"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log('hello world');
// import {Massage} from './constants'
// console.log(Massage);
const users_json_1 = __importDefault(require("./users.json"));
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
const ans = users_json_1.default.map(user => `https://maps.google.com/?q=${user.address.geo.lat},${user.address.geo.lng}`);
console.log(ans);
//----------4-----------------
//---class person
class person {
    constructor(myname) {
        this.myname = myname;
    }
    who() {
        console.log("");
    }
}
//---class Student
var Status;
(function (Status) {
    Status[Status["freshman"] = 0] = "freshman";
    Status[Status["sophomore"] = 1] = "sophomore";
    Status[Status["junior"] = 2] = "junior";
    Status[Status["senior"] = 3] = "senior";
})(Status || (Status = {}));
class Student extends person {
    who() {
        console.log("");
    }
}
//---class Employee
class Employee extends person {
    who() {
        console.log('');
    }
}
//---class 
