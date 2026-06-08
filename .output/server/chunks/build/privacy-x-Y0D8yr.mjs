import { _ as __nuxt_component_0 } from './nuxt-link-B8oQHubc.mjs';
import __nuxt_component_1 from './index-Dy8173We.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './_virtual_public-IWZl7zz2.mjs';
import { u as useHead } from './v4-CFlShRdU.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import './server.mjs';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = {
  __name: "privacy",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Privacy Policy | Way Trades",
      meta: [
        {
          name: "description",
          content: "Way Trades Privacy Policy - Learn how we handle your data and protect your privacy."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-950 text-gray-200 font-sans selection:bg-green-500 selection:text-slate-950" }, _attrs))}><nav class="sticky top-4 z-50 px-4"><div class="container mx-auto max-w-5xl"><div class="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-full px-2 py-2 flex justify-between items-center shadow-2xl relative"><div class="flex items-center gap-3 pl-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Way Trades Logo" class="w-8 h-8 object-contain"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Way Trades Logo",
                class: "w-8 h-8 object-contain"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-[11px] font-black tracking-tighter text-gray-200 hover:text-green-500 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`WAY TRADES`);
          } else {
            return [
              createTextVNode("WAY TRADES")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 text-[11px] font-bold text-gray-400">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:text-green-500 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`HOME`);
          } else {
            return [
              createTextVNode("HOME")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden md:block"><a href="https://whop.com/waytrades/vip-access-60-1cb2/" target="_blank" class="bg-green-500 text-slate-950 px-6 py-2.5 rounded-full hover:bg-green-600 transition-all font-black text-xs flex items-center gap-2 group"> JOIN DISCORD `);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:chevron-right",
        class: "w-4 h-4 group-hover:translate-x-0.5 transition-transform"
      }, null, _parent));
      _push(`</a></div></div></div></nav><main class="container mx-auto max-w-3xl px-4 py-12"><div class="prose prose-invert max-w-none"><h1 class="text-4xl font-black mb-2 text-white">Privacy Policy</h1><p class="text-gray-400 text-sm mb-8">Last updated: January 26, 2026</p><div class="space-y-6 text-gray-300 leading-relaxed"><section><h2 class="text-2xl font-bold text-white mb-4">1. Introduction</h2><p> Way Trades (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the website at waytrades.com and provides trading education services. This policy explains how we handle your data across our website, Discord community, and email systems. </p></section><section><h2 class="text-2xl font-bold text-white mb-4">2. Information We Collect</h2><p>To provide you with the BBR Strategy assets and community access, we collect:</p><ul class="list-disc list-inside space-y-2 ml-4"><li><strong>Identity Data:</strong> Name, username, and email address.</li><li><strong>Subscription Data:</strong> Your membership tier (Free, VIP, or Mentorship) and join date.</li><li><strong>Financial Data:</strong> Transaction history managed via Whop (we do not store your credit card details directly).</li></ul></section><section><h2 class="text-2xl font-bold text-white mb-4">3. How We Use Your Data</h2><p>We use your information to:</p><ul class="list-disc list-inside space-y-2 ml-4"><li>Deliver the BBR Strategy Cheat Sheet and educational content.</li><li>Manage your access to the Way Trades Discord server.</li><li>Send you &quot;Math Over Hype&quot; nurture emails and VIP trial invitations.</li><li>Ensure the security and integrity of our trading community.</li></ul></section><section><h2 class="text-2xl font-bold text-white mb-4">4. Third-Party Services</h2><p>We integrate with elite service providers to run our ecosystem. Your data may be processed by:</p><ul class="list-disc list-inside space-y-2 ml-4"><li><strong>Whop:</strong> For payments and membership management.</li><li><strong>Discord:</strong> For community hosting.</li><li><strong>Mailmodo:</strong> For email automation and delivery.</li><li><strong>ManyChat:</strong> For Instagram automation.</li><li><strong>Zapier:</strong> For email integration.</li></ul></section><section><h2 class="text-2xl font-bold text-white mb-4">5. Your Rights</h2><p> You have the right to access, correct, or request the deletion of your personal data at any time. To do so, please contact us at the email provided below. </p></section><section><h2 class="text-2xl font-bold text-white mb-4">6. Contact Us</h2><p> For any questions regarding this policy, please contact:<br><strong>contact@waytrades.com</strong></p></section></div></div></main><footer class="border-t border-slate-800 mt-16 py-8"><div class="container mx-auto max-w-5xl px-4"><div class="flex flex-col items-center justify-center space-y-6"><div class="flex items-center gap-2"><img${ssrRenderAttr("src", _imports_0)} alt="Way Trades Logo" class="w-6 h-6 object-contain"><span class="text-xs font-black text-gray-400">WAY TRADES</span></div><div class="text-xs text-gray-500 text-center max-w-md"> Trading involves significant risk of loss and is not suitable for all investors. Way Trades provides educational content only and does not provide financial advice. </div><div class="flex flex-wrap justify-center gap-4 text-xs text-gray-400">`);
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
      _push(`</div><div class="text-xs text-gray-600"> \xA9 2026 Way Trades. All rights reserved. </div></div></div></footer></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=privacy-x-Y0D8yr.mjs.map
