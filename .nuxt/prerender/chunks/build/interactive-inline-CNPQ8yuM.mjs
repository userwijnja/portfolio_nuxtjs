import { _ as _sfc_main$2, a as _sfc_main$1$1, b as _sfc_main$3 } from './Menu-DNxPo9y_.mjs';
import { useSSRContext, mergeProps, unref } from 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/vue/server-renderer/index.mjs';
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
    image: "/assets/imgs/works/full/1.jpg",
    link: "/project1",
    number: "01",
    category: "Digital Design",
    title: "Retouch Photo"
  },
  {
    id: 2,
    image: "/assets/imgs/works/full/2.jpg",
    link: "/project2",
    number: "02",
    category: "Branding",
    title: "Earthmade Aroma"
  },
  {
    id: 3,
    image: "/assets/imgs/works/full/3.jpg",
    link: "/project3",
    number: "03",
    category: "Branding",
    title: "Bank Rebranding"
  },
  {
    id: 4,
    image: "/assets/imgs/works/full/4.jpg",
    link: "/project4",
    number: "04",
    category: "Product Design",
    title: "The joy of music"
  },
  {
    id: 5,
    image: "/assets/imgs/works/full/5.jpg",
    link: "/project1",
    number: "05",
    category: "Product Design",
    title: "Blue Adobe MAX"
  },
  {
    id: 6,
    image: "/assets/imgs/works/full/6.jpg",
    link: "/project2",
    number: "06",
    category: "Product Design",
    title: "Carved Wood"
  },
  {
    id: 7,
    image: "/assets/imgs/works/full/8.jpg",
    link: "/project3",
    number: "07",
    category: "Product Design",
    title: "Blom Air Purifier"
  }
];
const _sfc_main$1 = {
  __name: "InteractiveInline",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "interactive-inline d-flex align-items-end" }, _attrs))}><div class="container"><!--[-->`);
      ssrRenderList(unref(data), (item) => {
        _push(`<div class="item block" data-fx="1"><a${ssrRenderAttr("href", item.link)} class="block__link animsition-link"${ssrRenderAttr("data-img", item.image)}></a><div class="cont"><span class="mb-10 text-u">${ssrInterpolate(item.number)}<span class="ml-10 mr-10">/</span>${ssrInterpolate(item.category)}</span><h4 class="f-bold">${ssrInterpolate(item.title)}</h4></div></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Portfolio/InteractiveInline.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "interactive-inline",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: `%s - Portfolio Interactive Inline`,
      bodyAttrs: {
        class: "main-bg"
      },
      link: [
        { rel: "stylesheet", href: "/assets/css/base.css" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonLoader = _sfc_main$2;
      const _component_CommonNavbar = _sfc_main$1$1;
      const _component_CommonMenu = _sfc_main$3;
      const _component_PortfolioInteractiveInline = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_CommonLoader, null, null, _parent));
      _push(ssrRenderComponent(_component_CommonNavbar, null, null, _parent));
      _push(ssrRenderComponent(_component_CommonMenu, null, null, _parent));
      _push(ssrRenderComponent(_component_PortfolioInteractiveInline, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/interactive-inline.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=interactive-inline-CNPQ8yuM.mjs.map
