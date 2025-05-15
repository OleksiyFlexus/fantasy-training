import { ref } from "vue";
import { useModal } from "@/helpers/useModal";
import { fetchTeams } from "@/api/team";

export interface Team {
  id: string;
  name: string;
  logo?: string;
}

export function useTeamSelection() {
  const { isModalActive, openModal, closeModal } = useModal();

  const teams = ref<Team[]>([]);
  const team = ref({
    home: null as Team | null,
    away: null as Team | null,
    side: null as "home" | "away" | null,
  });

  const openTeamSelection = (side: "home" | "away") => {
    team.value.side = side;
    openModal();
  };

  const selectTeam = (selectedTeam: Team) => {
    if (team.value.side === "home") {
      team.value.home = selectedTeam;
    } else if (team.value.side === "away") {
      team.value.away = selectedTeam;
    }
    closeModal();
  };

  onMounted(async () => {
    teams.value = await fetchTeams();
  });

  return {
    isModalActive,
    openTeamSelection,
    selectTeam,
    closeModal,
    teams,
    team,
  };
}
