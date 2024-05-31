import { _ as _sfc_main$2, a as _sfc_main$1$1, b as _sfc_main$3 } from './Menu-DNxPo9y_.mjs';
import { _ as _sfc_main$4 } from './Header-B9U7IXv4.mjs';
import { useSSRContext, mergeProps, unref } from 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$5 } from './Footer1-CPjMoQu_.mjs';
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
    image: "/assets/imgs/works/full/2.jpg",
    link: "/project1",
    tag: "Branding",
    title: "Earthmade Aroma",
    col: 5
  },
  {
    id: 2,
    image: "/assets/imgs/works/full/8.jpg",
    link: "/project2",
    tag: "Branding",
    title: "Blom Air Purifier",
    col: 7
  },
  {
    id: 3,
    image: "/assets/imgs/works/full/3.jpg",
    link: "/project3",
    tag: "Branding",
    title: "Bank Rebranding",
    col: 12
  },
  {
    id: 4,
    image: "/assets/imgs/works/full/13.jpg",
    link: "/project4",
    tag: "Branding",
    title: "Concept Audi",
    col: 7
  },
  {
    id: 5,
    image: "/assets/imgs/works/full/11.jpg",
    link: "/project1",
    tag: "Branding",
    title: "Avocado Cutter",
    col: 5
  },
  {
    id: 6,
    image: "/assets/imgs/works/full/6.jpg",
    link: "/project3",
    tag: "Branding",
    title: "Wood Carved",
    col: 12
  }
];
const _sfc_main$1 = {
  __name: "FixedText",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "inter-fixed-text section-padding pt-40 o-hidden" }, _attrs))}><div class="container-xxl"><div class="links-img"><div class="row"><!--[-->`);
      ssrRenderList(unref(data), (item) => {
        _push(`<div class="${ssrRenderClass(`col-lg-${item.col} items`)}">`);
        if (item.col < 12) {
          _push(`<div class="item"><div${ssrRenderAttr("data-tab", `tab-${item.id}`)} class="img"><img${ssrRenderAttr("src", item.image)} alt=""><a${ssrRenderAttr("href", item.link)} class="animsition-link link-overlay"></a></div></div>`);
        } else {
          _push(`<div class="row justify-content-center"><div class="col-lg-8"><div class="item"><div${ssrRenderAttr("data-tab", `tab-${item.id}`)} class="img"><img${ssrRenderAttr("src", item.image)} alt=""><a${ssrRenderAttr("href", item.link)} class="animsition-link link-overlay"></a></div></div></div></div>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div><div class="links-text"><ul class="rest"><!--[-->`);
      ssrRenderList(unref(data), (item) => {
        _push(`<li${ssrRenderAttr("id", `tab-${item.id}`)}><span class="tag">${ssrInterpolate(item.tag)}</span><h2>${ssrInterpolate(item.title)}</h2></li>`);
      });
      _push(`<!--]--></ul></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Portfolio/FixedText.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "portfolio-fixed-text",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: `%s - Portfolio Fixed Text`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonLoader = _sfc_main$2;
      const _component_CommonNavbar = _sfc_main$1$1;
      const _component_CommonMenu = _sfc_main$3;
      const _component_PortfolioHeader = _sfc_main$4;
      const _component_PortfolioFixedText = _sfc_main$1;
      const _component_CommonFooter1 = _sfc_main$5;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_CommonLoader, null, null, _parent));
      _push(ssrRenderComponent(_component_CommonNavbar, null, null, _parent));
      _push(ssrRenderComponent(_component_CommonMenu, null, null, _parent));
      _push(`<main class="main-bg">`);
      _push(ssrRenderComponent(_component_PortfolioHeader, { isCenter: true }, null, _parent));
      _push(ssrRenderComponent(_component_PortfolioFixedText, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_CommonFooter1, { subBg: true }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio-fixed-text.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=portfolio-fixed-text-CEsh7a-j.mjs.map
