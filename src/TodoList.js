import React, { Component } from 'react';  
import { Input, Button } from 'antd'
import 'antd/dist/antd.css'
import { connect } from 'react-redux'

class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div style={{margin: '10px'}}>
                <div>
                    <Input
                        placeholder='dd'
                        style={{ width: '200px', marginRight: '10px' }}
                        value={this.props.inputValue}
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
//把TodoList组件中用到的state的值,进行隐射
//组件中这样使用即可: this.props.inputValue
export default connect(stateToProps,null)(TodoList);