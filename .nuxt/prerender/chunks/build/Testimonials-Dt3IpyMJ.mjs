import { mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import { _ as _imports_0 } from './virtual_public-BLj8Ij6Q.mjs';
import { Swiper, SwiperSlide } from 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/swiper/vue/swiper-vue.js';
import { Navigation, Pagination } from 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/swiper/swiper.esm.js';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "about section-padding" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-11"><span class="sub-title bord mb-30">Who We Are?</span><h3 class="text-u text-indent ls1">We create unexpected connections between creative people with a passion, and creative businesses on a mission, so they can make the best work of their lives.</h3></div><div class="col-lg-7 offset-lg-5"><div class="text mt-50"><p>Whether it&#39;s crafting a visually stunning brand identity, designing immersive digital experiences, or developing strategic marketing campaigns, we approach each project with meticulous attention to detail and an unwavering dedication to quality.</p></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CreativeAgency/About.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
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
const barndsData = [
  "/assets/imgs/brands/01.png",
  "/assets/imgs/brands/02.png",
  "/assets/imgs/brands/03.png",
  "/assets/imgs/brands/04.png",
  "/assets/imgs/brands/05.png",
  "/assets/imgs/brands/06.png"
];
const _sfc_main = {
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "testimonials section-padding sub-bg" }, _attrs))}><div class="container"><div class="sec-head pb-20 bord-thin-bottom mb-80"><div class="d-flex align-items-center"><div><h3 class="f-bold text-u">Testimonials</h3></div><div class="ml-auto"><div class="swiper-button-prev"><span class="pe-7s-angle-left"></span></div><div class="swiper-button-next"><span class="pe-7s-angle-right"></span></div></div></div></div><div class="row"><div class="col-lg-9"><div class="testim">`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        id: "content-carousel-container-unq-testim",
        class: "swiper-container"
      }, swiperOptions), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(data), (item) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: item.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="item"${_scopeId2}><div class="row"${_scopeId2}><div class="col-md-2"${_scopeId2}><div class="quote-icon icon-img-80 pt-10"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId2}></div></div><div class="col-md-10"${_scopeId2}><div class="cont"${_scopeId2}><h4 class="fz-24"${_scopeId2}>${ssrInterpolate(item.quote)}</h4><div class="info mt-30"${_scopeId2}><h5 class="text-u ls1"${_scopeId2}>${ssrInterpolate(item.author)}</h5><span class="sub-title opacity-8 mt-5"${_scopeId2}>${ssrInterpolate(item.client)}</span></div></div></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "item" }, [
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-md-2" }, [
                            createVNode("div", { class: "quote-icon icon-img-80 pt-10" }, [
                              createVNode("img", {
                                src: _imports_0,
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
                              src: _imports_0,
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
      _push(`</div></div><div class="col-lg-3 d-flex align-items-center justify-content-center"><div class="swiper-pagination"></div></div></div></div><div class="clients-marq no-bord pt-80 mt-40"><div class="container"><div class="main-marq"><div class="slide-har st1"><div class="box non-strok"><!--[-->`);
      ssrRenderList(unref(barndsData), (item) => {
        _push(`<div class="item"><div class="img icon-img-100"><a href="#0"><img${ssrRenderAttr("src", item)} alt=""></a></div></div>`);
      });
      _push(`<!--]--></div><div class="box non-strok"><!--[-->`);
      ssrRenderList(unref(barndsData), (item) => {
        _push(`<div class="item"><div class="img icon-img-100"><a href="#0"><img${ssrRenderAttr("src", item)} alt=""></a></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CreativeAgency/Testimonials.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { __nuxt_component_4 as _, _sfc_main as a };
//# sourceMappingURL=Testimonials-Dt3IpyMJ.mjs.map
