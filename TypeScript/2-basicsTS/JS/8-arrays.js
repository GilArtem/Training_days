var list = [1, 2, 3];
var colors = ['green', 'orange', 'white'];
console.log(list[0]);
console.log(colors[2]);
var pep1 = ['tom', 'gash', 'loh'];
function eterUsers(users) {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user_1 = users_1[_i];
        console.log(user_1);
    }
}
function usersToString(users) {
    return users.join(', ');
}
eterUsers(pep1);
console.log(usersToString(pep1));
var pep2 = ['ray', 'katy', 'lola'];
var first = pep2[0], rest = pep2.slice(1);
console.log(first);
console.log(rest[0]);
console.log(rest[1]);
var nums = [1, 2, 3, 4];
var second = nums[1], forth = nums[3];
console.log(second);
console.log(forth);
