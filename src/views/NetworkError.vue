<template>
  <div
    class="flex flex-col justify-center text-center content-center mt-10 gap-y-6"
  >
    <h1 class="text-5xl">Uh-Oh!</h1>
    <h3 class="text-3xl">
      It looks like you're experiencing some network issues, please take a
      breath and
      <a href="#" @click="$router.go(-1)" class="text-3xl underline">
        <br />
        click here</a
      >
      to try again.
    </h3>
  </div>
</template>
