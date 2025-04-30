<template>
    <section class="bg-white/5 text-white rounded-xl p-6 shadow-md flex flex-col items-center space-y-6">
      <!-- Section Title -->
      <h2 class="text-xl font-semibold">Meet the Characters</h2>
  
      <!-- Character Preview Card -->
      <div class="w-full max-w-xs bg-white/10 rounded-xl p-4 text-center shadow-inner transition duration-500">
        <img
          :src="currentItem.image"
          :alt="currentItem.name"
          class="mx-auto mb-4 rounded-lg w-full h-48 object-cover object-center"
        />
  
        <h3 class="text-lg font-bold mb-1">{{ currentItem.name }}</h3>
        <p class="text-sm text-gray-300">{{ currentItem.description }}</p>
      </div>
  
      <!-- Controls -->
      <div class="flex space-x-4">
        <button
          @click="previous"
          class="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-sm transition"
        >
          ◀ Previous
        </button>
        <button
          @click="next"
          class="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-sm transition"
        >
          Next ▶
        </button>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const characters = [
    {
      name: 'Sylrin the Scholar',
      description: 'A wise elf who deciphers forgotten languages to unlock ancient magic.',
      image: '/images/characters/sylrin.webp',
    },
    {
      name: 'Grux the Stoneborn',
      description: 'A powerful dwarven warrior who speaks with the earth and defends the mountain realms.',
      image: '/images/characters/grux.webp',
    },
    {
      name: 'Kaelis of the Veil',
      description: 'A mysterious shapeshifter whose language changes with each form.',
      image: '/images/characters/kaelis.webp',
    },
  ];
  
  const currentIndex = ref(0);
  
  const currentItem = computed(() => characters[currentIndex.value]);
  
  function next() {
    currentIndex.value = (currentIndex.value + 1) % characters.length;
  }
  
  function previous() {
    currentIndex.value =
      (currentIndex.value - 1 + characters.length) % characters.length;
  }
  
  // Optional autoplay
  let interval = null;
  
  onMounted(() => {
    interval = setInterval(() => {
      next();
    }, 8000); // 8-second rotation
  });
  
  onUnmounted(() => {
    clearInterval(interval);
  });
  </script>
  