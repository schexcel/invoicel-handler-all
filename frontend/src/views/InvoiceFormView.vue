<template>
  <div class="container my-4">
    <h1>{{ invoiceId ? 'Számla Szerkesztése' : 'Új Számla' }}</h1>
    <form @submit.prevent="submitForm">
      <!-- Szállító adatai -->
      <div class="mb-3">
        <label for="supplierName" class="form-label">Szállító neve</label>
        <input type="text" class="form-control" id="supplierName" v-model="invoice.supplierName" required>
      </div>
      <div class="mb-3">
        <label for="supplierAddress" class="form-label">Szállító címe</label>
        <input type="text" class="form-control" id="supplierAddress" v-model="invoice.supplierAddress" required>
      </div>
      <div class="mb-3">
        <label for="supplierBankAccount" class="form-label">Szállító bankszámlaszáma</label>
        <input type="text" class="form-control" id="supplierBankAccount" v-model="invoice.supplierBankAccount" required>
      </div>
      <div class="mb-3">
        <label for="supplierTaxNumber" class="form-label">Szállító adószáma</label>
        <input type="text" class="form-control" id="supplierTaxNumber" v-model="invoice.supplierTaxNumber" required>
      </div>
      <!-- Vevő adatai -->
      <div class="mb-3">
        <label for="customerName" class="form-label">Vevő neve</label>
        <input type="text" class="form-control" id="customerName" v-model="invoice.customerName" required>
      </div>
      <div class="mb-3">
        <label for="customerAddress" class="form-label">Vevő címe</label>
        <input type="text" class="form-control" id="customerAddress" v-model="invoice.customerAddress" required>
      </div>
      <div class="mb-3">
        <label for="customerBankAccount" class="form-label">Vevő bankszámlaszáma</label>
        <input type="text" class="form-control" id="customerBankAccount" v-model="invoice.customerBankAccount" required>
      </div>
      <div class="mb-3">
        <label for="customerTaxNumber" class="form-label">Vevő adószáma</label>
        <input type="text" class="form-control" id="customerTaxNumber" v-model="invoice.customerTaxNumber" required>
      </div>
      <!-- Számla adatok -->
      <div class="mb-3">
        <label for="invoiceNumber" class="form-label">Számlaszám</label>
        <input type="text" class="form-control" id="invoiceNumber" v-model="invoice.invoiceNumber" required>
      </div>
      <div class="mb-3">
        <label for="invoiceDate" class="form-label">Számla kelte</label>
        <input type="date" class="form-control" id="invoiceDate" v-model="invoice.invoiceDate" required>
      </div>
      <button type="submit" class="btn btn-primary">{{ invoiceId ? 'Szerkesztés' : 'Beküldés' }}</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      invoiceId: this.$route.params.id,  // Invoice ID from the route, if editing
      invoice: {
        supplierName: '',
        supplierAddress: '',
        supplierBankAccount: '',
        supplierTaxNumber: '',
        customerName: '',
        customerAddress: '',
        customerBankAccount: '',
        customerTaxNumber: '',
        invoiceNumber: '',
        invoiceDate: ''
      }
    };
  },
  created() {
    if (this.invoiceId) {
      this.loadInvoice();
    }
  },
  methods: {
    loadInvoice() {
      axios.get(`/api/invoiceheads/${this.invoiceId}`)
          .then(response => {
            this.invoice = response.data;
          })
          .catch(error => {
            console.error("Error loading invoice details:", error);
          });
    },
    submitForm() {
      const method = this.invoiceId ? 'put' : 'post';
      const url = this.invoiceId ? `/api/invoiceheads/${this.invoiceId}` : '/api/invoiceheads';
      axios[method](url, this.invoice)
          .then(() => {
            this.$router.push({ name: 'InvoiceList' });
            alert('Számla sikeresen ' + (this.invoiceId ? 'szerkesztve' : 'létrehozva') + '!');
          })
          .catch(error => {
            console.error("Error submitting invoice:", error);
            alert('Hiba történt a számla ' + (this.invoiceId ? 'szerkesztése' : 'létrehozása') + 'kor!');
          });
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
}
.input, .textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
}
</style>
