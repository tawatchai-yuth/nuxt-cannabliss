<template>
  <div v-click-outside="hideEvent" class="w-full">
    <button
      @click="openClick"
      class="w-full outline-none focus:outline-none"
      :class="toggleClass"
    >
      <div v-if="text">
        <div
          class="rounded border text-sm py-2 px-4 flex justify-between items-center"
          :class="{
            'border-border-textfeild  text-slate':
              !disabled && theme != 'primary' && theme != 'primary-border',
            'bg-blue-100 border-blue-100  text-primary': theme == 'primary',
            'border-primary  text-primary': theme == 'primary-border',
            'bg-gray-100 cursor-not-allowed': disabled,
          }"
        >
          <div class="truncate">
            {{ text }}
          </div>
          <base-icon
            class="ml-4"
            icon="dropdown"
            width="10"
            height="10"
            viewBox="0 0 24 24"
          ></base-icon>
        </div>
      </div>
      <div v-else>
        <slot name="toggle" />
      </div>
    </button>
    <div
      v-show="open"
      class="z-10"
      :class="dropdownClassComp"
      :style="{ width: dropdownWidthFull ? 'inherit' : '' }"
    >
      <div class="overflow-hidden">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { isReadable } from "stream";
import ClickOutside from "vue-click-outside";

export default {
  inheritAttrs: false,
  directives: {
    ClickOutside,
  },
  provide() {
    return {
      parent: this,
    };
  },
  props: {
    theme: {
      type: String,
      default: "default",
    },
    text: {
      type: String,
      default: "",
    },
    toggleClass: {
      type: String,
      default: "",
    },
    dropdownClass: {
      type: String,
      default: "",
    },
    dropdownMaxWidthAuto: {
      type: Boolean,
      default: false,
    },
    dropdownWidthFull: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    openUp: {
      type: String,
      default: "",
    },
  },
  data() {
    return { open: false };
  },
  computed: {
    dropdownClassComp() {
      return this.dropdownClass;
    },
  },
  mounted() {
    if (this.openUp) this.open = !this.open;
  },
  methods: {
    openClick() {
      if (this.disabled) return;
      this.open = !this.open;

      this.$emit("opened", this.open);
    },
    hideEvent() {
      this.open = false;
      this.$emit("opened", this.open);
    },
    hide() {
      this.open = false;
      this.$emit("opened", this.open);
    },
  },
};
</script>
