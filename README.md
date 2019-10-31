## 安装react-redux
`npm i --save react-redux`

## Provider 被包裹的组件都可以使用store
```
<Provider store={store}>
    <TodoList />
</Provider>
```

## TodoList组件进行连接,传送命令:需要隐射关系
```
const stateToProps = (state) => {
    return {
        inputValue: state.inputValue //reducer里面的默认值
    }
}

export default connect(stateToProps,null)(TodoList);
```
