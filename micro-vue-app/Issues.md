## Typsscript
### types下定义的类型，ts文件中可用，vue文件中提示‘'xxx' is not defined  no-undef’
**solution**
1. eslint在vue中禁用undef

### 在definProps中使用了上面的方式还是提示 no-undef 错误
``` javascript
defineProps({
  items: {
    type: Array<SearchFormItem>,
    required: true
  }
})
```

### Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 
formState[item.key]报错
```
<a-form-item v-for="item in items" :key="item"
      :label="item.label">
        <a-input v-if="item.type === 'input'" v-model:value="formState[item.key]"></a-input>
</a-form-item       
```
**solution**
formState加上数据类型Record<string, string>，明确告诉TS formstate的数据类型
```
const formState = reactive<Record<string, any>>({})
```

## ant design vue
### form.resetFields不起作用？
`a-form-item`必须定义`name`
