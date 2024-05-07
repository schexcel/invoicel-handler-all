<script>
import axios from 'axios';
//import {http} from "@/utils/http.js";

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


<template>
  <div>
    <table class="table">
      <tr>
        <th style="text-align: left; padding: 10px">Számlák nyilvántartása</th>
        <th style="text-align: right; padding: 10px">
          <router-link to="/letrehoz" style="text-decoration: none">
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
        <td>{{ invoicehead.supplierTP.taxPayerName}}</td>
        <td>{{ invoicehead.customerTP.taxPayerName}}</td>
        <td>{{ invoicehead.invoiceNumber}}</td>
        <td>{{ invoicehead.invoiceIssueDate}}</td>
        <td>
          <router-link :to="{ name: 'detail', params: { id: invoicehead.id }}">
            Részletek
          </router-link>
        </td>
      </tr>

      </tbody>
    </table>
  </div>
</template>

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
