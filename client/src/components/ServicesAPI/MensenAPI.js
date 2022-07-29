import axios from "axios";

export function getMensen () {
    if (localStorage.getItem('mensen')){
        return JSON.parse(localStorage.getItem('mensen'));
    }
    return [];
}

export function setMensen (mensen) {
    localStorage.setItem('mensen', (mensen));
}

export function getMensaByID (mensaID) {
    const url = `http://localhost:5000/mensa/${mensaID}`;
    axios.get(url)
        .then(response => response.data)
        .then((data) => {
            localStorage.setItem(`${mensaID}`, JSON.stringify(data));
        });
    return JSON.parse(localStorage.getItem(`${mensaID}`));
}
// export function getMensaNameByID (mensaID) {
//     const url = `http://localhost:5000/mensa/${mensaID}`;
//     axios.get(url)
//         .then((res) => {
//             console.log(res.data)
//             return res.data
//         }).catch((error) => {
//         console.log(error)
//     });
//
//     // axios.get(url)
//     //     .then(response => response.data)
//     //     .then((data) => {
//     //         // return data;
//     //         localStorage.setItem('getMensaNameByID', JSON.stringify(data));
//     //     });
//     // return JSON.parse(localStorage.getItem('getMensaNameByID'));
// }

export function getFood (mensaID, date) {
    // localStorage.clear()
    const url = `https://openmensa.org/api/v2/canteens/${mensaID}/days/${date}/meals`;
    console.log(url)
    axios.get(url)
    	.then((res) => {
    		// console.log(res.data)
    		return res.data
    	}).catch((error) => {
    	// console.log(error)
    });

    // axios.get(url)
    //     .then(response => response.data)
    //     .then((data) => {
    //         console.log((data))
    //         return
    //         // localStorage.setItem('food', JSON.stringify(data));
    //     }).catch((error) => {
    //     console.log(error)
    //     // localStorage.setItem('food', (null));
    // });
    // return this.food;
    return JSON.parse(localStorage.getItem('food'));
}






export default getMensen;
