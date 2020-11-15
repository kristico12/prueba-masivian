function header(url, type, data) {
    let options = {
        method: type,
        //mode: 'no-cors',
        headers: {
            "Content-Type": "application/json",
        }
    };
    if (data !== null) {
        options['body'] = JSON.stringify(data);
    }
    return new Request(`${url}`, options)
}

function Call(url, type, data = null) {
    return new Promise((resolve, reject) => {
        fetch(header(url, type, data))
            .then(success =>  resolve(success.json()))
            .catch((Error) => { reject(Error) })
    })
}

export default Call;
