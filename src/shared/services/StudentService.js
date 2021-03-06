import jsonToArray from "../functions/jsonToArray";

const API_URL = 'https://cs5200-spring2020-hartenstine.com/api/';
// const API_URL= 'http://localhost:8080/api/';

export default class StudentService {
    fetchApplications = () =>
        fetch(API_URL + "allApplications", {
            crossDomain: true,
            method: 'GET',
            headers: {'Content-Type': 'application/json; charset=utf-8'}
        })
            .then(response => response.json())
            .then(response => {
                return jsonToArray(
                    response,
                    ["id", "description", "applicationStatus", "job.title", "job.company"]);
            });

    createApplication = (application) =>
        fetch(API_URL + "addapplication", {
            method: 'POST',
            body: JSON.stringify(application),
            headers: {'Content-Type': 'application/json; charset=utf-8'}
        }).then(response => {
            console.log(response);
        });

    deleteApplication = (id) =>
        fetch(API_URL + "applications/" + id, {
            crossDomain: true,
            method: 'DELETE',
            headers: {'Content-Type': 'application/json; charset=utf-8'}
        })
            .then(response => {
                console.log(response);
            });
}

