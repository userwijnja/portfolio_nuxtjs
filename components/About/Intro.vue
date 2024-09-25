<template>
  <section class="section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-10">
          <div class="text">
            <span class="sub-title mb-15 opacity-8">- Who am I?</span>
            <div class="text-reval">
              <h2 class="fz-50 text-u mb-30">
                <span class="text">Maarten Wijnja</span>
                <span class="text">Passionate and creative
                </span>
                <span class="text">Frontend developer</span>
              </h2>
            </div>
            <p>
              I build modern websites and applications that are fast, efficient, and user-friendly. 
              My focus is on writing clean, maintainable code and creating seamless digital experiences 
              that meet user needs and business goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

const handleResize = () => {
  if (window.innerWidth > 991) {
    gsap.to(".text-reval .text", {
      backgroundPositionX: "0%",
      stagger: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".text-reval",
        markers: false,
        scrub: 1,
        start: "top center",
        end: "bottom center"
      }
    });
  }
};

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>
