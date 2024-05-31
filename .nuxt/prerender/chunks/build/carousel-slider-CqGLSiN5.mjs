import { _ as _sfc_main$2, a as _sfc_main$1$1, b as _sfc_main$3 } from './Menu-DNxPo9y_.mjs';
import { useSSRContext, ref, watch, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString } from 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/vue/server-renderer/index.mjs';
import { Swiper, SwiperSlide } from 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/swiper/vue/swiper-vue.js';
import { Navigation, Autoplay, Keyboard, Mousewheel, Pagination } from 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/swiper/swiper.esm.js';
import { u as useHead } from './index-BCI9veJc.mjs';
import './nuxt-link-P6SDANQl.mjs';
import 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/ufo/dist/index.mjs';
import './server.mjs';
import 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/devalue/index.js';
import 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/MyrtheWijnja/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/vue-router/dist/vue-router.node.mjs';

const data = [
  {
    id: 1,
    background: "/assets/imgs/works/full/11.jpg",
    link: "/project1",
    text: {
      title: "Avocado Cutter",
      subtitle: "Digital Design"
    }
  },
  {
    id: 2,
    background: "/assets/imgs/works/full/2.jpg",
    link: "/project2",
    text: {
      title: "The joy of music",
      subtitle: "Branding"
    }
  },
  {
    id: 3,
    background: "/assets/imgs/works/full/3.jpg",
    link: "/project3",
    text: {
      title: "Bank Rebranding",
      subtitle: "Branding"
    }
  },
  {
    id: 4,
    background: "/assets/imgs/works/full/6.jpg",
    link: "/project4",
    text: {
      title: "Carved Wood",
      subtitle: "Product Design"
    }
  },
  {
    id: 5,
    background: "/assets/imgs/works/full/8.jpg",
    link: "/project1",
    text: {
      title: "Blom Air purifier",
      subtitle: "Digital Art"
    }
  }
];
const _sfc_main$1 = {
  __name: "CarouselSlider",
  __ssrInlineRender: true,
  setup(__props) {
    const galleryImg = ref(null);
    const galleryText = ref(null);
    const swiperGalleryImageOptions = {
      modules: [Navigation, Autoplay, Keyboard, Mousewheel, Pagination],
      onSwiper(swiper) {
        galleryImg.value = swiper;
      },
      spaceBetween: 80,
      slidesPerView: 2,
      centeredSlides: true,
      loop: true,
      loopedSlides: 4,
      mousewheel: true,
      speed: 1500,
      navigation: {
        nextEl: ".carousel-slider .swiper-controls .swiper-button-next",
        prevEl: ".carousel-slider .swiper-controls .swiper-button-prev"
      },
      pagination: {
        el: ".carousel-slider .swiper-pagination",
        clickable: true,
        renderBullet(_, className) {
          return '<span class="' + className + '"><svg class="fp-arc-loader" width="16" height="16" viewBox="0 0 16 16"><circle class="path" cx="8" cy="8" r="5.5" fill="none" transform="rotate(-90 8 8)" stroke="#FFF"stroke-opacity="1" stroke-width="1px"></circle><circle cx="8" cy="8" r="3" fill="#FFF"></circle></svg></span>';
        }
      },
      keyboard: {
        enabled: true
      },
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        640: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 2
        }
      }
    };
    const swiperGalleryTextOptions = {
      modules: [Mousewheel],
      onSwiper(swiper) {
        galleryText.value = swiper;
      },
      spaceBetween: 30,
      slidesPerView: 1,
      direction: "vertical",
      loop: true,
      loopedSlides: 4,
      touchRatio: 0.2,
      slideToClickedSlide: true,
      mousewheel: true,
      speed: 1500
    };
    watch([galleryImg, galleryText], () => {
      if (galleryImg.value && galleryText.value) {
        galleryImg.value.on("slideChangeTransitionStart", function() {
          galleryText.value.slideTo(galleryImg.value.activeIndex);
        });
        galleryText.value.on("transitionStart", function() {
          galleryImg.value.slideTo(galleryText.value.activeIndex);
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "carousel-slider valign" }, _attrs))}><div class="full-width"><div class="gallery-img">`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps(swiperGalleryImageOptions, { class: "swiper-container" }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(data), (item) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: item.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="swiper-slide"${_scopeId2}><div class="bg-img"${ssrRenderAttr("data-background", item.background)} data-overlay-dark="3"${_scopeId2}><a${ssrRenderAttr("href", item.link)} class="animsition-link"${_scopeId2}></a></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "swiper-slide" }, [
                        createVNode("div", {
                          class: "bg-img",
                          "data-background": item.background,
                          "data-overlay-dark": "3"
                        }, [
                          createVNode("a", {
                            href: item.link,
                            class: "animsition-link"
                          }, null, 8, ["href"])
                        ], 8, ["data-background"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(data), (item) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: item.id
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "swiper-slide" }, [
                      createVNode("div", {
                        class: "bg-img",
                        "data-background": item.background,
                        "data-overlay-dark": "3"
                      }, [
                        createVNode("a", {
                          href: item.link,
                          class: "animsition-link"
                        }, null, 8, ["href"])
                      ], 8, ["data-background"])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="gallery-text">`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps(swiperGalleryTextOptions, { class: "swiper-container swiper-container-initialized swiper-container-vertical" }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(data), (item) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: item.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text"${_scopeId2}><h4${_scopeId2}>${ssrInterpolate(item.text.title)}</h4><h6${_scopeId2}><span${_scopeId2}>${ssrInterpolate(item.text.subtitle)}</span></h6></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text" }, [
                        createVNode("h4", null, toDisplayString(item.text.title), 1),
                        createVNode("h6", null, [
                          createVNode("span", null, toDisplayString(item.text.subtitle), 1)
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(data), (item) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: item.id
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text" }, [
                      createVNode("h4", null, toDisplayString(item.text.title), 1),
                      createVNode("h6", null, [
                        createVNode("span", null, toDisplayString(item.text.subtitle), 1)
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="swiper-controls"><div class="swiper-button-next swiper-nav-ctrl cursor-pointer"><div><span>Next Slide</span></div><div><i class="fas fa-chevron-right"></i></div></div><div class="swiper-button-prev swiper-nav-ctrl cursor-pointer"><div><i class="fas fa-chevron-left"></i></div><div><span>Prev Slide</span></div></div></div><div class="swiper-pagination"></div></header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Portfolio/CarouselSlider.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "carousel-slider",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: `%s - Portfolio Carousel Slider`,
      bodyAttrs: {
        class: "main-bg"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonLoader = _sfc_main$2;
      const _component_CommonNavbar = _sfc_main$1$1;
      const _component_CommonMenu = _sfc_main$3;
      const _component_PortfolioCarouselSlider = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_CommonLoader, null, null, _parent));
      _push(ssrRenderComponent(_component_CommonNavbar, null, null, _parent));
      _push(ssrRenderComponent(_component_CommonMenu, null, null, _parent));
      _push(ssrRenderComponent(_component_PortfolioCarouselSlider, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/carousel-slider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=carousel-slider-CqGLSiN5.mjs.map
