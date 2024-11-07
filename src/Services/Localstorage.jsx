import uuid from "react-uuid"


//menampilkan data seluruh user dari localstorage
export const getListUser = () => {
    if (!localStorage["@users"]) {
        localStorage["@users"] = JSON.stringify([])
    }

    let users = JSON.parse(localStorage["@users"])
    return users
}

//menampilkan data user berdasarkan ID
export const getUserbyID = (id) => {
    const users = getListUser()
    const user = users.find((user) => user.id === id)
    return user
}


//menambah user dan input ke localstorage
export const addUser = (user) => {
    const users = getListUser()
    users.push({id: uuid(), ...user})
    localStorage["@users"] = JSON.stringify(users)
}

//edit user dilocalstorage
export const editUser = (id, user) => {
    let users = getListUser()
    users = users.filter(user => user.id !== id)
    users.push(user)
    localStorage["@users"] = JSON.stringify(users)
}