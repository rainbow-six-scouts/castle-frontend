import { defineStore } from "pinia";
import type { Player } from "../types";

export const usePlayerStore = defineStore("players", {
  state: () => ({ players: [] as Player[] }),

  getters: {
    getTeamA() {},
    getTeamB() {},
  },
  actions: {
    addPlayer(player: Player) {},
    removePlayer(id: number) {},
  }
});