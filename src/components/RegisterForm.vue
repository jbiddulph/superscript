<template>
  <div class="bg-gray-100">
    <div class="top-shadow bg-white">
      &nbsp;
    </div>
    <form @submit.prevent="submit" class="text-left" role="form">
      <div class="pb-20">
        <div class="container text-left py-6 px-0 w-600">
          <h2>Business details</h2>
          <p class="mb-0 w-64">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <a href="#">contact us</a>.</p>
        </div>
        <div class="form-inline rounded-xl bg-white container p-4 w-600">
          <div class="row py-3">
            <div class="col-12">
              <h5>Title</h5>
              <label for="Title">
                <select class="form-select" aria-label="Default select example" v-model="post.title" name="title">
                  <option selected>Select...</option>
                  <option value="Mr">Mr</option>
                  <option value="Ms">Ms</option>
                  <option value="Miss">Miss</option>
                  <option value="Mrs">Mrs</option>
                </select>
              </label>
            </div>
          </div>
          <div class="row py-3">
            <div class="col-12 form-group">
              <h5>First Name</h5>
              <label for="Name" class="w-full">
                <div :class="{ error: v$.post.first_name.$errors.length }">
                  <input class="form-control input-lg" type="text" placeholder="Jane" v-model="post.first_name">
                  <div class="input-errors" v-for="error of v$.post.first_name.$errors" :key="error.$uid">
                    <small class="text-red-600 error-msg">Please enter a first name</small>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div class="row py-3">
            <div class="col-12 form-group">
              <h5>Last Name</h5>
                <label for="Name" class="w-full">
                  <div :class="{ error: v$.post.last_name.$errors.length }">
                    <input class="form-control input-lg" type="text" placeholder="Smith" v-model="post.last_name" name="last_name">
                    <div class="input-errors" v-for="error of v$.post.last_name.$errors" :key="error.$uid">
                      <small class="text-red-600 error-msg">Please enter a last name</small>
                    </div>
                  </div>
                </label>
            </div>
          </div>
          <div class="row py-3">
            <div class="col-12">
              <h5>Premises Address</h5>
              <label for="address" class="w-full">
                <div :class="{ error: v$.post.address.$errors.length }">
                  <textarea cols="20" rows="4" class="form-control input-lg" type="text" placeholder="Search or tell use what kind of business this is" v-model="post.address" name="address"></textarea>
                  <div class="input-errors" v-for="error of v$.post.address.$errors" :key="error.$uid">
                    <small class="text-red-600 error-msg">Please enter valid address</small>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div class="row py-3">
            <div class="col-12">
              <h5>Policy Start Date</h5>
              <label for="policy_start_date">
                <input class="form-control" type="text" placeholder="MM/DD/YYYY" v-model="post.policy_start_date" name="policy_start_date">
              </label>
            </div>
          </div>
          <div class="row py-3">
            <div class="col-12">
              <hr />
            </div>
          </div>
          <div class="row py-3">
            <div class="col-12">
              <h5>Employee ERN</h5>
              <label for="ern">
                <input class="form-control" type="text" v-model="post.ern" name="ern">
              </label>
            </div>
          </div>
          <div class="row py-3">
            <div class="col-12">
              <h5>We're exempt from having an ERN or we can provide it within 30 days</h5>
                <input class="form-check-input" type="checkbox" value="" id="ern_exempt" placeholder="Employee ERN" v-model="post.ern_exempt" name="ern_exempt">
                <label class="ml-4 form-check-label" for="ern_exempt">Employee ERN</label>
            </div>
          </div>
          <div class="row py-3">
            <div class="col-12">
              <hr />
            </div>
          </div>
          <div class="row py-3">
            <div class="col-12">
              <h5>Password</h5>
              <label for="password">
                <div :class="{ error: v$.post.password.$errors.length }">
                  <input class="form-control" type="password" v-model="post.password" name="password">
                  <div class="input-errors" v-for="error of v$.post.password.$errors" :key="error.$uid">
                    <small class="text-red-600 error-msg">Please enter password</small>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div class="row py-3">
            <div class="col-12">
              <h5>Confirm Password</h5>
              <label for="password_confirmation">
                <div :class="{ error: v$.post.password_confirmation.$errors }">
                  <input class="form-control" type="password" v-model="post.password_confirmation" name="password_confirmation">
                  <div class="input-errors" v-for="error of v$.post.password_confirmation.$errors" :key="error.$uid">
                    <small class="text-red-600 error-msg">The password does not match</small>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <FormBottom />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormBottom from '@/components/FormBottom.vue';
import useVuelidate from '@vuelidate/core';
import {required, sameAs} from '@vuelidate/validators';

export default defineComponent({
  name: 'RegisterForm',
   components: {
    FormBottom
  },
  data() {
    return {
      v$: useVuelidate(),
      post: {
        title: null,
        first_name: null,
        last_name: null,
        address: null,
        policy_start_date: null,
        ern: null,
        ern_exempt: false,
        password: null,
        password_confirmation: null
      }
    }
  },
  validations () {
    return {
      post: {
        first_name: {required},
        last_name: {required},
        address: {required},
        password: {required},
        password_confirmation: sameAs(this.post.password)
      }
    }
  },
  methods: {
    submit() {
      console.log('V: ',this.v$)
      this.v$.$validate()
      if (!this.v$.$error) {
        this.axios.post('https://dr-frontend-test-api.herokuapp.com/api/accounts', this.post)
        .then((result) => {
          console.log('result: ', result);
          if(result.status === 200) {
            this.$router.push({ path : '/thankyou' });
          }
        })
      } else {
        alert('Form failed validation')
      }
    }
  },
  computed: {
    getLastName() {
      return 'surname';
    }
  }
});
</script>

<style scoped lang="scss">
.error input, .error textarea {
  border: 1px solid #ff0000;
}
.top-shadow {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}
h2 {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 500;
}
p {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
}
a {
  color: #0046FF
}
textarea {
  resize: none;
}
.w-600 {
  max-width:600px;
}
</style>
