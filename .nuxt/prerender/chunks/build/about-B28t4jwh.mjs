import { _ as _sfc_main$2$1, a as _sfc_main$1$1, b as _sfc_main$4 } from './Menu-DNxPo9y_.mjs';
import { useSSRContext, onUnmounted, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';
import { _ as _imports_0$1 } from './virtual_public-BLj8Ij6Q.mjs';
import { Swiper, SwiperSlide } from 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/swiper/vue/swiper-vue.js';
import { Navigation, Pagination } from 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/swiper/swiper.esm.js';
import { _ as _sfc_main$5 } from './Footer1-CPjMoQu_.mjs';
import { u as useHead } from './index-BCI9veJc.mjs';
import './nuxt-link-P6SDANQl.mjs';
import 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/devalue/index.js';
import 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/ofetch/dist/node.mjs';
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

const _imports_0 = publicAssetsURL("/assets/imgs/b3.jpg");
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "about-header section-padding pb-0" }, _attrs))}><div class="container mt-100"><div class="row"><div class="col-lg-9 offset-lg-1"><div class="cont"><h6 class="sub-title mb-15">Creative Agency</h6><h1 class="text-u">About Us</h1></div></div></div></div><div class="img mt-80" data-overlay-dark="4"><img${ssrRenderAttr("src", _imports_0)} alt=""></div></header>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = {
  __name: "Intro",
  __ssrInlineRender: true,
  setup(__props) {
    const handleResize = () => {
      if ((void 0).innerWidth > 991) {
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
    onUnmounted(() => {
      (void 0).removeEventListener("resize", handleResize);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-padding" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-10"><div class="text"><span class="sub-title mb-15 opacity-8">- Who We Are?</span><div class="text-reval"><h2 class="fz-50 text-u mb-30"><span class="text">We are a creative studio with focus</span><span class="text">on set design, illustration and</span><span class="text"> motion design.</span></h2></div><p> We create brand identities, digital experiences, and print materials that communicate clearly, achieve marketing goals, and look fantastic. Urban design draws together the many strands of place-making, environmental stewardship. </p></div></div></div><div class="row"><div class="col-lg-10 offset-lg-1"><div class="row mt-80"><div class="col-md-4 sm-mb30"><ul class="list rest"><li class="fz-18 mb-15"><span class="mr-10">+</span> Branding Strategy</li><li class="fz-18 mb-15"><span class="mr-10">+</span> Digital Experiences</li><li class="fz-18 mb-15"><span class="mr-10">+</span> Social Media</li><li class="fz-18 mb-15"><span class="mr-10">+</span> Advertising</li></ul></div><div class="col-md-4 sm-mb30"><ul class="list rest"><li class="fz-18 mb-15"><span class="mr-10">+</span> Branding Strategy</li><li class="fz-18 mb-15"><span class="mr-10">+</span> Digital Experiences</li><li class="fz-18 mb-15"><span class="mr-10">+</span> Social Media</li><li class="fz-18 mb-15"><span class="mr-10">+</span> Advertising</li></ul></div><div class="col-md-4"><ul class="list rest"><li class="fz-18 mb-15"><span class="mr-10">+</span> Branding Strategy</li><li class="fz-18 mb-15"><span class="mr-10">+</span> Digital Experiences</li><li class="fz-18 mb-15"><span class="mr-10">+</span> Social Media</li><li class="fz-18 mb-15"><span class="mr-10">+</span> Advertising</li></ul></div></div><div class="row numbers mt-80"><div class="col-lg-4"><div class="item md-mb50"><h3 class="stroke f-bold num pb-30 mb-30 bord-thin-bottom">48</h3><h6 class="fz-16">Projects Completed</h6></div></div><div class="col-lg-4"><div class="item md-mb50"><h3 class="stroke f-bold num pb-30 mb-30 bord-thin-bottom">64k</h3><h6 class="fz-16">Clients Around the World</h6></div></div><div class="col-lg-4"><div class="item"><h3 class="stroke f-bold num pb-30 mb-30 bord-thin-bottom">30</h3><h6 class="fz-16">Total Awards</h6></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About/Intro.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const data = [
  {
    id: 1,
    quote: "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
    author: "Tyler Smith",
    client: "Envato Client"
  },
  {
    id: 2,
    quote: "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
    author: "Tyler Smith",
    client: "Envato Client"
  },
  {
    id: 3,
    quote: "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
    author: "Tyler Smith",
    client: "Envato Client"
  },
  {
    id: 4,
    quote: "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
    author: "Tyler Smith",
    client: "Envato Client"
  }
];
const _sfc_main$1 = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperOptions = {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      loop: true,
      spaceBetween: 30,
      navigation: {
        nextEl: ".testimonials .swiper-button-next",
        prevEl: ".testimonials .swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "testimonials section-padding" }, _attrs))}><div class="container"><div class="sec-head pb-20 bord-thin-bottom mb-80"><div class="d-flex align-items-center"><div><h3 class="f-bold text-u">Testimonials</h3></div><div class="ml-auto"><div class="swiper-button-prev"><span class="pe-7s-angle-left"></span></div><div class="swiper-button-next"><span class="pe-7s-angle-right"></span></div></div></div></div><div class="row"><div class="col-lg-9"><div class="testim">`);
      if (unref(data).length) {
        _push(ssrRenderComponent(unref(Swiper), mergeProps({ id: "content-carousel-container-unq-testim" }, swiperOptions), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(data), (item) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="item"${_scopeId2}><div class="row"${_scopeId2}><div class="col-md-2"${_scopeId2}><div class="quote-icon icon-img-80 pt-10"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1)} alt=""${_scopeId2}></div></div><div class="col-md-10"${_scopeId2}><div class="cont"${_scopeId2}><h4 class="fz-24"${_scopeId2}>${ssrInterpolate(item.quote)}</h4><div class="info mt-30"${_scopeId2}><h5 class="text-u ls1"${_scopeId2}>${ssrInterpolate(item.author)}</h5><span class="sub-title opacity-8 mt-5"${_scopeId2}>${ssrInterpolate(item.client)}</span></div></div></div></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "item" }, [
                          createVNode("div", { class: "row" }, [
                            createVNode("div", { class: "col-md-2" }, [
                              createVNode("div", { class: "quote-icon icon-img-80 pt-10" }, [
                                createVNode("img", {
                                  src: _imports_0$1,
                                  alt: ""
                                })
                              ])
                            ]),
                            createVNode("div", { class: "col-md-10" }, [
                              createVNode("div", { class: "cont" }, [
                                createVNode("h4", { class: "fz-24" }, toDisplayString(item.quote), 1),
                                createVNode("div", { class: "info mt-30" }, [
                                  createVNode("h5", { class: "text-u ls1" }, toDisplayString(item.author), 1),
                                  createVNode("span", { class: "sub-title opacity-8 mt-5" }, toDisplayString(item.client), 1)
                                ])
                              ])
                            ])
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
                      createVNode("div", { class: "item" }, [
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-md-2" }, [
                            createVNode("div", { class: "quote-icon icon-img-80 pt-10" }, [
                              createVNode("img", {
                                src: _imports_0$1,
                                alt: ""
                              })
                            ])
                          ]),
                          createVNode("div", { class: "col-md-10" }, [
                            createVNode("div", { class: "cont" }, [
                              createVNode("h4", { class: "fz-24" }, toDisplayString(item.quote), 1),
                              createVNode("div", { class: "info mt-30" }, [
                                createVNode("h5", { class: "text-u ls1" }, toDisplayString(item.author), 1),
                                createVNode("span", { class: "sub-title opacity-8 mt-5" }, toDisplayString(item.client), 1)
                              ])
                            ])
                          ])
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
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-lg-3 d-flex align-items-center justify-content-center"><div class="swiper-pagination"></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About/Testimonials.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: `%s - About`,
      bodyAttrs: {
        class: "main-bg"
      },
      script: [
        { src: "/assets/js/smoother-script.js", defer: true }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonLoader = _sfc_main$2$1;
      const _component_CommonNavbar = _sfc_main$1$1;
      const _component_CommonMenu = _sfc_main$4;
      const _component_AboutHeader = __nuxt_component_3;
      const _component_AboutIntro = _sfc_main$2;
      const _component_AboutTestimonials = _sfc_main$1;
      const _component_CommonFooter1 = _sfc_main$5;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_CommonLoader, null, null, _parent));
      _push(`<div id="smooth-wrapper">`);
      _push(ssrRenderComponent(_component_CommonNavbar, null, null, _parent));
      _push(ssrRenderComponent(_component_CommonMenu, null, null, _parent));
      _push(`<div id="smooth-content"><main class="main-bg">`);
      _push(ssrRenderComponent(_component_AboutHeader, null, null, _parent));
      _push(ssrRenderComponent(_component_AboutIntro, null, null, _parent));
      _push(ssrRenderComponent(_component_AboutTestimonials, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_CommonFooter1, null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-B28t4jwh.mjs.map
