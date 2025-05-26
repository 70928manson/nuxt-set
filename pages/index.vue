<template>
  <article v-if="status === 'pending'" aria-busy="true" />
  <article v-else-if="error" class="error">
    {{ error.statusMessage }}
  </article>
  <article v-for="task in tasks" :key="task.id">
    {{ task.title }}
  </article>
</template>

<script lang="ts" setup>
interface Task {
  id: number;
  title: string;
}

const {
  data: tasks,
  error,
  status,
} = useFetch<Task[]>("api/tasks", {
  lazy: true,
});
</script>