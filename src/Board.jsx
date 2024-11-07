import axios from "axios"
import { useEffect, useState } from "react"
import reactLogo from './assets/react.svg'
import Add from "./Add"
import { getListUser } from "./Services/Localstorage"
import { useNavigate } from "react-router-dom"

const Board = () => {

    const [userdata, setUserdata] = useState([])
    const [users, setUsers] = useState([])
    const nav = useNavigate()

    useEffect(() => {
        setUsers(getListUser)
    }, [])

    useEffect(() => {
        axios.get("https://api.github.com/users")
            .then(res => {
                if (res.status == 200) {
                    setUserdata(res.data)
                }
            })
            .then(err => console.log(err));
    }, [])

    console.log(users)

    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <h3 className='text-center pt-5'>DataTech Company</h3>
                        <hr />
                        <div className="d-grid col-4 mx-auto">
                            <button type="button" class="btn btn-secondary" onClick={() => {nav('/add-user')}}>
                                Add New User
                            </button>
                        </div>
                        <table class="table caption-top" style={{ marginTop: "30px" }}>
                            <caption>List of users
                            </caption>
                            <thead>
                                <tr>
                                    <th scope="col">Picture</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Data Source</th>
                                    <th scope="col">Github URL</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((d, i) => (
                                        <tr key={i}>
                                            <td><img src={reactLogo} width={100} height={100} class="rounded-circle" /></td>
                                            <td class="align-middle">{d.name}</td>
                                            <td class="align-middle">Active</td>
                                            <td class="align-middle">LocalStorage</td>
                                            <td class="align-middle">
                                                <a href={d.url}>{d.url}</a>
                                            </td>
                                            <td class="align-middle">
                                                <button type="submit" class="btn btn-secondary" onClick={() => {nav(`/edit-user/${d.id}`)}}>Edit</button>
                                                <button type="submit" class="btn btn-secondary">Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                                {
                                    userdata.map((d, i) => (
                                        <tr key={i}>
                                            <td><img src={d.avatar_url} width={100} height={100} class="rounded-circle" /></td>
                                            <td class="align-middle">{d.login}</td>
                                            <td class="align-middle">{d.type}</td>
                                            <td class="align-middle">API</td>
                                            <td class="align-middle">
                                                <a href={d.html_url}>{d.html_url}</a>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Board