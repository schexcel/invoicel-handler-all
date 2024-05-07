<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Számlázási Adatkezelő</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/invoiceheads">Számlák</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/taxpayers">Adózók</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/invoiceheads/create">Új számla+</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/taxpayers/create">Új adózó+</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container my-4">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10 col-xl-8 bg-body-tertiary">
          <table class="table">
            <thead>
            <tr>
              <th>Eladó neve</th>
              <th>Vevő neve</th>
              <th>Számlaszám</th>
              <th>Számla kelte</th>
              <th>Műveletek</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="invoicehead in invoiceheads" :key="invoicehead.id">
              <td>{{ invoicehead.supplierTP.taxPayerName || 'Hiányzik!' }}</td>
              <td>{{ invoicehead.customerTP.taxPayerName || 'Hiányzik!' }}</td>
              <td>{{ invoicehead.invoiceNumber || 'Hiányzik!' }}</td>
              <td>{{ invoicehead.invoiceIssueDate || 'Hiányzik!' }}</td>
              <td>
                <router-link :to="{ name: 'invoicehead-detail', params: { id: invoicehead.id }}">
                  Részletek
                </router-link>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "TestView",
  data() {
    return {
      invoiceheads: []
    };
  },
  created() {
    this.fetchInvoiceHeads();
  },
  methods: {
    fetchInvoiceHeads() {
      axios.get('http://127.0.0.1:8000/api/invoiceheads')
          .then(response => {
            this.invoiceheads = response.data.data;
          })
          .catch(error => {
            console.error("Error fetching invoice heads:", error);
          });
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 960px;
  margin: auto;
}
.table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
</style>
