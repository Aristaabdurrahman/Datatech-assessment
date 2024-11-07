import uuid from "react-uuid"

export const getListUser = () => {
    if (!localStorage["@users"]) {
        localStorage["@users"] = JSON.stringify([])
    }

    let users = JSON.parse(localStorage["@users"])
    return users
}

export const getUserbyID = (id) => {
    const users = getListUser()
    const user = users.find((user) => user.id === id)
    return user
}

export const addUser = (user) => {
    const users = getListUser()
    users.push({id: uuid(), ...user})
    localStorage["@users"] = JSON.stringify(users)
}

export const editUser = (id, user) => {
    let users = getListUser()
    users = users.filter(user => user.id !== id)
    users.push(user)
    localStorage["@users"] = JSON.stringify(users)
}