import { defineComponent as r, openBlock as _, createElementBlock as c, normalizeClass as p, renderSlot as u } from "vue";
const a = /* @__PURE__ */ r({
  __name: "Button",
  props: {
    type: null
  },
  setup(t) {
    const e = t, o = {
      "button--primary": e.type === "primary",
      "button--outline": e.type === "outline"
    };
    return (n, s) => (_(), c("button", {
      class: p(["button", o])
    }, [
      u(n.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const l = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, s] of e)
    o[n] = s;
  return o;
}, i = /* @__PURE__ */ l(a, [["__scopeId", "data-v-fdd9b8ea"]]);
export {
  i as Button
};
