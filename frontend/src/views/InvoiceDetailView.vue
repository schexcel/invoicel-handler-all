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
//      axios.get(`http://127.0.0.1:8000/api/invoiceheads/${this.$route.params.id}`)
      axios.get(`http://127.0.0.1:8000/api/invoiceheads/15`)
          .then(response => {
            this.invoicehead = response.data.data;
          })
          .catch(error => {
            console.error("Error loading invoice details:", error);
            this.errorMessage = 'Hiba történt a számlaadatok betöltésekor.';
          });

    }
  }
};
</script>

<template>
  <div class="container-fluid my-4">
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
              <td colspan="3">
                Szállító:
                <div>{{ invoicehead.supplierTP.taxPayerName }}</div>
                <div>
                  {{invoicehead.supplierTP.postalCode }},
                  {{invoicehead.supplierTP.city }}
                  {{invoicehead.supplierTP.streetName }}
                  {{invoicehead.supplierTP.publicPlaceCategory }}
                  {{invoicehead.supplierTP.number}}
                </div>
                <div>Bankszámlaszám: {{ invoicehead.supplierTP.bankAccountNumber }}</div>
                <div>Adószám:
                  {{ invoicehead.supplierTP.taxNumber.taxpayerId}}-
                  {{invoicehead.supplierTP.taxNumber.vatCode }}-
                  {{invoicehead.supplierTP.taxNumber.countyCode }}
                </div>
              </td>
              <td colspan="2">
                Vevő:
                <div>{{ invoicehead.customerTP.taxPayerName }}</div>
                <div>
                  {{invoicehead.customerTP.postalCode }},
                  {{invoicehead.customerTP.city }}
                  {{invoicehead.customerTP.streetName }}
                  {{invoicehead.customerTP.publicPlaceCategory }}
                  {{invoicehead.customerTP.number}}
                </div>
                <div>Bankszámlaszám: {{ invoicehead.customerTP.bankAccountNumber }}</div>
                <div>Adószám:
                  {{ invoicehead.customerTP.taxNumber?.taxpayerId ?? null }}-
                  {{ invoicehead.customerTP.taxNumber?.vatCode ?? null }}-
                  {{ invoicehead.customerTP.taxNumber?.countyCode ?? null }}

                </div>
              </td>
            </tr>
            <!-- További számla adatok -->
            <tr>
              <td>Teljesítés dátuma: {{ invoicehead.invoiceDetail.invoiceDeliveryDate }}</td>
              <td>Számla kelte: {{ invoicehead.invoiceIssueDate }}</td>
              <td>Fizetési határidő: {{ invoicehead.invoiceDetail.paymentDate }}</td>
              <td>Fizetési mód: {{ invoicehead.invoiceDetail.paymentMethod }}</td>
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


            <tr v-for="line in invoicehead.invoiceLines" :key="line.lineNumber">
              <td >{{ line.lineDescription }}</td>
              <td>{{ line.vatPercentage*100 }}%</td>
              <td>{{ Math.round(line.quantity) }}</td>
              <td>{{ Math.round(line.unitPrice) }}</td>
              <td>{{ Math.round(line.lineNetAmount) }}</td>
              <td>{{ Math.round(line.lineVatAmount) }}</td>
              <td>{{ Math.round(line.lineGrossAmount) }}</td>
            </tr>
            </tbody>
          </table>
          <!-- Számla összesítő adatok -->
          <div class="text-right">
            <div>Nettó összeg: {{ Math.round(invoicehead.invoiceDetail.invoiceNetAmount) }}</div>
            <div>Áfa összege: {{ Math.round(invoicehead.invoiceDetail.invoiceVatAmount) }}</div>
            <div>Bruttó összeg: {{ Math.round(invoicehead.invoiceDetail.invoiceGrossAmount) }}</div>
          </div>
        </div>
        <div v-else class="alert alert-info">Nincsenek számlaadatok.</div>
      </div>
      <div class="col"></div>
    </div>
  </div>

  <p style="width: 98%; align-content: end; text-align: center; padding: 5px">
    <span style="text-align: right; width: 80rem; padding: 5px">Fizetendő összeg:</span>
    <span style="text-align: right; width: 20rem; padding: 5px; font-weight: bold">{{Math.round(invoicehead.invoiceDetail.invoiceGrossAmount)}} Ft</span>
  </p>



</template>

<style scoped>
.table {
  border:#2d3748 solid 1px;
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 8px;
  text-align: left;
  border: #2d3748 solid 1px;
}
</style>
