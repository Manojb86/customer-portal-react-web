import React from 'react';

const AddNewCustomer = () => {
    return (
        <form>
            <div>
                <h3>Add new customer</h3>
            </div>
            <div>
                <label for="name"> Name </label>
                <input type="text" placeholder="Enter your name" name="name"></input>
            </div>
            <div>
                <label for="age"> Age </label>
                <input type="text" placeholder="age" name="age"></input>
            </div>
            <div>
                <button type="submit">Save</button>
            </div>
        </form>
    );
}

export default AddNewCustomer;