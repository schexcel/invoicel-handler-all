<template>
  <div class="container my-4">
    <div class="row align-items-center">
      <div class="col"></div>
      <div class="col-12 col-md-10 col-lg-8 col-xl-6 bg-body-tertiary p-3">
        <h5 class="mb-3">Normál számla</h5>
        <div v-if="errorMessage" class="alert alert-danger" role="alert">
          {{ errorMessage }}
        </div>
        <div v-if="invoicehead">
          <!-- Számla részletei -->
          <table class="table">
            <!-- Szállító és vevő adatai -->
            <tr>
              <td>
                Szállító:
                <div>{{ invoicehead.supplierTP.taxPayerName }}</div>
                <div>{{ invoicehead.supplierTP.address }}</div>
                <div>Bankszámlaszám: {{ invoicehead.supplierTP.bankAccountNumber }}</div>
                <div>Adószám: {{ invoicehead.supplierTP.taxNumber }}</div>
              </td>
              <td>
                Vevő:
                <div>{{ invoicehead.customerTP.taxPayerName }}</div>
                <div>{{ invoicehead.customerTP.address }}</div>
                <div>Bankszámlaszám: {{ invoicehead.customerTP.bankAccountNumber }}</div>
                <div>Adószám: {{ invoicehead.customerTP.taxNumber }}</div>
              </td>
            </tr>
            <!-- További számla adatok -->
            <tr>
              <td>Teljesítés dátuma: {{ invoicehead.performanceDate }}</td>
              <td>Számla kelte: {{ invoicehead.invoiceDate }}</td>
              <td>Fizetési határidő: {{ invoicehead.paymentDueDate }}</td>
              <td>Fizetési mód: {{ invoicehead.paymentMethod }}</td>
              <td>Számlaszám: {{ invoicehead.invoiceNumber }}</td>
            </tr>
          </table>
          <!-- Számla tételsorok -->
          <table class="table">
            <thead>
            <tr>
              <th>Megnevezés</th>
              <th>Áfa (%)</th>
              <th>Mennyiség</th>
              <th>Egységár</th>
              <th>Nettó érték</th>
              <th>Áfa összege</th>
              <th>Bruttó érték</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="line in invoicehead.lines" :key="line.id">
              <td>{{ line.description }}</td>
              <td>{{ line.vatRate }}</td>
              <td>{{ line.quantity }}</td>
              <td>{{ line.unitPrice }}</td>
              <td>{{ line.netAmount }}</td>
              <td>{{ line.vatAmount }}</td>
              <td>{{ line.totalAmount }}</td>
            </tr>
            </tbody>
          </table>
          <!-- Számla összesítő adatok -->
          <div class="text-right">
            <div>Nettó összeg: {{ invoicehead.totalNet }}</div>
            <div>Áfa összege: {{ invoicehead.totalVat }}</div>
            <div>Bruttó összeg: {{ invoicehead.totalGross }}</div>
          </div>
        </div>
        <div v-else class="alert alert-info">Nincsenek számlaadatok.</div>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      invoicehead: null,
      errorMessage: ''
    };
  },
  created() {
    this.loadInvoice();
  },
  methods: {
    loadInvoice() {
      axios.get(`/api/invoiceheads/${this.$route.params.id}`)
          .then(response => {
            this.invoicehead = response.data;
          })
          .catch(error => {
            console.error("Error loading invoice details:", error);
            this.errorMessage = 'Hiba történt a számlaadatok betöltésekor.';
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
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
</style>
