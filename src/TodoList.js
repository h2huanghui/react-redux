import React, { Component } from 'react';
import { Input, Button } from 'antd'
import 'antd/dist/antd.css'
import { connect } from 'react-redux'
import { changeInput, addItemList, deleteItemList } from './store/actionCreators'

class TodoList extends Component {
    render() {
        return (
            <div style={{ margin: '10px' }}>
                <div>
                    <Input
                        placeholder='dd'
                        style={{ width: '200px', marginRight: '10px' }}
                        value={this.props.inputValue}
                        onChange={this.props.inputChange}
                    />
                    <Button type='primary' onClick={this.props.handleAddItem}>Submit</Button>
                </div>
                <div>
                    <ul>
                        {
                            this.props.list.map((item, index) => {
                                return (
                                    <li key={index} onClick={this.props.deleteItemList.bind(this,index)}>{item}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue, //reducer里面的默认值。
        list: state.list
    }
}
const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            const action = changeInput(e.target.value)
            dispatch(action)
        },
        handleAddItem() {
            const action = addItemList()
            dispatch(action)
        },
        deleteItemList(index) {
            const action = deleteItemList(index)
            dispatch(action)
        }
    }
}
//把TodoList组件中用到的state的值,进行隐射
//组件中这样使用即可: this.props.inputValue
export default connect(stateToProps, dispatchToProps)(TodoList);