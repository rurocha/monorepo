import { defineComponent as r, openBlock as a, createElementBlock as c, normalizeClass as p, renderSlot as l } from "vue";
const u = /* @__PURE__ */ r({
  __name: "Button",
  props: {
    type: null
  },
  setup(t) {
    const o = t, e = {
      "button--primary": o.type === "primary",
      "button--outline": o.type === "outline"
    };
    return (n, s) => (a(), c("button", {
      class: p(["button", e])
    }, [
      l(n.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const _ = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, s] of o)
    e[n] = s;
  return e;
}, d = /* @__PURE__ */ _(u, [["__scopeId", "data-v-fdd9b8ea"]]), m = {
  install: (t, o) => {
    t.component("Button", d);
  }
};
export {
  m as default
};
