<script setup>
import {Form as VForm,Field, ErrorMessage } from "vee-validate";
function  onSubmit(values){
console.table(values)
}
/*function  isRequired(value){
  if(!value || value ===''){
    return "A mező kitöltése kötelező!";
  }
  return true;
}*/
</script>

<template>
<h2 class="display-10">Bejelentkezés</h2>
  <div class="w-75 mt-5 m-auto p-5 bg-success bg-opacity-25">
    <VForm @submit="onSubmit">
      <div class="input-group">
        <label class="input-group-text" for="email">Email</label>
        <Field type="text" name="email" id="email" class="form-control" rules="required|email"/>
        <ErrorMessage name="email" as="div" class="alert alert-danger m-1"/>
      </div>
      <div class="input-group">
        <label class="input-group-text" for="password">Jelszó</label>
        <Field type="password" name="password" id="password" class="form-control" rules="required|min:8"/>
        <ErrorMessage name="password" as="div" class="alert alert-danger m-1" />
      </div>
      <button type="submit" class="btn btn-primary mt-3">Bejelentkezés</button>
    </VForm>
  </div>
</template>

<style scoped>

</style>