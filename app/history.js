import { LinearGradient } from "expo-linear-gradient";
import CardTitle from "../components/CardTitle";
// import {
//   Award,
//   Calendar,
//   Clock,
//   Crown,
//   Target,
//   TrendingUp,
//   Trophy,
//   Users,
// } from "lucide-react";
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

export default function history() {
  const [games, setGames] = useState([]);
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    // loadData();
    setLoading(false);
  }, []);

  const loadData = async () => {
    // try {
    //   const [gamesData, playersData] = await Promise.all([
    //     Game.list("-created_date"),
    //     Player.list("-total_score"),
    //   ]);
    //   setGames(gamesData);
    //   setPlayers(playersData);
    // } catch (error) {
    //   console.error("Error loading data:", error);
    // } finally {
    //   setLoading(false);
    // }
  };

  const completedGames = Array.isArray(games)
    ? games.filter((g) => g.status === "completed")
    : [];
  const activeGames = Array.isArray(games)
    ? games.filter((g) => g.status === "active")
    : [];

  if (loading) {
    return (
      <LinearGradient
        colors={["#faf5ff", "#eff6ff"]} // purple-50 to blue-50
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          flex: 1,
          padding: 32,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View className="text-center">
          <ActivityIndicator
            size="large"
            color="#9333ea"
            style={{ marginBottom: 16 }}
          />

          <Text className="text-gray-600">Loading game history...</Text>
        </View>
      </LinearGradient>
    );
  }

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <LinearGradient
        colors={["#faf5ff", "#ffffff", "#eff6ff"]} // purple-50, white, blue-50
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="flex-1 p-8"
      >
        <View className="flex-1 p-4">
          <View className="flex-1 justify-center items-center">
            <Text className="text-3xl font-bold text-gray-900 mb-4">
              Game History
            </Text>
            <Text className="text-lg text-gray-600 text-center">
              Track your Hand & Foot achievements and statistics
            </Text>
          </View>

          {/* Stats Overview */}
          <View className="flex flex-col md:flex-row gap-6 mb-8">
            <LinearGradient
              colors={["#f0fdf4", "#dcfce7"]} // green-50 to green-100
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                borderWidth: 1,
                borderColor: "#bbf7d0", // green-200
                borderRadius: 8,
                padding: 16,
              }}
            >
              <View className="flex flex-row items-center justify-between">
                <CardTitle className="text-green-800 text-sm">
                  <Text>Total Games</Text>
                </CardTitle>
                {/* <Trophy className="w-5 h-5 text-green-600" /> */}
              </View>
              <View>
                <View className="text-2xl font-bold text-green-900">
                  <Text>{games.length}</Text>
                </View>
              </View>
            </LinearGradient>

            <View className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <View className="flex flex-row items-center justify-between">
                <CardTitle className="text-blue-800 text-sm">
                  <Text>Completed</Text>
                </CardTitle>
                {/* <Target className="w-5 h-5 text-blue-600" /> */}
              </View>
              <View>
                <View className="text-2xl font-bold text-blue-900">
                  <Text>{completedGames.length}</Text>
                </View>
              </View>
            </View>

            <View className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
              <View className="flex flex-row items-center justify-between">
                <CardTitle className="text-orange-800 text-sm">
                  <Text>Active Games</Text>
                </CardTitle>
                {/* <Clock className="w-5 h-5 text-orange-600" /> */}
              </View>
              <View>
                <View className="text-2xl font-bold text-orange-900">
                  <Text>{activeGames.length}</Text>
                </View>
              </View>
            </View>

            <View className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <View className="flex flex-row items-center justify-between">
                <CardTitle className="text-purple-800 text-sm">
                  <Text>Total Players</Text>
                </CardTitle>
                {/* <Users className="w-5 h-5 text-purple-600" /> */}
              </View>
              <View>
                <View className="text-2xl font-bold text-purple-900">
                  <Text>{players.length}</Text>
                </View>
              </View>
            </View>
          </View>

          {/* <View className="grid lg:grid-cols-3 gap-8">
          {/* Games List 
          <View className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {/* <Calendar className="w-5 h-5 text-blue-600" /> 
                  <Text>Recent Games</Text>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {games.length === 0 ? (
                  <View className="text-center py-12">
                    {/* <Trophy className="w-16 h-16 text-gray-400 mx-auto mb-4" /> 
                    <Text className="text-xl font-semibold text-gray-600 mb-2">
                      No Games Yet
                    </Text>
                    <Text className="text-gray-500">
                      Start your first Hand & Foot game to see history here!
                    </Text>
                  </View>
                ) : (
                  <View className="space-y-4">
                    {games.map((game) => (
                      <View
                        key={game.id}
                        onClick={() => setSelectedGame(game)}
                        className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-all"
                      >
                        <View className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-lg">{game.name}</h3>
                          <Badge
                            className={
                              game.status === "completed"
                                ? "bg-green-100 text-green-800 border-green-300"
                                : "bg-orange-100 text-orange-800 border-orange-300"
                            }
                          >
                            {game.status === "completed"
                              ? "Completed"
                              : "Active"}
                          </Badge>
                        </View>

                        <View className="flex justify-between items-center text-sm text-gray-600">
                          <View className="flex items-center gap-4">
                            <Text className="flex items-center gap-1">
                              {/* <Users className="w-4 h-4" /> 
                              {game.players.length} players
                            </Text>
                            <Text>Round {game.current_round}</Text>
                            <Text>
                              {format(
                                new Date(game.created_date),
                                "MMM d, yyyy"
                              )}
                            </Text>
                          </View>

                          {game.status === "completed" && game.winner_id && (
                            <View className="flex items-center gap-1 text-yellow-600">
                              {/* <Crown className="w-4 h-4" /> 
                              <Text className="font-medium">
                                {
                                  game.players.find(
                                    (p) => p.player_id === game.winner_id
                                  )?.name
                                }
                              </Text>
                            </View>
                          )}
                        </View>
                      </View>
                    ))}
                  </View>
                )}
              </CardContent>
            </Card>
          </View>

          {/* Player Leaderboard */}
          {/* <View>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {/* <TrendingUp className="w-5 h-5 text-purple-600" /> *
                  <Text>Player Leaderboard</Text>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {players.length === 0 ? (
                  <View className="text-center py-8">
                    {/* <Award className="w-12 h-12 text-gray-400 mx-auto mb-3" /> 
                    <Text className="text-gray-500">No players yet</Text>
                  </View>
                ) : (
                  <View className="space-y-4">
                    {players.slice(0, 10).map((player, index) => (
                      <View
                        key={player.id}
                        className="flex items-center justify-between"
                      >
                        <View className="flex items-center gap-3">
                          <View
                            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                              index === 0
                                ? "bg-yellow-100 text-yellow-800"
                                : index === 1
                                  ? "bg-gray-100 text-gray-700"
                                  : index === 2
                                    ? "bg-orange-100 text-orange-800"
                                    : "bg-blue-50 text-blue-700"
                            }`}
                          >
                            {index + 1}
                          </View>
                          <View>
                            <Text className="font-semibold">{player.name}</Text>
                            <View className="flex gap-2 text-xs text-gray-500">
                              <Text>{player.games_played || 0} games</Text>
                              <Text>{player.games_won || 0} wins</Text>
                            </View>
                          </View>
                        </View>
                        <View className="text-right">
                          <Text className="font-bold">
                            {player.total_score || 0}
                          </Text>
                          <Text className="text-xs text-gray-500">points</Text>
                        </View>
                      </View>
                    ))}
                  </View>
                )}
              </CardContent>
            </Card>

            {/* Game Details Modal-like section 
            {selectedGame && (
              <Card className="shadow-lg mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <Text>Game Details</Text>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedGame(null)}
                    >
                      ✕
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <View className="space-y-4">
                    <View>
                      <Text className="font-semibold mb-2">
                        {selectedGame.name}
                      </Text>
                      <View className="text-sm text-gray-600">
                        <Text>
                          Created:{" "}
                          {format(new Date(selectedGame.created_date), "PPP")}
                        </Text>
                        <Text>Status: {selectedGame.status}</Text>
                        <Text>Current Round: {selectedGame.current_round}</Text>
                      </View>
                    </View>

                    <View>
                      <Text className="font-semibold mb-2">Final Scores</Text>
                      <View className="space-y-2">
                        {selectedGame.players
                          .sort(
                            (a, b) =>
                              (b.total_score || 0) - (a.total_score || 0)
                          )
                          .map((player, index) => (
                            <View
                              key={player.player_id}
                              className="flex justify-between items-center"
                            >
                              <View className="flex items-center gap-2">
                                {index === 0 &&
                                  selectedGame.status === "completed" && (
                                    <Crown className="w-4 h-4 text-yellow-500" />
                                  )}
                                <Text>{player.name}</Text>
                              </View>
                              <Text className="font-semibold">
                                {player.total_score || 0}
                              </Text>
                            </View>
                          ))}
                      </View>
                    </View>
                  </View>
                </CardContent>
              </Card>
            )}
          </View> 
        </View>*/}
        </View>
      </LinearGradient>
    </ScrollView>
  );
}
