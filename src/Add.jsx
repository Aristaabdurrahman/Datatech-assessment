import { useEffect } from "react"
import { useForm } from "./Hooks/useForm"
import { addUser, editUser, getUserbyID } from "./Services/Localstorage"
import { useNavigate, useParams } from "react-router-dom"

const Add = () => {

    const { id } = useParams()
    const nav = useNavigate()
    const { inputValues, handleInputChange, resetForm, setForm } = useForm({
        name: '',
        url: '',
    })

    useEffect(() => {
        if (id) {
            const user = getUserbyID(id)
            setForm(user)
        }
    }, [id])

    const userSubmit = (e) => {
        e.preventDefault()
        id ? editUser(id, inputValues) : addUser(inputValues)
        resetForm()
        nav('/')
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <form onSubmit={userSubmit} className="mt-5">
                            <h1 className="text-center">{id ? "Edit" : "Add"} User</h1>
                            <div class="">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
                                    <input type="text" id="name" class="form-control"
                                        name="name"
                                        value={inputValues.name}
                                        onChange={handleInputChange}
                                        aria-label="Sizing example input"
                                        aria-describedby="inputGroup-sizing-default" />
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Github URL</span>
                                    <input type="text" id="url" class="form-control"
                                        name="url"
                                        value={inputValues.url}
                                        onChange={handleInputChange}
                                        aria-label="Sizing example input"
                                        aria-describedby="inputGroup-sizing-default" />
                                </div>
                            </div>
                            <div class="d-grid col-4 mx-auto">
                                <button type="submit" class="btn btn-primary mt-2 mb-4">Submit</button>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => {nav('/')}}>Back to home</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add