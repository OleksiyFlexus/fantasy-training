import { defineStore } from 'pinia'

export const useMatchStore = defineStore('match', {
  state: () => ({
    homeScore: 0,
    awayScore: 0,
    goalScorer: null as Player | null,
    matchWinner: null as 'home' | 'away' | null,
    matchEnded: false
  }),
  actions: {
    scoreGoal(player: Player, team: 'home' | 'away') {
      if (team === 'home') {
        this.homeScore++
      } else {
        this.awayScore++
      }
      
      // Set goal scorer for top players
      this.goalScorer = player

      // Check for match end conditions
      if (this.homeScore === 2 || this.awayScore === 2) {
        this.matchWinner = team
        this.matchEnded = true
      }
    },
    resetMatch() {
      this.homeScore = 0
      this.awayScore = 0
      this.goalScorer = null
      this.matchWinner = null
      this.matchEnded = false
    }
  }
})
