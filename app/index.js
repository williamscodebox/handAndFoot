import { EvilIcons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
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
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
    // Simulate API delay
    setTimeout(() => {
      // Mock data
      const mockGames = [
        { id: 1, status: "active" },
        { id: 2, status: "completed" },
        { id: 3, status: "completed" },
      ];
      const mockPlayers = [
        { id: 1, name: "Alice", games_won: 10 },
        { id: 2, name: "Bob", games_won: 8 },
      ];
      setGames(mockGames);
      setPlayers(mockPlayers);
      setLoading(false);
    }, 1000);
  };
  const navigation = useNavigation();
  const activeGames = games.filter((game) => game.status === "active");
  const completedGames = games.filter((game) => game.status === "completed");
  const topPlayer = players[0];

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#B91C1C" />
        <Text style={{ marginTop: 10 }}>Loading data...</Text>
      </View>
    );
  }

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <LinearGradient
        // pointerEvents={"none"}
        style={styles.container}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        colors={["#fef2f2", "#eff6ff"]}
      >
        <View className="min-h-screen p-4 md:p-8">
          <View className="">
            {/* Hero Section */}
            <View className="text-center">
              <View style={styles.heroSection}>
                <LinearGradient
                  colors={["#DC2626", "#2563EB"]} // from-red-600 to-blue-600
                  start={{ x: 0, y: 0 }} // top-left
                  end={{ x: 1, y: 1 }} // bottom-right
                  style={styles.iconWrapper}
                >
                  <View className="w-16 h-16 bg-gradient-to-br from-red-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <MaterialCommunityIcons
                      name="cards-spade-outline"
                      size={50}
                      color="white"
                    />
                  </View>
                </LinearGradient>
              </View>
              <Text className="text-center text-5xl md:text-5xl font-bold text-gray-900 mb-6">
                Hand & Foot
              </Text>
              <Text className="text-center text-2xl text-gray-600 mb-8 leading-relaxed">
                Learn the classic card game and keep perfect scores with friends
                and family
              </Text>

              <View className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12">
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    console.log("test");
                    navigation.navigate("newgame");
                  }} // 👈 matches Drawer.Screen name
                >
                  <LinearGradient
                    colors={["#DC2626", "#B91C1C"]} // red-600 to red-700
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.button}
                    className="border border-gray-400"
                  >
                    <Feather
                      name="play"
                      size={20}
                      color="white"
                      style={{ marginRight: 12 }}
                    />
                    <Text style={styles.buttonText}>Start New Game</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    console.log("test");
                    navigation.navigate("tutorial");
                  }} // 👈 matches Drawer.Screen name
                  style={styles.button2}
                  className="border border-gray-400 bg-slate-50"
                >
                  <Feather
                    name="book-open"
                    size={20}
                    color="black"
                    style={{ marginRight: 14 }}
                  />

                  <Text className="text-2xl text-black font-bold">
                    Learn the Rules
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Stats Grid */}
            <View className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
              <LinearGradient
                colors={["#f0fdf4", "#dcfce7"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                  borderRadius: 12,
                  padding: 32,
                  paddingBottom: 30,
                  shadowColor: "#000",
                  shadowOpacity: 0.1,
                  shadowRadius: 6,
                  elevation: 3,
                }}
                className="border border-green-200"
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 30,
                      fontWeight: "bold",
                      color: "#065f46",
                    }}
                  >
                    Total Games
                  </Text>
                  <EvilIcons
                    name="trophy"
                    size={50}
                    fontWeight="bold"
                    color="green"
                    marginBottom={8}
                  />
                </View>

                <View style={{ marginTop: 16, marginBottom: 6, gap: 5 }}>
                  <Text
                    style={{
                      fontSize: 28,
                      fontWeight: "bold",
                      color: "#064e3b",
                    }}
                  >
                    {games.length}
                  </Text>
                  <Text style={{ color: "#047857", fontSize: 14 }}>
                    {completedGames.length} completed, {activeGames.length}{" "}
                    active
                  </Text>
                </View>
              </LinearGradient>

              <LinearGradient
                colors={["#eff6ff", "#dbeafe"]} // blue-50 to blue-100
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                  borderRadius: 12,
                  padding: 36,
                  shadowColor: "#000",
                  shadowOpacity: 0.1,
                  shadowRadius: 6,
                  elevation: 3,
                }}
                className="border border-blue-200"
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 30,
                      fontWeight: "bold",
                      color: "#2563eb",
                    }}
                  >
                    Players
                  </Text>
                  <Feather
                    name="users"
                    size={32}
                    fontWeight="bold"
                    color="#3B82F6"
                    marginRight={6}
                  />
                </View>

                <View style={{ marginTop: 16, marginBottom: 10, gap: 5 }}>
                  <Text
                    style={{
                      fontSize: 28,
                      fontWeight: "bold",
                      color: "#2563eb",
                    }}
                  >
                    {games.length}
                  </Text>
                  <Text style={{ color: "#3B82F6", fontSize: 14 }}>
                    {completedGames.length} completed, {activeGames.length}{" "}
                    active
                  </Text>
                </View>
              </LinearGradient>

              <LinearGradient
                colors={["#faf5ff", "#f3e8ff"]} // purple-50 to purple-100
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                  borderRadius: 12,
                  padding: 36,
                  shadowColor: "#000",
                  shadowOpacity: 0.1,
                  shadowRadius: 6,
                  elevation: 3,
                }}
                className="border border-purple-200"
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 30,
                      fontWeight: "bold",
                      color: "#9333ea",
                    }}
                  >
                    Players
                  </Text>
                  <Feather
                    name="users"
                    size={32}
                    fontWeight="bold"
                    color="#9F7AEA"
                    marginRight={6}
                  />
                </View>

                <View style={{ marginTop: 16, marginBottom: 10, gap: 5 }}>
                  <Text
                    style={{
                      fontSize: 28,
                      fontWeight: "bold",
                      color: "#9333ea",
                    }}
                  >
                    {games.length}
                  </Text>
                  <Text style={{ color: "#9F7AEA", fontSize: 14 }}>
                    {completedGames.length} completed, {activeGames.length}{" "}
                    active
                  </Text>
                </View>
              </LinearGradient>

              {/* 

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-purple-800">
                    <Text>Champion</Text>
                  </CardTitle>
                  {/* <Crown className="w-8 h-8 text-purple-600" />
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
              </Card>*/}
            </View>

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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  heroSection: {
    alignItems: "center",
    marginBottom: 38,
  },
  iconWrapper: {
    width: 78,
    height: 78,
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
  button: {
    width: 240,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  button2: {
    width: 220,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});

// <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
{
  /* / may have to remove view component with the gradient setup */
}
// </View>

// wrap code with this view if gradient and styles not working
