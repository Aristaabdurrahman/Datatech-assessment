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

    // useEffect({
    //     if (id) {
    //         const userData = getUserbyID(id)
    //         setForm(userData)
    //     }
    // }, [id])
    //kode tidak berfungs

    const userSubmit = (e) => {
        e.preventDefault()
         id ? editUser(id, inputValues) : addUser(inputValues)
        resetForm()
       //
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <form onSubmit={userSubmit}>
                            <h1>{id ? "Edit" : "Add"} User</h1>
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
                            <div class="">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => {nav('/')}}>Back to home</button>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add