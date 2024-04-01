<template>
  <q-page class="q-pa-lg">
    <div class="q-mt-md">
      <q-btn
        @click="getDrives"
        color="white"
        text-color="black"
        label="Get Drives"
      />
      <div v-if="working" class="q-mt-xl">please wait...</div>
    </div>

    <div v-if="drives.length" class="q-mt-xl">
      <div class="" style="max-width: 500px">
        <div class="q-gutter-md">
          <div v-for="drive in drives">
            <q-card
              class="my-card text-white"
              style="
                background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
              "
            >
              <q-card-section>
                <div style="font-size: 1.3rem; font-weight: 500">
                  {{ drive.name.name }}
                </div>
                <div class="text-h6">
                  <img
                    style="border-radius: 10px; margin-top: 5px"
                    :src="drive.logo"
                  />
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
defineOptions({
  name: "IndexPage",
});

const drives = ref([]);

const working = ref(false);

async function getDrives() {
  working.value = true;

  try {
    drives.value = await window.myAPI.getDrives();
  } catch (error) {
    alert(String(error));
  }
  working.value = false;
}
</script>
