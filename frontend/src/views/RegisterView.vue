<script setup>
import {Form as VForm, ErrorMessage, Field} from "vee-validate";
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string()
      .required('A nevet kötelező kitölteni!')
      .min(8, 'A név mezőnek legalább 8 karakter hosszúnak kell lennia!')
      .max(100, 'A név mező legfeljebb 100 karakter hosszú lehet!'),
  email: yup.string()
      .email('Nem megfelelő formátum!')
      .required('Kötelező kitölteni'),
  password: yup.string().min(8).required(),
  password_confirmation: yup.string().required().oneOf([yup.ref('password')], 'A jelszavaknak egyeznie kell!'),
  password_confirmation: yup.string().required().oneOf([yup.ref('password')])
})

function onSubmit(values) {
  console.table(values)
}
</script>

<template>
  <h2 class="display-10">Regisztráció</h2>
  <div class="w-75 mt-5 m-auto p-5 bg-warning bg-opacity-25">
    <VForm @submit="onSubmit" :validation-schema="schema">
      <div class="input-group">
        <label class="input-group-text" for="name">Név</label>
        <Field type="text" name="name" id="name" class="form-control"/>
        <ErrorMessage name="name" as="div" class="alert alert-danger m-1"/>
      </div>
      <div class="input-group">
        <label class="input-group-text" for="email">Email</label>
        <Field type="text" name="email" id="email" class="form-control"/>
        <ErrorMessage name="email" as="div" class="alert alert-danger m-1"/>
      </div>
      <div class="input-group">
        <label class="input-group-text" for="password">Jelszó</label>
        <Field type="password" name="password" id="password" class="form-control"/>
        <ErrorMessage name="password" as="div" class="alert alert-danger m-1"/>
      </div>
      <div class="input-group">
        <label class="input-group-text" for="password_confirmation">Jelszó megerősítés</label>
        <Field type="password" name="password_confirmation" id="password_confirmation" class="form-control"/>
        <ErrorMessage name="password_confirmation" as="div" class="alert alert-danger m-1"/>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Regisztráció</button>
    </VForm>
  </div>
</template>

<style scoped>

</style>