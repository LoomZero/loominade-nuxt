<template lang="pug">
  svg.cup(viewBox="0 0 72 72")
    g(v-if="cupID === 'Q625960'")
      line(x1="36.8" x2="58.4" y1="37" y2="37" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2")
      polygon(:fill="cpri", points="12.9,36 16.5,67 55.5,67 59.1,36")
      polygon(:fill="csec", points="45.1,36 41.5,67 55.5,67 59.1,36")
      rect(v-if="onTheRocks" x="38.214" y="48.514" width="13.3" height="13.6" transform="rotate(-80.967 44.864 55.314)" fill="#FFF")
      rect(v-if="onTheRocks" x="18.808" y="35.891" width="14.501" height="12.7" transform="rotate(-17.547 26.057 42.24)" fill="#FFF")
      polyline(fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" points="60,28 55.5,67 16.5,67 12,28")
      rect(v-if="onTheRocks" x="38.214" y="48.514" width="13.3" height="13.6" transform="rotate(-80.967 44.864 55.314)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.792")
      rect(v-if="onTheRocks" x="18.808" y="35.891" width="14.501" height="12.7" transform="rotate(-17.547 26.057 42.24)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.808")
    g(v-if="cupID === 'Q1105343'")
      line(x1="45.6863" x2="53.668" y1="20.0657" y2="20.0657" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2")
      line(x1="18.0445" x2="37.0861" y1="20.0657" y2="20.0657" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2")
      polygon(:fill="cpri" points="17.0606,19 23.5,27.4999 36,43.9999 48.5,27.4999 54.9394,19")
      polygon(:fill="csec" points="44.9394,19 38.5,27.4999 31,37.4 36,43.9999 48.5,27.4999 54.9394,19")
      line(x1="36" x2="36" y1="44" y2="67" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2")
      line(x1="20" x2="52" y1="67" y2="67" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2")
      polyline(fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" points="61,11 48.5,27.5 36,44 23.5,27.5 11.2385,11.3149")
      line(x1="11.2385" x2="11" y1="11.3149" y2="11" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2")
      line(x1="39" x2="55" y1="23" y2="4" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2")
      path(fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M52.451,4")
    g(v-if="cupID === 'Q4131010'")
      polyline(:fill="cpri" points="53.545,27.9395 48.35,67 24.6,67 18.6794,28.0487")
      polygon(:fill="csec" points="43.404,29 38.35,67 48.35,67 53.404,29")
      rect(v-if="onTheRocks" x="55" y="42" width="13.3" height="13.6" transform="rotate(-80.967 44.864 55.314)" fill="#FFF")
      rect(v-if="onTheRocks" x="22" y="50" width="14.501" height="12.7" transform="rotate(-17.547 26.057 42.24)" fill="#FFF")
      polygon(fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" points="48.35,67 24.6,67 17,17 55,17")
      line(x1="19" x2="54" y1="28" y2="28" fill="none" stroke="#000000" strokeMiterlimit="10" strokeWidth="2")
      rect(v-if="onTheRocks" x="55" y="42" width="13.3" height="13.6" transform="rotate(-80.967 44.864 55.314)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.792")
      rect(v-if="onTheRocks" x="22" y="50" width="14.501" height="12.7" transform="rotate(-17.547 26.057 42.24)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.808")
    g(v-if="cupID === 'Q1531435'")
      polygon(:fill="cpri" stroke="none" points="55,26 17,26 17,14 43.0198,14 55,14")
      path(:fill="cpri" stroke="none" d="M56,24c0,11.0457-8.9543,20-20,20s-20-8.9543-20-20")
      path(:fill="csec" stroke="none" d="M55,24V14h-7.5698c0.5966,6.3347,0.293,21.2038-13.788,29.849C34.4169,43.9401,35.2009,44,36,44 c11.0457,0,20-8.9543,20-20H55z")
      path(:fill="cpri" stroke="none" strokeMiterlimit="10" d="M13,14")
      path(:fill="cpri" stroke="none" strokeMiterlimit="10" d="M28,16")
      path(fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M15.3129,5")
      line(x1="20" x2="52" y1="67" y2="67" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2")
      path(fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M16.3129,5")
      line(x1="36" x2="36" y1="44" y2="67" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2")
      path(fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M56,24c0,3.265-0.7824,6.3473-2.1699,9.0696C50.5236,39.557,43.7807,44,36,44c-11.0457,0-20-8.9543-20-20")
      line(x1="16" x2="16" y1="5" y2="24" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2")
      line(x1="56" x2="56" y1="5" y2="24" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2")
      path(fill="none" stroke="#000000" strokeMiterlimit="10" d="M13,14")
      path(fill="none" stroke="#000000" strokeMiterlimit="10" d="M28,16")
      line(x1="15.5" x2="55.5" y1="14.5" y2="14.5" fill="none" stroke="#000000" strokeMiterlimit="10" strokeWidth="2")
    g(v-if="cupID === 'Q386215'")
      rect(:fill="cpri" x="19" y="23.2301" width="29.9997" height="36.3856")
      polygon(:fill="csec" points="40.5264,23.2301 33,59.6157 48.9998,59.6157 48.9998,23.2301")
      path(fill="#FFFFFF" d="M44.1933,15.3999c-1.304-0.001-2.5018,0.4709-3.4585,1.2577c-0.9376-1.9375-2.8336-3.2665-5.0258-3.2682 c-0.8005-0.0006-1.5606,0.1771-2.2511,0.4952c-1.1199-1.5208-2.8597-2.5031-4.819-2.5046c-2.9465-0.0023-5.4063,2.205-5.997,5.1492 c-0.3479-0.0874-0.7061-0.1448-1.0785-0.1451c-2.6033-0.0021-4.7162,2.2396-4.7184,5.0059l-0.0063,8.0154 c-0.0009,1.1021,0.847,2.0045,1.8842,2.0053l0.9429,0.0007c1.0372,0.0008,1.8865-0.9002,1.8873-2.0024l0.0013-1.5991 c0.5711,0.3722,1.2338,0.5981,1.9494,0.5987l1.8546,0.0015c1.2022,0.0009,2.2653-0.6144,2.9581-1.5517 c1.0256,1.5428,2.7125,2.5581,4.6153,2.5596c3.1115,0.0025,5.6594-2.7007,5.662-6.0071l10.9214,0.0086 c0.2098-0.627,0.3301-1.3002,0.3306-2.0036C49.8485,18.0956,47.318,15.4024,44.1933,15.3999z")
      path(fill="#FFFFFF" d="M19.8066,24.8075c0.0022-2.6882,2.115-4.8665,4.7184-4.8646c0.3724,0.0003,0.7307,0.0561,1.0785,0.141 c0.5907-2.861,3.0506-5.006,5.9971-5.0037c1.9593,0.0015,3.699,0.956,4.8189,2.4339c0.6904-0.3091,1.4505-0.4818,2.2511-0.4812 c2.1922,0.0017,4.0882,1.2932,5.0258,3.1759c0.9567-0.7645,2.1545-1.2232,3.4585-1.2222c0.5297,0.0004,1.0401,0.0815,1.5261,0.2223 c-0.7688-2.2807-2.8627-3.9207-5.3338-3.9226c-1.304-0.001-2.5018,0.4577-3.4585,1.2222 c-0.9376-1.8828-2.8336-3.1742-5.0258-3.1759c-0.8005-0.0006-1.5607,0.1721-2.2511,0.4812 c-1.1199-1.4778-2.8597-2.4324-4.8189-2.4339c-2.9465-0.0023-5.4064,2.1427-5.9971,5.0037 c-0.3478-0.085-0.7061-0.1407-1.0785-0.141c-2.6034-0.002-4.7163,2.1764-4.7184,4.8646l-0.0063,7.7891 c-0.0009,1.071,0.847,1.9479,1.8842,1.9487l0.9429,0.0007c0.3605,0.0003,0.6951-0.1105,0.9824-0.2934L19.8066,24.8075z")
      path(fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M49.5,50.5h6c2.2,0,4-1.8,4-4v-14c0-2.2-1.8-4-4-4h-6")
      polyline(fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.0185" points="38.5938,23.2301 48.9997,23.2301 48.9997,60 20,60 20,39.6348")
      path(fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M20.2515,31.3124c0.753-0.2628,1.3009-1.0182,1.3016-1.9033l0.0013-1.5991c0.5711,0.3722,1.2338,0.5981,1.9494,0.5987 l1.8546,0.0015c1.2022,0.0009,2.2653-0.6144,2.9581-1.5517c1.0256,1.5428,2.7125,2.5581,4.6153,2.5596 c3.1115,0.0025,5.6594-2.7007,5.662-6.0071l10.9214,0.0086c0.2098-0.627,0.3301-1.3002,0.3306-2.0036 c0.0026-3.3204-2.5278-6.0136-5.6525-6.016c-1.304-0.001-2.5018,0.4709-3.4585,1.2577c-0.9376-1.9375-2.8336-3.2665-5.0258-3.2682 c-0.8005-0.0006-1.5606,0.1771-2.2511,0.4952c-1.1199-1.5208-2.8597-2.5031-4.819-2.5046c-2.9465-0.0023-5.4063,2.205-5.997,5.1492 c-0.3479-0.0874-0.7061-0.1448-1.0785-0.1451c-2.6033-0.0021-4.7162,2.2396-4.7184,5.0059l-0.0063,8.0154 c-0.0009,1.1021,0.847,2.0045,1.8842,2.0053l0.9429,0.0007C19.87,31.4116,20.0669,31.3768,20.2515,31.3124")
    g(v-if="cupID === 'Q5948399'")
      line(id="xx" x1="16.9" x2="55.2" y1="28" y2="28" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2")
      path(:fill="cpri" d="M56,33c-0.1-2.1-0.3-4.1-0.7-6H16.8c-0.4,1.9-0.7,3.9-0.7,6l0,0c0,0.2,0,0.4,0,0.6c0,0.1,0,0.2,0,0.4l0,0 c0.5,12.2,9.2,22,20,22s19.5-9.8,20-22l0,0c0-0.1,0-0.2,0-0.4C56,33.4,56,33.2,56,33L56,33z")
      path(:fill="csec" d="M56,33L56,33c-0.1-2.1-0.4-4.1-0.8-6h-13c0.4,1.9,0.7,3.9,0.7,6l0,0c0,0.2,0,0.4,0,0.6c0,0.1,0,0.2,0,0.4 l0,0c-0.4,9.6-5.9,17.8-13.5,20.8c2,0.8,4.2,1.2,6.5,1.2c10.8,0,19.5-9.8,20-22l0,0c0-0.1,0-0.2,0-0.4C56,33.4,56,33.2,56,33z")
      line(x1="36" x2="36" y1="56" y2="67" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2")
      line(x1="20" x2="52" y1="67" y2="67" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2")
      path(fill="none" stroke="#000000" strokeMiterlimit="10" strokeWidth="2" d="M56,33c0,12.7-9,23-20,23S16,45.7,16,33")
      path(fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M50.1,15.6C53.8,20.3,56,26.8,56,34")
      path(fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M16,34c0-7,2.1-13.3,5.6-18")
      polyline(fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" points="43,24 43,11 50,4")
    g(v-if="cupID === 'Q3676082'")
      path(:fill="cpri" d="m49.15 65.85c7.524-4.309 12.53-10.69 12.53-19.98 0-2.521-2.033-4.476-2.727-6.77l-5.336-8.306-32.2 0.51-5.61 5.587c-0.6942 2.295-2.597 8.88-2.597 11.4 0 9.292 3.599 13.25 11.12 17.56z")
      path(:fill="csec" d="m58.9 39.03-5.066-7.885a0.7549 0.7549 0 0 0-0.6351-0.3468h-4.424a0.7549 0.7549 0 0 0-0.6717 1.099l1.514 2.952a16.01 16.01 0 0 1 1.351 3.691c0.2916 1.257 0.64 2.766 0.7695 3.349a22.91 22.91 0 0 1 0.5136 6.113c-0.4674 5.59-2.793 13.41-10.17 17.74a0.7889 0.7889 0 0 1-0.397 0.1074h11.26a0.7958 0.7958 0 0 0 0.4-0.1086c7.348-4.324 8.008-11.64 8.008-20.86 0-2.489-1.662-3.466-2.372-5.698a0.6811 0.6811 0 0 0-0.0745-0.1608z")
      rect(x="21.81" y="24.04" width="31.36" height="6.114" fill="#9b9b9a")
      path(fill="none" stroke="#9b9b9a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m39.4 19.67 2.467-6.773c1.23-3.378 3.565-5.473 6.098-5.473h9.577")
      path(fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m37.2 30.8h16.42s8.005 10.28 8.211 16.97c0.1908 6.208-2.786 14.34-9.316 18.08h-29.99c-6.53-3.74-9.507-11.88-9.316-18.08 0.2057-6.694 8.211-16.97 8.211-16.97h16.42" )
      path(fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m37.54 19.5 2.766-7.63c1.379-3.805 3.996-6.165 6.836-6.165h10.4" )
      polyline(fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" points="21.42 30.8 21.42 23.5 53.62 23.5 53.62 30.8" )
    g(v-if="cupID === 'Q3235198'")
      polygon(fill="#FFFFFF" stroke="none" points="60.5,32.5 4.5,32.5 3.5,24.5 61.5,24.5" )
      path(:fill="cpri" stroke="none" d="M4.3224,32.2305c1.5112,10.3405,6.0142,18.7721,13.7921,23.4494H47.209 c7.779-4.6773,12.2822-13.1089,13.7935-23.4494H4.3224z" )
      path(:fill="cpri" stroke="none" d="M49.2187,32.2305H4.3224c1.5112,10.3405,6.0142,18.7721,13.7921,23.4494h13.0742 C40.7745,50.6637,46.7855,38.2272,49.2187,32.2305z" )
      path(fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.051" d="M61.1842,30.9222" )
      path(fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M61.4133,28.6318c4.022,1.6758,6.8493,5.6446,6.8493,10.2737c0,6.1442-4.9809,11.125-11.125,11.125 c-1.059,0-2.0835-0.148-3.0539-0.4244" )
      path(fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokMiterlimit="10" strokeWidth="2" d="M28.5949,24h32.9927c0,14.0466-4.6198,25.8122-14.3785,31.6799H18.1145C8.3571,49.8122,3.7374,38.0466,3.7374,24H17.748H28.5949z" )
</template>
<script>
import Wikidata from "~/plugins/wikidata";

export default {
  props: ["cup", "id", "colors", "onTheRocks"],
  computed: {
    color() {
      const color = {};
      if (this.colors.length > 0) {
        color.pri = this.colors[0];
      } else {
        color.pri = Wikidata.fallbackColors(this.id);
      }
      if (this.colors.length > 1) {
        color.sec = this.colors[1];
      } else {
        color.sec = Wikidata.LightenDarkenColor(color.pri, -50);
      }
      return color;
    },
    cupID() {
      const commonCups = ["Q625960", "Q1105343", "Q4131010", "Q1531435"];
      const knownCups = [
        "Q625960",
        "Q1105343",
        "Q4131010",
        "Q1531435",
        "Q386215",
        "Q5948399",
        "Q3676082",
        "Q3235198"
      ];
      if (knownCups.includes(this.cup)) return this.cup;
      return commonCups[parseInt(this.id.substring(1)) % commonCups.length];
    },
    cpri() {
      return "#" + (this.color.pri ?? "F4AA41");
    },
    csec() {
      return "#" + (this.color.sec ?? "E27022");
    }
  }
};
</script>
<style lang="sass">
.cup
</style>
