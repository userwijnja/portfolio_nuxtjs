import { mergeProps, useSSRContext } from 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'file://C:/Users/MyrtheWijnja/Desktop/portfolio-vue/bayone_nuxtjs/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';

const _imports_0 = publicAssetsURL("/assets/imgs/logo-light.png");
const _sfc_main = {
  __name: "Footer1",
  __ssrInlineRender: true,
  props: {
    subBg: Boolean
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: { "sub-bg": __props.subBg }
      }, _attrs))}><div class="footer-container"><div class="container pb-80 pt-80 ontop"><div class="row"><div class="col-lg-6"><div class="eml"><h6 class="sub-title opacity-8"> we would love to hear from you. </h6><h2 class="underline fz-60"><a href="#0">hello@Bayone.com</a></h2></div></div></div><div class="row mt-80"><div class="col-lg-3"><div class="logo"><img${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="col-lg-6"><div class="column"><h6 class="sub-title mb-30">Social Media</h6><ul class="rest"><li class="hover-this cursor-pointer"><a href="#0" class="hover-anim">Facebook</a></li><li class="hover-this cursor-pointer"><a href="#0" class="hover-anim">twitter</a></li><li class="hover-this cursor-pointer"><a href="#0" class="hover-anim">LinkedIn</a></li><li class="hover-this cursor-pointer"><a href="#0" class="hover-anim">Behance</a></li></ul></div></div><div class="col-lg-3"><div class="column"><h6 class="sub-title mb-30">Our Office :</h6><p>Bes\xF2s 1, 08174 Sant Cugat del Vall\xE8s, Barcelona</p><h5 class="mt-15 underline"><a href="#0">+2 456 34324 45</a></h5></div></div></div></div><div class="container bord pt-30 pb-30 bord-thin-top"><div class="row"><div class="col-lg-6"><div class="links"><ul class="rest"><li><a href="/about" class="animsition-link">FAQ</a></li><li><a href="/about" class="animsition-link">Careers</a></li><li><a href="/contact" class="animsition-link">Contact Us</a></li></ul></div></div><div class="col-lg-6"><div class="copyright d-flex"><div class="ml-auto"><p class="fz-13"> \xA9 2024 Bayone is Proudly Powered by <span class="underline"><a href="https://themeforest.net/user/UiCamp" target="_blank"> UiCamp </a></span></p></div></div></div></div></div></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Common/Footer1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Footer1-CPjMoQu_.mjs.map
