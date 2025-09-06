import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export const tutorialData = [
  {
    id: "overview",
    title: "Game Overview",
    icon: () => <Feather name="book-open" size={24} color="#4B5563" />,
    content: () => (
      <View style={styles.sectionContainer}>
        <View style={styles.introBox}>
          <Text style={styles.heading}>What is Hand and Foot?</Text>
          <Text style={styles.paragraph}>
            Hand and Foot is a North American card game similar to Canasta.
            Players work to create melds (sets of cards) and earn points. The
            game is called "Hand and Foot" because each player is dealt two sets
            of cards: the "hand" (played first) and the "foot" (played after the
            hand is exhausted).
          </Text>
        </View>

        <View style={styles.cardGrid}>
          <View style={[styles.card, styles.greenCard]}>
            <View style={styles.cardHeader}>
              <Feather name="users" size={20} color="#065F46" />
              <Text style={styles.cardTitle}>Players</Text>
            </View>
            <Text style={styles.cardText}>2–6 players (best with 4)</Text>
            <Text style={styles.cardSubtext}>
              Can be played in partnerships
            </Text>
          </View>

          <View style={[styles.card, styles.redCard]}>
            <View style={styles.cardHeader}>
              <FontAwesome5 name="random" size={20} color="#991B1B" />
              <Text style={styles.cardTitle}>Decks</Text>
            </View>
            <Text style={styles.cardText}>4–7 standard decks + jokers</Text>
            <Text style={styles.cardSubtext}>
              Number depends on player count
            </Text>
          </View>
        </View>
      </View>
    ),
  },
  {
    id: "setup",
    title: "Game Setup",
    icon: () => <Ionicons name="shuffle-sharp" size={24} color="black" />,
    content: () => (
      <div className="space-y-6">
        <div className="bg-blue-50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Initial Deal</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">Hand Cards</h4>
              <p className="text-gray-700">
                Each player receives 11 cards face down. Keep these cards hidden
                from other players.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">Foot Cards</h4>
              <p className="text-gray-700">
                Each player receives 11 additional cards face down. Don't look
                at these until your hand is empty!
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-lg">Step 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Deal 11 cards to each player's hand</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-lg">Step 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Deal 11 cards to each player's foot</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-lg">Step 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Place remaining cards as stock pile</p>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Gameplay",
    icon: () => <FontAwesome5 name="random" size={24} color="#4B5563" />,
    content: () => "Understand the rules, turns, and scoring system.",
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
