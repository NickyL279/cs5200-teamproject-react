const COURSE_API_URL= 'https://cs5200-spring2020-hartenstine.com/api/allUsers';

function jsonToArray(json){
    const dataArray = [];
    if(json.length > 0){
    json.forEach((row) =>
                 {
                     const rowArray = [];
                     const keys = ["id", "firstName", "lastName", "username", "password"];
                     keys.forEach((key) => rowArray.push(row[key]));
        dataArray.push(rowArray);
    })
}
    console.log(dataArray)
    return dataArray;
}

export default class UserService {
    findAllUsers = () =>
        fetch(COURSE_API_URL, {
            crossDomain:true,
            method: 'GET',
            headers: {'Content-Type':'application/json'}
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                console.log(response);
                return jsonToArray(response);
        });
    // createUser = user => {}
    // deleteUser = userId => {}

}
