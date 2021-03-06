export async function getSelectValues(){
    return fetch('https://bootcamp-2022.devtest.ge/api/skills')
    .then(response => response.json())
    .then(data => {return data});
}

export async function getAllApplications(){
    return fetch('https://bootcamp-2022.devtest.ge/api/applications?token=89nOpas%7Casdanjjh%5E%26as')
    .then(response => response.json())
    .then(data => {return data});
}

export async function createApplication(application){
    return fetch('https://bootcamp-2022.devtest.ge/api/application', {
        method: "POST",
        body: JSON.stringify(application),
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(response => response.json())
    .then(data => {return data});
}