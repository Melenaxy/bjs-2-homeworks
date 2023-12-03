function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index])) {
        return true;
    }
    return false;
}

function getUsersNamesInAgeRange(users, gender) {
    let newArr = users.filter((user) => user.gender === gender).map((item) => item.age)
    if (newArr.length === 0) return 0;
    let result = newArr.reduce((sum, current) => sum + current, 0) / newArr.length;
    return result;
}