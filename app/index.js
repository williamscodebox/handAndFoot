import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
// import { createPageUrl } from "@/utils";
// import {
//   Play,
//   Trophy,
//   Users,
//   BookOpen,
//   TrendingUp,
//   Crown,
//   Clock,
//   Spade
// } from "lucide-react";
import { StyleSheet, Text, View } from "react-native";
import "./../global.css";

export default function HomeScreen() {
  const [games, setGames] = useState([]);
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    // try {
    //   const [gamesData, playersData] = await Promise.all([
    //     Game.list("-created_date", 5),
    //     Player.list("-games_won", 5),
    //   ]);
    //   setGames(gamesData);
    //   setPlayers(playersData);
    // } catch (error) {
    //   console.error("Error loading data:", error);
    // } finally {
    //   setLoading(false);
    // }
  };

  const activeGames = games.filter((game) => game.status === "active");
  const completedGames = games.filter((game) => game.status === "completed");
  const topPlayer = players[0];

  return (
    <LinearGradient
      pointerEvents={"none"}
      style={styles.container}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      colors={["#fef2f2", "#eff6ff"]}
    >
      <View className="min-h-screen p-4 md:p-8">
        <View className="max-w-7xl mx-auto">
          {/* Hero Section */}
          {/* <View className="text-center mb-12"> */}
          <View style={styles.heroSection}>
            <LinearGradient
              colors={["#DC2626", "#2563EB"]} // from-red-600 to-blue-600
              start={{ x: 0, y: 0 }} // top-left
              end={{ x: 1, y: 1 }} // bottom-right
              style={styles.iconWrapper}
            >
              {/* <View className="w-16 h-16 bg-gradient-to-br from-red-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl"> */}
              <MaterialCommunityIcons
                name="cards-spade-outline"
                size={24}
                color="white"
              />
              {/* </View> */}
            </LinearGradient>
          </View>
          <Text className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hand & Foot
          </Text>
          <Text className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Learn the classic card game and keep perfect scores with friends and
            family
          </Text>

          <View className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {/* <Link to={createPageUrl("NewGame")}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                   <Play className="w-5 h-5 mr-2" /> 
                  Start New Game
                </Button>
              </Link> */}
            {/* <Link to={createPageUrl("Tutorial")}>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg rounded-xl border-2 hover:bg-blue-50"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Learn the Rules
                </Button>
              </Link> */}
          </View>
          {/* </View> */}

          {/* Stats Grid */}
          {/* <View className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-green-800">
                  <Text>Total Games</Text>
                </CardTitle>
                 <Trophy className="w-8 h-8 text-green-600" /> 
              </CardHeader>
              <CardContent>
                <View className="text-3xl font-bold text-green-900">
                  <Text>{games.length}</Text>
                </View>
                <Text className="text-green-700 text-sm">
                  {completedGames.length} completed, {activeGames.length} active
                </Text>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-blue-800">
                  <Text>Players</Text>
                </CardTitle>
                 <Users className="w-8 h-8 text-blue-600" /> 
              </CardHeader>
              <CardContent>
                <View className="text-3xl font-bold text-blue-900">
                  <Text>{players.length}</Text>
                </View>
                <Text className="text-blue-700 text-sm">
                  Registered players
                </Text>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-purple-800">
                  <Text>Champion</Text>
                </CardTitle>
                <Crown className="w-8 h-8 text-purple-600" />
              </CardHeader>
              <CardContent>
                {topPlayer ? (
                  <View>
                    <View className="text-2xl font-bold text-purple-900">
                      <Text>{topPlayer.name}</Text>
                    </View>
                    <Text className="text-purple-700 text-sm">
                      {topPlayer.games_won} wins
                    </Text>
                  </View>
                ) : (
                  <View className="text-lg text-purple-700">
                    <Text>No games yet</Text>
                  </View>
                )}
              </CardContent>
            </Card>
          </View> */}

          {/* Recent Games */}
          <View className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-600" />
                  <Text>
                  Active Games
                  </Text>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {activeGames.length > 0 ? (
                  <View className="space-y-3">
                    {activeGames.map((game) => (
                      <div
                        key={game.id}
                        className="flex justify-between items-center p-4 bg-orange-50 rounded-lg border border-orange-200 hover:border-orange-300 transition-colors"
                      >
                        <div>
                          <h4 className="font-semibold">{game.name}</h4>
                          <p className="text-sm text-gray-600">
                            Round {game.current_round} • {game.players.length}{" "}
                            players
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Leader:{" "}
                            {
                              game.players.reduce((prev, current) =>
                                current.total_score > prev.total_score
                                  ? current
                                  : prev
                              ).name
                            }{" "}
                            (
                            {
                              game.players.reduce((prev, current) =>
                                current.total_score > prev.total_score
                                  ? current
                                  : prev
                              ).total_score
                            }{" "}
                            pts)
                          </p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Badge className="bg-orange-100 text-orange-800 border-orange-300">
                            In Progress
                          </Badge>
                          <Link to={createPageUrl(`Game?id=${game.id}`)}>
                            <Button
                              size="sm"
                              className="w-full bg-orange-600 hover:bg-orange-700"
                            >
                              <Play className="w-3 h-3 mr-1" />
                              Continue
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </View>
                ) : (
                  <View className="text-center py-8">
                    <Clock className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-500">No active games</p>
                    <Link to={createPageUrl("NewGame")}>
                      <Button variant="outline" size="sm" className="mt-2">
                        Start a Game
                      </Button>
                    </Link>
                  </View>
                )}
              </CardContent>
            </Card> */}

            {/* <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  Recent Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                {completedGames.length > 0 ? (
                  <div className="space-y-3">
                    {completedGames.map((game) => (
                      <div
                        key={game.id}
                        className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200"
                      >
                        <div>
                          <h4 className="font-semibold">{game.name}</h4>
                          <p className="text-sm text-gray-600">
                            {format(new Date(game.created_date), "MMM d, yyyy")}
                          </p>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                            Completed
                          </Badge>
                          {game.winner_id && (
                            <p className="text-sm text-gray-600 mt-1">
                              Winner:{" "}
                              {
                                game.players.find(
                                  (p) => p.player_id === game.winner_id
                                )?.name
                              }
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Trophy className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-500">No completed games yet</p>
                  </div>
                )}
              </CardContent>
            </Card> */}
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  heroSection: {
    alignItems: "center",
    marginBottom: 48,
  },
  iconWrapper: {
    width: 64,
    height: 64,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f2937", // gray-800
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

// <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
{
  /* / may have to remove view component with the gradient setup */
}
// </View>

// wrap code with this view if gradient and styles not working
