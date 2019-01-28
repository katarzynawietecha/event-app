<template>
  <div>
    <h2>Sign up</h2>
    <div class="form-group m-auto col-xs-12 col-sm-6 col-md-4">
      <input
        type="text"
        placeholder="email"
        v-model="email"
        class="form-control" />
      <input
        type="password"
        placeholder="passowrd"
        v-model="password"
        class="form-control" />
      <button
        type="submit"
        class="btn btn-info"
        @click="signUp">Sign up</button>
        <p> {{ error.message }}</p>
        <p>Already a user?
          <router-link to="/signin">Sign in!</router-link>
        </p>
    </div>
  </div>
</template>

<script>
import { firebaseApp } from "../firebaseApp"

export default {
  data(){
    return {
      email: "",
      password: "",
      error: {
        message: ""
      }
    }
  },
  methods: {
    signUp(){
      firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error
        })
    }
  }
}

</script>
