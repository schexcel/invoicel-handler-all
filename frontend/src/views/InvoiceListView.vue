<template>
  <div>
    <table class="table">
      <tr>
        <th style="text-align: left; padding: 10px">Számlák nyilvántartása</th>
        <th style="text-align: right; padding: 10px">
          <router-link to="/invoiceheads/create" style="text-decoration: none">
            Új számla hozzáadása+
          </router-link>
        </th>
      </tr>
    </table>
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
</template>

<script>
import axios from 'axios';

export default {
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
      axios.get('/api/invoiceheads')
          .then(response => {
            this.invoiceheads = response.data;
          })
          .catch(error => {
            console.error("Error fetching invoice heads:", error);
          });
    }
  }
};
</script>

<style scoped>
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
