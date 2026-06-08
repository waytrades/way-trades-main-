import { defineComponent, resolveDirective, mergeProps, useSSRContext, toRaw } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrGetDirectiveProps, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { H as Header, a as HeroSection, T as TestimonialsGrid, F as Footer } from "./Footer-Bfp_uIku.js";
import __nuxt_component_1 from "./index-D3-UHfvc.js";
import { _ as _export_sfc, u as useRuntimeConfig } from "../server.mjs";
import { a as useSeoMeta } from "./v4-CFlShRdU.js";
import "./_virtual_public-IWZl7zz2.js";
import "#internal/nuxt/paths";
import "./nuxt-link-B8oQHubc.js";
import "/home/ubuntu/way-trades-restore/way-trades-main--main/node_modules/ufo/dist/index.mjs";
import "/home/ubuntu/way-trades-restore/way-trades-main--main/node_modules/defu/dist/defu.mjs";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "/home/ubuntu/way-trades-restore/way-trades-main--main/node_modules/perfect-debounce/dist/index.mjs";
import "/home/ubuntu/way-trades-restore/way-trades-main--main/node_modules/hookable/dist/index.mjs";
import "/home/ubuntu/way-trades-restore/way-trades-main--main/node_modules/ofetch/dist/node.mjs";
import "/home/ubuntu/way-trades-restore/way-trades-main--main/node_modules/unctx/dist/index.mjs";
import "/home/ubuntu/way-trades-restore/way-trades-main--main/node_modules/h3/dist/index.mjs";
import "vue-router";
import "framesync";
import "popmotion";
import "style-value-types";
import "/home/ubuntu/way-trades-restore/way-trades-main--main/node_modules/klona/dist/index.mjs";
import "/home/ubuntu/way-trades-restore/way-trades-main--main/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "TrustBar",
  __ssrInlineRender: true,
  setup(__props) {
    const stats = [
      {
        icon: "lucide:target",
        value: "1:3+",
        label: "Target Risk:Reward"
      },
      {
        icon: "lucide:users",
        value: "5,000+",
        label: "Community Members"
      },
      {
        icon: "lucide:check-circle",
        value: "Verified",
        label: "BBR Framework"
      },
      {
        icon: "lucide:zap",
        value: "Zero Hype",
        label: "Pure Execution"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _directive_motion = resolveDirective("motion");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "trust-bar-section" }, _attrs))} data-v-0a131029><div class="trust-bar-container" data-v-0a131029><!--[-->`);
      ssrRenderList(stats, (stat, index2) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "trust-stat",
          key: index2
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 10 }, enter: { opacity: 1, y: 0, transition: { duration: 500, delay: index2 * 100 } } })))} data-v-0a131029>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: stat.icon,
          class: "stat-icon"
        }, null, _parent));
        _push(`<div class="stat-content" data-v-0a131029><p class="stat-value" data-v-0a131029>${ssrInterpolate(stat.value)}</p><p class="stat-label" data-v-0a131029>${ssrInterpolate(stat.label)}</p></div></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/v2/TrustBar.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const TrustBar = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$6, [["__scopeId", "data-v-0a131029"]]), { __name: "V2TrustBar" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "PillarsSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _directive_motion = resolveDirective("motion");
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "pillars",
        class: "pillars-section"
      }, _attrs))} data-v-2c113dbd><div class="section" data-v-2c113dbd><div${ssrRenderAttrs(mergeProps({ class: "pillars-header" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } })))} data-v-2c113dbd><h2 data-v-2c113dbd>Master Intraday Futures Trading</h2><p data-v-2c113dbd>Master the NQ futures markets using intraday order flow and the BBR strategy. We focus on high-probability execution on the 30-second and 5-minute timeframes, specifically designed for prop firm consistency.</p></div><div class="pillars-grid" data-v-2c113dbd><div${ssrRenderAttrs(mergeProps({ class: "pillar-card" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, x: -30 }, enter: { opacity: 1, x: 0, transition: { duration: 600, delay: 200 } } })))} data-v-2c113dbd><div class="pillar-icon" data-v-2c113dbd>`);
      _push(ssrRenderComponent(_component_Icon, { name: "lucide:zap" }, null, _parent));
      _push(`</div><h3 data-v-2c113dbd>Intraday BBR Framework</h3><p class="pillar-description" data-v-2c113dbd>Breakouts, Bounces, and Rejects on the 30-second and 5-minute timeframes. Our proven methodology for consistent prop firm performance.</p><ul class="pillar-features" data-v-2c113dbd><li data-v-2c113dbd>`);
      _push(ssrRenderComponent(_component_Icon, { name: "lucide:check" }, null, _parent));
      _push(`<span data-v-2c113dbd>Order Flow &amp; ICT Execution Concepts</span></li><li data-v-2c113dbd>`);
      _push(ssrRenderComponent(_component_Icon, { name: "lucide:check" }, null, _parent));
      _push(`<span data-v-2c113dbd>Prop Firm Risk Management Protocols</span></li><li data-v-2c113dbd>`);
      _push(ssrRenderComponent(_component_Icon, { name: "lucide:check" }, null, _parent));
      _push(`<span data-v-2c113dbd>High-Probability Setup Recognition</span></li></ul></div></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/v2/PillarsSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const PillarsSection = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["__scopeId", "data-v-2c113dbd"]]), { __name: "V2PillarsSection" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TargetAudience",
  __ssrInlineRender: true,
  setup(__props) {
    const audiencePoints = [
      {
        icon: "lucide:alert-circle",
        title: "This is for you if...",
        description: "You find yourself breaking your own rules in the heat of the moment and sabotaging perfectly good setups."
      },
      {
        icon: "lucide:trending-down",
        title: "This is for you if...",
        description: "You've struggled to pass or maintain prop firm accounts because of emotional over-leveraging and revenge trading."
      },
      {
        icon: "lucide:compass",
        title: "This is for you if...",
        description: 'You have a "strategy" but lack a clear, repeatable process for when to step away from the screens.'
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _directive_motion = resolveDirective("motion");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "target-audience-section" }, _attrs))} data-v-a7ebf822><div class="section" data-v-a7ebf822><div${ssrRenderAttrs(mergeProps({ class: "audience-header" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } })))} data-v-a7ebf822><h2 data-v-a7ebf822>You&#39;ve Got the Knowledge. Now You Need the Discipline.</h2><p data-v-a7ebf822>You&#39;ve been trading for 1–4 years. You know the indicators, you&#39;ve seen the setups, but the equity curve isn&#39;t moving. We bridge the gap between &quot;knowing how to trade&quot; and &quot;being a trader.&quot;</p></div><div class="audience-grid" data-v-a7ebf822><!--[-->`);
      ssrRenderList(audiencePoints, (point, index2) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "audience-card",
          key: index2
        }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 200 + index2 * 100 } } })))} data-v-a7ebf822><div class="card-icon" data-v-a7ebf822>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: point.icon
        }, null, _parent));
        _push(`</div><h3 data-v-a7ebf822>${ssrInterpolate(point.title)}</h3><p data-v-a7ebf822>${ssrInterpolate(point.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/v2/TargetAudience.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const TargetAudience = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["__scopeId", "data-v-a7ebf822"]]), { __name: "V2TargetAudience" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DiscordConversion",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _directive_motion = resolveDirective("motion");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "discord-section" }, _attrs))} data-v-69db1063><div class="section" data-v-69db1063><div${ssrRenderAttrs(mergeProps({ class: "discord-container" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 30 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } })))} data-v-69db1063><div class="discord-copy" data-v-69db1063><h2 data-v-69db1063>The Last Trading Community You&#39;ll Ever Need to Join.</h2><p data-v-69db1063>Trading is a lonely game, but it doesn&#39;t have to be. Join a room full of practitioners who value risk management over screenshots of P&amp;L.</p><div class="benefits-list" data-v-69db1063><div class="benefit-item" data-v-69db1063>`);
      _push(ssrRenderComponent(_component_Icon, { name: "lucide:radio" }, null, _parent));
      _push(`<div data-v-69db1063><h4 data-v-69db1063>Live Market Analysis</h4><p data-v-69db1063>Real-time breakdowns of NQ futures setups as they form.</p></div></div><div class="benefit-item" data-v-69db1063>`);
      _push(ssrRenderComponent(_component_Icon, { name: "lucide:users" }, null, _parent));
      _push(`<div data-v-69db1063><h4 data-v-69db1063>Process-Driven Peer Group</h4><p data-v-69db1063>Surround yourself with traders who care more about R:R than &quot;get rich quick&quot; schemes.</p></div></div><div class="benefit-item" data-v-69db1063>`);
      _push(ssrRenderComponent(_component_Icon, { name: "lucide:book" }, null, _parent));
      _push(`<div data-v-69db1063><h4 data-v-69db1063>The BBR Resource Library</h4><p data-v-69db1063>Instant access to the core BBR framework and intraday execution strategies.</p></div></div></div></div><div class="discord-tiers" data-v-69db1063><div class="tier-card tier-free" data-v-69db1063><div class="tier-header" data-v-69db1063><h3 data-v-69db1063>Free Tier</h3><p class="tier-price" data-v-69db1063>$0</p></div><ul class="tier-features" data-v-69db1063><li data-v-69db1063>`);
      _push(ssrRenderComponent(_component_Icon, { name: "lucide:check" }, null, _parent));
      _push(`<span data-v-69db1063>Community chat access</span></li><li data-v-69db1063>`);
      _push(ssrRenderComponent(_component_Icon, { name: "lucide:check" }, null, _parent));
      _push(`<span data-v-69db1063>Basic resources &amp; guides</span></li><li data-v-69db1063>`);
      _push(ssrRenderComponent(_component_Icon, { name: "lucide:check" }, null, _parent));
      _push(`<span data-v-69db1063>General market outlooks</span></li><li data-v-69db1063>`);
      _push(ssrRenderComponent(_component_Icon, { name: "lucide:check" }, null, _parent));
      _push(`<span data-v-69db1063>Peer support &amp; accountability</span></li></ul><p class="tier-description" data-v-69db1063>A no-brainer for any serious student.</p><a href="https://discord.gg/waytrades" target="_blank" class="btn btn-primary w-full" data-v-69db1063>Join the Discord</a></div><div class="tier-card tier-mentorship" data-v-69db1063><div class="tier-badge" data-v-69db1063>Coming Soon</div><div class="tier-header" data-v-69db1063><h3 data-v-69db1063>Mentorship Tier</h3><p class="tier-price" data-v-69db1063>Premium</p></div><ul class="tier-features" data-v-69db1063><li data-v-69db1063>`);
      _push(ssrRenderComponent(_component_Icon, { name: "lucide:check" }, null, _parent));
      _push(`<span data-v-69db1063>1-on-1 direct access</span></li><li data-v-69db1063>`);
      _push(ssrRenderComponent(_component_Icon, { name: "lucide:check" }, null, _parent));
      _push(`<span data-v-69db1063>Advanced accountability</span></li><li data-v-69db1063>`);
      _push(ssrRenderComponent(_component_Icon, { name: "lucide:check" }, null, _parent));
      _push(`<span data-v-69db1063>Deep-dive execution reviews</span></li><li data-v-69db1063>`);
      _push(ssrRenderComponent(_component_Icon, { name: "lucide:check" }, null, _parent));
      _push(`<span data-v-69db1063>Professional-grade coaching</span></li></ul><p class="tier-description" data-v-69db1063>For traders ready for absolute transformation.</p><button class="btn btn-secondary w-full" disabled data-v-69db1063>Coming Soon</button></div></div></div><div${ssrRenderAttrs(mergeProps({ class: "trust-microcopy" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0 }, enter: { opacity: 1, transition: { duration: 600, delay: 400 } } })))} data-v-69db1063><p data-v-69db1063>Join 5,000+ traders. Access is instant. No credit card required.</p></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/v2/DiscordConversion.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const DiscordConversion = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["__scopeId", "data-v-69db1063"]]), { __name: "V2DiscordConversion" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "MentorshipTeaser",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _directive_motion = resolveDirective("motion");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "mentorship-section" }, _attrs))} data-v-4008b641><div class="section" data-v-4008b641><div${ssrRenderAttrs(mergeProps({ class: "mentorship-container" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 30 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } })))} data-v-4008b641><div class="mentorship-icon" data-v-4008b641>`);
      _push(ssrRenderComponent(_component_Icon, { name: "lucide:star" }, null, _parent));
      _push(`</div><h2 data-v-4008b641>The Next Level: 1-on-1 Mentorship.</h2><p class="mentorship-description" data-v-4008b641>We are currently refining a high-touch mentorship program for traders ready for absolute accountability and professional-grade execution reviews. This isn&#39;t a course; it&#39;s a transformation.</p><div class="mentorship-status" data-v-4008b641><span class="status-badge" data-v-4008b641>Limited Spots</span><p data-v-4008b641>Waitlist opening soon.</p></div></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/v2/MentorshipTeaser.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const MentorshipTeaser = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-4008b641"]]), { __name: "V2MentorshipTeaser" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FinalCTA",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "final-cta-section" }, _attrs))} data-v-403c0b2a><div class="section" data-v-403c0b2a><div${ssrRenderAttrs(mergeProps({ class: "final-cta-container" }, ssrGetDirectiveProps(_ctx, _directive_motion, { initial: { opacity: 0, y: 30 }, enter: { opacity: 1, y: 0, transition: { duration: 600 } } })))} data-v-403c0b2a><h2 data-v-403c0b2a>Stop Guessing. Start Executing.</h2><p data-v-403c0b2a>The difference between a gambler and a trader is a repeatable process. Your journey toward consistency starts with the right community and the right math.</p><div class="cta-buttons" data-v-403c0b2a><a href="https://discord.gg/waytrades" target="_blank" class="btn btn-primary" data-v-403c0b2a>Join the Discord Community</a><a href="#" class="btn btn-secondary" data-v-403c0b2a>Back to Top</a></div></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/v2/FinalCTA.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FinalCTA = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-403c0b2a"]]), { __name: "V2FinalCTA" });
function resolveTags(options) {
  const _options = toRaw(options);
  const tags = _options.tags.filter(Boolean).map((i) => typeof i === "string" ? { id: i } : i);
  if (_options.id) {
    const { id, config, initCommands } = _options;
    tags.unshift({ id, config, initCommands });
  }
  return tags;
}
function useGtag() {
  const options = useRuntimeConfig().public.gtag;
  resolveTags(options);
  let _gtag;
  _gtag = () => {
  };
  const initialize = (id) => {
  };
  function disableAnalytics(id) {
  }
  function enableAnalytics(id) {
  }
  return {
    gtag: _gtag,
    initialize,
    disableAnalytics,
    enableAnalytics
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useGtag();
    useSeoMeta({
      title: "Way Trades - Master Futures Day Trading Through Disciplined Process",
      ogTitle: "Way Trades - Master Futures Day Trading Through Disciplined Process",
      description: "Join 5,000+ traders mastering NQ futures day trading using the BBR framework. No hype. Just math and discipline.",
      ogDescription: "Join 5,000+ traders mastering NQ futures day trading using the BBR framework. No hype. Just math and discipline.",
      ogImage: "/logo.png",
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "homepage" }, _attrs))} data-v-a8da99b9>`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(HeroSection, null, null, _parent));
      _push(ssrRenderComponent(TrustBar, null, null, _parent));
      _push(ssrRenderComponent(PillarsSection, null, null, _parent));
      _push(ssrRenderComponent(TargetAudience, null, null, _parent));
      _push(ssrRenderComponent(TestimonialsGrid, null, null, _parent));
      _push(ssrRenderComponent(DiscordConversion, null, null, _parent));
      _push(ssrRenderComponent(MentorshipTeaser, null, null, _parent));
      _push(ssrRenderComponent(FinalCTA, null, null, _parent));
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a8da99b9"]]);
export {
  index as default
};
//# sourceMappingURL=index-wsrchv-y.js.map
