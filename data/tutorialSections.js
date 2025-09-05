const tutorialSections = [
  {
    id: "overview",
    title: "Game Overview",
    icon: () => <Feather name="book-open" size={24} color="#4B5563" />,
    content: (
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
    id: 2,
    title: "Players",
    icon: () => <Feather name="users" size={24} color="#4B5563" />,
    content: "Hand & Foot is best played with 4–6 players in teams.",
  },
  {
    id: 3,
    title: "Gameplay",
    icon: () => <FontAwesome5 name="random" size={24} color="#4B5563" />,
    content: "Understand the rules, turns, and scoring system.",
  },
];

const styles = StyleSheet.create({
  sectionContainer: {
    gap: 20,
  },
  introBox: {
    backgroundColor: "#EEF2FF",
    padding: 16,
    borderRadius: 12,
  },
  heading: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
    color: "#1F2937",
  },
  paragraph: {
    fontSize: 16,
    color: "#374151",
    lineHeight: 22,
  },
  cardGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  card: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
  },
  greenCard: {
    backgroundColor: "#ECFDF5",
    borderColor: "#A7F3D0",
  },
  redCard: {
    backgroundColor: "#FEE2E2",
    borderColor: "#FCA5A5",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 6,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  cardText: {
    fontSize: 14,
    color: "#111827",
  },
  cardSubtext: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 4,
  },
});

export default tutorialSections;
