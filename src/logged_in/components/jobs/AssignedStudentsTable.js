import React from "react";
import PropTypes from "prop-types";
import MUIDataTable from "mui-datatables";
import UserService from "../../../shared/services/UserService";




class AssignedStudentsTable extends React.Component {

  state = {
    data: []
  };

  componentDidMount() {
    this.setState({data: this.props.data});
    console.log("UsersTable didmount")
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({ data: this.props.data });
    }
  }

  handleDeleteRow = (rowsDeleted) => {
    const userIds = rowsDeleted.data.map(row => this.state.data[row.dataIndex][0]);
    userIds.forEach(id => (new UserService()).deleteUser(id).then(console.log("Deleted user " + id)))
  }

  render() {

    const columns = [
      {
        name: "Id",
        options: {
          filter: true,
        }
      },
      {
        name: "User Type",
        options: {
          filter: true,
        }
      },
      {
        name: "First Name",
        options: {
          filter: true,
        }
      },
      {
        name: "Last Name",
        options: {
          filter: true,
        }
      },
      {
        name: "Username",
        options: {
          filter: true,
        }
      }
    ];

    const options = {
      disableToolbarSelect: true,
      selectableRows: "none",
      responsive: "stacked",
      rowsPerPage: 10,
      print: false,
      download: false,
      serverSide: true,
      onTableChange: (action, tableState) => {
        console.log(action)
        console.log(tableState)
        // this.xhrRequest('my.api.com/tableData', result => {
        //   this.setState({ data: result });
        // });
      }
      //https://github.com/gregnb/mui-datatables/blob/master/examples/serverside-pagination/index.js
    };

    return <MUIDataTable data={this.state.data} columns={columns} options={options} />;
  }
}

AssignedStudentsTable.propTypes = {
  data: PropTypes.array.isRequired,
  rowClickHandler: PropTypes.func.isRequired
}

export default AssignedStudentsTable;