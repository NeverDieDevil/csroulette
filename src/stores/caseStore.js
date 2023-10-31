import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useCaseStore = defineStore("caseStore", () => {
  const crates = ref(null);
  const isLoading = ref(false);
  const error = ref(null);
  const fetchData = async () => {
    isLoading.value = true;
    error.value = null;

    await axios
      .get("https://bymykel.github.io/CSGO-API/api/en/crates.json")
      .then((response) => {
        crates.value = response.data;
        error.value = "";
        isLoading.value = false;
        console.log(crates.value[15].name);
      })
      .catch((er) => {
        error.value = er;
        console.log(er);
        isLoading.value = false;
      });
  };

  return { crates, fetchData };
});
