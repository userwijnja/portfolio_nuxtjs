import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4 } from "./Menu-DNxPo9y_.js";
import { _ as _sfc_main$5 } from "./Header-B9U7IXv4.js";
import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$6 } from "./Footer1-CPjMoQu_.js";
import { u as useHead } from "./index-BCI9veJc.js";
import "./nuxt-link-P6SDANQl.js";
import "ufo";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "klona";
import "devalue";
const data = [
  {
    id: 1,
    image: "/assets/imgs/works/full/1.jpg",
    link: "/project1",
    category: "Digital Design",
    title: "Retouch Photo"
  },
  {
    id: 2,
    image: "/assets/imgs/works/full/2.jpg",
    link: "/project2",
    category: "Digital Design",
    title: "Earthmade Aroma"
  },
  {
    id: 3,
    image: "/assets/imgs/works/full/3.jpg",
    link: "/project3",
    category: "Digital Design",
    title: "Bank Rebranding"
  },
  {
    id: 4,
    image: "/assets/imgs/works/full/4.jpg",
    link: "/project4",
    category: "Digital Design",
    title: "The joy of music"
  },
  {
    id: 5,
    image: "/assets/imgs/works/full/11.jpg",
    link: "/project1",
    category: "Digital Design",
    title: "Avocado Cutter"
  },
  {
    id: 6,
    image: "/assets/imgs/works/full/6.jpg",
    link: "/project2",
    category: "Digital Design",
    title: "Carved Wood"
  },
  {
    id: 7,
    image: "/assets/imgs/works/full/10.jpg",
    link: "/project3",
    category: "Digital Design",
    title: "Day Starter"
  },
  {
    id: 8,
    image: "/assets/imgs/works/full/8.jpg",
    link: "/project4",
    category: "Digital Design",
    title: "Blom Air Purifier"
  }
];
const _sfc_main$1 = {
  __name: "GridClassic",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio-classic portfolio pt-50 pb-40 bord-thin-bottom" }, _attrs))}><div class="container-fluid"><div class="gallery"><div class="row lg-marg"><!--[-->`);
      ssrRenderList(unref(data), (item, index) => {
        _push(`<div class="${ssrRenderClass(`items col-${index > 1 && (index + 1) % 3 === 0 ? "12" : "md-6"}`)}"><div class="item mb-80"><div class="img"><img${ssrRenderAttr("src", item.image)} alt=""><a${ssrRenderAttr("href", item.link)} class="animsition-link link-overlay"></a></div><div class="info mt-30"><span class="mb-5">${ssrInterpolate(item.category)}</span><h5>${ssrInterpolate(item.title)}</h5></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Portfolio/GridClassic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "portfolio-grid-classic",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: `%s - Portfolio Grid Classic`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonLoader = _sfc_main$2;
      const _component_CommonNavbar = _sfc_main$3;
      const _component_CommonMenu = _sfc_main$4;
      const _component_PortfolioHeader = _sfc_main$5;
      const _component_PortfolioGridClassic = _sfc_main$1;
      const _component_CommonFooter1 = _sfc_main$6;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_CommonLoader, null, null, _parent));
      _push(ssrRenderComponent(_component_CommonNavbar, null, null, _parent));
      _push(ssrRenderComponent(_component_CommonMenu, null, null, _parent));
      _push(`<main class="main-bg">`);
      _push(ssrRenderComponent(_component_PortfolioHeader, { isCenter: true }, null, _parent));
      _push(ssrRenderComponent(_component_PortfolioGridClassic, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_CommonFooter1, { subBg: true }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio-grid-classic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=portfolio-grid-classic-DZ3DbkQr.js.map
