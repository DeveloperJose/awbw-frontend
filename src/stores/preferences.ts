// Preferences stored in the local browser
import { defineStore } from 'pinia';

export const usePreferencesStore = defineStore('preferences', {
  state: () => ({
    darkMode: true,
  }),
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
      document.documentElement.classList.toggle('dark', this.darkMode);
    },
    loadPreferences() {
      const stored = localStorage.getItem('darkMode');
      if (stored !== null) {
        this.darkMode = JSON.parse(stored);
      }
      document.documentElement.classList.toggle('dark', this.darkMode);
    },
  },
});
