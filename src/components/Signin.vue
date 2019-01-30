<template>
  <div>
    <h2>Sign in</h2>
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
        @click="signIn">Sign in</button>
        <p>{{ error.message }}</p>
        <p>Not a user yet?
          <router-link to="/signup">Sign up!</router-link>
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
    signIn(){
      firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error
        })
    }
  }
}

</script>
