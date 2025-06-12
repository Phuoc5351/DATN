<template>
  <header class="w-full bg-white/1 backdrop-blur-sm py-4 px-4 sm:px-8">
    <div class="flex items-center justify-between max-w-screen-xl mx-auto gap-8">

      <div class="flex-shrink-0 w-28 text-left">
        <button
            @click="goToPreviousStep"
            class="px-5 py-2.5 font-semibold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-all duration-200"
            :class="[currentStep > 1 ? 'opacity-100 visible' : 'opacity-0 invisible']"
        >
          Quay lại
        </button>
      </div>

      <div class="flex-grow">
        <div class="max-w-3xl mx-auto">
          <div class="relative">
            <div class="absolute top-4 left-4 w-[calc(100%-2rem)] h-0.5 transform -translate-y-1/2">
              <div class="w-full h-full bg-gray-300"></div>
              <div
                  class="absolute top-0 left-0 h-full transition-all duration-500 ease-out bg-purple-600"
                  :style="{ width: progressWidth }"
              ></div>
            </div>
            <div class="relative flex justify-between items-start">
              <div
                  v-for="step in steps"
                  :key="step.id"
                  class="z-10 flex flex-col items-center"
              >
                <div
                    class="w-8 h-8 rounded-full flex items-center justify-center font-bold transition-colors duration-300"
                    :class="step.id <= currentStep
                    ? 'bg-purple-600 border-2 border-purple-600 text-white'
                    : 'bg-white border-2 border-gray-300 text-gray-400'"
                >
                  <span>{{ step.id }}</span>
                </div>
                <span
                    class="mt-2 text-xs sm:text-sm text-center font-semibold transition-colors duration-300"
                    :class="step.id <= currentStep
                    ? 'text-purple-600'
                    : 'text-gray-400'"
                >
                  {{ step.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex-shrink-0 w-28 text-right">
        <button
            @click="goToNextStep"
            class="px-5 py-2.5 font-semibold text-white bg-purple-600 rounded-lg shadow-md border-b-4 border-purple-800 hover:bg-purple-700 active:translate-y-0.5 active:border-b-2 transition-all duration-150"
        >
          {{ currentStep < steps.length ? 'Tiếp tục' : 'Hoàn thành' }}
        </button>
      </div>

    </div>
  </header>
</template>

<script setup>
// SCRIPT KHÔNG CẦN THAY ĐỔI
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
  currentStep: {
    type: Number,
    required: true,
    default: 1,
  },
});
const steps = ref([
  { id: 1, name: 'Thông tin sự kiện' },
  { id: 2, name: 'Thời gian & Loại vé' },
  { id: 3, name: 'Cài đặt' },
  { id: 4, name: 'Thông tin thanh toán' },
]);

const progressWidth = computed(() => {
  const totalSteps = steps.value.length;
  const current = props.currentStep;
  if (totalSteps <= 1) return '0%';
  const percentage = ((current - 1) / (totalSteps - 1)) * 100;
  return `${Math.min(percentage, 100)}%`;
});

const goToNextStep = () => {
  const nextStep = props.currentStep + 1;
  if (nextStep <= steps.value.length) {
    router.push({ name: `Step${nextStep}` });
  } else {
    console.log('Hoàn thành!');
  }
};
const goToPreviousStep = () => {
  const prevStep = props.currentStep - 1;
  if (prevStep >= 1) {
    router.push({ name: `Step${prevStep}` });
  }
};
</script>