<template>
    <form class="form">
        <div class="form-floating mb-3">
            <input type="email" class="form-control " id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating mb-3">
            <input  type="text" class="form-control " id="floatingUserName" placeholder="Password">
            <label for="floatingUserName">User name</label>
        </div>
        <div class="form-floating mb-3">
            <input type="password" class="form-control " id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
        </div>
        <button type="button" class="btn btn-primary">Register</button>
    </form>
</template>
<script setup>

</script>
<style >
.form {
    max-width: 600px;
    margin: 0 auto;
}
</style>