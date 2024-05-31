import { _ as __nuxt_component_0 } from './nuxt-link-P6SDANQl.mjs';
import { mergeProps, withCtx, openBlock, createBlock, createVNode, unref, useSSRContext, toDisplayString, Fragment, renderList } from 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/vue/server-renderer/index.mjs';
import { Swiper, SwiperSlide } from 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/swiper/vue/swiper-vue.js';
import { Navigation } from 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/swiper/swiper.esm.js';

const data$1 = [
  {
    id: 1,
    numb: "01",
    title: "Product Design",
    icon: "/assets/imgs/serv-icons/0.png",
    content: "We build and activate brands through cultural insight, strategic vision, and the power of emotion across every"
  },
  {
    id: 2,
    numb: "02",
    title: "Art Direction",
    icon: "/assets/imgs/serv-icons/1.png",
    content: "We build and activate brands through cultural insight, strategic vision, and the power of emotion across every"
  },
  {
    id: 3,
    numb: "03",
    title: "Web Development",
    icon: "/assets/imgs/serv-icons/2.png",
    content: "We build and activate brands through cultural insight, strategic vision, and the power of emotion across every"
  },
  {
    id: 4,
    numb: "04",
    title: "Branding Strategy",
    icon: "/assets/imgs/serv-icons/0.png",
    content: "We build and activate brands through cultural insight, strategic vision, and the power of emotion across every"
  }
];
const _sfc_main$1 = {
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "feat section-padding" }, _attrs))}><div class="container"><div class="sec-head pb-20 bord-thin-bottom mb-80"><div class="d-flex align-items-center"><div><h3 class="f-bold text-u">Our capabilities</h3></div><div class="ml-auto"><div class="d-flex align-items-center"><span class="sub-title ls1 bord">All Features</span>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/about",
        class: "arrow"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 18 18",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",
                  fill: "currentColor"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><div class="row"><!--[-->`);
      ssrRenderList(unref(data$1), (item) => {
        _push(`<div class="col-lg-3 col-md-6 items"><div class="item"><span class="numb">${ssrInterpolate(item.numb)}</span><div class="icon-img-50"><img${ssrRenderAttr("src", item.icon)} alt=""></div><h6>${ssrInterpolate(item.title)}</h6><p>${ssrInterpolate(item.content)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CreativePortfolio/Services.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const data = [
  {
    id: 1,
    img: "/assets/imgs/works/full/1.jpg",
    category: "Digital Design",
    title: "Retouch Photo",
    link: "/project1"
  },
  {
    id: 2,
    img: "/assets/imgs/works/full/2.jpg",
    category: "Branding",
    title: "Earthmade Aroma",
    link: "/project2"
  },
  {
    id: 3,
    img: "/assets/imgs/works/full/3.jpg",
    category: "Branding",
    title: "Bank Rebranding",
    link: "/project3"
  },
  {
    id: 4,
    img: "/assets/imgs/works/full/4.jpg",
    category: "Product Design",
    title: "The joy of music",
    link: "/project4"
  },
  {
    id: 5,
    img: "/assets/imgs/works/full/5.jpg",
    category: "Digital Art",
    title: "Blue Adobe MAX",
    link: "/project1"
  },
  {
    id: 6,
    img: "/assets/imgs/works/full/6.jpg",
    category: "Web Design",
    title: "Carved Wood",
    link: "/project3"
  }
];
const _sfc_main = {
  __name: "Works",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperOptions = {
      modules: [Navigation],
      slidesPerView: "auto",
      spaceBetween: 30,
      navigation: {
        nextEl: ".work-crev .swiper-button-next",
        prevEl: ".work-crev .swiper-button-prev"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "work-crev section-padding bg-gray text-dark" }, _attrs))}><div class="container"><div class="sec-head pb-20 bord-thin-bottom mb-80"><div class="d-flex align-items-center"><div><h3 class="f-bold text-u">Recent Work</h3></div><div class="ml-auto"><div class="swiper-button-next"><span class="pe-7s-angle-left"></span></div><div class="swiper-button-prev"><span class="pe-7s-angle-right"></span></div></div></div></div><div class="work-crus">`);
      _push(ssrRenderComponent(unref(Swiper), swiperOptions, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(data), (item) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="item"${_scopeId2}><div class="img"${_scopeId2}><img${ssrRenderAttr("src", item.img)} alt=""${_scopeId2}></div><div class="cont"${_scopeId2}><div${_scopeId2}><span${_scopeId2}>${ssrInterpolate(item.category)}</span><h5${_scopeId2}>${ssrInterpolate(item.title)}</h5></div></div>`);
                    _push3(ssrRenderComponent(_component_nuxt_link, {
                      to: item.link,
                      class: "link-overlay"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "item" }, [
                        createVNode("div", { class: "img" }, [
                          createVNode("img", {
                            src: item.img,
                            alt: ""
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "cont" }, [
                          createVNode("div", null, [
                            createVNode("span", null, toDisplayString(item.category), 1),
                            createVNode("h5", null, toDisplayString(item.title), 1)
                          ])
                        ]),
                        createVNode(_component_nuxt_link, {
                          to: item.link,
                          class: "link-overlay"
                        }, null, 8, ["to"])
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
                      createVNode("div", { class: "img" }, [
                        createVNode("img", {
                          src: item.img,
                          alt: ""
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", { class: "cont" }, [
                        createVNode("div", null, [
                          createVNode("span", null, toDisplayString(item.category), 1),
                          createVNode("h5", null, toDisplayString(item.title), 1)
                        ])
                      ]),
                      createVNode(_component_nuxt_link, {
                        to: item.link,
                        class: "link-overlay"
                      }, null, 8, ["to"])
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
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CreativePortfolio/Works.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=Works-B0EB20Su.mjs.map
