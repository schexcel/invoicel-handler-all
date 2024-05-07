<template>
  <div class="container p-4 my-4 bg-body-tertiary">
    <h4 class="mb-3">Adózói adatok</h4>
    <form @submit.prevent="submitForm">
      <!-- Mezők csoportosítása -->
      <div class="row">
        <!-- Alapvető adatok -->
        <div class="col-md-6">
          <label for="taxPayerName">Adóalany neve:</label>
          <input type="text" id="taxPayerName" v-model="taxpayer.taxPayerName" class="form-control">
        </div>
        <div class="col-md-6">
          <label for="bankAccountNumber">Bankszámlaszám:</label>
          <input type="text" id="bankAccountNumber" v-model="taxpayer.bankAccountNumber" class="form-control">
        </div>
        <!-- Cím adatok -->
        <div class="col-md-6">
          <label for="postalCode">Irányítószám:</label>
          <input type="text" id="postalCode" v-model="taxpayer.postalCode" class="form-control">
        </div>
        <div class="col-md-6">
          <label for="city">Település:</label>
          <input type="text" id="city" v-model="taxpayer.city" class="form-control">
        </div>
        <div class="col-md-6">
          <label for="streetName">Közterület neve:</label>
          <input type="text" id="streetName" v-model="taxpayer.streetName" class="form-control">
        </div>
        <div class="col-md-6">
          <label for="publicPlaceCategory">Közterület jellege:</label>
          <input type="text" id="publicPlaceCategory" v-model="taxpayer.publicPlaceCategory" class="form-control">
        </div>
        <div class="col-md-6">
          <label for="number">Házszám:</label>
          <input type="text" id="number" v-model="taxpayer.number" class="form-control">
        </div>
        <div class="col-md-6">
          <label for="additionalAddressDetail">További címadatok:</label>
          <input type="text" id="additionalAddressDetail" v-model="taxpayer.additionalAddressDetail" class="form-control">
        </div>
        <!-- Adószám részek -->
        <div class="col-md-12">
          <label for="taxNumber">Adószám (Törzsszám-Áfakód-Megyekód):</label>
          <div class="input-group">
            <input type="text" class="form-control" id="taxNumber" v-model="taxpayer.taxNumber" placeholder="Törzsszám">
            <input type="text" class="form-control" v-model="taxpayer.vatCode" placeholder="Áfakód">
            <input type="text" class="form-control" v-model="taxpayer.countyCode" placeholder="Megyekód">
          </div>
        </div>
        <!-- Áfa státusz -->
        <div class="col-md-12">
          <label for="taxPayerVatStatus">Áfa státusz:</label>
          <select class="form-control" id="taxPayerVatStatus" v-model="taxpayer.taxPayerVatStatus">
            <option value="PRIVATE_PERSON">Nem áfaalany (természetes személy)</option>
            <option value="DOMESTIC">Belföldi áfaalany</option>
            <option value="OTHER">Egyéb</option>
          </select>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary mt-3">Mentés</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taxpayer: {
        taxPayerName: '',
        bankAccountNumber: '',
        postalCode: '',
        city: '',
        streetName: '',
        publicPlaceCategory: '',
        number: '',
        additionalAddressDetail: '',
        taxNumber: '',
        vatCode: '',
        countyCode: '',
        taxPayerVatStatus: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Axios hívás az adatok beküldésére
      axios.post('/api/taxpayers', this.taxpayer)
          .then(response => {
            alert('Adózó adatai sikeresen elmentve!');
            this.$router.push({ name: 'TaxpayerList' });
          })
          .catch(error => {
            console.error('Hiba az adatok mentése során: ', error);
            alert('Hiba történt az adatok mentésekor!');
          });
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
}
input[type="text"], select {
  margin-bottom: 10px;
  width: 100%;
  padding: 8px;
}
</style>
