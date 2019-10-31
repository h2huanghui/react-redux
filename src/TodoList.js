import React, { Component } from 'react';  
import { Input, Button } from 'antd'
import 'antd/dist/antd.css'
import { connect } from 'react-redux'
import { changeInput } from './store/actionCreators'

class TodoList extends Component {
    render() { 
        return ( 
            <div style={{margin: '10px'}}>
                <div>
                    <Input
                        placeholder='dd'
                        style={{ width: '200px', marginRight: '10px' }}
                        value={this.props.inputValue}
                        onChange={this.props.inputChange}
                    />
                    <Button type='primary'>Submit</Button>
                </div>
                <div>
                    <ul>
                        <li>hh</li>
                    </ul>
                </div>
            </div>
         );
    }
}

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue //reducer里面的默认值。
    }
}
const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            const action = changeInput(e.target.value)
            dispatch(action)
        }
    }
}
//把TodoList组件中用到的state的值,进行隐射
//组件中这样使用即可: this.props.inputValue
export default connect(stateToProps, dispatchToProps)(TodoList);