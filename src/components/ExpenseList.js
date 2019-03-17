import React from 'react';
//import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.filters.text}
    {props.expenses.length}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};

//export default withRouter(connect(mapStateToProps)(ExpenseList));
export default connect(mapStateToProps)(ExpenseList);
