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
  telephone: yup.string().required('A Teledonszámot kötelező kitölteni!'),
  message: yup.string().required('Kérlek add meg, mit szeretnél!')
})

function onSubmit(values) {
  console.table(values)
}
</script>

<template>
  <h2 class="display-10">Kapcsolat</h2>
  <div class="w-75 mt-5 m-auto p-5 bg-danger bg-opacity-25">
    <VForm @submit="onSubmit" :validation-schema="schema">
      <div class="input-group">
        <label class="input-group-text" for="name">Név*</label>
        <Field type="text" name="name" id="name" class="form-control"/>
        <ErrorMessage name="name" as="div" class="alert alert-danger m-1"/>
      </div>
      <div class="input-group">
        <label class="input-group-text" for="email">Email*</label>
        <Field type="text" name="email" id="email" class="form-control"/>
        <ErrorMessage name="email" as="div" class="alert alert-danger m-1"/>
      </div>
      <div class="input-group">
        <label class="input-group-text" for="email">Telefonszám*</label>
        <Field type="text" name="telephone" id="telephone" class="form-control"/>
        <ErrorMessage name="telephone" as="div" class="alert alert-danger m-1"/>
      </div>
      <div class="input-group">
        <label class="input-group-text" for="email">üzenet*</label>
        <Field type="textarea" name="message" id="message" class="form-control"/>
        <ErrorMessage name="message" as="div" class="alert alert-danger m-1"/>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Küldés</button>
    </VForm>
  </div>
</template>

<style scoped>

</style>