import { EvilIcons, Feather, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import CardContent from "../components/CardContent";
import CardHeader from "../components/CardHeader";
import CardTitle from "../components/CardTitle";

export const tutorialData = [
  {
    id: "overview",
    title: "Game Overview",
    icon: (props) => <Feather name="book-open" size={24} {...props} />,
    content: () => (
      <View className="space-y-6">
        <LinearGradient
          colors={["#eff6ff", "#f5f3ff"]} // blue-50 to purple-50
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="p-6 rounded-xl overflow-hidden mb-6"
        >
          <View style={styles.introBox}>
            <Text style={styles.heading}>What is Hand and Foot?</Text>
            <Text style={styles.paragraph}>
              Hand and Foot is a North American card game similar to Canasta.
              Players work to create melds (sets of cards) and earn points. The
              game is called "Hand and Foot" because each player is dealt two
              sets of cards: the "hand" (played first) and the "foot" (played
              after the hand is exhausted).
            </Text>
          </View>
        </LinearGradient>

        <View className="flex flex-col md:flex-row gap-6">
          <Card className="bg-green-50 border border-green-200">
            <CardHeader>
              <CardTitle className="flex flex-row items-center gap-2 m-5">
                <View>
                  <Feather
                    name="users"
                    size={20}
                    color="#065F46"
                    // className="w-7 h-7 pr-5"
                  />
                </View>
                <Text className="text-green-800">Players</Text>
              </CardTitle>
            </CardHeader>
            <View className="flex flex-col">
              <CardContent className="ml-5 mb-8 gap-1">
                <Text>2-6 players (best with 4)</Text>
                <Text className="text-sm text-green-700 mt-2">
                  Can be played in partnerships
                </Text>
              </CardContent>
            </View>
          </Card>

          <Card className="bg-red-100 border border-red-200">
            <CardHeader>
              <CardTitle className="flex flex-row items-center gap-2 m-5">
                <View>
                  <Ionicons
                    name="shuffle-sharp"
                    size={20}
                    color="#065F46"
                    // className="w-7 h-7 pr-5"
                  />
                </View>
                <Text className="text-red-800">Decks</Text>
              </CardTitle>
            </CardHeader>
            <View className="flex flex-col">
              <CardContent className="ml-5 mb-8 gap-1">
                <Text>4–7 standard decks + jokers</Text>
                <Text className="text-sm text-red-700 mt-2">
                  Number depends on player count
                </Text>
              </CardContent>
            </View>
          </Card>
        </View>
      </View>
    ),
  },
  {
    id: "setup",
    title: "Game Setup",
    icon: (props) => <Ionicons name="shuffle-sharp" size={24} {...props} />,
    content: () => (
      <View className="space-y-6">
        <View className="bg-blue-50 p-6 rounded-xl">
          <Text className="text-xl font-semibold mb-4">Initial Deal</Text>
          <View className="flex flex-col md:flex-row gap-6">
            <View>
              <Text className="font-semibold text-blue-800 mb-2">
                Hand Cards
              </Text>
              <Text className="text-gray-700">
                Each player receives 11 cards face down. Keep these cards hidden
                from other players.
              </Text>
            </View>
            <View>
              <Text className="font-semibold text-blue-800 mb-2">
                Foot Cards
              </Text>
              <Text className="text-gray-700">
                Each player receives 11 additional cards face down. Don't look
                at these until your hand is empty!
              </Text>
            </View>
          </View>
        </View>

        <View className="flex flex-col md:flex-row gap-4">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-lg text-green-300">
                <Text>Step 1</Text>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Text>Deal 11 cards to each player's hand</Text>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-lg">
                <Text>Step 2</Text>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Text>Deal 11 cards to each player's foot</Text>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-lg">
                <Text>Step 3</Text>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Text>Place remaining cards as stock pile</Text>
            </CardContent>
          </Card>
        </View>
      </View>
    ),
  },
  {
    id: "melds",
    title: "Making Melds",
    icon: (props) => <Feather name="target" size={24} {...props} />,
    content: () => (
      <View className="space-y-6">
        <View className="bg-purple-50 p-6 rounded-xl">
          <Text className="text-xl font-semibold mb-3">What are Melds?</Text>
          <Text className="text-gray-700 mb-4">
            Melds are sets of 3 or more cards of the same rank. You need melds
            to score points and eventually "go out" to win the round.
          </Text>
        </View>

        {/* <div className="grid gap-4">
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                Clean Books (Natural Melds)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">7 or more cards of the same rank with NO wildcards</p>
              <div className="flex gap-1 mb-2">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="w-8 h-12 bg-red-100 border border-red-300 rounded flex items-center justify-center text-xs">
                    K♥
                  </div>
                ))}
              </div>
              <Badge className="bg-green-100 text-green-800">+500 points</Badge>
            </CardContent>
          </Card>

          <Card className="border-yellow-200">
            <CardHeader>
              <CardTitle className="text-yellow-800 flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                Dirty Books (Mixed Melds)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">7 or more cards with wildcards (2s, Jokers)</p>
              <div className="flex gap-1 mb-2">
                {['K♥', 'K♠', '2♣', 'K♦', 'JKR', 'K♣', 'K♥'].map((card, i) => (
                  <div key={i} className={`w-8 h-12 border rounded flex items-center justify-center text-xs ${
                    card.includes('2') || card === 'JKR' ? 'bg-yellow-100 border-yellow-300' : 'bg-red-100 border-red-300'
                  }`}>
                    {card}
                  </div>
                ))}
              </div>
              <Badge className="bg-yellow-100 text-yellow-800">+300 points</Badge>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Wildcard Rules</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• 2s and Jokers are wildcards</li>
            <li>• Maximum of 3 wildcards per meld</li>
            <li>• Wildcards cannot outnumber natural cards</li>
          </ul>
        </div> */}
      </View>
    ),
  },
  {
    id: "scoring",
    title: "Scoring System",
    icon: (props) => <EvilIcons name="trophy" size={24} {...props} />,
    content: () => (
      <View className="space-y-6">
        <View className="bg-yellow-50 p-6 rounded-xl">
          <Text className="text-xl font-semibold mb-3">How Points Work</Text>
          <Text className="text-gray-700">
            Points come from melds, individual cards, and bonuses. At the end of
            each round, subtract points for cards left in hand.
          </Text>
        </View>

        {/* <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-green-700">Card Values</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span>Jokers</span>
                <Badge>50 points</Badge>
              </div>
              <div className="flex justify-between">
                <span>2s (wildcards)</span>
                <Badge>20 points</Badge>
              </div>
              <div className="flex justify-between">
                <span>Aces</span>
                <Badge>20 points</Badge>
              </div>
              <div className="flex justify-between">
                <span>8, 9, 10, J, Q, K</span>
                <Badge>10 points</Badge>
              </div>
              <div className="flex justify-between">
                <span>4, 5, 6, 7</span>
                <Badge>5 points</Badge>
              </div>
              <div className="flex justify-between">
                <span>Black 3s</span>
                <Badge>5 points</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-blue-700">Bonuses</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span>Clean Book</span>
                <Badge className="bg-green-100 text-green-800">+500</Badge>
              </div>
              <div className="flex justify-between">
                <span>Dirty Book</span>
                <Badge className="bg-yellow-100 text-yellow-800">+300</Badge>
              </div>
              <div className="flex justify-between">
                <span>Going Out</span>
                <Badge className="bg-purple-100 text-purple-800">+100</Badge>
              </div>
              <div className="flex justify-between">
                <span>Red 3s (each)</span>
                <Badge className="bg-red-100 text-red-800">+100</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <h4 className="font-semibold text-red-800 mb-2">Penalty: Cards Left in Hand/Foot</h4>
          <p className="text-red-700 text-sm">
            At round end, subtract the point value of all cards remaining in your hand and foot from your score.
          </p>
        </div> */}
      </View>
    ),
  },
];

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 16,
    backgroundColor: "#fff",
  },
  introBox: {
    marginBottom: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    color: "#4B5563",
  },
  cardGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  greenCard: {
    backgroundColor: "#D1FAE5",
  },
  redCard: {
    backgroundColor: "#FECACA",
  },
  cardText: {
    fontSize: 14,
    color: "#111827",
  },
  cardSubtext: {
    fontSize: 12,
    color: "#6B7280",
  },
});
