## 1. 安装react-redux
`npm i --save react-redux`

## 2. Provider 被包裹的组件都可以使用store
```
<Provider store={store}>
    <TodoList />
</Provider>
```

## 3. TodoList组件进行连接,传送命令。变量的隐射关系
```
const stateToProps = (state) => {
    return {
        inputValue: state.inputValue //reducer里面的默认值
    }
}
//把TodoList组件中用到的state的值,进行隐射
//组件中这样使用即可: this.props.inputValue
export default connect(stateToProps,null)(TodoList);
```

## 4. connect的第二个参数:方法的隐射关系
```
const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            const action = changeInput(e.target.value)
            dispatch(action)
        }
    }
}
//组件中这样使用即可: this.props.inputChange
export default connect(stateToProps, dispatchToProps)(TodoList);

```


