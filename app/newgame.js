import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Game, Player } from "../entities/all";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// import { useNavigate } from "react-router-dom";
// import { createPageUrl } from "@/utils";
// import {
//   Users,
//   Plus,
//   Trash2,
//   Play,
//   UserPlus,
//   Gamepad2
// } from "lucide-react";
import Badge from "../components/Badge";
import Card from "../components/Card";
import CardContent from "../components/CardContent";
import CardHeader from "../components/CardHeader";
import CardTitle from "../components/CardTitle";

export default function newgame() {
  const [gameName, setGameName] = useState("");
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [newPlayerName, setNewPlayerName] = useState("");
  const [existingPlayers, setExistingPlayers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadExistingPlayers();
  }, []);

  const loadExistingPlayers = async () => {
    try {
      const players = await Player.list("name");
      setExistingPlayers(players);
    } catch (error) {
      console.error("Error loading players:", error);
    }
  };

  const addNewPlayer = async () => {
    if (!newPlayerName.trim()) return;

    try {
      const player = await Player.create({ name: newPlayerName.trim() });
      setExistingPlayers([...existingPlayers, player]);
      setSelectedPlayers([...selectedPlayers, player]);
      setNewPlayerName("");
    } catch (error) {
      console.error("Error creating player:", error);
    }
  };

  const togglePlayerSelection = (player) => {
    if (selectedPlayers.find((p) => p.id === player.id)) {
      setSelectedPlayers(selectedPlayers.filter((p) => p.id !== player.id));
    } else {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  const removeSelectedPlayer = (playerId) => {
    setSelectedPlayers(selectedPlayers.filter((p) => p.id !== playerId));
  };

  const startGame = async () => {
    if (!gameName.trim() || selectedPlayers.length < 2) return;

    setLoading(true);
    try {
      const gameData = {
        name: gameName,
        players: selectedPlayers.map((player) => ({
          player_id: player.id,
          name: player.name,
          total_score: 0,
          rounds: [],
        })),
        current_round: 1,
        status: "active",
      };

      const game = await Game.create(gameData);
      navigate(createPageUrl(`Game?id=${game.id}`));
    } catch (error) {
      console.error("Error starting game:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 p-4 md:p-8">
      <View className="max-w-4xl mx-auto">
        <View className="text-center mb-8">
          <View className="inline-flex items-center gap-3 mb-4">
            <View className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl flex items-center justify-center">
              {/* <Gamepad2 className="w-6 h-6 text-white" /> */}
            </View>
          </View>
          <Text className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Start New Game
          </Text>
          <Text className="text-lg text-gray-600">
            Set up your Hand & Foot game with players and begin scoring
          </Text>
        </View>

        <View className="grid lg:grid-cols-2 gap-8">
          {/* Game Setup */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {/* <Play className="w-5 h-5 text-green-600" /> */}
                <Text>Game Details</Text>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <View>
                {/* <Label htmlFor="gameName">Game Name</Label>
                <Input
                  id="gameName"
                  value={gameName}
                  onChange={(e) => setGameName(e.target.value)}
                  placeholder="Enter game name (e.g., 'Friday Night Game')"
                  className="mt-2"
                /> */}
              </View>

              <View>
                {/* <Label className="text-lg font-semibold">
                  Selected Players ({selectedPlayers.length})
                </Label> */}
                <View className="mt-3 space-y-2">
                  {selectedPlayers.length === 0 ? (
                    <View className="text-gray-500 text-center py-4 border-2 border-dashed border-gray-200 rounded-lg">
                      No players selected yet
                    </View>
                  ) : (
                    selectedPlayers.map((player) => (
                      <View
                        key={player.id}
                        className="flex items-center justify-between bg-green-50 p-3 rounded-lg border border-green-200"
                      >
                        <Text className="font-medium text-green-800">
                          {player.name}
                        </Text>
                        {/* <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeSelectedPlayer(player.id)}
                          className="text-red-600 hover:text-red-800 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button> */}
                      </View>
                    ))
                  )}
                </View>

                {selectedPlayers.length < 2 && (
                  <Text className="text-sm text-orange-600 mt-2">
                    You need at least 2 players to start a game
                  </Text>
                )}
              </View>

              {/* <Button
                onClick={startGame}
                disabled={!gameName.trim() || selectedPlayers.length < 2 || loading}
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-6 text-lg"
                size="lg"
              >
                {loading ? (
                  <>Starting Game...</>
                ) : (
                  <>
                    <Play className="w-5 h-5 mr-2" />
                    Start Game
                  </>
                )}
              </Button> */}
            </CardContent>
          </Card>

          {/* Player Selection */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {/* <Users className="w-5 h-5 text-blue-600" /> */}
                <Text>Add Players</Text>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Add New Player */}
              <View>
                {/* <Label htmlFor="newPlayer">Create New Player</Label> */}
                <View className="flex gap-2 mt-2">
                  {/* <Input
                    id="newPlayer"
                    value={newPlayerName}
                    onChange={(e) => setNewPlayerName(e.target.value)}
                    placeholder="Enter player name"
                    onKeyPress={(e) => e.key === "Enter" && addNewPlayer()}
                  /> */}
                  {/* <Button
                    onClick={addNewPlayer}
                    disabled={!newPlayerName.trim()}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <UserPlus className="w-4 h-4" />
                  </Button> */}
                </View>
              </View>

              {/* Existing Players */}
              <View>
                {/* <Label className="text-base font-semibold">
                  Choose Existing Players
                </Label> */}
                <View className="mt-3 max-h-80 overflow-y-auto space-y-2">
                  {existingPlayers.length === 0 ? (
                    <View className="text-gray-500 text-center py-8 border-2 border-dashed border-gray-200 rounded-lg">
                      {/* <Users className="w-8 h-8 mx-auto mb-2 text-gray-400" /> */}
                      <Text>No existing players</Text>
                      <Text className="text-sm">
                        Create your first player above
                      </Text>
                    </View>
                  ) : (
                    existingPlayers.map((player) => {
                      const isSelected = selectedPlayers.find(
                        (p) => p.id === player.id
                      );
                      return (
                        <View
                          key={player.id}
                          onClick={() => togglePlayerSelection(player)}
                          className={`p-3 rounded-lg border cursor-pointer transition-all ${
                            isSelected
                              ? "bg-green-100 border-green-300 text-green-800"
                              : "bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                          }`}
                        >
                          <View className="flex items-center justify-between">
                            <View>
                              <Text className="font-medium">{player.name}</Text>
                              <View className="flex gap-2 mt-1">
                                <Badge variant="outline" className="text-xs">
                                  {player.games_played || 0} games
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {player.games_won || 0} wins
                                </Badge>
                              </View>
                            </View>
                            {isSelected && (
                              <Badge className="bg-green-600">Selected</Badge>
                            )}
                          </View>
                        </View>
                      );
                    })
                  )}
                </View>
              </View>
            </CardContent>
          </Card>
        </View>
      </View>
    </View>
  );
}
