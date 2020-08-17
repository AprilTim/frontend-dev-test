import React, {Component, isValidElement} from 'react';
import './App.css';
import Table from "./components/Table/Table";
import _ from 'lodash';
import DeitailInfo from "./components/Detail_Info/DeitailInfo";
import ModeSelector from "./components/ModeSelector/ModeSelector";
import ReactPaginate from 'react-paginate'
import Loader from "./components/Loader/Loader";
import TableSearch from "./components/TableSearch/TableSearch";
import Form from "./components/Form/Form";


class App extends Component {

    state = {
        formPage: {
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        },
        isValidForm: false,
        isForm: false,
        isModeSelected: false,
        isLoading: false,
        data: [],
        search: '',
        sort: 'desc',
        sortField: '',
        row: null,
        btnName: "Добавить",
        currentPage: 0,
    }

    async fetchData(url) {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        this.setState({
            isLoading: false,
            data: _.orderBy(data, this.state.sortField, this.state.sort)
        })
    }

    onSort = sortField => {
        const cloneData = this.state.data.concat()
        const sortType = this.state.sort === 'asc' ? 'desc' : 'asc';
        const orderedData = _.orderBy(cloneData, sortField, sortType);

        this.setState({
            data: orderedData,
            sort: sortType,
            sortField
        })

    }

    openForm = (isForm) => {
        isForm = this.state.isForm
        isForm = !isForm
        const check = this.state.btnName === "Добавить" ? "Закрыть" : "Добавить"
        this.setState({
            isForm: isForm,
            btnName: check
        })
    }

    updateForm = (text, check) => {
        this.setState({
            formPage: {
                id: check === "id" ? text : this.state.formPage.id,
                firstName: check === "firstName" ? text : this.state.formPage.firstName,
                lastName: check === "lastName" ? text : this.state.formPage.lastName,
                email: check === "email" ? text : this.state.formPage.email,
                phone: check === "phone" ? text : this.state.formPage.phone,
            }
        })

        this.checkFormPage(this.state.formPage)

    }

    checkFormPage = (checkValue) => {

        if (checkValue.id != ''
            && checkValue.firstName != ''
            && checkValue.lastName != ''
            && checkValue.email != ''
            && checkValue.phone != '') {
            this.setState({
                isValidForm: true
            })
        } else {
            this.setState({
                isValidForm: false
            })
        }
        console.log(this.state.formPage)
        console.log(this.state.isValidForm)
    }

    addUser = () => {
        let user = {
            id: this.state.formPage.id,
            firstName: this.state.formPage.firstName,
            lastName: this.state.formPage.lastName,
            email: this.state.formPage.email,
            phone: this.state.formPage.phone
        }
        this.state.data.unshift(user)

        this.setState({
                isValidForm: false,
                formPage: {
                    id: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: ''
                },
            }
        )
    }

    onRowSelect = (row) => (
        this.setState({row})
    )

    modeSelect = (url) => {
        this.setState({
            isModeSelected: true,
            isLoading: true,
        })
        this.fetchData(url)
    }

    pageChangeHandler = ({selected}) => (
        this.setState({currentPage: selected})
    )

    searchHandler = search => {
        this.setState({search, currentPage: 0})
    }

    getFilteredData() {
        const {data, search} = this.state

        if (!search) {
            return data
        }
        let result = data.filter(item => {
            return (
                item["firstName"].toLowerCase().includes(search.toLowerCase()) ||
                item["lastName"].toLowerCase().includes(search.toLowerCase()) ||
                item["email"].toLowerCase().includes(search.toLowerCase())
            );
        });
        if (!result.length) {
            result = this.state.data
        }
        return result
    }

    render() {
        const pageSize = 50;
        if (!this.state.isModeSelected) {
            return (
                <div className="container">
                    <ModeSelector onSelect={this.modeSelect}/>
                </div>
            )

        }
        const filteredData = this.getFilteredData();
        const pageCount = Math.ceil(filteredData.length / pageSize)
        const displayData = _.chunk(filteredData, pageSize)[this.state.currentPage]

        return (
            <div className="App">
                {
                    this.state.isLoading
                        ? <Loader/>
                        : <React.Fragment>
                            <TableSearch onSearch={this.searchHandler}/>
                            <button onClick={this.openForm}
                                    className="btn btn-primary mb-3">{this.state.btnName}</button>
                            {
                                this.state.isForm ?
                                    <>
                                        <Form formPage={this.state.formPage}
                                              updateForm={this.updateForm}
                                              state={this.state}
                                              addUser={this.addUser}/>
                                    </>
                                    : null}
                            <Table
                                data={displayData}
                                onSort={this.onSort}
                                sort={this.state.sort}
                                sortField={this.state.sortField}
                                onRowSelect={this.onRowSelect}/>
                        </React.Fragment>

                }
                {
                    this.state.data.length > pageSize
                        ? <ReactPaginate
                            previousLabel={'<'}
                            nextLabel={'>'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={this.pageChangeHandler}
                            containerClassName={'pagination'}
                            activeClassName={'active'}
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            nextClassName="page-item"
                            previousLinkClassName="page-link"
                            nextLinkClassName="page-link"
                            forcePage={this.state.currentPage}
                        /> : null
                }
                {
                    this.state.row ? <DeitailInfo user={this.state.row}/> : null
                }
            </div>
        );
    }
}

export default App;
