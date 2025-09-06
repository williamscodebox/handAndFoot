import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function TutorialPage() {
  const [currentSection, setCurrentSection] = useState(0);
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
              game is called "Hand and Foot" because each player is dealt two
              sets of cards: the "hand" (played first) and the "foot" (played
              after the hand is exhausted).
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
  const currentTutorial = tutorialSections[currentSection];

  const nextSection = () => {
    if (currentSection < tutorialSections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Learn Hand & Foot</Text>
      <Text style={styles.subtitle}>
        Master the classic card game with our interactive tutorial
      </Text>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>
          {currentSection + 1} of {tutorialSections.length}
        </Text>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${
                  ((currentSection + 1) / tutorialSections.length) * 100
                }%`,
              },
            ]}
          />
        </View>
      </View>

      {/* Navigation Tabs */}
      <View style={styles.tabContainer}>
        {tutorialSections.map((section, index) => (
          <TouchableOpacity
            key={section.id}
            style={[
              styles.tabButton,
              index === currentSection && styles.tabButtonActive,
            ]}
            onPress={() => setCurrentSection(index)}
          >
            {section.icon()}
            <Text style={styles.tabText}>{section.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Current Section Content */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          {currentTutorial.icon()}
          <Text style={styles.cardTitle}>{currentTutorial.title}</Text>
        </View>
        <Text style={styles.cardContent}>{currentTutorial.content}</Text>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.navButtons}>
        <TouchableOpacity
          onPress={prevSection}
          disabled={currentSection === 0}
          style={[styles.navButton, currentSection === 0 && styles.disabled]}
        >
          <Feather name="chevron-left" size={20} color="#4B5563" />
          <Text>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={nextSection}
          disabled={currentSection === tutorialSections.length - 1}
          style={[
            styles.navButton,
            currentSection === tutorialSections.length - 1 && styles.disabled,
          ]}
        >
          <Text>Next</Text>
          <Feather name="chevron-right" size={20} color="#4B5563" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F3F4F6",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 20,
  },
  progressContainer: {
    marginBottom: 20,
  },
  progressText: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 4,
  },
  progressBar: {
    height: 6,
    backgroundColor: "#D1D5DB",
    borderRadius: 3,
  },
  progressFill: {
    height: 6,
    backgroundColor: "#6366F1",
    borderRadius: 3,
  },
  tabContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "center",
    marginBottom: 20,
  },
  tabButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#E5E7EB",
    margin: 4,
  },
  tabButtonActive: {
    backgroundColor: "#6366F1",
  },
  tabText: {
    marginLeft: 6,
    color: "#111827",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 8,
    color: "#111827",
  },
  cardContent: {
    fontSize: 16,
    color: "#4B5563",
  },
  navButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#E5E7EB",
    borderRadius: 6,
  },
  disabled: {
    opacity: 0.5,
  },
});
