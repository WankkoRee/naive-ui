# Use in Form

```html
<n-form :model="model" :rules="rules">
  <n-form-item path="tags" :label="false">
    <n-dynamic-tags v-model:value="model.tags" />
  </n-form-item>
</n-form>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      model: ref({
        tags: ['teacher', 'programmer']
      }),
      rules: {
        tags: {
          trigger: ['change'],
          validator (rule, value) {
            if (value.length >= 5) return new Error('Up to 4 tags')
            return true
          }
        }
      }
    }
  }
})
```
