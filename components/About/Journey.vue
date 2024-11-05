<template>
  <section class="intro section-padding pb-0">
    <div class="container">
      <div class="row pb-100 bord-thin-bottom mb-80">
        <div class="col-lg-4">
          <div class="sec-head">
            <h6 class="sub-title fz-20 md-mb50">Journey</h6>
          </div>
        </div>
        <div class="col-lg-7 offset-lg-1">
          <div>
            <h3 class="text-u text-indent">
              I’m a dedicated front-end developer with a focus on WordPress and React.
            </h3>
            <div class="text mt-30">
              <p>
                My interest began in 2021 with a 10-week web development course at Bit Academy, simply out of curiosity.
                Soon after, I started creating web apps for startups and took various courses on Scrimba and Udemy.
                
                Today, after several successful projects, I can proudly say that web development is not only my passion but also my full-time career.
                With my enthusiasm, dedication, and perseverance, I am constantly seeking new challenges and opportunities to expand and refine my skills.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <div class="sec-head">
            <h6 class="sub-title fz-20 md-mb50">Experience</h6>
          </div>
        </div>
        <div class="col-lg-7 offset-lg-1">
          <div class="cont">
            <div class="accordion bord">
              <div
                v-for="(item, index) in data"
                :key="item.id"
                class="item mb-20 wow fadeInUp"
                :class="{ active: activeIndex === index }"
                @click="openAccordion(index)"
                :data-wow-delay="`${((index * 0.2) + 0.1).toFixed(1)}s`"
              >
                <div class="title">
                  <h4>{{ item.title }}</h4>
                  <span class="ico"></span>
                </div>
                <div v-if="activeIndex === index" class="accordion-info">
                  <p>{{ item.content }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import data from '@/data/About/about.json';

const activeIndex = ref(null);

const openAccordion = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style scoped>

.accordion .item .accordion-info {
  display: none;
}

.accordion .item.active .accordion-info {
  display: block;
}
</style>