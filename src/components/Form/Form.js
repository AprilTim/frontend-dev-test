import React from "react";
import './Form.css'

const Form = (props) => {

    let formChange = (e) => {
        let checkInput = e.target.id
        let text = e.target.value;
        props.updateForm(text,checkInput)
    }

    return (
        <form className="form">
            <div className="form-row">
                <div className="col-md-2 mb-3">
                    <label >ID</label>
                    <input value={props.state.formPage.id} onChange={formChange}  id="id" type="text" className="form-control"
                           placeholder="ID" required></input>
                </div>
                <div onChange={formChange} className="col-md-5 mb-3">
                    <label >First name</label>
                    <input  value={props.state.formPage.firstName} onChange={formChange}   id="firstName" type="text" className="form-control" placeholder="First name"
                           required></input>
                </div>
                <div className="col-md-5 mb-3">
                    <label>Last name</label>
                    <div className="input-group">
                        <input  value={props.state.formPage.lastName} onChange={formChange} id="lastName" type="text" className="form-control"
                               placeholder="Last name" required></input>
                    </div>
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-6 mb-3">
                    <label>Email</label>
                    <input  value={props.state.formPage.email} onChange={formChange} id="email" type="text" className="form-control" placeholder="Email" required></input>
                </div>
                <div className="col-md-6 mb-3">
                    <label>Phone</label>
                    <input  value={props.state.formPage.phone} onChange={formChange} id="phone" type="text" className="form-control" placeholder="Phone" required></input>
                </div>

            </div>

        </form>
    )
}

export default Form;