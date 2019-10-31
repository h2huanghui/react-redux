import React from 'react';
import { Input, Button } from 'antd'
import 'antd/dist/antd.css'
import { connect } from 'react-redux'
import { changeInput, addItemList, deleteItemList } from './store/actionCreators'

const TodoList = (props) => {
    let { inputValue, inputChange, handleAddItem, list, deleteItemList } = props
    return (
        <div style={{ margin: '10px' }}>
            <div>
                <Input
                    placeholder='dd'
                    style={{ width: '200px', marginRight: '10px' }}
                    value={inputValue}
                    onChange={inputChange}
                />
                <Button type='primary' onClick={handleAddItem}>Submit</Button>
            </div>
            <div>
                <ul>
                    {
                        list.map((item, index) => {
                            return (
                                <li key={index} onClick={deleteItemList.bind(this, index)}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

// class TodoList extends Component {
//     render() {
//         let { inputValue, inputChange, handleAddItem, list, deleteItemList } = this.props
//         return (
//             <div style={{ margin: '10px' }}>
//                 <div>
//                     <Input
//                         placeholder='dd'
//                         style={{ width: '200px', marginRight: '10px' }}
//                         value={inputValue}
//                         onChange={inputChange}
//                     />
//                     <Button type='primary' onClick={handleAddItem}>Submit</Button>
//                 </div>
//                 <div>
//                     <ul>
//                         {
//                             list.map((item, index) => {
//                                 return (
//                                     <li key={index} onClick={deleteItemList.bind(this, index)}>{item}</li>
//                                 )
//                             })
//                         }
//                     </ul>
//                 </div>
//             </div>
//         );
//     }
// }

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