### keep-alive是用来缓存当前组件的
如果用<keep-alive></keep-alive>去包裹了一个组件，那么这个组件将被缓存起来，此组件除了基础的八个生命周期外还有activated和deactivated两个生命周期,此时首次进入该组件，会执行beforeCreate\created\beforeMount\mounted\activated这五个生命周期，此后再次进入该组件会就只会执行activated

```vue
<template>
    <button @click="currentComponent = (currentComponent === 'A' ? 'B':'A')">
        切换组件{{ currentComponent === 'A' ? 'B' : 'A' }} 组件
    </button>
    <div>
        <p>当前组件: {{ currentComponent }} 组件</p>
        <KeepAlive>
            <component :is="currentComponent === 'A' ? ComponentA : ComponentB" />
        </KeepAlive>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import ComponentA from './ComponentA.vue';
import ComponentB from './ComponentB.vue';
const currentComponent = ref('A');
</script>
```

假设你有两个被 <keep-alive> 包裹的组件 A 和 B：

首次访问组件 A：(在vue3中)

A: onBeforeMount → onMounted → onActivated
从组件 A 切换到组件 B：

A: onDeactivated
B: onBeforeMount → onMounted → onActivated
从组件 B 切换回组件 A：

B: onDeactivated
A: onActivated （注意：不会再执行 onBeforeMount 和 onMounted）
页面卸载时：

A: onDeactivated → onBeforeUnmount → onUnmounted