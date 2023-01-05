<template>
  <div>
    <shadow-root>
      <h3>Inside of ShadowRoot</h3>
      <n-button type="info">
        {{ name }}
      </n-button>
      <div>
        <vue-latex :expression='"F_{mer}= m \\dfrac{v^2}{r}= 2 kg"' :fontsize="24" :displayMode="true" />
      </div>
    </shadow-root>
    <div>
      <h3>Outside of ShadowRoot</h3>
      <n-button type="info">
        {{ name }}
      </n-button>
      <vue-latex :expression='"F_{mer}= m \\dfrac{v^2}{r}= 2 kg"' :fontsize="24" :displayMode="true" />
    </div>
  </div>
</template>

<script>
import { NButton } from 'naive-ui'

export default {
  data() {
    return {
      name: "Naive UI",
    }
  },
  components: {
    NButton,
  },
}
</script>
