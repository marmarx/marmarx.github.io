<script setup>
// CSS forked from Kevin Powell (https://codepen.io/kevinpowell/pen/VYvWKBV) and LukyVJ (https://codepen.io/LukyVj/pen/PwwrYRR)
defineProps({ title: {type: String, default: ''} })
</script>

<template>
  <button :title="title">
    <span class="btn-content"><slot></slot></span>
    <div class="btn-cells"><span v-for="i in 30" :key="i"></span></div>
  </button>
</template>

<style scoped>
:root {
  --main-color: var(--color, oklch(35% 0.22 28));
  --main-inverse: oklch(from var(--main-color) calc(1 - l) c h);
  --text-color: var(--black, #292929);
}

button {
  --transition-duration: 400ms;

  position: relative;
  font-size: 2rem; color: var(--text-color, black);
  padding: 1em 2em; border: 1px solid; border-radius: 30px;
  background: transparent; appearance: none;
  overflow: hidden;
  transition: color var(--transition-duration) ease;
  isolation: isolate;

  &:hover { color: var(--main-inverse, white) }
}

.btn-content { position: relative; z-index: 3; pointer-events: none; }

.btn-cells {
  position: absolute; inset: 0; z-index: 2;
  display: grid; grid-template-columns: repeat(10, 1fr); 
  
  &::before {
    content: "";

    position: absolute;
    position-anchor: --hovered-cell;
    left: calc(anchor(left) - 20px);
    right: calc(anchor(right) - 20px);
    top: calc(anchor(top) - 20px);
    bottom: calc(anchor(bottom) - 20px);

    width: 10px; aspect-ratio: 1; border-radius: 100vw;
   
    background: var(--main-color, black);
    background-image: linear-gradient(to right, var(--main-color, black), color-mix(in srgb, var(--main-color, black), var(--main-inverse, white) 50%));

    transition: all var(--transition-duration) ease-in-out, margin 0ms var(--transition-duration);
    transition-behavior: allow-discrete;

    transform: scale(0);
    margin: 0 auto auto auto;
  }

  &:has(> :nth-child(n + 11):hover)::before { margin: auto 0 auto auto }
  &:has(> :nth-child(n + 20):hover)::before { margin: auto auto auto 40px }
  &:has(> :nth-child(n + 21):hover)::before { margin: auto auto 0 auto }
  &:hover::before { transform: scale(100); transition: transform var(--transition-duration) ease, margin 0ms 0ms }

  & span { position: relative }
  &:not(:hover) span { transition: anchor-name 0ms var(--transition-duration); transition-behavior: allow-discrete }
  & span:hover { anchor-name: --hovered-cell; transition: anchor-name 0ms }
}

/* .btn-cells span { outline: 1px solid red } */
</style>