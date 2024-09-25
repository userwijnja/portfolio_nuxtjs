<template>
  <CommonLoader />
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <CommonNavbar />
    <CommonMenu />
      <main>
        <PreviewHeader />
        <HomeAbout />
        <HomeServices />
        <HomeWorks />
      
      </main>
      <CommonFooter1 />
    </div>
  </div>
</template>

<script setup>
//= Page Metadata
definePageMeta({
  layout: "preview",
});
//= Page Head
useHead({
  titleTemplate: `%s - Preview`,
  script: [
    { src: "/assets/js/smoother-script.js", defer: true }
  ]
});
</script>

