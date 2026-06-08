import __nuxt_component_1 from './index-Dy8173We.mjs';
import { mergeProps, defineComponent, resolveDirective, ref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle, ssrGetDirectiveProps, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './_virtual_public-IWZl7zz2.mjs';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-B8oQHubc.mjs';

const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_1;
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "sticky top-4 z-50 px-4" }, _attrs))}><div class="container mx-auto max-w-5xl"><div class="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-full px-2 py-2 flex justify-between items-center shadow-2xl relative"><div class="flex items-center gap-3 pl-4"><img${ssrRenderAttr("src", _imports_0)} alt="Way Trades Logo" class="w-8 h-8 object-contain"><span class="text-[11px] font-black tracking-tighter text-gray-200 uppercase">Way Trades</span></div><div class="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 text-[11px] font-bold text-gray-400"><a href="https://whop.com/waytrades/free-access-c6/" target="_blank" class="hover:text-green-500 transition-colors">FREE DISCORD</a><a href="/cheat-sheet" class="hover:text-green-500 transition-colors">FREE STRATEGY CHEAT SHEET</a><a href="#testimonials" class="hover:text-green-500 transition-colors">TESTIMONIALS</a></div><div class="hidden md:block"><a href="https://whop.com/waytrades/vip-access-60-1cb2/" target="_blank" class="bg-green-500 text-slate-950 px-6 py-2.5 rounded-full hover:bg-green-600 transition-all font-black text-xs flex items-center gap-2 group"> JOIN DISCORD `);
  _push(ssrRenderComponent(_component_Icon, {
    name: "lucide:chevron-right",
    class: "w-4 h-4 group-hover:translate-x-0.5 transition-transform"
  }, null, _parent));
  _push(`</a></div><div class="md:hidden flex items-center gap-2 pr-2"><a href="https://whop.com/waytrades/vip-access-60-1cb2/" target="_blank" class="bg-green-500 hover:bg-green-600 text-slate-950 font-black px-4 py-2 rounded-full text-[10px] transition-all"> JOIN DISCORD </a><div class="relative group"><button class="text-gray-400 hover:text-green-500 transition-colors flex items-center p-2">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "lucide:menu",
    class: "w-5 h-5"
  }, null, _parent));
  _push(`</button><div class="absolute right-0 mt-4 w-56 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden"><a href="https://whop.com/waytrades/free-access-c6/" target="_blank" class="block px-5 py-4 text-xs font-bold text-gray-400 hover:text-green-500 hover:bg-slate-800 transition-colors border-b border-slate-800"> Free Discord </a><a href="/cheat-sheet" class="block px-5 py-4 text-xs font-bold text-gray-400 hover:text-green-500 hover:bg-slate-800 transition-colors border-b border-slate-800"> Free Strategy Cheat Sheet </a><a href="#testimonials" class="block px-5 py-4 text-xs font-bold text-gray-400 hover:text-green-500 hover:bg-slate-800 transition-colors"> Testimonials </a></div></div></div></div></div></nav>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/v2/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]), { __name: "V2Header" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full min-h-screen bg-slate-950 overflow-hidden flex items-center" }, _attrs))} data-v-7a60a539><div class="absolute inset-0 overflow-hidden" data-v-7a60a539><div class="absolute -top-40 -right-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse" data-v-7a60a539></div><div class="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse" style="${ssrRenderStyle({ "animation-delay": "1s" })}" data-v-7a60a539></div></div><div class="relative z-10 w-full" data-v-7a60a539><div class="max-w-6xl mx-auto px-4 py-20 md:py-32" data-v-7a60a539><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-v-7a60a539><div${ssrRenderAttrs(mergeProps({
        initial: { opacity: 0, x: -30 },
        enter: { opacity: 1, x: 0, transition: { duration: 800 } },
        class: "space-y-8"
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-7a60a539><h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight text-center sm:text-left" data-v-7a60a539> You Don&#39;t Need a <span class="text-green-500" data-v-7a60a539>High Win Rate</span> to Become Profitable. </h1><p class="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-lg text-center sm:text-left mx-auto sm:mx-0" data-v-7a60a539> Built around risk:reward, expectancy, and disciplined execution \u2014 not gambling. </p><div class="space-y-4 pt-4" data-v-7a60a539><div class="flex items-start gap-4" data-v-7a60a539><div class="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1" data-v-7a60a539><svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20" data-v-7a60a539><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-v-7a60a539></path></svg></div><span class="text-gray-300" data-v-7a60a539>50% win rate with 1:3 risk:reward = consistent profitability</span></div><div class="flex items-start gap-4" data-v-7a60a539><div class="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1" data-v-7a60a539><svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20" data-v-7a60a539><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-v-7a60a539></path></svg></div><span class="text-gray-300" data-v-7a60a539>Join traders applying the math daily in live markets</span></div><div class="flex items-start gap-4" data-v-7a60a539><div class="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1" data-v-7a60a539><svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20" data-v-7a60a539><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-v-7a60a539></path></svg></div><span class="text-gray-300" data-v-7a60a539>Free Discord community with live trading sessions</span></div></div><div class="flex flex-col sm:flex-row gap-4 pt-8" data-v-7a60a539><a href="https://whop.com/waytrades/vip-access-60-1cb2/" target="_blank" class="inline-flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-600 text-slate-950 font-black rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-green-500/50 duration-300" data-v-7a60a539> Start 5-Day Free Trial <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-7a60a539><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-v-7a60a539></path></svg></a><a href="https://www.youtube.com/playlist?list=PLeVBW5ryrKoLEQVel4Ld0XjMOPYbj7zOt" target="_blank" class="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-600 hover:border-green-500 text-white font-black rounded-full transition-all duration-300 hover:bg-green-500/10" data-v-7a60a539> Watch Trade Recaps </a></div><div class="pt-4 text-center sm:text-left text-sm text-gray-500 font-medium" data-v-7a60a539> Free access. No credit card required. </div></div><div${ssrRenderAttrs(mergeProps({
        initial: { opacity: 0, y: 30 },
        enter: { opacity: 1, y: 0, transition: { duration: 800, delay: 200 } },
        class: "relative w-full flex items-center justify-center mt-12 lg:mt-0"
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-7a60a539><div class="relative w-full max-w-lg" data-v-7a60a539><div class="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-2xl blur-3xl" data-v-7a60a539></div><div class="relative bg-slate-900/80 backdrop-blur-xl border border-green-500/30 rounded-2xl overflow-hidden shadow-2xl" data-v-7a60a539><div class="aspect-video w-full bg-slate-800 relative" data-v-7a60a539><iframe src="https://www.youtube.com/embed/RZkAQ7HU-38?autoplay=0&amp;controls=1&amp;modestbranding=1" loading="lazy" class="absolute inset-0 w-full h-full border-0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen data-v-7a60a539></iframe></div><div class="p-6 bg-slate-900/50" data-v-7a60a539><div class="flex items-center justify-between mb-4" data-v-7a60a539><h3 class="text-sm font-bold text-gray-400 uppercase tracking-widest" data-v-7a60a539>Session Performance</h3><span class="px-2 py-1 bg-green-500/10 text-green-500 text-[10px] font-bold rounded border border-green-500/20" data-v-7a60a539>VERIFIED MATH</span></div><div class="grid grid-cols-2 gap-8" data-v-7a60a539><div class="space-y-1" data-v-7a60a539><p class="text-xs text-gray-500 font-medium" data-v-7a60a539>Win Rate</p><div class="flex items-baseline gap-1" data-v-7a60a539><span class="text-3xl font-black text-white" data-v-7a60a539>50</span><span class="text-lg font-bold text-green-500" data-v-7a60a539>%</span></div></div><div class="space-y-1" data-v-7a60a539><p class="text-xs text-gray-500 font-medium" data-v-7a60a539>Risk:Reward</p><div class="flex items-baseline gap-1" data-v-7a60a539><span class="text-lg font-bold text-green-500" data-v-7a60a539>1:</span><span class="text-3xl font-black text-white" data-v-7a60a539>4</span></div></div></div><div class="mt-6 pt-6 border-t border-white/5" data-v-7a60a539><p class="text-[11px] text-gray-500 italic leading-relaxed mb-6" data-v-7a60a539> &quot;You don&#39;t need to be right most of the time. You just need to be right when it matters.&quot; </p><a href="https://whop.com/waytrades/free-access-c6/" target="_blank" class="flex items-center justify-center w-full py-3 bg-green-500/10 hover:bg-green-500/20 text-green-500 font-bold rounded-xl border border-green-500/20 transition-all duration-300 group" data-v-7a60a539> JOIN FREE DISCORD `);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:chevron-right",
        class: "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
      }, null, _parent));
      _push(`</a></div></div></div></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/v2/HeroSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const HeroSection = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-7a60a539"]]), { __name: "V2HeroSection" });
const _sfc_main$1 = {
  __name: "V2Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    const lightboxOpen = ref(false);
    const lightboxImage = ref("");
    const testimonials = [
      { image: "/testimonials/t1.png" },
      { image: "/testimonials/t2.png" },
      { image: "/testimonials/t3.png" },
      { image: "/testimonials/t4.png" },
      { image: "/testimonials/t5.png" },
      { image: "/testimonials/t6.png" },
      { image: "/testimonials/t7.png" },
      { image: "/testimonials/t8.png" },
      { image: "/testimonials/t9.png" },
      { image: "/testimonials/t10.png" },
      { image: "/testimonials/t11.png" },
      { image: "/testimonials/t12.png" },
      { image: "/testimonials/t13.png" },
      { image: "/testimonials/t14.png" },
      { image: "/testimonials/t15.png" },
      { image: "/testimonials/t16.png" },
      { image: "/testimonials/t17.png" },
      { image: "/testimonials/t18.png" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _directive_motion = resolveDirective("motion");
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "testimonials",
        class: "w-full bg-slate-900 py-20 md:py-32 px-4"
      }, _attrs))} data-v-b3cc3506><div class="max-w-6xl mx-auto" data-v-b3cc3506><div class="text-center mb-16" data-v-b3cc3506><h2 class="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight" data-v-b3cc3506> Real Results from Real Traders </h2><p class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto" data-v-b3cc3506> See how traders like you are applying the 1:3 mathematical edge and achieving consistent results. </p></div><div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6" data-v-b3cc3506><!--[-->`);
      ssrRenderList(testimonials, (testimonial, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: index,
          initial: { opacity: 0, y: 20 },
          enter: { opacity: 1, y: 0, transition: { delay: index * 50 } },
          class: "break-inside-avoid group relative overflow-hidden rounded-xl border border-slate-800 hover:border-green-500/50 transition-all duration-300 cursor-pointer bg-slate-800/50 backdrop-blur-sm"
        }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-b3cc3506><div class="relative overflow-hidden" data-v-b3cc3506><img${ssrRenderAttr("src", testimonial.image)}${ssrRenderAttr("alt", "Testimonial " + (index + 1))} class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" data-v-b3cc3506><div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center" data-v-b3cc3506>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:zoom-in",
          class: "w-8 h-8 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        }, null, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--><div class="break-inside-avoid flex items-center justify-center min-h-[400px]" data-v-b3cc3506><div class="w-full bg-gradient-to-br from-green-500/10 via-slate-900 to-slate-900 border-2 border-green-500/50 rounded-2xl p-8 md:p-12 text-center hover:border-green-500 transition-all duration-300 group shadow-xl" data-v-b3cc3506><div class="mb-6" data-v-b3cc3506>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:shield-check",
        class: "w-16 h-16 text-green-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
      }, null, _parent));
      _push(`</div><h3 class="text-2xl md:text-3xl font-black text-white mb-4" data-v-b3cc3506> Ready to Join? </h3><p class="text-gray-400 text-lg mb-8 leading-relaxed" data-v-b3cc3506> Stop watching from the sidelines. Join the community of traders who are applying the 1:3 mathematical edge. </p><div class="space-y-4" data-v-b3cc3506><a href="https://whop.com/waytrades/vip-access-60-1cb2/" target="_blank" class="block w-full bg-green-500 hover:bg-green-600 text-slate-950 font-black py-4 px-6 rounded-full transition-all transform hover:scale-105 text-lg shadow-[0_0_20px_rgba(34,197,94,0.3)]" data-v-b3cc3506> START 5-DAY FREE TRIAL </a><p class="text-green-500 font-bold flex items-center justify-center gap-2 text-sm" data-v-b3cc3506>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:shield-check",
        class: "w-4 h-4"
      }, null, _parent));
      _push(` First 5 Days are 100% FREE </p></div></div></div></div>`);
      if (lightboxOpen.value) {
        _push(`<div class="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm" data-v-b3cc3506><div class="relative max-w-4xl w-full" data-v-b3cc3506><button class="absolute -top-12 right-0 text-gray-400 hover:text-green-500 transition-colors" data-v-b3cc3506>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:x",
          class: "w-8 h-8"
        }, null, _parent));
        _push(`</button><img${ssrRenderAttr("src", lightboxImage.value)}${ssrRenderAttr("alt", "Testimonial full view")} class="w-full h-auto rounded-lg shadow-2xl" data-v-b3cc3506></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/v2/Testimonials.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TestimonialsGrid = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b3cc3506"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_1;
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "py-12 border-t border-slate-800 bg-slate-950" }, _attrs))}><div class="container mx-auto px-4 text-center"><div class="flex items-center justify-center gap-3 mb-6"><img${ssrRenderAttr("src", _imports_0)} alt="Way Trades Logo" class="w-10 h-10 object-contain"><span class="text-lg font-black tracking-tighter text-white uppercase">Way Trades</span></div><p class="text-gray-500 text-sm max-w-2xl mx-auto mb-8"> Trading involves significant risk of loss and is not suitable for all investors. Way Trades provides educational content only and does not provide financial advice. </p><div class="flex justify-center gap-6 text-gray-400 mb-8"><a href="https://www.instagram.com/way_trades" target="_blank" class="hover:text-green-500 transition-colors">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "simple-icons:instagram",
    class: "w-6 h-6"
  }, null, _parent));
  _push(`</a><a href="https://www.youtube.com/@waytrades" target="_blank" class="hover:text-green-500 transition-colors">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "simple-icons:youtube",
    class: "w-6 h-6"
  }, null, _parent));
  _push(`</a><a href="https://www.tiktok.com/@waytrades" target="_blank" class="hover:text-green-500 transition-colors">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "simple-icons:tiktok",
    class: "w-6 h-6"
  }, null, _parent));
  _push(`</a></div><div class="flex flex-wrap justify-center gap-4 text-gray-600 text-xs mb-4"><span>\xA9 2026 Way Trades. All rights reserved.</span><span class="hidden md:inline">|</span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/privacy",
    class: "hover:text-green-500 transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Privacy Policy`);
      } else {
        return [
          createTextVNode("Privacy Policy")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span>|</span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/return-policy",
    class: "hover:text-green-500 transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Return Policy`);
      } else {
        return [
          createTextVNode("Return Policy")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span>|</span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/terms-of-service",
    class: "hover:text-green-500 transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Terms &amp; Conditions`);
      } else {
        return [
          createTextVNode("Terms & Conditions")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span>|</span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/eula",
    class: "hover:text-green-500 transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`EULA`);
      } else {
        return [
          createTextVNode("EULA")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/v2/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "V2Footer" });

export { Footer as F, Header as H, TestimonialsGrid as T, HeroSection as a };
//# sourceMappingURL=Footer-CyYWN9CV.mjs.map
